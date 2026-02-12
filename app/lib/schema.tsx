// JSON-LD Schema Markup Generators for SEO
// Organization, LocalBusiness, BreadcrumbList, FAQPage, Article, WebPage

const SITE_URL = "https://www.regenerativerevival.com";
const SITE_NAME = "Regenerative Revival";
const SITE_LOGO = `${SITE_URL}/logo.png`;
const PHONE = "(555) 123-4567";

// ─── Organization Schema ───
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    description:
      "Advanced regenerative medicine clinic specializing in Wharton's Jelly stem cell therapy, exosome treatments, and non-invasive pain relief.",
    telephone: PHONE,
    sameAs: [
      "https://www.facebook.com/regenerativerevival",
      "https://www.instagram.com/regenerativerevival",
      "https://www.linkedin.com/company/regenerativerevival",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      availableLanguage: "English",
    },
  };
}

// ─── LocalBusiness Schema ───
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    image: SITE_LOGO,
    telephone: PHONE,
    description:
      "Regenerative Revival offers advanced stem cell therapy and regenerative medicine treatments including Wharton's Jelly, exosomes, and PRP therapy for chronic pain relief and tissue regeneration.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Regenerative Way",
      addressLocality: "Your City",
      addressRegion: "Your State",
      postalCode: "00000",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "0.0",
      longitude: "0.0",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
    },
    medicalSpecialty: "Regenerative Medicine",
  };
}


// ─── BreadcrumbList Schema ───
export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── FAQPage Schema ───
export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Article Schema ───
export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${article.slug}`,
    },
    articleSection: article.category,
  };
}

// ─── WebPage Schema ───
export function webPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.url}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
  };
}

// ─── MedicalWebPage Schema (for service pages) ───
export function medicalWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  medicalConditions?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.url}`,
    about: page.medicalConditions?.map((condition) => ({
      "@type": "MedicalCondition",
      name: condition,
    })),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
    lastReviewed: new Date().toISOString().split("T")[0],
  };
}

// ─── JSON-LD Script Component ───
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
