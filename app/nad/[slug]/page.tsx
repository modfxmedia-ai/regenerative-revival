import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";
import ComplianceDisclaimer from "../../components/ComplianceDisclaimer";
import { generatePageMetadata } from "../../lib/seo";
import { JsonLd, breadcrumbSchema, productSchema, medicalWebPageSchema, faqSchema } from "../../lib/schema";
import { getProductBySlug, products } from "../../lib/products";
import ProductPageContent from "../../components/ProductPageContent";

export function generateStaticParams() {
  return products
    .filter((p) => p.hub === "nad")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return generatePageMetadata({
      title: "Program Not Found",
      description: "This program is unavailable.",
      path: `/nad/${slug}`,
      noIndex: true,
    });
  }
  return generatePageMetadata({
    title: product.seoName ?? product.name,
    description: `${product.shortDescription} Physician-prescribed, compounded by NABP-accredited pharmacies, shipped to your door. Telehealth in all 50 states.`,
    path: `/nad/${product.slug}`,
    cta: "Start Intake",
  });
}

const nadProductFaqs: Record<string, { question: string; answer: string }[]> = {
  "nad-plus": [
    {
      question: "What is NAD+ therapy?",
      answer:
        "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every cell of your body, essential for mitochondrial energy production, DNA repair, and longevity signaling. NAD+ levels decline approximately 50% between ages 40 and 60, contributing to aging and metabolic decline. Therapy restores circulating levels to support cellular health.",
    },
    {
      question: "How is NAD+ administered?",
      answer:
        "NAD+ can be delivered via subcutaneous injection (convenient at-home) or sublingual (no needles, daily maintenance). Your clinician will recommend the best delivery method based on your goals, lifestyle, and labs. IV infusion is not currently offered.",
    },
    {
      question: "How long does it take for NAD+ to work?",
      answer:
        "Most patients notice improved energy and mental clarity within 1–2 weeks. Deeper cellular benefits — mitochondrial efficiency, DNA repair support — build over 4–8 weeks of consistent use. Long-term use supports sirtuin activity and healthy aging.",
    },
    {
      question: "How much does NAD+ therapy cost?",
      answer:
        "NAD+ injection therapy at Regenerative Revival starts at $249/month, which includes the clinician consultation, prescription, and shipping from a licensed compounding pharmacy. Pricing varies by dose and delivery method.",
    },
  ],
};

export default async function NadProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.hub !== "nad") {
    notFound();
  }

  const primaryWizloUrl = product.doses[0]?.wizloUrl ?? "/consult-router";
  const faqs = nadProductFaqs[slug] ?? [];

  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: product.seoName ?? product.name,
          description: product.shortDescription,
          url: `/nad/${product.slug}`,
        })}
      />
      <JsonLd
        data={productSchema({
          name: product.name,
          slug: product.slug,
          hub: product.hub,
          description: product.shortDescription,
          category: product.category,
          priceFrom: product.priceFrom,
          image: product.image,
          prescriptionOnly: product.disclaimerKey === "compounded_rx",
          form: product.form,
          refrigeration: product.refrigeration,
          supplyDays: product.supplyDays,
          indications: product.indications,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          { name: "NAD+ & Supplements", url: "https://regenerativerevival.com/nad" },
          { name: product.name, url: `https://regenerativerevival.com/nad/${product.slug}` },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <Breadcrumbs
        items={[
          { label: "NAD+ & Supplements", href: "/nad" },
          { label: product.name, href: `/nad/${product.slug}` },
        ]}
      />

      <ProductPageContent product={product} primaryWizloUrl={primaryWizloUrl} faqs={faqs} />

      <ComplianceDisclaimer variant={product.disclaimerKey} />
    </>
  );
}