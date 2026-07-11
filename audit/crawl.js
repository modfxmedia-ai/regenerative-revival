#!/usr/bin/env node
/**
 * Site Audit Crawler
 * Reads URLs from the GSC CSV, maps them to mdfx.regenerativerevival.com,
 * and collects: meta title, meta description, schema data, HTTP status,
 * redirect chain, internal links, and external links.
 *
 * Output: crawl-results.json and crawl-results.csv
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const INPUT_CSV = path.join(
  __dirname,
  'https___regenerativerevival.com_-Performance-on-Search-2026-07-11 - Pages (1).csv'
);
const OUTPUT_JSON = path.join(__dirname, 'crawl-results.json');
const OUTPUT_CSV = path.join(__dirname, 'crawl-results.csv');

const NEW_DOMAIN = 'mdfx.regenerativerevival.com';
const INTERNAL_DOMAINS = ['regenerativerevival.com', 'mdfx.regenerativerevival.com'];

const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (compatible; LesserMediaAudit/1.0; +https://lessermedia.com)',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5',
};

// ──────────────────────────────────────────────────────────────────────────────
// HTTP fetch with manual redirect tracking
// ──────────────────────────────────────────────────────────────────────────────
function fetchUrl(url, maxRedirects = 10) {
  return new Promise((resolve) => {
    const redirectChain = [];

    function doRequest(currentUrl, remaining) {
      let parsed;
      try {
        parsed = new URL(currentUrl);
      } catch {
        return resolve({
          finalUrl: currentUrl,
          statusCode: null,
          redirectChain,
          html: null,
          error: `Invalid URL: ${currentUrl}`,
        });
      }

      const lib = parsed.protocol === 'https:' ? https : http;
      const options = {
        hostname: parsed.hostname,
        port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
        path: parsed.pathname + parsed.search,
        headers: HEADERS,
        timeout: 20000,
      };

      const req = lib.get(options, (res) => {
        const { statusCode } = res;

        if (statusCode >= 300 && statusCode < 400 && res.headers.location) {
          if (remaining === 0) {
            res.resume();
            return resolve({
              finalUrl: currentUrl,
              statusCode,
              redirectChain,
              html: null,
              error: 'Too many redirects',
            });
          }

          let nextUrl;
          try {
            nextUrl = new URL(res.headers.location, currentUrl).href;
          } catch {
            res.resume();
            return resolve({
              finalUrl: currentUrl,
              statusCode,
              redirectChain,
              html: null,
              error: `Bad redirect location: ${res.headers.location}`,
            });
          }

          redirectChain.push({ from: currentUrl, to: nextUrl, statusCode });
          res.resume();
          doRequest(nextUrl, remaining - 1);
          return;
        }

        // Collect body for 2xx (and 4xx to detect error pages)
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const body = Buffer.concat(chunks).toString('utf8');

          // Detect Cloudflare bot challenge (returns 202 with sg-captcha header)
          const isCfChallenge =
            res.headers['sg-captcha'] === 'challenge' ||
            (statusCode === 202 && body.includes('sgcaptcha'));

          if (isCfChallenge) {
            return resolve({
              finalUrl: currentUrl,
              statusCode: 202,
              redirectChain,
              html: null,
              error: 'Cloudflare bot challenge — protection still active',
            });
          }

          const html = statusCode >= 200 && statusCode < 300 ? body : null;
          resolve({ finalUrl: currentUrl, statusCode, redirectChain, html, error: null });
        });
        res.on('error', (err) =>
          resolve({ finalUrl: currentUrl, statusCode, redirectChain, html: null, error: err.message })
        );
      });

      req.on('error', (err) =>
        resolve({ finalUrl: currentUrl, statusCode: null, redirectChain, html: null, error: err.message })
      );
      req.on('timeout', () => {
        req.destroy();
        resolve({ finalUrl: currentUrl, statusCode: null, redirectChain, html: null, error: 'Timeout' });
      });
    }

    doRequest(url, maxRedirects);
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// HTML parsing helpers (regex-based, no extra deps)
// ──────────────────────────────────────────────────────────────────────────────
function parseHtml(html, baseUrl) {
  if (!html) {
    return { title: null, description: null, schemas: [], internalLinks: [], externalLinks: [] };
  }

  // <title>
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : null;

  // <meta name="description"> — handle either attribute order
  const descMatch =
    html.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
    html.match(/<meta\s+[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : null;

  // JSON-LD schemas
  const schemaRx = /<script\s[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const schemas = [];
  let sm;
  while ((sm = schemaRx.exec(html)) !== null) {
    try {
      schemas.push(JSON.parse(sm[1].trim()));
    } catch {
      schemas.push({ _raw: sm[1].trim(), _parseError: true });
    }
  }

  // <a href> links
  const linkRx = /<a\s[^>]*href=["']([^"']+)["']/gi;
  const seenInternal = new Set();
  const seenExternal = new Set();
  const internalLinks = [];
  const externalLinks = [];
  let lm;

  while ((lm = linkRx.exec(html)) !== null) {
    const href = lm[1];
    if (!href || /^(mailto:|tel:|javascript:|#)/i.test(href)) continue;

    let absolute;
    try {
      absolute = new URL(href, baseUrl).href;
    } catch {
      continue;
    }

    // Normalise to hostname check
    let hostname = '';
    try {
      hostname = new URL(absolute).hostname;
    } catch {
      continue;
    }

    const isInternal = INTERNAL_DOMAINS.some((d) => hostname === d || hostname.endsWith('.' + d));
    if (isInternal) {
      if (!seenInternal.has(absolute)) {
        seenInternal.add(absolute);
        internalLinks.push(absolute);
      }
    } else {
      if (!seenExternal.has(absolute)) {
        seenExternal.add(absolute);
        externalLinks.push(absolute);
      }
    }
  }

  return { title, description, schemas, internalLinks, externalLinks };
}

// ──────────────────────────────────────────────────────────────────────────────
// CSV escape helper
// ──────────────────────────────────────────────────────────────────────────────
function csvCell(value) {
  const str = value == null ? '' : String(value);
  return `"${str.replace(/"/g, '""')}"`;
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────
async function main() {
  const csvRaw = fs.readFileSync(INPUT_CSV, 'utf8').replace(/\r/g, '');
  const lines = csvRaw.trim().split('\n').slice(1); // skip header row

  const urls = lines
    .map((line) => {
      const commaIdx = line.indexOf(',');
      const rawUrl = commaIdx > -1 ? line.slice(0, commaIdx).trim() : line.trim();
      // Skip non-HTTP entries (e.g. PDF uploads, empty rows)
      if (!rawUrl.startsWith('http')) return null;
      return rawUrl.replace('regenerativerevival.com', NEW_DOMAIN);
    })
    .filter(Boolean);

  console.log(`\nCrawling ${urls.length} URLs on ${NEW_DOMAIN}...\n`);

  const results = [];

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    process.stdout.write(`[${String(i + 1).padStart(3)}/${urls.length}] ${url} ... `);

    const { finalUrl, statusCode, redirectChain, html, error } = await fetchUrl(url);
    const parsed = parseHtml(html, finalUrl || url);

    process.stdout.write(
      `${statusCode || 'ERR'}${redirectChain.length ? ` (${redirectChain.length} redirect${redirectChain.length > 1 ? 's' : ''})` : ''}\n`
    );

    results.push({
      requestedUrl: url,
      finalUrl: redirectChain.length > 0 ? finalUrl : url,
      statusCode: statusCode || null,
      redirectCount: redirectChain.length,
      redirectChain,
      title: parsed.title,
      metaDescription: parsed.description,
      schemaCount: parsed.schemas.length,
      schemaTypes: parsed.schemas
        .map((s) => (typeof s === 'object' && s['@type'] ? s['@type'] : 'unknown'))
        .join(' | '),
      schemas: parsed.schemas,
      internalLinkCount: parsed.internalLinks.length,
      internalLinks: parsed.internalLinks,
      externalLinkCount: parsed.externalLinks.length,
      externalLinks: parsed.externalLinks,
      error: error || null,
    });

    // Polite crawl delay
    await new Promise((r) => setTimeout(r, 400));
  }

  // ── JSON output ──────────────────────────────────────────────────────────
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nJSON  → ${OUTPUT_JSON}`);

  // ── CSV output ───────────────────────────────────────────────────────────
  const CSV_HEADER = [
    'Requested URL',
    'Final URL',
    'Status Code',
    'Redirect Count',
    'Redirect Chain',
    'Title',
    'Meta Description',
    'Schema Count',
    'Schema Types',
    'Schema Full JSON',
    'Internal Link Count',
    'Internal Links',
    'External Link Count',
    'External Links',
    'Error',
  ].join(',');

  const csvRows = results.map((r) => {
    const redirectSummary = r.redirectChain
      .map((rd) => `${rd.statusCode}: ${rd.from} → ${rd.to}`)
      .join(' | ');
    const schemaJson = r.schemas
      .map((s) => JSON.stringify(s))
      .join(' ||| ');

    return [
      csvCell(r.requestedUrl),
      csvCell(r.finalUrl),
      csvCell(r.statusCode),
      csvCell(r.redirectCount),
      csvCell(redirectSummary),
      csvCell(r.title),
      csvCell(r.metaDescription),
      csvCell(r.schemaCount),
      csvCell(r.schemaTypes),
      csvCell(schemaJson),
      csvCell(r.internalLinkCount),
      csvCell(r.internalLinks.join('\n')),
      csvCell(r.externalLinkCount),
      csvCell(r.externalLinks.join('\n')),
      csvCell(r.error),
    ].join(',');
  });

  fs.writeFileSync(OUTPUT_CSV, [CSV_HEADER, ...csvRows].join('\n'), 'utf8');
  console.log(`CSV   → ${OUTPUT_CSV}`);

  // ── Summary ──────────────────────────────────────────────────────────────
  const byStatus = results.reduce((acc, r) => {
    const key = r.statusCode ? `${Math.floor(r.statusCode / 100)}xx` : 'error';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  console.log('\n── Summary ─────────────────────────────────────');
  console.log(`  Total URLs: ${results.length}`);
  Object.entries(byStatus)
    .sort()
    .forEach(([k, v]) => console.log(`  ${k}: ${v}`));

  const missing4xx = results.filter((r) => r.statusCode && r.statusCode >= 400);
  if (missing4xx.length) {
    console.log(`\n── 4xx / Broken URLs (${missing4xx.length}) ────────────────`);
    missing4xx.forEach((r) => console.log(`  ${r.statusCode}  ${r.requestedUrl}`));
  }

  const redirected = results.filter((r) => r.redirectCount > 0);
  if (redirected.length) {
    console.log(`\n── Redirects (${redirected.length}) ─────────────────────────`);
    redirected.forEach((r) =>
      console.log(`  ${r.requestedUrl}\n    → ${r.finalUrl}  (${r.statusCode})`)
    );
  }

  console.log('\nDone.\n');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
