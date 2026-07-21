// Fetch a saved entry (or list recent entries) from the Tyria form API to
// confirm the FULL answer payload is stored server-side.
//
// Usage:
//   node scripts/tyria-get-entry.mjs                 -> list recent entries
//   node scripts/tyria-get-entry.mjs entry_xxx       -> fetch one entry
import { readFileSync } from "node:fs";

function loadEnv(path) {
  const env = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    env[m[1]] = val;
  }
  return env;
}

const env = loadEnv(".env.local");
const KEY = env.TYRIA_API_KEY;
const FORM = env.TYRIA_FORM_ID || "frm_cf7dade5-7e28-419f-a82e-ce232bd0012a";
const entryId = process.argv[2];

const url = entryId
  ? `https://www.tyriacore.app/api/v1/forms/${FORM}/entries/${entryId}`
  : `https://www.tyriacore.app/api/v1/forms/${FORM}/entries?limit=5`;

console.log("GET", url, "\n");
const res = await fetch(url, {
  headers: { Authorization: `Bearer ${KEY}` },
});
const raw = await res.text();
console.log("Status:", res.status, res.statusText, "\n");
try {
  console.log(JSON.stringify(JSON.parse(raw), null, 2));
} catch {
  console.log(raw);
}
