import type { Metadata } from "next";

const SITE_URL = "https://www.regenerativerevival.com";
const SITE_NAME = "Regenerative Revival";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Generate full metadata for any page with OG, Twitter, canonical URL.
 * Handles dynamic CTA insertion: appends CTA to title only if under 60 chars.
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  noIndex = false,
  cta,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  cta?: string;
}): Metadata {
  // Dynamic CTA system: only append if title stays under 60 chars
  let fullTitle = `${title} | ${SITE_NAME}`;
  if (cta && fullTitle.length + cta.length + 3 <= 60) {
    fullTitle = `${title} | ${cta} | ${SITE_NAME}`;
  }
  // Safeguard: cap title at 60 chars per SEO playbook §4.1 (~600px desktop).
  if (fullTitle.length > 60) {
    fullTitle = fullTitle.substring(0, 57).replace(/\s+\S*$/, "") + "…";
  }

  // Dynamic CTA in description: append if under 158 chars (per playbook §4.2,
  // Google truncates around 920px ≈ 158-160 chars on desktop).
  let fullDescription = description.trim();
  const descCta = "Book your free consultation today.";
  if (fullDescription.length + descCta.length + 1 <= 158) {
    fullDescription = `${fullDescription} ${descCta}`;
  }
  // Safeguard: cap at 158 chars even if caller passed a long description.
  // Trim at word boundary + ellipsis to avoid Google's mid-sentence truncation.
  if (fullDescription.length > 158) {
    fullDescription =
      fullDescription.substring(0, 155).replace(/\s+\S*$/, "") + "…";
  }

  const url = `${SITE_URL}${path}`;
  const image = ogImage ? `${SITE_URL}${ogImage}` : DEFAULT_OG_IMAGE;

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: SITE_NAME,
      type: ogType,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
