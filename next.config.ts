import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "65iosdxq0lyc5cm9.public.blob.vercel-storage.com",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WordPress → Next.js migration redirects (audit 2026-05-15)
  // Preserves every indexed WP URL so DNS flip doesn't drop ranking signals.
  // Source list pulled from https://regenerativerevival.com/wp-sitemap.xml
  // ─────────────────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // ─── www → non-www canonical redirect ───
      {
        source: "/:path*/",
        has: [{ type: "host", value: "www.regenerativerevival.com" }],
        destination: "https://regenerativerevival.com/:path*/",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "www.regenerativerevival.com" }],
        destination: "https://regenerativerevival.com/",
        permanent: true,
      },

      // ─── 14 blog posts: root-level WP URL → /news/<slug> ───
      { source: "/10-tips-to-naturally-boost-your-energy-and-performance/", destination: "/news/10-tips-to-naturally-boost-your-energy-and-performance/", permanent: true },
      { source: "/5-common-misconceptions-about-regenerative-medicine-debunked/", destination: "/news/5-common-misconceptions-about-regenerative-medicine-debunked/", permanent: true },
      { source: "/5-ways-to-improve-your-quality-of-life-with-non-invasive-pain-relief/", destination: "/news/5-ways-to-improve-your-quality-of-life-with-non-invasive-pain-relief/", permanent: true },
      { source: "/expert-tips-for-choosing-the-right-regenerative-medicine-provider/", destination: "/news/expert-tips-for-choosing-the-right-regenerative-medicine-provider/", permanent: true },
      { source: "/how-to-choose-the-right-regenerative-medicine-provider-for-your-needs/", destination: "/news/how-to-choose-the-right-regenerative-medicine-provider-for-your-needs/", permanent: true },
      { source: "/how-to-enhance-your-workout-recovery-with-stem-cell-therapy/", destination: "/news/how-to-enhance-your-workout-recovery-with-stem-cell-therapy/", permanent: true },
      { source: "/how-to-maximize-your-healing-potential-with-advanced-stem-cell-treatments/", destination: "/news/how-to-maximize-your-healing-potential-with-advanced-stem-cell-treatments/", permanent: true },
      { source: "/how-to-prepare-for-your-regenerative-medicine-consultation/", destination: "/news/how-to-prepare-for-your-regenerative-medicine-consultation/", permanent: true },
      { source: "/maximizing-the-benefits-of-regenerative-medicine-tips-for-optimal-results/", destination: "/news/maximizing-the-benefits-of-regenerative-medicine-tips-for-optimal-results/", permanent: true },
      { source: "/the-role-of-growth-factors-in-regenerative-medicine/", destination: "/news/the-role-of-growth-factors-in-regenerative-medicine/", permanent: true },
      { source: "/the-role-of-regenerative-medicine-in-joint-health/", destination: "/news/the-role-of-regenerative-medicine-in-joint-health/", permanent: true },
      { source: "/the-ultimate-guide-to-managing-joint-pain-with-regenerative-therapies/", destination: "/news/the-ultimate-guide-to-managing-joint-pain-with-regenerative-therapies/", permanent: true },
      { source: "/top-7-benefits-of-whartons-jelly-stem-cell-therapy-for-chronic-pain/", destination: "/news/top-7-benefits-of-whartons-jelly-stem-cell-therapy-for-chronic-pain/", permanent: true },
      { source: "/understanding-whartons-jelly-what-it-is-and-how-it-benefits-your-treatment/", destination: "/news/understanding-whartons-jelly-what-it-is-and-how-it-benefits-your-treatment/", permanent: true },

      // ─── WP category page (categories don't exist on new site) ───
      { source: "/category/stem-cells/", destination: "/news/", permanent: true },

      // ─── WP admin / form / landing pages with no new equivalent ───
      { source: "/home-2/", destination: "/", permanent: true },
      { source: "/discovery/", destination: "/contact/", permanent: true },
      { source: "/internal-intake-form/", destination: "/contact/", permanent: true },
      { source: "/patient-pre-screen/", destination: "/contact/", permanent: true },
      { source: "/links/", destination: "/", permanent: true },
      { source: "/regenlinx/", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          // X-XSS-Protection removed — deprecated; modern browsers ignore it,
          // and the header can introduce vulnerabilities in legacy browsers.
          // Use Content-Security-Policy instead when ready.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
