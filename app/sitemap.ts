import type { MetadataRoute } from "next";
import { articles } from "./news/data";
import { locations } from "./lib/locations";
import { treatments } from "./lib/treatments";
import { partnerServices } from "./lib/partner-content";

const SITE_URL = "https://www.regenerativerevival.com";

/**
 * Sitemap rules followed (per SEO playbook):
 *   §2.2  <lastmod> must be accurate or Google ignores ALL lastmods sitewide.
 *         → We use hardcoded per-page dates for static pages (bump them when
 *           you actually edit the page), real publish dates for blog posts,
 *           and OMIT lastmod entirely for programmatic/hub URLs where there's
 *           no meaningful per-URL modification date. Google handles missing
 *           lastmod fine and won't punish us for honesty.
 *   §2.3  changeFrequency and priority are ignored by Google. Not emitted.
 *
 * TODO (§2.8 — at scale): if URL count grows past ~5K-10K or per-template
 *   indexing visibility in GSC is needed, migrate to a build-time script
 *   that generates sitemap-0.xml, sitemap-1.xml + sitemap-index.xml.
 *   Reference implementation: SEO-AUDIT-PLAYBOOK.md Appendix D.6.
 *   Currently 1,361 URLs — single file is well under the 50K protocol limit.
 */

// Hardcoded modification dates for static / hand-curated pages.
// Bump a specific date when you actually edit that page's content.
const STATIC_PAGE_DATES: Record<string, string> = {
  "/": "2026-05-16",
  "/about": "2026-05-16",
  "/about/why-were-different": "2026-05-16",
  "/services": "2026-05-16",
  "/contact": "2026-05-16",
  "/news": "2026-05-16",
  "/stem-cell-therapy": "2026-05-16",
  "/why-exosomes": "2026-05-16",
  "/why-stem-cells": "2026-05-16",
  "/whartons-jelly": "2026-05-16",
  "/locations": "2026-05-16",
  "/testimonials": "2026-05-16",
  "/partner-with-us": "2026-05-16",
  "/treatments": "2026-05-16",
  "/partners": "2026-05-16",
  "/privacy-policy": "2024-09-05", // from scraped WP page
  "/terms-conditions": "2024-09-05", // from scraped WP page
  "/disclaimer": "2025-01-01",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = Object.entries(STATIC_PAGE_DATES).map(
    ([path, date]) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      lastModified: new Date(date),
    })
  );

  // Blog/news posts — real publication date (already accurate).
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  // Treatment hub pages — no per-URL modification date available.
  // Per playbook §2.2: omit lastmod rather than fake it with build time.
  const treatmentHubs: MetadataRoute.Sitemap = treatments.map((t) => ({
    url: `${SITE_URL}/treatments/${t.slug}`,
  }));

  // Partner hub pages — same reasoning, omit lastmod.
  const partnerHubs: MetadataRoute.Sitemap = partnerServices.map((s) => ({
    url: `${SITE_URL}/partners/${s.slug}`,
  }));

  // Consumer programmatic pages: treatment × location.
  // No per-URL signal → omit lastmod.
  const treatmentPages: MetadataRoute.Sitemap = treatments.flatMap((t) =>
    locations.map((l) => ({
      url: `${SITE_URL}/treatments/${t.slug}/${l.slug}`,
    }))
  );

  // B2B partner programmatic pages: service × location.
  const partnerPages: MetadataRoute.Sitemap = partnerServices.flatMap((s) =>
    locations.map((l) => ({
      url: `${SITE_URL}/partners/${s.slug}/${l.slug}`,
    }))
  );

  return [
    ...staticPages,
    ...articlePages,
    ...treatmentHubs,
    ...partnerHubs,
    ...treatmentPages,
    ...partnerPages,
  ];
}
