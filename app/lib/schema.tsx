// JSON-LD Schema Markup Generators for SEO
// Organization, LocalBusiness, BreadcrumbList, FAQPage, Article, WebPage

const SITE_URL = "https://regenerativerevival.com";
const SITE_NAME = "Regenerative Revival";
const SITE_LOGO = `${SITE_URL}/icon-512.png`;
const PHONE = "(651) 371-8668";
const EMAIL = "info@regenerativerevival.com";

// ─── Organization Schema ───
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
      width: 512,
      height: 512,
    },
    description:
      "Concierge regenerative medicine and nationwide telehealth for hormones, peptides, and NAD+. One physician-led medical team, one patient record, one plan.",
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "10000 Hwy 55, Ste 200",
      addressLocality: "Plymouth",
      addressRegion: "MN",
      postalCode: "55441",
      addressCountry: "US",
    },
    foundingDate: "2018",
    founder: {
      "@type": "Person",
      name: "Seth Berge",
    },
    medicalSpecialty: [
      "Regenerative Medicine",
      "Hormone Optimization",
      "Peptide Therapy",
      "Longevity Medicine",
    ],
    sameAs: [
      "https://www.facebook.com/regenerativerevival",
      "https://www.instagram.com/regenerativerevival",
      "https://www.linkedin.com/company/regenerativerevival",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      email: EMAIL,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "US",
    },
  };
}

// ─── LocalBusiness Schema ───
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    image: SITE_LOGO,
    telephone: PHONE,
    email: EMAIL,
    description:
      "Regenerative Revival delivers concierge stem cell therapy in your home and nationwide telehealth for peptides, hormones, and NAD+. Physician-led under Arora Health Group.",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "10000 Hwy 55, Ste 200",
      addressLocality: "Plymouth",
      addressRegion: "MN",
      postalCode: "55441",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: "Regenerative Medicine",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Regenerative & Longevity Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Wharton's Jelly Stem Cell Therapy" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Peptide Therapy" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "NAD+ Therapy" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "Hormone Optimization (TRT/HRT)" } },
        { "@type": "Offer", itemOffered: { "@type": "MedicalTherapy", name: "GLP-1 Weight Management" } },
      ],
    },
  };
}

// ─── BreadcrumbList Schema ───
export function breadcrumbSchema(items: { name: string; url: string }[]) {
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
export function faqSchema(faqs: { question: string; answer: string }[]) {
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
  authorName?: string;
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
      "@type": article.authorName ? "Person" : "Organization",
      name: article.authorName ?? SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${article.slug}`,
    },
    articleSection: article.category,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

// ─── WebPage Schema ───
export function webPageSchema(page: { title: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_URL}${page.url}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
  };
}

// ─── MedicalWebPage Schema ───
export function medicalWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  medicalConditions?: string[];
  medicalAudience?: string;
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
    audience: page.medicalAudience
      ? { "@type": "MedicalAudience", audienceType: page.medicalAudience }
      : { "@type": "MedicalAudience", audienceType: "Patient" },
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Person",
      name: "Dr. Sean Arora",
      jobTitle: "Medical Director",
      affiliation: { "@type": "Organization", name: "Arora Health Group" },
    },
  };
}

// ─── Product Schema ───
export function productSchema(product: {
  name: string;
  slug: string;
  description: string;
  image?: string;
  category: string;
  hub: string;
  priceFrom?: number;
  brand?: string;
  sku?: string;
  prescriptionOnly?: boolean;
  form?: string;
  refrigeration?: string;
  supplyDays?: number;
  indications?: string[];
  rating?: boolean;
}) {
  const url = `${SITE_URL}/${product.hub}/${product.slug}`;

  // additionalProperty — surfaces structured product attributes in rich results
  const additionalProperty: Record<string, unknown>[] = [];
  if (product.form) {
    additionalProperty.push({ "@type": "PropertyValue", name: "Form", value: product.form });
  }
  if (product.refrigeration) {
    additionalProperty.push({ "@type": "PropertyValue", name: "Storage", value: product.refrigeration });
  }
  if (product.supplyDays) {
    additionalProperty.push({ "@type": "PropertyValue", name: "Supply", value: `${product.supplyDays} days` });
  }
  if (product.prescriptionOnly) {
    additionalProperty.push({ "@type": "PropertyValue", name: "Availability", value: "Prescription only" });
  }

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url,
    sku: product.sku ?? product.slug,
    mpn: product.sku ?? product.slug,
    category: product.category,
    brand: { "@type": "Brand", name: product.brand ?? SITE_NAME },
    manufacturer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    image: product.image ? `${SITE_URL}${product.image}` : SITE_LOGO,
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    ...(additionalProperty.length ? { additionalProperty } : {}),
    ...(product.indications?.length
      ? { isRelatedTo: product.indications.map((i) => ({ "@type": "MedicalCondition", name: i })) }
      : {}),
  };

  if (product.priceFrom !== undefined) {
    const priceValidUntil = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    data.offers = {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      price: product.priceFrom,
      priceValidUntil,
      itemCondition: "https://schema.org/NewCondition",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: product.priceFrom,
        priceCurrency: "USD",
        referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
      },
      availability: "https://schema.org/InStock",
      eligibleQuantity: { "@type": "QuantitativeValue", unitText: "monthly program" },
      seller: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    };
  }

  return data;
}

// ─── ItemList Schema ───
export function productListSchema(items: {
  name: string;
  slug: string;
  hub: string;
  description?: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/${item.hub}/${item.slug}`,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

// ─── Service Schema — for hub pages ───
export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    serviceType: service.serviceType,
    provider: {
      "@type": "MedicalClinic",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: service.areaServed ?? "United States",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}${service.url}`,
      serviceType: "Online",
    },
  };
}

// ─── HowTo Schema — for process/steps pages ───
export function howToSchema(howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
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
