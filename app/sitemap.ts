import type { MetadataRoute } from "next";
import { articles } from "./news/data";
import { locations } from "./lib/locations";
import { treatments } from "./lib/treatments";
import { partnerServices } from "./lib/partner-content";
import { products } from "./lib/products";

const SITE_URL = "https://www.regenerativerevival.com";

// Bump these dates when you actually edit the page content.
// Accurate lastmod = Google trusts your sitemap. Fake lastmod = Google ignores all of them.
const STATIC_PAGE_DATES: Record<string, string> = {
  // Core hub pages
  "/": "2026-05-22",
  "/about": "2026-05-22",
  "/about/founder": "2026-05-22",
  "/about/why-were-different": "2026-05-22",
  "/contact": "2026-05-22",
  "/news": "2026-05-22",

  // Regenerative hub
  "/stem-cell-therapy": "2026-05-22",
  "/whartons-jelly": "2026-05-22",
  "/why-exosomes": "2026-05-22",
  "/why-stem-cells": "2026-05-22",
  "/concierge-care-model": "2026-05-22",
  "/services": "2026-05-22",

  // Telehealth hub
  "/hormones-peptides": "2026-05-22",
  "/nad": "2026-05-22",

  // Programmatic hubs
  "/treatments": "2026-05-22",
  "/locations": "2026-05-22",
  "/partners": "2026-05-22",

  // B2B / providers
  "/for-providers": "2026-05-22",
  "/partner-with-us": "2026-05-22",

  // Social proof
  "/testimonials": "2026-05-22",

  // Legal (stable — don't bump unless content changes)
  "/privacy-policy": "2024-09-05",
  "/terms-conditions": "2024-09-05",
  "/disclaimer": "2025-01-01",

  // /consult-router intentionally omitted — noindex utility route
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = Object.entries(STATIC_PAGE_DATES).map(
    ([path, date]) => ({
      url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
      lastModified: new Date(date),
    })
  );

  // Blog posts — real publication dates
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  // Treatment hub pages — omit lastmod (no per-URL signal)
  const treatmentHubs: MetadataRoute.Sitemap = treatments.map((t) => ({
    url: `${SITE_URL}/treatments/${t.slug}`,
  }));

  // Partner hub pages
  const partnerHubs: MetadataRoute.Sitemap = partnerServices.map((s) => ({
    url: `${SITE_URL}/partners/${s.slug}`,
  }));

  // Treatment × location programmatic pages
  const treatmentPages: MetadataRoute.Sitemap = treatments.flatMap((t) =>
    locations.map((l) => ({
      url: `${SITE_URL}/treatments/${t.slug}/${l.slug}`,
    }))
  );

  // Partner × location programmatic pages
  const partnerPages: MetadataRoute.Sitemap = partnerServices.flatMap((s) =>
    locations.map((l) => ({
      url: `${SITE_URL}/partners/${s.slug}/${l.slug}`,
    }))
  );

  // Telehealth product pages (hormones-peptides + nad only — regen is consult-only)
  const productPages: MetadataRoute.Sitemap = products
    .filter((p) => p.hub === "hormones-peptides" || p.hub === "nad")
    .map((p) => ({
      url: `${SITE_URL}/${p.hub}/${p.slug}`,
    }));

  return [
    ...staticPages,
    ...articlePages,
    ...treatmentHubs,
    ...partnerHubs,
    ...treatmentPages,
    ...partnerPages,
    ...productPages,
  ];
}
