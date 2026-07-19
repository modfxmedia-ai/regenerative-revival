import Link from "next/link";
import { ArrowUpRight, CheckCircle, Sparkles, ShieldCheck, Clock, Users } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ComplianceDisclaimer from "../components/ComplianceDisclaimer";
import TalkToProviderCTA from "../components/TalkToProviderCTA";
import PeptidePrograms from "../components/PeptidePrograms";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  medicalWebPageSchema,
  productListSchema,
  serviceSchema,
  faqSchema,
} from "../lib/schema";
import { getProductsByHub } from "../lib/products";

export const metadata = generatePageMetadata({
  title: "Peptide Therapy - Physician-Prescribed Online",
  description:
    "Physician-prescribed peptide therapy - BPC-157, semaglutide, CJC-1295, and more. Telehealth intake, licensed clinician oversight, shipped to your door.",
  path: "/peptides",
});

const faqs = [
  {
    question: "How do I get peptides prescribed online?",
    answer:
      "Take our 2-minute quiz, complete a telehealth intake with a licensed clinician, and receive your prescription from a licensed compounding pharmacy - all without leaving home. No clinic visit required.",
  },
  {
    question: "What is the best online peptide clinic?",
    answer:
      "The best online peptide clinic is one where a licensed physician reviews your labs and coordinates your peptide stack with your hormones and NAD+ - not just ships a product. At Regenerative Revival, the same medical team manages all of it.",
  },
  {
    question: "How long does peptide therapy take to work?",
    answer:
      "Most patients notice changes within 4–8 weeks depending on the peptide and protocol. BPC-157 for recovery can show results in 2–4 weeks. GLP-1 programs typically show meaningful weight changes within 8–12 weeks.",
  },
  {
    question: "Is peptide therapy safe?",
    answer:
      "Peptide therapy prescribed and monitored by a licensed clinician is generally well-tolerated. All protocols at Regenerative Revival are reviewed by our medical team and dispensed by NABP-accredited compounding pharmacies.",
  },
];

const benefits = [
  "Licensed clinician reviews your labs before prescribing",
  "Compounded by NABP-accredited pharmacies",
  "Ships directly to your door - no clinic visits",
  "Same medical team coordinates hormones, peptides, and NAD+",
  "Telehealth available in all 50 states",
  "Physician oversight under Arora Health Group",
];

export default function PeptidesPage() {
  const items = getProductsByHub("hormones-peptides");

  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Peptide Therapy Online - Physician-Prescribed Programs",
          description:
            "Physician-prescribed peptide therapy through telehealth - solution-based programs by goal.",
          url: "/peptides",
          medicalConditions: [
            "Obesity",
            "Soft Tissue Injury",
            "Metabolic Syndrome",
            "Fatigue",
          ],
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Peptide Therapy",
          description:
            "Physician-prescribed peptide therapy delivered through telehealth. Licensed clinician oversight, compounded by NABP-accredited pharmacies.",
          url: "/peptides",
          serviceType: "Telehealth Peptide Therapy",
          areaServed: "United States",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          { name: "Peptides", url: "https://regenerativerevival.com/peptides" },
        ])}
      />
      <JsonLd
        data={productListSchema(
          items.map((p) => ({ name: p.name, slug: p.slug, hub: p.hub, description: p.shortDescription }))
        )}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "Peptides", href: "/peptides" }]} />

      {/* Hero - static gradient (no heavy background video) */}
      <section className="relative bg-gradient-to-b from-[#1A1F30] to-[#21253C] overflow-hidden">
        <div className="absolute inset-0 lux-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#6762AF]/15 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5] mb-5">
              Telehealth · Physician-Prescribed · All 50 States
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-5xl lg:text-[4rem] text-white leading-[1.05] tracking-[-0.02em]">
              Peptide therapy - {" "}
              <span className="text-[#6762AF] font-semibold">prescribed online</span>
            </h1>
            <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              BPC-157, semaglutide, CJC-1295, GHK-Cu, and more - start with your goal, not a product wall. Prescribed by a licensed clinician, reviewed against your labs, and shipped from a licensed compounding pharmacy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: ShieldCheck, label: "Licensed Clinician Oversight" },
                { icon: Clock, label: "Telehealth in 48 hrs" },
                { icon: Users, label: "50 States Covered" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-full bg-white/[0.07] border border-white/[0.1] px-4 py-2">
                  <item.icon className="h-3.5 w-3.5 text-[#71A7F5]" />
                  <span className="text-[12.5px] font-medium text-white/75">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/consult-router"
                className="group inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-7 text-[14px] font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all"
              >
                <Sparkles className="h-4 w-4 text-[#6762AF]" />
                Take The 2-Minute Quiz
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#catalog"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                Browse the Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Why Regenerative Revival</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                Start with your goal - not a wall of products
              </h2>
              <p className="mt-6 text-base text-[#4A4F66] leading-relaxed">
                Most telehealth peptide companies dump you into a catalog. We funnel you by solution - weight loss, recovery, sleep, longevity - then show the protocols our clinicians actually prescribe. Looking for hormones?{" "}
                <Link href="/hormones" className="text-[#6762AF] font-semibold hover:underline">
                  See our hormone programs
                </Link>
                .
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-[#1A1F30]/85">
                    <CheckCircle className="h-4 w-4 text-[#6762AF] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Licensed clinicians on our medical team" },
                { value: "14", label: "Solution-based peptide programs" },
                { value: "50", label: "States served via telehealth" },
                { value: "48 hrs", label: "Average time to first clinician review" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-[#F4EFFA] p-6 border border-[#6762AF]/10">
                  <div className="font-[family-name:var(--font-poppins)] text-3xl text-[#6762AF]">{s.value}</div>
                  <div className="text-[12px] text-[#4A4F66] mt-2 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PeptidePrograms />

      <section id="catalog" className="bg-[#F1ECF8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Catalog</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Physician-prescribed peptide programs
            </h2>
            <p className="mt-4 text-base text-[#4A4F66]">
              Every product is reviewed by a licensed clinician and shipped from a licensed compounding pharmacy. Click any product to learn more and begin your intake.
            </p>
          </div>

          {items.length === 0 ? (
            <p className="text-[#4A4F66]">Catalog loading. Take the quiz to get started.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/hormones-peptides/${p.slug}`}
                    className="group block h-full bg-white rounded-[20px] overflow-hidden border border-white hover:border-[#6762AF]/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500"
                  >
                    <div className="relative h-40 bg-gradient-to-br from-[#F1ECF8] via-[#EAEFF7] to-[#E8E0F2] flex items-center justify-center overflow-hidden">
                      <span className="absolute top-[10%] left-[8%] w-16 h-16 rounded-full bg-white/40 blur-xl" />
                      <span className="absolute bottom-[10%] right-[8%] w-20 h-20 rounded-full bg-[#C5DBF7]/50 blur-xl" />
                      <svg viewBox="0 0 120 200" className="relative h-32 w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`b-${p.slug}`} x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0%" stopColor="#3F2549" />
                            <stop offset="100%" stopColor="#1A0F22" />
                          </linearGradient>
                        </defs>
                        <ellipse cx="60" cy="12" rx="14" ry="8" fill="#1A1F30" />
                        <rect x="42" y="18" width="36" height="26" rx="3" fill="#1A1F30" />
                        <rect x="47" y="44" width="26" height="8" fill={`url(#b-${p.slug})`} />
                        <rect x="22" y="52" width="76" height="130" rx="8" fill={`url(#b-${p.slug})`} />
                        <rect x="28" y="58" width="10" height="118" rx="4" fill="white" fillOpacity="0.15" />
                        <rect x="30" y="72" width="60" height="90" rx="2" fill="white" />
                        <text x="60" y="92" textAnchor="middle" fontFamily="sans-serif" fontSize="5" fill="#1A1F30" fontWeight="700">REGENERATIVE</text>
                        <text x="60" y="99" textAnchor="middle" fontFamily="sans-serif" fontSize="5" fill="#1A1F30" fontWeight="700">REVIVAL™</text>
                        <line x1="36" y1="104" x2="84" y2="104" stroke="#1A1F30" strokeWidth="0.5" opacity="0.2" />
                        <text x="60" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fill="#1A1F30" fontWeight="800">
                          {p.name.split("/")[0].slice(0, 10)}
                        </text>
                        <rect x="42" y="130" width="36" height="10" rx="5" fill="#71A7F5" />
                        <text x="60" y="137.5" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="white" fontWeight="700">
                          {p.doses[0]?.label?.split(" - ")[0]?.trim()?.slice(0, 12) ?? ""}
                        </text>
                      </svg>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-wider text-[#6762AF] font-semibold">
                          {p.category === "glp1" ? "GLP-1" : p.category === "peptide" ? "Peptide" : p.category === "capsule" ? "Oral" : p.category}
                        </span>
                        <span className="text-[10px] text-[#7A7F95] uppercase">{p.form}</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[16px] text-[#1A1F30] group-hover:text-[#583563] transition-colors leading-snug">
                        {p.name}
                      </h3>
                      <p className="mt-2 text-[12.5px] text-[#4A4F66] line-clamp-2 leading-relaxed">{p.shortDescription}</p>
                      <div className="mt-4 flex items-center justify-between">
                        {p.priceFrom !== undefined ? (
                          <span className="text-[13px] text-[#4A4F66]">
                            From <span className="font-semibold text-[#1A1F30]">${p.priceFrom}</span>/mo
                          </span>
                        ) : (
                          <span className="text-[13px] text-[#7A7F95]">Consult required</span>
                        )}
                        <ArrowUpRight className="h-4 w-4 text-[#6762AF] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            Common questions about peptide therapy online
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-[#F1ECF8] pb-6">
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[18px] text-[#1A1F30] mb-3">{faq.question}</h3>
                <p className="text-[14px] text-[#4A4F66] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TalkToProviderCTA />
      <ComplianceDisclaimer variant="compounded_rx" />
    </>
  );
}
