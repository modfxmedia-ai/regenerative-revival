import type { MetadataRoute } from "next";
import { articles } from "./news/data";
import { locations } from "./lib/locations";
import { treatments } from "./lib/treatments";
import { partnerServices } from "./lib/partner-content";

const SITE_URL = "https://www.regenerativerevival.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/stem-cell-therapy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/why-exosomes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/why-stem-cells`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/whartons-jelly`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/locations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Consumer programmatic pages: treatment × location
  const treatmentPages: MetadataRoute.Sitemap = treatments.flatMap((t) =>
    locations.map((l) => ({
      url: `${SITE_URL}/treatments/${t.slug}/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // B2B partner programmatic pages: service × location
  const partnerPages: MetadataRoute.Sitemap = partnerServices.flatMap((s) =>
    locations.map((l) => ({
      url: `${SITE_URL}/partners/${s.slug}/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...articlePages, ...treatmentPages, ...partnerPages];
}
