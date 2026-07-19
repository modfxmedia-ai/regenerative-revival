import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs from "../../components/Breadcrumbs";
import ComplianceDisclaimer from "../../components/ComplianceDisclaimer";
import { generatePageMetadata } from "../../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  productSchema,
  faqSchema,
  medicalWebPageSchema,
} from "../../lib/schema";
import {
  getProductBySlug,
  products,
} from "../../lib/products";
import ProductPageContent from "./ProductPageContent";

// SSG: pre-render one page per product at build time
export function generateStaticParams() {
  return products
    .filter((p) => p.hub === "hormones-peptides" || p.hub === "nad")
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
      title: "Product Not Found",
      description: "This product is unavailable.",
      path: `/hormones-peptides/${slug}`,
      noIndex: true,
    });
  }
  const title = product.seoName ?? product.name;
  return generatePageMetadata({
    title,
    description: `${product.shortDescription} Physician-prescribed, compounded by NABP-accredited pharmacies, shipped to your door. Telehealth in all 50 states.`,
    path: `/hormones-peptides/${product.slug}`,
  });
}

// ── Per-product SEO FAQ data ──────────────────────────────────────────────
const productFaqs: Record<string, { question: string; answer: string }[]> = {
  "sublingual-semaglutide": [
    {
      question: "What is sublingual semaglutide?",
      answer:
        "Sublingual semaglutide is a compounded formulation of semaglutide - the same GLP-1 receptor agonist found in Ozempic and Wegovy - delivered under the tongue rather than by injection. It is absorbed through the oral mucosa, making it a needle-free alternative for patients who prefer not to self-inject.",
    },
    {
      question: "Is compounded semaglutide the same as Ozempic?",
      answer:
        "Compounded semaglutide contains the same active molecule (semaglutide) as Ozempic and Wegovy but is prepared by a licensed compounding pharmacy rather than manufactured by Novo Nordisk. It is not FDA-approved as a finished drug product. The active ingredient is identical; the formulation and delivery method may differ.",
    },
    {
      question: "How much does sublingual semaglutide cost?",
      answer:
        "Sublingual semaglutide programs at Regenerative Revival start at $379/month, which includes the clinician consultation, prescription, and shipping from a licensed compounding pharmacy. Pricing varies by dose and titration schedule.",
    },
    {
      question: "How long does it take for sublingual semaglutide to work?",
      answer:
        "Most patients notice reduced appetite and food noise within 2–4 weeks of starting semaglutide. Meaningful weight loss typically begins within 4–8 weeks. Full metabolic effects develop over 3–6 months of consistent use with clinician-supervised titration.",
    },
  ],
  "sublingual-tirzepatide": [
    {
      question: "What is sublingual tirzepatide?",
      answer:
        "Sublingual tirzepatide is a compounded formulation of tirzepatide - a dual GIP and GLP-1 receptor agonist - delivered under the tongue. It activates two metabolic pathways simultaneously, producing stronger appetite suppression and metabolic effects than GLP-1 alone.",
    },
    {
      question: "Is tirzepatide stronger than semaglutide?",
      answer:
        "Clinical trials show tirzepatide produces greater average weight loss than semaglutide at comparable doses. The SURMOUNT-1 trial demonstrated up to 22.5% body weight reduction with tirzepatide 15mg.",
    },
  ],
  "bpc-157": [
    {
      question: "What is BPC-157 used for?",
      answer:
        "BPC-157 is a synthetic peptide studied for soft-tissue healing, tendon and ligament repair, gut lining integrity, and anti-inflammatory effects. It is used in recovery protocols for sports injuries, post-surgical healing, and gastrointestinal conditions.",
    },
    {
      question: "Is BPC-157 safe?",
      answer:
        "BPC-157 has a favorable safety profile in preclinical studies. At Regenerative Revival, all BPC-157 protocols are prescribed and monitored by a licensed clinician, and the peptide is compounded by NABP-accredited pharmacies.",
    },
  ],
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || (product.hub !== "hormones-peptides" && product.hub !== "nad")) {
    notFound();
  }

  const primaryWizloUrl = product.doses[0]?.wizloUrl ?? "/consult-router";
  const faqs = productFaqs[slug] ?? [];

  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: product.seoName ?? product.name,
          description: product.shortDescription,
          url: `/hormones-peptides/${product.slug}`,
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
          { name: "Peptides", url: "https://regenerativerevival.com/peptides" },
          { name: product.name, url: `https://regenerativerevival.com/hormones-peptides/${product.slug}` },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <Breadcrumbs
        items={[
          { label: "Peptides", href: "/peptides" },
          { label: product.name, href: `/hormones-peptides/${product.slug}` },
        ]}
      />

      <ProductPageContent product={product} primaryWizloUrl={primaryWizloUrl} faqs={faqs} />

      <ComplianceDisclaimer variant={product.disclaimerKey} />
    </>
  );
}
