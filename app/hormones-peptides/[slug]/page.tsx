import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle, ShieldCheck, Clock, Sparkles } from "lucide-react";
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
  productDisclaimers,
  products,
} from "../../lib/products";

// SSG: pre-render one page per product at build time
export function generateStaticParams() {
  return products
    .filter((p) => p.hub === "hormones-peptides")
    .map((p) => ({ slug: p.slug }));
}

// Per-product metadata — GEO-optimized per KB playbook
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
  // GEO-optimized: title includes the primary keyword + brand signal
  const title = product.seoName ?? product.name;
  return generatePageMetadata({
    title,
    description: `${product.shortDescription} Physician-prescribed, compounded by NABP-accredited pharmacies, shipped to your door. Telehealth in all 50 states.`,
    path: `/hormones-peptides/${product.slug}`,
  });
}

// ── Per-product FAQ data (GEO: structured for AI extraction) ──────────────
const productFaqs: Record<string, { question: string; answer: string }[]> = {
  "sublingual-semaglutide": [
    {
      question: "What is sublingual semaglutide?",
      answer:
        "Sublingual semaglutide is a compounded formulation of semaglutide — the same GLP-1 receptor agonist found in Ozempic and Wegovy — delivered under the tongue rather than by injection. It is absorbed through the oral mucosa, making it a needle-free alternative for patients who prefer not to self-inject.",
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
    {
      question: "Who is a good candidate for sublingual semaglutide?",
      answer:
        "Adults with a BMI of 27+ (with at least one weight-related comorbidity) or 30+ who have struggled with appetite regulation despite diet and exercise. Patients who prefer not to self-inject are ideal candidates for the sublingual formulation. A clinical evaluation is required.",
    },
  ],
  "sublingual-tirzepatide": [
    {
      question: "What is sublingual tirzepatide?",
      answer:
        "Sublingual tirzepatide is a compounded formulation of tirzepatide — a dual GIP and GLP-1 receptor agonist — delivered under the tongue. It activates two metabolic pathways simultaneously, producing stronger appetite suppression and metabolic effects than GLP-1 alone.",
    },
    {
      question: "Is tirzepatide stronger than semaglutide?",
      answer:
        "Clinical trials show tirzepatide produces greater average weight loss than semaglutide at comparable doses. The SURMOUNT-1 trial demonstrated up to 22.5% body weight reduction with tirzepatide 15mg. The dual GIP/GLP-1 mechanism provides broader metabolic effects.",
    },
    {
      question: "How much does sublingual tirzepatide cost?",
      answer:
        "Sublingual tirzepatide programs start at $449/month, including clinician consultation, prescription, and pharmacy shipping.",
    },
  ],
  "semaglutide-b12-injection": [
    {
      question: "Why is B12 added to semaglutide injections?",
      answer:
        "B12 (cyanocobalamin) is added to support energy levels during caloric reduction. GLP-1 programs often reduce overall food intake, which can lower B12 absorption. The combination helps maintain energy and neurological function during the weight loss phase.",
    },
    {
      question: "How often do I inject semaglutide + B12?",
      answer:
        "Semaglutide + B12 is administered as a weekly subcutaneous injection. Your clinician will establish a titration schedule — typically starting at a low dose and increasing every 4 weeks based on your response and tolerability.",
    },
  ],
  "bpc-157": [
    {
      question: "What is BPC-157 used for?",
      answer:
        "BPC-157 (Body Protection Compound 157) is a synthetic peptide studied for soft-tissue healing, tendon and ligament repair, gut lining integrity, and anti-inflammatory effects. It is used in recovery protocols for sports injuries, post-surgical healing, and gastrointestinal conditions.",
    },
    {
      question: "Is BPC-157 safe?",
      answer:
        "BPC-157 has a favorable safety profile in preclinical studies. Human clinical data is limited but emerging. At Regenerative Revival, all BPC-157 protocols are prescribed and monitored by a licensed clinician, and the peptide is compounded by NABP-accredited pharmacies.",
    },
    {
      question: "How long does BPC-157 take to work?",
      answer:
        "Most patients report noticeable improvement in soft-tissue recovery within 2–4 weeks. Gut health benefits may be felt within 1–2 weeks. Full tissue repair effects develop over 6–12 weeks of consistent use.",
    },
  ],
};

// ── Category labels ────────────────────────────────────────────────────────
function categoryLabel(cat: string): string {
  const map: Record<string, string> = {
    glp1: "GLP-1 Weight Management",
    peptide: "Peptide Therapy",
    nad: "NAD+ Longevity",
    hormone: "Hormone Optimization",
    capsule: "Oral Therapy",
    supplement: "Supplement",
  };
  return map[cat] ?? "Telehealth";
}

// ── Hero image map — use relevant images per product category ──────────────
function heroImage(slug: string): string {
  const map: Record<string, string> = {
    "sublingual-semaglutide": "/2149374070.jpg",
    "sublingual-tirzepatide": "/2149374070.jpg",
    "semaglutide-b12-injection": "/2149374070.jpg",
    "tirzepatide-b12-injection": "/2149374070.jpg",
    "bpc-157": "/news/imgi_13_enhance-workout-recovery-1080x675.jpg",
    "ghk-cu": "/news/imgi_11_benefits-of-whartons-jelly-1080x675.jpg",
    "pt-141": "/2149040261.jpg",
    "ibutamoren-mk-677": "/news/imgi_40_boost-your-energy-naturally-1080x675.jpg",
  };
  return map[slug] ?? "/2149611219.jpg";
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || product.hub !== "hormones-peptides") {
    notFound();
  }

  const primaryWizloUrl = product.doses[0]?.wizloUrl ?? "/consult-router";
  const faqs = productFaqs[slug] ?? [];
  const hero = heroImage(slug);

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
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "Hormones & Peptides", url: "https://www.regenerativerevival.com/hormones-peptides" },
          { name: product.name, url: `https://www.regenerativerevival.com/hormones-peptides/${product.slug}` },
        ])}
      />
      {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

      <Breadcrumbs
        items={[
          { label: "Hormones & Peptides", href: "/hormones-peptides" },
          { label: product.name, href: `/hormones-peptides/${product.slug}` },
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt={product.seoName ?? product.name}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/85 via-[#021E3C]/35 to-transparent" />
          <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28 pt-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">
                {categoryLabel(product.category)} · Physician-Prescribed
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-fraunces)] font-normal text-[2.5rem] sm:text-5xl lg:text-[4.25rem] text-white leading-[1.02] tracking-[-0.02em]">
              {product.seoName ?? product.name}
            </h1>
            {product.priceFrom !== undefined && (
              <p className="mt-5 text-base text-white/65">
                Programs starting at{" "}
                <span className="text-white font-semibold">${product.priceFrom}/month</span>
                {" "}— includes clinician consult, prescription &amp; shipping.
              </p>
            )}
            <p className="mt-4 text-base text-white/55 max-w-xl leading-relaxed">{product.shortDescription}</p>

            {/* Trust chips */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { icon: ShieldCheck, label: "Licensed Clinician Oversight" },
                { icon: Clock, label: "Ships in 3–5 Business Days" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-full bg-white/[0.07] border border-white/[0.1] px-4 py-2">
                  <item.icon className="h-3.5 w-3.5 text-[#71A7F5]" />
                  <span className="text-[12.5px] font-medium text-white/75">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={primaryWizloUrl}
                className="group inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-7 text-[14px] font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all"
              >
                <Sparkles className="h-4 w-4 text-[#6762AF]" />
                Start Intake
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/consult-router"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                Talk to a Provider First
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      </section>

      {/* ── Benefits + How it works ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Benefits */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Key Benefits</span>
              <h2 className="mt-4 font-[family-name:var(--font-fraunces)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                What {product.name} does
              </h2>
              <ul className="mt-7 flex flex-col gap-4">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-[#1A1F30]/85">
                    <CheckCircle className="h-4 w-4 text-[#6762AF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {product.indications && product.indications.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-[family-name:var(--font-fraunces)] font-normal text-[1.5rem] text-[#1A1F30] mb-5">
                    Who it&apos;s for
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {product.indications.map((ind) => (
                      <li key={ind} className="flex items-start gap-3 text-[14px] text-[#4A4F66]">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6762AF] shrink-0" />
                        <span className="leading-relaxed">{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* How it works + dose sidebar */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">How It Works</span>
              <h2 className="mt-4 font-[family-name:var(--font-fraunces)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                The science behind {product.name}
              </h2>
              <p className="mt-5 text-[15px] text-[#4A4F66] leading-[1.75]">{product.longDescription}</p>

              {/* What this is not */}
              <div className="mt-8 rounded-2xl bg-[#F4EFFA] border border-[#6762AF]/10 p-6">
                <h3 className="text-[14px] font-semibold text-[#1A1F30] mb-3">What this program is not</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "Not a quick fix — sustainable results take time and clinician oversight",
                    "Not for everyone — your provider will tell you honestly if another path fits better",
                    "Not a pill mill — every prescription requires a clinical evaluation",
                  ].map((item) => (
                    <li key={item} className="text-[13px] text-[#4A4F66] flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#583563] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available doses */}
              <div className="mt-8">
                <h3 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691] mb-4">Available Doses</h3>
                <div className="flex flex-col gap-2">
                  {product.doses.map((d) => (
                    <a
                      key={d.label}
                      href={d.wizloUrl}
                      className="group flex items-center justify-between rounded-xl bg-[#F4EFFA] border border-[#F1ECF8] hover:border-[#6762AF]/30 px-5 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(88,53,99,0.2)]"
                    >
                      <span className="text-[14px] font-medium text-[#1A1F30] group-hover:text-[#583563] transition-colors">{d.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-[#6762AF] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-[#7A7F95]">
                  Dose selection is finalized by your prescribing clinician during your consult.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ — GEO optimized: structured for AI extraction ── */}
      {faqs.length > 0 && (
        <section className="bg-[#F1ECF8] py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
            <h2 className="mt-4 font-[family-name:var(--font-fraunces)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
              {product.name} — questions answered
            </h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-[#6762AF]/15 pb-6">
                  <h3 className="font-[family-name:var(--font-fraunces)] font-normal text-[18px] text-[#1A1F30] mb-3">{faq.question}</h3>
                  <p className="text-[14px] text-[#4A4F66] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-r from-[#1A1F30] via-[#583563] to-[#6762AF] animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] font-normal text-[2rem] sm:text-4xl text-white leading-[1.05] tracking-[-0.02em]">
            Not sure where to start?
          </h2>
          <p className="mt-5 text-base text-white/80 max-w-xl mx-auto">
            Take the 2-minute quiz. We&apos;ll route you to the right program and clinician.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryWizloUrl}
              className="group inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-8 text-[14px] font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all"
            >
              <Sparkles className="h-4 w-4 text-[#6762AF]" />
              Start Intake
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              href="/consult-router"
              className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 text-[14px] font-medium text-white/85 hover:bg-white/10 transition-all"
            >
              Take The 2-Minute Quiz
            </Link>
          </div>
        </div>
      </section>

      <ComplianceDisclaimer variant={product.disclaimerKey} />
    </>
  );
}
