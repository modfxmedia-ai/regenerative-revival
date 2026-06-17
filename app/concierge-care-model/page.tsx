import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, Home, Stethoscope, Users, FileText, Sparkles } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import QuizCTA from "../components/QuizCTA";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  medicalWebPageSchema,
  faqSchema,
  howToSchema,
} from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Concierge Care Model — One Medical Team, One Plan",
  description:
    "How Regenerative Revival delivers in-home stem cell therapy and telehealth under one physician-led roof. One patient record, one plan, one team that knows you.",
  path: "/concierge-care-model",
});

const faqs = [
  {
    question: "What is concierge regenerative medicine?",
    answer:
      "Concierge regenerative medicine means your treatment is delivered in your home by a licensed clinician — no clinic visit, no waiting room. At Regenerative Revival, it also means one physician-led team coordinates all your protocols: regenerative therapy, hormones, peptides, and NAD+.",
  },
  {
    question: "Who oversees my care at Regenerative Revival?",
    answer:
      "Every patient is overseen by Dr. Sean Arora, Medical Director and CEO of Arora Health Group. Nurse Practitioners deliver day-to-day care under his clinical supervision. You have a named physician on your case — not an anonymous algorithm.",
  },
  {
    question: "What's the difference between your model and a regular telehealth company?",
    answer:
      "Most telehealth companies sell one product in a silo. Your GLP-1 provider doesn't know about your testosterone. Your peptide stack isn't reviewed against your NAD+ protocol. We coordinate everything under one chart — so your weight-loss program can be built around your joint regeneration plan, not competing with it.",
  },
  {
    question: "Do I need to visit a clinic?",
    answer:
      "No. Regenerative therapies are delivered in your home by a licensed nurse practitioner. Telehealth services (hormones, peptides, NAD+) are handled entirely online — consultation, prescription, and delivery.",
  },
  {
    question: "What states do you serve?",
    answer:
      "Telehealth services are available in all 50 states. In-home concierge regenerative therapy is available in most major metros — ask during your consultation about availability in your area.",
  },
];

const pillars = [
  {
    icon: Stethoscope,
    title: "Physician-led, NP-delivered",
    desc: "Dr. Sean Arora and Arora Health Group provide clinical oversight on every patient. Licensed nurse practitioners deliver care in your home. You have a named physician — not a call center.",
    image: "/about/imgi_5_Dr-Sean-Arora.jpg",
  },
  {
    icon: Home,
    title: "In-home concierge for regenerative",
    desc: "Wharton's Jelly stem cell therapy, exosome protocols, and joint injections — delivered in your home, office, or hotel room. No clinic visit. No waiting room. No surgical prep.",
    image: "/AdobeStock_1848700749.png",
  },
  {
    icon: FileText,
    title: "One plan, one patient record",
    desc: "Your regenerative therapy, hormone optimization, peptide stack, and NAD+ protocol all live in one chart. Programs are coordinated — not siloed across four different providers.",
    image: "/AdobeStock_1877540011.jpeg",
  },
  {
    icon: Users,
    title: "Nationwide telehealth",
    desc: "Hormones, peptides, GLP-1, and NAD+ are prescribed via telehealth in all 50 states. Compounded by NABP-accredited pharmacies and shipped to your door.",
    image: "/AdobeStock_1862763747.jpeg",
  },
];

export default function ConciergeCareModelPage() {
  return (
    <>
      <JsonLd
        data={medicalWebPageSchema({
          title: "Concierge Care Model — One Medical Team, One Plan",
          description:
            "How Regenerative Revival delivers in-home stem cell therapy and telehealth under one physician-led roof.",
          url: "/concierge-care-model",
        })}
      />
      <JsonLd
        data={howToSchema({
          name: "How the Regenerative Revival Concierge Model Works",
          description: "The 4-step process for receiving coordinated regenerative and longevity care.",
          steps: [
            { name: "Take the 2-minute quiz", text: "Answer two questions about your goal and preferred care delivery. We route you to the right program." },
            { name: "Telehealth consultation", text: "A licensed clinician reviews your health history and labs. You get a personalized plan — not a generic protocol." },
            { name: "Treatment delivered", text: "Regenerative therapy comes to your home. Telehealth prescriptions ship to your door." },
            { name: "Ongoing coordination", text: "Your full history lives in one chart. As your protocols evolve, your team adjusts everything together." },
          ],
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "Concierge Care Model", url: "https://www.regenerativerevival.com/concierge-care-model" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "Concierge Care Model", href: "/concierge-care-model" }]} />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] pt-20 flex items-end overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src="/about/imgi_71_HERO-STEM-CELL.jpg"
            alt="Concierge regenerative medicine in-home delivery"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-[#021E3C]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
        </div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28 pt-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">How We Work</span>
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-5xl lg:text-[4.5rem] text-white leading-[1.02] tracking-[-0.02em]">
              One medical team.{" "}
              <span className="text-[#6762AF] font-semibold">
                One plan.
              </span>{" "}
              The best decade of your life.
            </h1>
            <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              Regenerative Revival is a concierge medical brand operating under Arora Health Group. We combine in-home regenerative therapies with physician-led telehealth — under one chart, one plan, and one team that knows you.
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
                href="/about"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                Meet The Team →
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      </section>

      {/* ── Why this model matters ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Problem We Solve</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                Most telehealth brands sell you a product. We build you a plan.
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-[#4A4F66] leading-[1.75]">
                <p>
                  The modern healthcare system is fragmented by design. Your primary care doctor doesn&apos;t know what your endocrinologist prescribed. Your telehealth GLP-1 provider has never seen your joint MRI. Your peptide stack was recommended by a Reddit thread, not a clinician who knows your labs.
                </p>
                <p>
                  We built Regenerative Revival to be the opposite. Every program — regenerative therapy, GLP-1, peptides, hormone optimization, NAD+ — runs through the same clinical team, the same chart, and the same long-term plan.
                </p>
                <p>
                  That&apos;s how a weight-loss protocol can be coordinated with a joint regeneration plan. How an NAD+ program can plug into a peptide stack. How your hormone optimization can be adjusted when your regenerative therapy changes your inflammatory baseline.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
                <Image
                  src="/about/imgi_73_doctor-and-patient2.jpg"
                  alt="Physician-led concierge care"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/25 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2rem] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four pillars ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Model</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Four pillars of the Regenerative Revival model
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="group bg-white rounded-[20px] overflow-hidden border border-white hover:border-[#6762AF]/20 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F4EFFA] via-[#F4EFFA]/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                      <p.icon className="h-4 w-4 text-[#6762AF]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[19px] text-[#1A1F30] mb-3">{p.title}</h3>
                  <p className="text-[13.5px] text-[#4A4F66] leading-[1.65]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works steps ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Process</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              How it works — from quiz to treatment
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Take the quiz", desc: "Two questions. We route you to the right program — regen, telehealth, or both." },
              { num: "02", title: "Clinician review", desc: "A licensed clinician reviews your history and labs. You get a real plan, not a template." },
              { num: "03", title: "Treatment delivered", desc: "Regen therapy comes to your home. Telehealth prescriptions ship to your door." },
              { num: "04", title: "Ongoing coordination", desc: "One chart. As your protocols evolve, your team adjusts everything together." },
            ].map((step) => (
              <div key={step.num} className="border-t-2 border-[#F1ECF8] hover:border-[#6762AF] pt-6 transition-colors duration-500 group">
                <span className="font-[family-name:var(--font-poppins)] text-[3.5rem] leading-none text-[#6762AF]/15 group-hover:text-[#6762AF]/25 block mb-3 select-none transition-colors">
                  {step.num}
                </span>
                <h3 className="text-[16px] font-semibold text-[#1A1F30] mb-2">{step.title}</h3>
                <p className="text-[13px] text-[#4A4F66] leading-[1.65]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/consult-router"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#021E3C] px-7 text-sm font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] transition-all duration-300"
            >
              Take The 2-Minute Quiz
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F1ECF8] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            Questions about the concierge model
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
    </>
  );
}
