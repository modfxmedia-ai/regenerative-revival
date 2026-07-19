// Re-uploads the correct Jared Novack and Michaela Gebert headshots to the
// Vercel Blob store under human-readable names, fixing a swapped photo.
// Run: node --env-file=.env.local scripts/fix-jared-michaela-blob.mjs
import { put } from "@vercel/blob";

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN");
  process.exit(1);
}

const items = [
  {
    name: "jared-novack.png",
    url: "https://mdfx.regenerativerevival.com/wp-content/uploads/2026/01/Screen-Shot-2026-01-27-at-1.25.06-PM.png",
  },
  {
    name: "michaela-gebert.png",
    url: "https://mdfx.regenerativerevival.com/wp-content/uploads/2026/01/Screen-Shot-2026-01-31-at-10.39.15-AM.png",
  },
];

for (const item of items) {
  const res = await fetch(item.url);
  if (!res.ok) {
    console.error(`Failed to fetch ${item.url}: ${res.status}`);
    process.exit(1);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const blob = await put(`team/${item.name}`, buf, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "image/png",
    token,
  });
  console.log(`Uploaded ${item.name} -> ${blob.url}`);
}
