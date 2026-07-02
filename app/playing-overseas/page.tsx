import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Zap,
  RefreshCw,
  Bone,
  Target,
  Dna,
  Activity,
  ShieldCheck,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { generatePageMetadata } from "../lib/seo";
import {
  JsonLd,
  breadcrumbSchema,
  webPageSchema,
  faqSchema,
} from "../lib/schema";
import LpLeadForm from "../components/LpLeadForm";

export const metadata = generatePageMetadata({
  title: "Playing Overseas × Regenerative Revival — Elite Athlete Recovery",
  description:
    "Priority stem cell and exosome therapy for professional athletes playing overseas. Concierge delivery by licensed specialists across all 50 states. Free consultation.",
  path: "/playing-overseas",
});

const conditions = [
  {
    icon: Zap,
    title: "Sports Injuries",
    desc: "Muscle tears, ligament damage, tendinopathy — designed to support accelerated return to peak performance.",
  },
  {
    icon: RefreshCw,
    title: "Chronic Pain",
    desc: "Break the cycle of persistent pain with targeted regenerative protocols designed to address root causes.",
  },
  {
    icon: Bone,
    title: "Osteoarthritis",
    desc: "May help support deteriorating cartilage and assist in restoring joint mobility through cellular regeneration.",
  },
  {
    icon: Target,
    title: "Joint Pain",
    desc: "Shoulder, knee, hip — designed to promote function and assist with pain management without invasive surgery.",
  },
  {
    icon: Dna,
    title: "Degenerative Disease",
    desc: "Advanced cellular therapy designed to support function under licensed physician oversight.",
  },
  {
    icon: Activity,
    title: "Post-Surgery Recovery",
    desc: "May help assist with recovery timelines and support post-operative inflammation management.",
  },
];

const faqs = [
  {
    question: "What exactly are Wharton's Jelly stem cells and exosomes?",
    answer:
      "Wharton's Jelly stem cells are harvested from the umbilical cord tissue of healthy, consented donors. They are immune-privileged, meaning they are generally well-tolerated by the body without requiring matching. Exosomes are signaling vesicles that carry molecules designed to support tissue repair and assist with inflammation. Together, they may support the body's natural regenerative processes at the cellular level. Individual results vary.",
  },
  {
    question: "Is stem cell and exosome therapy safe?",
    answer:
      "Regenerative Revival therapies are administered by licensed practitioners — MDs, DOs, and NPs — in partnership with Arora Health Group under physician oversight. As with any medical procedure, individual results vary and candidacy is assessed case by case. Your free consultation includes a health history review to determine whether you may be a candidate. Not everyone qualifies for treatment.",
  },
  {
    question: "How is therapy delivered?",
    answer:
      "Regenerative Revival operates on a concierge model — a licensed specialist comes directly to you. Whether you're home, at a training facility, or traveling, we coordinate around your schedule. We have 100+ licensed practitioners across all 50 US states. International delivery is assessed on a case-by-case basis during your consultation.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Individual results vary significantly based on the condition being addressed and the patient's overall health. Some patients report noticing changes within days to weeks; others may experience gradual progression over months. Your specialist will provide realistic expectations based on your situation during your consultation. Outcomes are not guaranteed.",
  },
  {
    question: "How is this different from cortisone or PRP?",
    answer:
      "Cortisone is anti-inflammatory but does not address underlying tissue damage. PRP uses your own blood platelets to support healing and is a solid first step. Stem cell and exosome therapy is designed to go further — introducing signaling molecules intended to support tissue regeneration at the source, not just manage symptoms. Your specialist can help determine what may be right for your situation.",
  },
  {
    question: "Is the free consultation really no cost?",
    answer:
      "Yes — completely. As a Playing Overseas partner, you receive priority access to a complimentary initial consultation with no obligation. It's an opportunity to discuss your situation with a specialist, understand your candidacy, and ask questions before making any decisions. No pressure, no commitment required.",
  },
];

const stats = [
  { value: "2018", label: "Est. by Seth Berge" },
  { value: "100+", label: "Licensed Practitioners" },
  { value: "50", label: "US States Covered" },
  { value: "Free", label: "Initial Consultation" },
];

export default function PlayingOverseasPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Playing Overseas × Regenerative Revival — Elite Athlete Recovery",
          description:
            "Priority stem cell and exosome therapy for professional athletes playing overseas. Concierge delivery by licensed specialists.",
          url: "/playing-overseas",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Playing Overseas",
            url: "https://www.regenerativerevival.com/playing-overseas",
          },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-[#021E3C]">
        <div className="absolute inset-0">
          <Image
            src="/1.webp"
            alt="Professional athlete recovery"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/85 to-[#021E3C]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C] via-[#021E3C]/50 to-transparent" />
        </div>
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#6762AF]/25 blur-[150px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
                Playing Overseas × Regenerative Revival
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-poppins)] text-[2.75rem] font-normal leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl lg:text-[4.5rem]">
              Keep Your Edge Sharp.{" "}
              <span className="font-semibold text-[#8B86D4]">
                Your Career, Extended.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/70 lg:text-lg">
              Regenerative Revival delivers cutting-edge stem cell and exosome
              therapy to professional athletes worldwide — concierge delivery by
              licensed specialists. Your free consultation awaits.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#consult"
                className="group inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#021E3C] transition-all hover:bg-[#F1ECF8]"
              >
                Start Your Recovery Today
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#reggie"
                className="inline-flex h-13 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[14px] font-medium text-white/80 transition-all hover:bg-white/10"
              >
                Talk to Reggie Lynch →
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-[family-name:var(--font-poppins)] text-3xl font-semibold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[12px] leading-snug text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Priority access banner ── */}
      <section className="bg-[#6762AF] py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-[15px] font-medium text-white">
            Playing Overseas athletes receive complimentary consultations and
            priority access to the Regenerative Revival specialist network.
          </p>
          <Link
            href="#consult"
            className="shrink-0 rounded-full bg-white px-6 py-2.5 text-[13px] font-semibold text-[#6762AF] transition-all hover:bg-[#F1ECF8]"
          >
            Claim Access ↗
          </Link>
        </div>
      </section>

      {/* ── The Science ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
                The Science
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl lg:text-[3rem]">
                Cellular Regeneration. Peak Performance.
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-[#4A4F66]">
                Wharton&apos;s Jelly stem cells and exosomes signal your body to
                accelerate natural repair — reducing inflammation, rebuilding
                tissue, and supporting function at the cellular level.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Ethically sourced",
                  "Immune-privileged",
                  "Licensed specialists",
                  "Concierge delivery",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#6762AF]" />
                    <span className="text-[14px] text-[#1A1F30]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
              <Image
                src="/2.webp"
                alt="Regenerative therapy science"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/25 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions Treated ── */}
      <section className="bg-[#F7F5FC] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
              Conditions Treated
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Built for Athletes. Every Injury. Every Stage.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A4F66]">
              From acute sports injuries to chronic degenerative conditions,
              stem cell and exosome therapy may help support the full spectrum
              of athletic recovery.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[#EDE8F7] bg-white p-7 transition-all hover:shadow-[0_16px_48px_-16px_rgba(88,53,99,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1ECF8]">
                  <c.icon className="h-5 w-5 text-[#6762AF]" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold text-[#1A1F30]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4A4F66]">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="#consult"
              className="group inline-flex h-13 items-center gap-2 rounded-full bg-[#6762AF] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#565099]"
            >
              See If You Qualify
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reggie Lynch ── */}
      <section id="reggie" className="bg-[#021E3C] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
                Connect with a Pro · Former Pro #22
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3rem]">
                Talk to Reggie Lynch
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.75] text-white/70">
                <p>
                  Former professional basketball player Reggie Lynch knows the
                  overseas grind — the wear on your body, the pressure to
                  perform, and the challenge of staying healthy season after
                  season.
                </p>
                <p>
                  Whether you have questions about stem cell and exosome
                  therapy, want to understand how this fits into your off-season
                  recovery, or are ready to start — Reggie is here to connect you
                  with the right specialists and answer your questions directly.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-white/60">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B86D4]" /> Direct
                  Contact Available
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B86D4]" /> Fast
                  Response Times
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B86D4]" /> Exclusive
                  Partnership Access
                </span>
              </div>
              <Link
                href="#consult"
                className="group mt-9 inline-flex h-13 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#021E3C] transition-all hover:bg-[#F1ECF8]"
              >
                Get in Touch with Reggie
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/3.webp"
                alt="Reggie Lynch — former professional athlete"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-[#021E3C]/80 px-5 py-3 backdrop-blur">
                <div className="font-[family-name:var(--font-poppins)] text-3xl font-semibold text-white">
                  #22
                </div>
                <div className="text-[12px] text-white/60">
                  Former Pro · Playing Overseas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Priority therapy + consult form ── */}
      <section id="consult" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
                Priority Access
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
                Playing Overseas Athletes Get Priority Therapy
              </h2>
              <p className="mt-6 text-[15px] leading-[1.75] text-[#4A4F66]">
                Whether you&apos;re recovering from injury, managing chronic
                pain, or optimizing longevity — access therapies once reserved
                for elite professionals. This is your opportunity.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Priority booking for Playing Overseas athletes",
                  "Complimentary initial consultation — no obligation",
                  "Concierge delivery wherever you are in the world",
                  "Licensed specialists across all 50 US states",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#6762AF]" />
                    <span className="text-[15px] text-[#1A1F30]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-[#4A4F66]">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#6762AF]" /> All 50 US States
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#6762AF]" /> Licensed
                  Specialists
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#6762AF]" /> Fast Response
                </span>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#F7F5FC] p-8 lg:p-10">
              <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-semibold text-[#1A1F30]">
                Claim Your Free Consultation
              </h3>
              <p className="mt-2 text-[14px] text-[#4A4F66]">
                No obligation. Our team will reach out within 24 hours.
              </p>
              <div className="mt-6">
                <LpLeadForm
                  source="playing-overseas"
                  subject="Playing Overseas — Free Consultation Request"
                  buttonText="Book Your Free Consultation"
                  showMessage
                  messagePlaceholder="Tell Reggie's team about your injury or recovery goals (optional)"
                  successTitle="Request received!"
                  successMessage="Reggie's team will reach out within 24 hours to connect you with the right specialist."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F7F5FC] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#345691]">
              Common Questions
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2rem] font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1F30] sm:text-4xl">
              Everything You Need to Know
            </h2>
            <p className="mt-4 text-[15px] text-[#4A4F66]">
              Real answers about stem cell and exosome therapy, from safety to
              results.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#EDE8F7] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-[16px] font-semibold text-[#1A1F30]">
                  {faq.question}
                  <span className="ml-4 text-[#6762AF] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.7] text-[#4A4F66]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-[#021E3C] py-20 lg:py-28">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#6762AF]/20 blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Exclusive Partnership · Priority Access
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] text-[2.25rem] font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl">
            Your Next Season Starts Right Now
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/70">
            Don&apos;t let injury, chronic pain, or time write the end of your
            story. Your free consultation with a Regenerative Revival specialist
            is waiting — stem cell and exosome therapy built for professional
            athletes, delivered on your schedule, wherever you are.
          </p>
          <Link
            href="#consult"
            className="group mt-9 inline-flex h-13 items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[15px] font-semibold text-[#021E3C] transition-all hover:bg-[#F1ECF8]"
          >
            Book Your Free Consultation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[12px] text-white/50">
            <span>All 50 US States</span>
            <span>Concierge Delivery</span>
            <span>Licensed Specialists</span>
            <span>Zero Obligation</span>
          </div>
          <p className="mx-auto mt-12 max-w-2xl text-[11px] leading-relaxed text-white/40">
            Medical Disclaimer: The information on this page is for educational
            purposes only and does not constitute medical advice. Stem cell and
            exosome therapy results vary by individual. Consult a licensed
            healthcare provider before beginning any therapy program.
            Regenerative Revival therapies are administered by licensed
            practitioners (MDs, DOs, NPs) in partnership with Arora Health Group.
            Not everyone is a candidate for treatment.
          </p>
        </div>
      </section>
    </>
  );
}
