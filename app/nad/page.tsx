import Link from "next/link";
import { ArrowUpRight, CheckCircle, Sparkles, Zap, Brain, Activity } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ComplianceDisclaimer from "../components/ComplianceDisclaimer";
import QuizCTA from "../components/QuizCTA";
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

/**
 * Primary keyword: "nad therapy" (4,400 vol, KD=24)
 * Secondary: "nad injection therapy", "sublingual nad", "nad supplement"
 * NOTE: IV / infusion keywords intentionally not targeted — IV is not currently offered.
 */

export const metadata = generatePageMetadata({
  title: "NAD+ Therapy — Injection & Sublingual",
  description:
    "Clinician-supervised NAD+ therapy for cellular energy, mitochondrial function, and longevity. Injection and sublingual options via telehealth.",
  path: "/nad",
});

const faqs = [
  {
    question: "What is NAD+ therapy?",
    answer:
      "NAD+ therapy delivers nicotinamide adenine dinucleotide (NAD+) to support mitochondrial energy production, DNA repair, and cellular longevity. We offer clinician-supervised injection and sublingual protocols tailored to your labs and goals.",
  },
  {
    question: "What is the difference between NAD+ injection and sublingual NAD+?",
    answer:
      "Injection (subcutaneous or intramuscular) delivers NAD+ with strong absorption and is a convenient at-home option. Sublingual NAD+ is absorbed under the tongue and is the most convenient delivery method. Our clinicians recommend the right form based on your goals and labs.",
  },
  {
    question: "How long does NAD+ therapy take to work?",
    answer:
      "Most patients notice improved energy and mental clarity within 1–2 weeks of starting NAD+ therapy. Deeper cellular benefits — mitochondrial efficiency, DNA repair support — build over 4–8 weeks of consistent use.",
  },
  {
    question: "Is NAD+ therapy safe?",
    answer:
      "NAD+ therapy is generally well-tolerated. Some patients notice mild, temporary flushing or warmth. Our clinicians supervise all protocols and adjust dosing based on your response.",
  },
  {
    question: "Can I get NAD+ therapy at home?",
    answer:
      "Yes. Our telehealth options (injection and sublingual) let you start NAD+ therapy from home, supervised by our clinical team — no clinic visit required.",
  },
];

const benefits = [
  { icon: Zap, title: "Cellular Energy", desc: "Supports mitochondrial ATP production — the fuel your cells run on." },
  { icon: Brain, title: "Cognitive Clarity", desc: "NAD+ is essential for neuronal function and stress resilience." },
  { icon: Activity, title: "Recovery & Aging", desc: "Activates sirtuins and PARP enzymes involved in DNA repair and longevity." },
];

export default function NadHubPage() {
  const items = getProductsByHub("nad");

  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "NAD+ Therapy — Injection & Sublingual",
          description: "Clinician-supervised NAD+ therapy for cellular energy, mitochondrial function, and longevity.",
          url: "/nad",
          medicalConditions: ["Fatigue", "Cognitive Decline", "Metabolic Dysfunction", "Aging"],
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "NAD+ Therapy",
          description: "Clinician-supervised NAD+ injection and sublingual programs for cellular energy and longevity.",
          url: "/nad",
          serviceType: "NAD+ Therapy",
          areaServed: "United States",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "NAD+ & Supplements", url: "https://www.regenerativerevival.com/nad" },
        ])}
      />
      <JsonLd
        data={productListSchema(
          items.map((p) => ({ name: p.name, slug: p.slug, hub: p.hub, description: p.shortDescription }))
        )}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "NAD+ & Supplements", href: "/nad" }]} />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-b from-[#1A1F30] to-[#21253C] overflow-hidden">
        {/* Background video */}
        <video
          src="/AdobeStock_706285885.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F30]/80 to-[#21253C]/90" />
        <div className="absolute inset-0 lux-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#345691]/20 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5] mb-5">
              Longevity · Cellular Energy · All 50 States
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-5xl lg:text-[4rem] text-white leading-[1.05] tracking-[-0.02em]">
              NAD+ therapy — injection &amp;{" "}
              <span className="text-[#6762AF] font-semibold">
                sublingual
              </span>
            </h1>
            <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              NAD+ is a coenzyme central to mitochondrial energy production and DNA repair. Levels decline with age. Our clinicians build personalized NAD+ protocols — injection or sublingual — based on your labs and goals.
            </p>

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
                href="#programs"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                See Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

       {/* ── Programs ── */}
      <section id="programs" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Programs</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Available NAD+ programs
            </h2>
          </div>
          {items.length === 0 ? (
            <p className="text-[#4A4F66]">Programs coming soon. Take the quiz to get started.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/nad/${p.slug}`}
                    className="group block h-full bg-[#F4EFFA] rounded-[20px] overflow-hidden border border-[#F1ECF8] hover:border-[#6762AF]/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500"
                  >
                    {/* Mini bottle stage */}
                    <div className="relative h-40 bg-gradient-to-br from-[#E8E0F2] via-[#EAEFF7] to-[#F1ECF8] flex items-center justify-center overflow-hidden">
                      <span className="absolute top-[10%] left-[8%] w-16 h-16 rounded-full bg-white/40 blur-xl" />
                      <span className="absolute bottom-[10%] right-[8%] w-20 h-20 rounded-full bg-[#71A7F5]/30 blur-xl" />
                      <svg viewBox="0 0 120 200" className="relative h-32 w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`nb-${p.slug}`} x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0%" stopColor="#021E3C" />
                            <stop offset="100%" stopColor="#1A1F30" />
                          </linearGradient>
                        </defs>
                        <ellipse cx="60" cy="12" rx="14" ry="8" fill="#021E3C" />
                        <rect x="42" y="18" width="36" height="26" rx="3" fill="#021E3C" />
                        <rect x="47" y="44" width="26" height="8" fill={`url(#nb-${p.slug})`} />
                        <rect x="22" y="52" width="76" height="130" rx="8" fill={`url(#nb-${p.slug})`} />
                        <rect x="28" y="58" width="10" height="118" rx="4" fill="white" fillOpacity="0.12" />
                        <rect x="30" y="72" width="60" height="90" rx="2" fill="white" />
                        <text x="60" y="92" textAnchor="middle" fontFamily="sans-serif" fontSize="5" fill="#1A1F30" fontWeight="700">REGENERATIVE</text>
                        <text x="60" y="99" textAnchor="middle" fontFamily="sans-serif" fontSize="5" fill="#1A1F30" fontWeight="700">REVIVAL™</text>
                        <line x1="36" y1="104" x2="84" y2="104" stroke="#1A1F30" strokeWidth="0.5" opacity="0.2" />
                        <text x="60" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#1A1F30" fontWeight="800">NAD+</text>
                        <rect x="42" y="130" width="36" height="10" rx="5" fill="#345691" />
                        <text x="60" y="137.5" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="white" fontWeight="700">100 mg/mL</text>
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[16px] text-[#1A1F30] group-hover:text-[#583563] transition-colors">{p.name}</h3>
                      <p className="mt-2 text-[12.5px] text-[#4A4F66] line-clamp-2 leading-relaxed">{p.shortDescription}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[12px] text-[#7A7F95] uppercase">{p.form}</span>
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

      {/* ── Benefits ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Why NAD+</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              The coenzyme your cells can&apos;t function without
            </h2>
            <p className="mt-5 text-base text-[#4A4F66]">
              NAD+ levels drop 50% between age 40 and 60. Restoring them supports the biological processes that keep you sharp, energized, and resilient.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-[20px] bg-[#F4EFFA] p-7 border border-[#6762AF]/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#6762AF]/10 mb-5">
                  <b.icon className="h-5 w-5 text-[#6762AF]" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[18px] text-[#1A1F30] mb-2">{b.title}</h3>
                <p className="text-[13.5px] text-[#4A4F66] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery comparison ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Delivery Options</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            NAD+ injection vs sublingual — which is right for you?
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { method: "Injection", best: "Convenient at-home", note: "Subcutaneous or IM injection. Prescribed via telehealth, shipped to your door.", tag: "Telehealth" },
              { method: "Sublingual", best: "Most convenient", note: "Absorbed under the tongue. No needles. Ideal for daily maintenance protocols.", tag: "Telehealth" },
            ].map((d) => (
              <div key={d.method} className="bg-white rounded-[20px] p-6 border border-white hover:border-[#6762AF]/20 hover:shadow-[0_16px_40px_-8px_rgba(88,53,99,0.15)] transition-all">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6762AF] bg-[#F1ECF8] px-2.5 py-1 rounded-full">{d.tag}</span>
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[20px] text-[#1A1F30] mt-4 mb-1">{d.method}</h3>
                <p className="text-[12px] font-semibold text-[#345691] mb-3">{d.best}</p>
                <p className="text-[13px] text-[#4A4F66] leading-relaxed">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* ── FAQ ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            NAD+ therapy questions answered
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-[#6762AF]/15 pb-6">
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[18px] text-[#1A1F30] mb-3">{faq.question}</h3>
                <p className="text-[14px] text-[#4A4F66] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuizCTA />
      <ComplianceDisclaimer variant="compounded_rx" />
    </>
  );
}
