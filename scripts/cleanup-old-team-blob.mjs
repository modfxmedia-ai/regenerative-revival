// One-off cleanup: delete the obsolete numeric team blob objects that were
// replaced by human-named files. Safe to delete — nothing references them.
import { del } from "@vercel/blob";

const BASE = "https://65iosdxq0lyc5cm9.public.blob.vercel-storage.com/team/";
const obsolete = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg",
  "5.png", "6.jpg", "7.jpg", "8.jpg", "9.png",
];

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("ERROR: BLOB_READ_WRITE_TOKEN is not set.");
  process.exit(1);
}

for (const name of obsolete) {
  await del(BASE + name);
  console.log(`DELETED ${name}`);
}
console.log(`\nDeleted ${obsolete.length} obsolete blob objects.`);
