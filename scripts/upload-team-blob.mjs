// Uploads every image in public/team/ to the Vercel Blob store under the
// "team/" prefix, using stable pathnames (no random suffix) so the public
// URLs are predictable: <store>.public.blob.vercel-storage.com/team/<file>.
//
// Usage (PowerShell):
//   $env:BLOB_READ_WRITE_TOKEN="<your token>"; node scripts/upload-team-blob.mjs
//
// The token is read from the environment — do not hard-code it here.

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { put } from "@vercel/blob";

const TEAM_DIR = join(process.cwd(), "public", "team");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

const CONTENT_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
};

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error(
    "ERROR: BLOB_READ_WRITE_TOKEN is not set. Set it in your terminal first:\n" +
      '  $env:BLOB_READ_WRITE_TOKEN="<your token>"',
  );
  process.exit(1);
}

const files = (await readdir(TEAM_DIR)).filter((f) =>
  IMAGE_EXTS.has(extname(f).toLowerCase()),
);

if (files.length === 0) {
  console.error("No image files found in public/team/");
  process.exit(1);
}

const manifest = {};
for (const file of files) {
  const data = await readFile(join(TEAM_DIR, file));
  const contentType = CONTENT_TYPES[extname(file).toLowerCase()];
  const { url } = await put(`team/${file}`, data, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType,
  });
  manifest[file] = url;
  console.log(`OK  ${file}  ->  ${url}`);
}

const manifestPath = join(process.cwd(), "scripts", "team-blob-manifest.json");
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\nUploaded ${files.length} files. Manifest written to ${manifestPath}`);
