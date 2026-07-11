const https = require('https');
const http = require('http');

function get(url, cb) {
  const lib = url.startsWith('https') ? https : http;
  lib.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return get(new URL(res.headers.location, url).href, cb);
    }
    let d = ''; res.on('data', c => d += c); res.on('end', () => cb(d, res.statusCode));
  }).on('error', e => console.error(e));
}

const urls = [
  'https://regenerativerevival.com/treatments/stem-cell-therapy/austin-tx/',
  'https://regenerativerevival.com/treatments/joint-pain-treatment/chicago-il/',
  'https://regenerativerevival.com/stem-cell-therapy/',
  'https://regenerativerevival.com/peptides/',
];

let done = 0;

urls.forEach(url => {
  get(url, (html, code) => {
    if (code !== 200) {
      console.log(url, '→ status', code);
      if (++done === urls.length) process.exit(0);
      return;
    }

    const totalBytes = Buffer.byteLength(html, 'utf8');

    // Remove script, style, and JSON-LD blocks
    let clean = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const textBytes = Buffer.byteLength(clean, 'utf8');
    const ratio = ((textBytes / totalBytes) * 100).toFixed(1);
    const wordCount = clean.split(/\s+/).filter(w => w.length > 2).length;

    const label = url.split('/treatments/')[1] || url.split('.com/')[1];
    console.log(`\n${label}`);
    console.log(`  HTML total : ${(totalBytes / 1024).toFixed(1)} KB`);
    console.log(`  Visible text: ${(textBytes / 1024).toFixed(1)} KB`);
    console.log(`  Ratio       : ${ratio}%`);
    console.log(`  Word count  : ~${wordCount}`);

    if (++done === urls.length) process.exit(0);
  });
});
