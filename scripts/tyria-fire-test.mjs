// Fire a live TEST submission to the Tyria Contact Form API and capture the
// full response (status, headers, body). Uses synthetic data only.
//
// Run: node scripts/tyria-fire-test.mjs
import { readFileSync } from "node:fs";

// ── Load .env.local (simple parser, no dependency) ──────────────────────
function loadEnv(path) {
  const env = {};
  try {
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
  } catch (err) {
    console.error(`Could not read ${path}:`, err.message);
    process.exit(1);
  }
  return env;
}

const env = loadEnv(".env.local");
const TYRIA_API_KEY = env.TYRIA_API_KEY;
const TYRIA_FORM_ID =
  env.TYRIA_FORM_ID || "frm_cf7dade5-7e28-419f-a82e-ce232bd0012a";

if (!TYRIA_API_KEY) {
  console.error("TYRIA_API_KEY not found in .env.local");
  process.exit(1);
}

// Question ids from the Tyria form template (see form updates/details.md).
const FIELDS = {
  firstName: "2290b181-cd97-4744-b8fc-87a5d916c9e3",
  lastName: "9dc96eb6-d2c6-45a5-91b7-e824de65fdfc",
  email: "266f6a32-5ba5-4a9c-b99a-4e0067abd51a",
  phone: "f3aa2c29-7132-4aa8-b596-36e13452b774",
  painAreas: "c12fc52d-9825-46f4-b03c-1d7b93dce6e5",
  whatLed: "96710b63-d616-48a2-9fac-2288b53107e1",
};

const stamp = new Date().toISOString();
const payload = {
  answers: {
    [FIELDS.firstName]: "APITEST",
    [FIELDS.lastName]: "IgnoreMe",
    [FIELDS.email]: "apitest@lessermedia.dev",
    [FIELDS.phone]: "+16125550123",
    [FIELDS.painAreas]: `AUTOMATED TEST SUBMISSION - please ignore (${stamp})`,
    [FIELDS.whatLed]: "Website",
  },
  submittedBy: { email: "apitest@lessermedia.dev", name: "APITEST IgnoreMe" },
  meta: { source: "fire-test-script" },
};

const url = `https://www.tyriacore.app/api/v1/forms/${TYRIA_FORM_ID}/entries`;

console.log("── REQUEST ─────────────────────────────────────────────");
console.log("POST", url);
console.log(JSON.stringify(payload, null, 2));
console.log();

const res = await fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${TYRIA_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const rawBody = await res.text();
let parsed;
try {
  parsed = JSON.parse(rawBody);
} catch {
  parsed = null;
}

console.log("── RESPONSE ────────────────────────────────────────────");
console.log("Status:", res.status, res.statusText);
console.log();
console.log("Headers:");
for (const [k, v] of res.headers.entries()) {
  console.log(`  ${k}: ${v}`);
}
console.log();
console.log("Body:");
console.log(parsed ? JSON.stringify(parsed, null, 2) : rawBody);
