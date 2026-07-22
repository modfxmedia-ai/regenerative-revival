// Uploads the Patient Landing Page hero video to the Vercel Blob store.
// Run: node --env-file=.env.local scripts/upload-patient-video.mjs
import { put } from "@vercel/blob";
import { readFileSync } from "fs";

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Missing BLOB_READ_WRITE_TOKEN");
  process.exit(1);
}

const localPath = "public/patient/Brett_Favre_s_Recovery_Secret.MP4";
const blobName = "patient/brett-favre-recovery-secret.mp4";

const buf = readFileSync(localPath);
const blob = await put(blobName, buf, {
  access: "public",
  addRandomSuffix: false,
  allowOverwrite: true,
  contentType: "video/mp4",
  token,
});
console.log(`Uploaded ${blobName} -> ${blob.url}`);
