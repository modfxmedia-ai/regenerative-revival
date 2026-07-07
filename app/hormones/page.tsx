import Link from "next/link";
import { ArrowUpRight, CheckCircle, Sparkles, ShieldCheck, Clock, Users } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ComplianceDisclaimer from "../components/ComplianceDisclaimer";
import QuizCTA from "../components/QuizCTA";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  medicalWebPageSchema,
  serviceSchema,
  faqSchema,
} from "../lib/schema";
import { hormonePrograms } from "../lib/nav-menus";

export const metadata = generatePageMetadata({
  title: "Hormone Optimization — TRT & HRT Online",
  description:
    "Physician-prescribed testosterone replacement (TRT), women's hormone therapy (HRT), and metabolic hormone support through telehealth. Licensed clinician oversight, shipped to your door.",
  path: "/hormones",
});

const faqs = [
  {
    question: "What is hormone optimization?",
    answer:
      "Hormone optimization uses bioidentical hormones — testosterone for men (TRT), estrogen/progesterone for women (HRT), and related protocols — to restore levels that decline with age. All programs are prescribed and monitored by a licensed clinician based on your labs.",
  },
  {
    question: "How do I get TRT or HRT prescribed online?",
    answer:
      "Take our 2-minute quiz, complete a telehealth intake, and have your labs reviewed by a licensed clinician. If you're a candidate, your prescription is dispensed by a licensed compounding pharmacy and shipped to your door.",
  },
  {
    question: "Is hormone therapy the same as peptide therapy?",
    answer:
      "No. Hormone therapy replaces or optimizes endogenous hormones like testosterone and estrogen. Peptide therapy uses signaling peptides for recovery, metabolism, and performance. At Regenerative Revival, the same medical team coordinates both — so your protocols work together.",
  },
  {
    question: "Is hormone therapy safe?",
    answer:
      "When prescribed and monitored by a licensed clinician with regular lab review, hormone therapy is generally well-tolerated. Our team adjusts dosing based on your response and labs throughout your program.",
  },
];

const benefits = [
  "Licensed clinician reviews your labs before prescribing",
  "Bioidentical hormones from NABP-accredited pharmacies",
  "Ships directly to your door — no clinic visits",
  "Same medical team coordinates hormones, peptides, and NAD+",
  "Telehealth available in all 50 states",
  "Physician oversight under Arora Health Group",
];

export default function HormonesPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Hormone Optimization — TRT & HRT Online",
          description:
            "Physician-prescribed testosterone replacement and women's hormone therapy through telehealth.",
          url: "/hormones",
          medicalConditions: [
            "Testosterone Deficiency",
            "Hormone Deficiency",
            "Menopause",
            "Perimenopause",
            "Fatigue",
            "Metabolic Syndrome",
          ],
        })}
      />
      <JsonLd
        data={serviceSchema({
          name: "Hormone Optimization",
          description:
            "Physician-prescribed TRT, HRT, and hormone optimization delivered through telehealth.",
          url: "/hormones",
          serviceType: "Telehealth Hormone Therapy",
          areaServed: "United States",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "Hormones", url: "https://www.regenerativerevival.com/hormones" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "Hormones", href: "/hormones" }]} />

      {/* Hero — static gradient (no heavy background video) */}
      <section className="relative bg-gradient-to-b from-[#1A1F30] to-[#21253C] overflow-hidden">
        <div className="absolute inset-0 lux-grid opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#6762AF]/15 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5] mb-5">
              Telehealth · Physician-Prescribed · All 50 States
            </p>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-5xl lg:text-[4rem] text-white leading-[1.05] tracking-[-0.02em]">
              Hormone optimization —{" "}
              <span className="text-[#6762AF] font-semibold">TRT &amp; HRT online</span>
            </h1>
            <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              Testosterone replacement for men. Bioidentical hormone therapy for women. Clinician-led, lab-reviewed, and shipped from a licensed compounding pharmacy — coordinated with your peptides and NAD+ by the same medical team.
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
                href="/peptides"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                Browse Peptide Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hormone programs */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Programs</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Hormone programs our clinicians prescribe
            </h2>
            <p className="mt-4 text-base text-[#4A4F66]">
              Every protocol starts with labs and a telehealth consult. Your clinician builds a plan around your goals — not a one-size-fits-all template.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {hormonePrograms.map((program) => (
              <li key={program.title}>
                <Link
                  href={program.href}
                  className="group block h-full rounded-[20px] overflow-hidden border border-[#F1ECF8] bg-[#F4EFFA] p-7 hover:border-[#6762AF]/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${program.frame} text-white mb-5`}>
                    <program.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[18px] text-[#1A1F30] group-hover:text-[#583563] transition-colors leading-snug">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] text-[#4A4F66] leading-relaxed">{program.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-[#6762AF] group-hover:gap-2 transition-all">
                    Get Started <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why RR */}
      <section className="bg-[#F1ECF8] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Why Regenerative Revival</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                One team coordinates your hormones, peptides, and NAD+
              </h2>
              <p className="mt-6 text-base text-[#4A4F66] leading-relaxed">
                Most telehealth hormone clinics operate in silos. Your TRT provider doesn&apos;t know about your peptide stack. At Regenerative Revival, one physician-led team manages all of it — under Arora Health Group clinical oversight.
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
                { value: "50", label: "States served via telehealth" },
                { value: "48 hrs", label: "Average time to first clinician review" },
                { value: "6k+", label: "Patients treated" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white p-6 border border-[#6762AF]/10">
                  <div className="font-[family-name:var(--font-poppins)] text-3xl text-[#6762AF]">{s.value}</div>
                  <div className="text-[12px] text-[#4A4F66] mt-2 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            Common questions about hormone therapy online
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

      <QuizCTA />
      <ComplianceDisclaimer variant="compounded_rx" />
    </>
  );
}
