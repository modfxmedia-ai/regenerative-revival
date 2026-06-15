import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, ShieldCheck, Network, BookOpen, Wallet, Users, TrendingUp } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import QuizCTA from "../components/QuizCTA";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema, faqSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "For Providers — Build a Concierge Practice Without the Infrastructure",
  description:
    "NPs, PAs, and clinics: partner with Regenerative Revival to deliver in-home regenerative medicine and telehealth under Arora Health Group's clinical umbrella. Revenue share, protocols, and full support.",
  path: "/for-providers",
});

const faqs = [
  {
    question: "What kind of providers do you partner with?",
    answer:
      "We partner with licensed nurse practitioners, physician assistants, and independent clinics who want to offer regenerative medicine and telehealth services without building the infrastructure from scratch. You bring the patient relationship — we bring the platform, protocols, and compounding pharmacy network.",
  },
  {
    question: "Do I need my own malpractice insurance?",
    answer:
      "Yes. All partnered clinicians maintain their own malpractice coverage. Arora Health Group provides clinical oversight and protocol supervision, but each NP or PA operates under their own license and coverage.",
  },
  {
    question: "How does the revenue share work?",
    answer:
      "Revenue share terms are discussed during the partnership application process. We offer a joint venture model with competitive back-end revenue sharing on regenerative therapy and telehealth programs. There is no upfront franchise fee.",
  },
  {
    question: "What training and protocols do you provide?",
    answer:
      "All partnered clinicians receive access to our vetted protocol library covering regenerative medicine, peptide therapy, hormone optimization, GLP-1, and NAD+. Continuing education and clinical support are included.",
  },
  {
    question: "What is the Wizlo telehealth platform?",
    answer:
      "Wizlo is the white-labeled telehealth platform we use for intake, e-Rx, compounding pharmacy handoff, and patient portal. It's already built and integrated — you don't need to set up your own telehealth infrastructure.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Clinical umbrella — Arora Health Group",
    desc: "Operate under Dr. Sean Arora and Arora Health Group's multi-state licensure and clinical oversight. We handle the medical director infrastructure so you can focus on patient care.",
    stat: "50 states",
    statLabel: "Telehealth coverage",
  },
  {
    icon: Network,
    title: "Wizlo telehealth stack — already built",
    desc: "Plug into a fully white-labeled telehealth platform with intake forms, e-Rx, compounding pharmacy partners, and patient portal. No tech build required.",
    stat: "58 SKUs",
    statLabel: "Active product catalog",
  },
  {
    icon: BookOpen,
    title: "Protocols & continuing education",
    desc: "Access vetted protocols across regenerative medicine, peptides, hormone optimization, GLP-1, and NAD+. Clinical support and continuing education are included.",
    stat: "5 pillars",
    statLabel: "Protocol categories",
  },
  {
    icon: Wallet,
    title: "Concierge economics — not commodity telehealth",
    desc: "Premium concierge pricing model built around in-person dinner seminars, referrals, and high-retention programs. Not a race to the bottom on GLP-1 subscriptions.",
    stat: "JV model",
    statLabel: "Revenue share structure",
  },
];

const steps = [
  { num: "01", title: "Apply", desc: "Submit a brief application. Tell us about your practice, license, and patient population." },
  { num: "02", title: "Intro call", desc: "15-minute call with our partnerships team. We walk through the model, economics, and fit." },
  { num: "03", title: "Onboarding", desc: "Protocol training, platform access, and clinical onboarding under Arora Health Group." },
  { num: "04", title: "Launch", desc: "Start delivering concierge regenerative and telehealth services to your patients." },
];

export default function ForProvidersPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "For Providers — Build a Concierge Practice Without the Infrastructure",
          description:
            "Partner with Regenerative Revival to deliver concierge regenerative medicine and telehealth under Arora Health Group.",
          url: "/for-providers",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          { name: "For Providers", url: "https://www.regenerativerevival.com/for-providers" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ label: "For Providers", href: "/for-providers" }]} />

      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src="/about/imgi_72_HERO-PRESENTER.jpg"
            alt="Regenerative Revival provider partnership"
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
              <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">For NPs, PAs &amp; Clinics</span>
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-5xl lg:text-[4.5rem] text-white leading-[1.02] tracking-[-0.02em]">
              Build a concierge practice —{" "}
              <span className="text-[#6762AF] font-semibold">
                without building the infrastructure
              </span>
            </h1>
            <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed max-w-2xl">
              Regenerative Revival partners with licensed clinicians to deliver in-home regenerative therapies and physician-led telehealth under Arora Health Group. We bring the platform, protocols, and compounding pharmacy network. You bring the patient relationship.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact?path=provider"
                className="group inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-7 text-[14px] font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all"
              >
                Apply to Partner
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/concierge-care-model"
                className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 transition-all"
              >
                How The Model Works →
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      </section>

      {/* ── The opportunity ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Opportunity</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                The demand for regenerative medicine is real. The infrastructure to deliver it isn&apos;t.
              </h2>
              <div className="mt-6 space-y-5 text-[15px] text-[#4A4F66] leading-[1.75]">
                <p>
                  Patients are actively searching for peptide therapy, stem cell treatment, and hormone optimization. The search volume is there. The clinical demand is there. What&apos;s missing is a turnkey model that lets a licensed NP or PA deliver these services without spending 18 months building a platform, finding a medical director, and negotiating with compounding pharmacies.
                </p>
                <p>
                  That&apos;s what we built. Regenerative Revival is the infrastructure layer — clinical oversight, telehealth platform, protocol library, compounding pharmacy network, and patient acquisition support — so you can focus on what you do best: patient care.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "14,800", label: "Monthly searches for peptide therapy near me" },
                  { value: "18,100", label: "Monthly searches for NAD IV therapy" },
                  { value: "40,500", label: "Monthly searches for compounded semaglutide" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-[#F4EFFA] p-4 border border-[#6762AF]/10">
                    <div className="font-[family-name:var(--font-poppins)] text-2xl text-[#6762AF]">{s.value}</div>
                    <div className="text-[11px] text-[#4A4F66] mt-1 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
                <Image
                  src="/about/imgi_74_doctor-and-patient.jpg"
                  alt="Provider partnership with Regenerative Revival"
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

      {/* ── Four benefits ── */}
      <section className="bg-[#1A1F30] py-20 lg:py-28">
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5]">What You Get</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-white leading-[1.05] tracking-[-0.02em]">
              Everything you need to launch — nothing you don&apos;t
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="group relative rounded-[20px] bg-white/[0.04] border border-white/10 p-7 hover:bg-white/[0.07] hover:border-[#6762AF]/30 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#6762AF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6762AF]/25 to-[#583563]/15 border border-[#6762AF]/20">
                    <b.icon className="h-5 w-5 text-[#71A7F5]" />
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-poppins)] text-2xl text-[#71A7F5]">{b.stat}</div>
                    <div className="text-[10px] text-white/45">{b.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[18px] text-white mb-3">{b.title}</h3>
                <p className="text-[13.5px] text-white/55 leading-[1.65]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you need to bring ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Requirements</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                What you bring to the partnership
              </h2>
              <ul className="mt-7 flex flex-col gap-4">
                {[
                  "Active NP, PA, or MD license in good standing",
                  "Own malpractice insurance",
                  "Existing patient base or referral network",
                  "Commitment to the concierge care model",
                  "Willingness to complete protocol training",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#1A1F30]/85">
                    <CheckCircle className="h-4 w-4 text-[#6762AF] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Process</span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                From application to launch
              </h2>
              <div className="mt-7 flex flex-col gap-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-5">
                    <div className="font-[family-name:var(--font-poppins)] text-2xl text-[#6762AF]/40 shrink-0 w-10">{step.num}</div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#1A1F30] mb-1">{step.title}</h3>
                      <p className="text-[13px] text-[#4A4F66] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-r from-[#6762AF] via-[#583563] to-[#345691] animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="h-5 w-5 text-white/70" />
            <TrendingUp className="h-5 w-5 text-white/70" />
          </div>
          <h2 className="font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-white leading-[1.05] tracking-[-0.02em]">
            Ready to build a concierge practice?
          </h2>
          <p className="mt-5 text-base text-white/80 max-w-xl mx-auto">
            Tell us about your practice and we&apos;ll set up a 15-minute intro call. No commitment required.
          </p>
          <Link
            href="/contact?path=provider"
            className="group mt-8 inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-8 text-[14px] font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] transition-all"
          >
            Apply to Partner
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2rem] sm:text-4xl text-[#1A1F30] leading-[1.05] tracking-[-0.02em] mb-10">
            Provider partnership questions
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
    </>
  );
}
