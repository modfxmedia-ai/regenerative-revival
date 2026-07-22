// ---------------------------------------------------------------------------
// Patient Landing Page configuration
// ---------------------------------------------------------------------------

// Round robin consultation scheduling link (TyriaCore).
// TODO: Replace with the live TyriaCore round robin calendar / booking-widget URL
// (from Tyria Settings > Appointments > [type] > Embed, provided by Ben).
export const BOOKING_URL = "#book-consultation";

// Static assets (served from /public/patient/)
export const ASSETS = {
  hero: "/patient/AdobeStock_1978595591.jpeg",
  cells1: "/patient/AdobeStock_293355553.jpeg",
  cells2: "/patient/AdobeStock_841629701.jpeg",
  cells3: "/patient/AdobeStock_888665749.jpeg",
  cells4: "/patient/AdobeStock_1307420210.jpeg",
  aroraLogo: "/patient/688d20a54a28882091901cd5_relume-261149-p-500.png",
  rrLogo: "/patient/Full_Color_RR_Logo_Transparent__2_.png",
  regenlixLogo: "/patient/regenlix-logo.png",
  // Served from Vercel Blob (159 MB — kept out of the repo).
  brettFavreVideo:
    "https://65iosdxq0lyc5cm9.public.blob.vercel-storage.com/patient/brett-favre-recovery-secret.mp4",
} as const;
