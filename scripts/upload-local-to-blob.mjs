// Uploads a local image file to the Vercel Blob store under team/<name>.
// Usage: node --env-file=.env.local scripts/upload-local-to-blob.mjs <localPath> <blobName> [contentType]
import { put } from "@vercel/blob";
import { readFileSync } from "fs";

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN");
  process.exit(1);
}

const [localPath, blobName, contentType = "image/png"] = process.argv.slice(2);
if (!localPath || !blobName) {
  console.error("Usage: upload-local-to-blob.mjs <localPath> <blobName> [contentType]");
  process.exit(1);
}

const buf = readFileSync(localPath);
const blob = await put(`team/${blobName}`, buf, {
  access: "public",
  addRandomSuffix: false,
  allowOverwrite: true,
  contentType,
  token,
});
console.log(`Uploaded ${blobName} -> ${blob.url}`);
