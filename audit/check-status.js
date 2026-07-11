#!/usr/bin/env node
/**
 * URL Status Checker
 * Takes GSC URLs, maps them to www.regenerativerevival.com,
 * follows redirects, and reports final status for each.
 *
 * Output: status-report.csv
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const INPUT_CSV = path.join(
  __dirname,
  'https___regenerativerevival.com_-Performance-on-Search-2026-07-11 - Pages (1).csv'
);
const OUTPUT_CSV = path.join(__dirname, 'status-report.csv');
const TARGET_HOST = 'regenerativerevival.com';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
};

function checkUrl(url, maxRedirects = 8) {
  return new Promise((resolve) => {
    const chain = [];

    function doRequest(currentUrl, remaining) {
      let parsed;
      try { parsed = new URL(currentUrl); } catch {
        return resolve({ finalUrl: currentUrl, statusCode: null, chain, error: 'Invalid URL' });
      }

      const lib = parsed.protocol === 'https:' ? https : http;
      const req = lib.get(
        { hostname: parsed.hostname, path: parsed.pathname + parsed.search, headers: HEADERS, timeout: 15000 },
        (res) => {
          const { statusCode } = res;
          res.resume(); // don't need body

          if (statusCode >= 300 && statusCode < 400 && res.headers.location) {
            if (remaining === 0) {
              return resolve({ finalUrl: currentUrl, statusCode, chain, error: 'Too many redirects' });
            }
            let next;
            try { next = new URL(res.headers.location, currentUrl).href; } catch {
              return resolve({ finalUrl: currentUrl, statusCode, chain, error: `Bad redirect: ${res.headers.location}` });
            }
            chain.push({ from: currentUrl, to: next, statusCode });
            doRequest(next, remaining - 1);
          } else {
            resolve({ finalUrl: currentUrl, statusCode, chain, error: null });
          }
        }
      );
      req.on('error', (e) => resolve({ finalUrl: currentUrl, statusCode: null, chain, error: e.message }));
      req.on('timeout', () => { req.destroy(); resolve({ finalUrl: currentUrl, statusCode: null, chain, error: 'Timeout' }); });
    }

    doRequest(url, maxRedirects);
  });
}

function statusLabel(code) {
  if (!code) return 'ERROR';
  if (code >= 200 && code < 300) return 'OK';
  if (code >= 300 && code < 400) return 'REDIRECT';
  if (code === 404) return 'MISSING';
  if (code >= 400) return `${code} ERROR`;
  return String(code);
}

async function main() {
  const raw = fs.readFileSync(INPUT_CSV, 'utf8').replace(/\r/g, '');
  const lines = raw.trim().split('\n').slice(1);

  const entries = lines.map((line) => {
    const commaIdx = line.indexOf(',');
    const url = commaIdx > -1 ? line.slice(0, commaIdx).trim() : line.trim();
    const rest = commaIdx > -1 ? line.slice(commaIdx + 1) : '';
    const [clicks, impressions] = rest.split(',');
    if (!url.startsWith('http')) return null;
    // Remap to target host, preserve path with trailing slash
    let urlPath;
    try { urlPath = new URL(url).pathname; } catch { return null; }
    if (!urlPath.endsWith('/')) urlPath += '/';
    return { originalUrl: url, targetUrl: `https://${TARGET_HOST}${urlPath}`, clicks: clicks?.trim(), impressions: impressions?.trim() };
  }).filter(Boolean);

  console.log(`\nChecking ${entries.length} URLs on ${TARGET_HOST}...\n`);

  const results = [];

  for (let i = 0; i < entries.length; i++) {
    const { originalUrl, targetUrl, clicks, impressions } = entries[i];
    process.stdout.write(`[${String(i + 1).padStart(3)}/${entries.length}] ${targetUrl} ... `);

    const { finalUrl, statusCode, chain, error } = await checkUrl(targetUrl);
    const label = error?.includes('challenge') ? 'BOT-BLOCK' : statusLabel(statusCode);

    process.stdout.write(`${statusCode || 'ERR'} ${label}\n`);

    results.push({ originalUrl, targetUrl, finalUrl, statusCode, label, redirectCount: chain.length, clicks, impressions, error });

    await new Promise((r) => setTimeout(r, 150));
  }

  // ── CSV output ───────────────────────────────────────────────────────────
  const header = 'Original URL,Target URL,Final URL,Status Code,Status,Redirects,Clicks (3mo),Impressions (3mo),Error';

  const rows = results.map((r) => {
    const c = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
    return [c(r.originalUrl), c(r.targetUrl), c(r.finalUrl), c(r.statusCode), c(r.label), c(r.redirectCount), c(r.clicks), c(r.impressions), c(r.error)].join(',');
  });

  fs.writeFileSync(OUTPUT_CSV, [header, ...rows].join('\n'), 'utf8');

  // ── Summary ──────────────────────────────────────────────────────────────
  const byLabel = results.reduce((a, r) => { a[r.label] = (a[r.label] || 0) + 1; return a; }, {});

  console.log('\n── Summary ──────────────────────────────────────────');
  Object.entries(byLabel).sort().forEach(([k, v]) => console.log(`  ${k.padEnd(12)} ${v}`));

  const missing = results.filter((r) => r.statusCode === 404 || r.label === 'MISSING');
  if (missing.length) {
    console.log(`\n── Missing Pages (404) — ${missing.length} ──────────────────`);
    missing
      .sort((a, b) => parseInt(b.impressions || 0) - parseInt(a.impressions || 0))
      .forEach((r) => console.log(`  ${String(r.impressions || 0).padStart(6)} impressions  ${r.originalUrl}`));
  }

  console.log(`\nCSV → ${OUTPUT_CSV}\n`);
}

main().catch((e) => { console.error(e); process.exit(1); });
