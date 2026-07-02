"use client";

import { useState } from "react";
import Image from "next/image";

const BOOKING_URL = "https://s.blinq.me/gBWvOQyHyrfy?bs=icl";

const HERO_BG =
  "https://regenerativerevival.com/wp-content/uploads/2026/05/0065-L.jpeg";
const SCI_IMG =
  "https://regenerativerevival.com/wp-content/uploads/2026/05/df3888f9-olympiacos-fenerbahce-950x500-1.jpg";
const REGGIE_IMG =
  "https://regenerativerevival.com/wp-content/uploads/2026/05/Screen-Shot-2026-01-27-at-1.25.19-PM.png";
const PRI_IMG =
  "https://regenerativerevival.com/wp-content/uploads/2026/05/IMG_0492.jpg";

const stats = [
  { v: "2018", l: "Est. by Seth Berge" },
  { v: "100+", l: "Licensed Practitioners" },
  { v: "All 50", l: "US States Covered" },
  { v: "Free", l: "Initial Consultation" },
];

const featPills = [
  "Ethically sourced",
  "Immune-privileged",
  "Licensed specialists",
  "Concierge delivery",
];

const conditions = [
  {
    icon: "⚡",
    title: "Sports Injuries",
    desc: "Muscle tears, ligament damage, tendinopathy — designed to support accelerated return to peak performance.",
  },
  {
    icon: "🔁",
    title: "Chronic Pain",
    desc: "Break the cycle of persistent pain with targeted regenerative protocols designed to address root causes.",
  },
  {
    icon: "🦴",
    title: "Osteoarthritis",
    desc: "May help support deteriorating cartilage and assist in restoring joint mobility through cellular regeneration.",
  },
  {
    icon: "🎯",
    title: "Joint Pain",
    desc: "Shoulder, knee, hip — designed to promote function and assist with pain management without invasive surgery.",
  },
  {
    icon: "🧬",
    title: "Degenerative Disease",
    desc: "Advanced cellular therapy designed to support function under licensed physician oversight.",
  },
  {
    icon: "🏃",
    title: "Post-Surgery Recovery",
    desc: "May help assist with recovery timelines and support post-operative inflammation management.",
  },
];

const checklist = [
  "Priority booking for Playing Overseas athletes",
  "Complimentary initial consultation — no obligation",
  "Concierge delivery wherever you are in the world",
  "Licensed specialists across all 50 US states",
];

const faqs = [
  {
    q: "What exactly are Wharton's Jelly stem cells and exosomes?",
    a: "Wharton's Jelly stem cells are harvested from the umbilical cord tissue of healthy, consented donors. They are immune-privileged, meaning they are generally well-tolerated by the body without requiring matching. Exosomes are signaling vesicles that carry molecules designed to support tissue repair and assist with inflammation. Together, they may support the body's natural regenerative processes at the cellular level. Individual results vary.",
  },
  {
    q: "Is stem cell and exosome therapy safe?",
    a: "Regenerative Revival therapies are administered by licensed practitioners — MDs, DOs, and NPs — in partnership with Arora Health Group under physician oversight. As with any medical procedure, individual results vary and candidacy is assessed case by case. Your free consultation includes a health history review to determine whether you may be a candidate. Not everyone qualifies for treatment.",
  },
  {
    q: "How is therapy delivered?",
    a: "Regenerative Revival operates on a concierge model — a licensed specialist comes directly to you. Whether you're home, at a training facility, or traveling, we coordinate around your schedule. We have 100+ licensed practitioners across all 50 US states. International delivery is assessed on a case-by-case basis during your consultation.",
  },
  {
    q: "How long until I see results?",
    a: "Individual results vary significantly based on the condition being addressed and the patient's overall health. Some patients report noticing changes within days to weeks; others may experience gradual progression over months. Your specialist will provide realistic expectations based on your situation during your consultation. Outcomes are not guaranteed.",
  },
  {
    q: "How is this different from cortisone or PRP?",
    a: "Cortisone is anti-inflammatory but does not address underlying tissue damage. PRP uses your own blood platelets to support healing and is a solid first step. Stem cell and exosome therapy is designed to go further — introducing signaling molecules intended to support tissue regeneration at the source, not just manage symptoms. Your specialist can help determine what may be right for your situation.",
  },
  {
    q: "Is the free consultation really no cost?",
    a: "Yes — completely. As a Playing Overseas partner, you receive priority access to a complimentary initial consultation with no obligation. It's an opportunity to discuss your situation with a specialist, understand your candidacy, and ask questions before making any decisions. No pressure, no commitment required.",
  },
];

const ctaChips = [
  "All 50 US States",
  "Concierge Delivery",
  "Licensed Specialists",
  "Zero Obligation",
];

const navLinks = [
  { href: "#sci", label: "The Science" },
  { href: "#treat", label: "Treatments" },
  { href: "#reggie", label: "Contact Reggie" },
  { href: "#faq", label: "FAQ" },
];

export default function PlayingOverseasClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen scroll-smooth bg-[#0D0D1A] font-[family-name:var(--font-poppins)] text-[#E8E4FF]">
      {/* ===== Fixed header ===== */}
      <header className="fixed inset-x-0 top-0 z-[999] flex h-16 items-center justify-between border-b border-[#8B5CF6]/20 bg-[#0D0D1A]/95 px-6 backdrop-blur-md lg:px-12">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/new-logos/White RR Logo_Transparent.png"
            alt="Regenerative Revival"
            width={130}
            height={30}
            className="h-[26px] w-auto"
          />
          <span className="font-serif text-[13px] font-light text-[#8B5CF6]">
            ×
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9B96C4]">
            Playing Overseas
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#9B96C4] transition-colors hover:text-[#E8E4FF]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#consult"
            className="rounded-sm bg-[#8B5CF6] px-[18px] py-[9px] text-[9.5px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#A78BFA]"
          >
            Free Consult
          </a>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-28 lg:px-20 lg:pb-20 lg:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-[center_top]"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080614]/95 via-[#0D0A23]/75 to-[#0D0D1A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080614]/70 to-transparent" />
        <div className="relative z-10 max-w-[760px]">
          <p className="mb-5 text-[9.5px] font-semibold uppercase tracking-[0.28em] text-[#A78BFA]">
            Playing Overseas × Regenerative Revival
          </p>
          <h1 className="mb-0.5 font-serif text-[clamp(18px,2.2vw,24px)] font-normal leading-snug text-[#9B96C4]">
            Keep Your Edge Sharp.
          </h1>
          <div className="font-serif font-bold leading-[1.04]">
            <span className="block text-[clamp(44px,6.5vw,82px)] text-[#A78BFA]">
              Elite Recovery.
            </span>
            <span className="block text-[clamp(44px,6.5vw,82px)] text-white">
              Unlimited Performance.
            </span>
            <span className="block text-[clamp(34px,5vw,64px)] italic text-[#9B96C4]">
              Your Career, Extended.
            </span>
          </div>
          <p className="my-6 max-w-[500px] text-[15px] leading-[1.85] text-[#9B96C4]">
            Regenerative Revival delivers cutting-edge stem cell and exosome
            therapy to professional athletes worldwide — concierge delivery by
            licensed specialists.{" "}
            <strong className="font-medium text-[#E8E4FF]">
              Your free consultation awaits.
            </strong>
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#consult"
              className="inline-flex items-center gap-2.5 rounded-sm bg-[#8B5CF6] px-7 py-[15px] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-px hover:bg-[#A78BFA]"
            >
              Start Your Recovery Today ↗
            </a>
            <a
              href="#reggie"
              className="inline-flex items-center gap-2.5 rounded-sm border border-[#8B5CF6]/20 px-7 py-[15px] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#E8E4FF] transition-colors hover:border-[#8B5CF6] hover:text-[#A78BFA]"
            >
              Talk to Reggie Lynch
            </a>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <div className="grid grid-cols-2 border-y border-[#8B5CF6]/20 bg-[#1E1B3A] md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className={`px-5 py-6 text-center ${
              i < stats.length - 1 ? "md:border-r md:border-[#8B5CF6]/20" : ""
            } ${i % 2 === 0 ? "border-r border-[#8B5CF6]/20 md:border-r" : ""}`}
          >
            <span className="block font-serif text-[42px] font-bold leading-none text-[#A78BFA]">
              {s.v}
            </span>
            <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9B96C4]">
              {s.l}
            </span>
          </div>
        ))}
      </div>

      {/* ===== Banner ===== */}
      <div className="flex flex-col items-start justify-between gap-6 border-b border-[#8B5CF6]/20 bg-gradient-to-r from-[#1E1B3A] to-[#2A2550] px-6 py-7 lg:flex-row lg:items-center lg:px-20">
        <p className="max-w-[560px] text-[15px] leading-relaxed text-[#E8E4FF]">
          <span className="font-medium text-[#A78BFA]">
            Playing Overseas athletes
          </span>{" "}
          receive complimentary consultations and priority access to the
          Regenerative Revival specialist network.
        </p>
        <a
          href="#consult"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-sm bg-[#8B5CF6] px-7 py-[15px] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-px hover:bg-[#A78BFA]"
        >
          Claim Access ↗
        </a>
      </div>

      {/* ===== The Science ===== */}
      <section id="sci" className="scroll-mt-20 px-6 py-24 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className="h-[480px] rounded border border-[#8B5CF6]/20 bg-cover bg-center"
            style={{ backgroundImage: `url('${SCI_IMG}')` }}
            role="img"
            aria-label="Cellular regeneration visualization"
          />
          <div>
            <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
              The Science
              <span className="h-px w-10 bg-[#8B5CF6]/20" />
            </div>
            <h2 className="mb-5 font-serif text-[clamp(30px,4vw,52px)] font-bold leading-[1.08] text-white">
              Cellular Regeneration.
              <br />
              <em className="italic text-[#A78BFA]">Peak Performance.</em>
            </h2>
            <p className="mb-6 max-w-[560px] text-[15px] leading-[1.85] text-[#9B96C4]">
              Wharton's Jelly stem cells and exosomes signal your body to
              accelerate natural repair — reducing inflammation, rebuilding
              tissue, and supporting function at the cellular level.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {featPills.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2.5 rounded-full border border-[#8B5CF6]/20 bg-[#1E1B3A] px-4 py-2.5 text-[12px] font-medium text-[#E8E4FF]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6]" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Conditions Treated ===== */}
      <section id="treat" className="scroll-mt-20 bg-[#13132A] px-6 py-24 lg:px-20">
        <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
          Conditions Treated
          <span className="h-px w-10 bg-[#8B5CF6]/20" />
        </div>
        <h2 className="mb-5 font-serif text-[clamp(30px,4vw,52px)] font-bold leading-[1.08] text-white">
          Built for Athletes.
          <br />
          <em className="italic text-[#A78BFA]">Every Injury. Every Stage.</em>
        </h2>
        <p className="mb-6 max-w-[560px] text-[15px] leading-[1.85] text-[#9B96C4]">
          From acute sports injuries to chronic degenerative conditions, stem
          cell and exosome therapy may help support the full spectrum of
          athletic recovery.
        </p>
        <div className="mt-12 grid gap-px overflow-hidden rounded border border-[#8B5CF6]/20 bg-[#8B5CF6]/20 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c) => (
            <article key={c.title} className="bg-[#13132A] p-8 transition-colors hover:bg-[#1E1B3A]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded border border-[#8B5CF6]/20 bg-[#8B5CF6]/15 text-lg">
                {c.icon}
              </div>
              <h3 className="mb-2.5 font-serif text-[20px] font-bold text-white">
                {c.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#9B96C4]">
                {c.desc}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#consult"
            className="inline-flex items-center gap-2.5 rounded-sm bg-[#8B5CF6] px-7 py-[15px] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-px hover:bg-[#A78BFA]"
          >
            See If You Qualify ↗
          </a>
        </div>
      </section>

      {/* ===== Reggie ===== */}
      <section id="reggie" className="scroll-mt-20 px-6 py-24 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative flex h-[560px] items-center justify-center overflow-hidden rounded border border-[#8B5CF6]/20 bg-[#13132A]">
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[#8B5CF6]/30 bg-[radial-gradient(circle,rgba(139,92,246,.3)_0%,rgba(139,92,246,.1)_65%,transparent_100%)]" />
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${REGGIE_IMG}')` }}
            />
            <div className="absolute left-5 top-5 rounded-sm border border-[#8B5CF6]/20 bg-[#0D0D1A]/80 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A78BFA]">
              Former Pro · Playing Overseas
            </div>
            <div className="absolute bottom-5 right-5 z-10 rounded-sm bg-[#8B5CF6] px-3.5 py-2 font-serif text-[28px] font-bold leading-none text-white">
              #22
            </div>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
              Connect with a Pro
              <span className="h-px w-10 bg-[#8B5CF6]/20" />
            </div>
            <h2 className="mb-5 font-serif text-[clamp(30px,4vw,52px)] font-bold leading-[1.08] text-white">
              Talk to
              <br />
              <em className="italic text-[#A78BFA]">Reggie Lynch</em>
            </h2>
            <p className="mb-6 max-w-[560px] text-[15px] leading-[1.85] text-[#9B96C4]">
              Former professional basketball player Reggie Lynch knows the
              overseas grind — the wear on your body, the pressure to perform,
              and the challenge of staying healthy season after season.
            </p>
            <p className="mb-6 max-w-[560px] text-[15px] leading-[1.85] text-[#9B96C4]">
              Whether you have questions about stem cell and exosome therapy,
              want to understand how this fits into your off-season recovery, or
              are ready to start — Reggie is here to connect you with the right
              specialists and answer your questions directly.
            </p>
            <a
              href="#consult"
              className="inline-flex items-center gap-2.5 rounded-sm bg-[#8B5CF6] px-7 py-[15px] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-px hover:bg-[#A78BFA]"
            >
              Get in Touch with Reggie ↗
            </a>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Direct Contact Available", "Fast Response Times"].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 rounded-sm border border-[#8B5CF6]/20 bg-[#1E1B3A] px-4 py-2.5 text-[12px] font-medium text-[#E8E4FF]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Priority access ===== */}
      <section className="bg-[#13132A] px-6 py-24 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="mb-4 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
              Exclusive Partnership Access
              <span className="h-px w-10 bg-[#8B5CF6]/20" />
            </div>
            <h2 className="mb-5 font-serif text-[clamp(30px,4vw,52px)] font-bold leading-[1.08] text-white">
              Playing Overseas Athletes
              <br />
              <em className="italic text-[#A78BFA]">Get Priority Therapy</em>
            </h2>
            <p className="mb-6 max-w-[560px] text-[15px] leading-[1.85] text-[#9B96C4]">
              Playing Overseas community members receive{" "}
              <strong className="font-medium text-[#A78BFA]">
                complimentary consultations
              </strong>{" "}
              and priority access to the Regenerative Revival specialist
              network.
            </p>
            <p className="mb-6 max-w-[560px] text-[15px] leading-[1.85] text-[#9B96C4]">
              Whether you're recovering from injury, managing chronic pain, or
              optimizing longevity — access therapies once reserved for elite
              professionals. This is your opportunity.
            </p>
            <div className="my-6 flex flex-col gap-3">
              {checklist.map((c) => (
                <div key={c} className="flex items-center gap-3 text-[14px] text-[#9B96C4]">
                  <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/15 text-[10px] text-[#A78BFA]">
                    ✓
                  </span>
                  {c}
                </div>
              ))}
            </div>
            <a
              href="#consult"
              className="inline-flex items-center gap-2.5 rounded-sm bg-[#8B5CF6] px-7 py-[15px] text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-px hover:bg-[#A78BFA]"
            >
              Claim Your Free Consultation ↗
            </a>
          </div>
          <div className="relative order-1 h-[300px] overflow-hidden rounded border border-[#8B5CF6]/20 lg:order-2 lg:h-[480px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${PRI_IMG}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/25 to-[#0D0D1A]/40" />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="scroll-mt-20 px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
            Common Questions
          </div>
          <h2 className="mb-5 font-serif text-[clamp(30px,4vw,52px)] font-bold leading-[1.08] text-white">
            Everything You Need
            <br />
            <em className="italic text-[#A78BFA]">to Know</em>
          </h2>
          <p className="mx-auto mb-6 max-w-[560px] text-[15px] leading-[1.85] text-[#9B96C4]">
            Real answers about stem cell and exosome therapy, from safety to
            results.
          </p>
          <div className="mt-10 text-left">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="border-b border-[#8B5CF6]/20 first:border-t first:border-[#8B5CF6]/20"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 py-5 text-left text-[14px] font-medium transition-colors ${
                      open ? "text-[#A78BFA]" : "text-[#E8E4FF] hover:text-[#A78BFA]"
                    }`}
                  >
                    {f.q}
                    <span
                      className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-[#8B5CF6]/20 text-base text-[#8B5CF6] transition-transform ${
                        open ? "rotate-45 bg-[#8B5CF6]/15" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? "max-h-[400px] pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-[13.5px] leading-[1.85] text-[#9B96C4]">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="#reggie"
            className="mt-9 inline-flex items-center gap-2.5 text-[13px] text-[#9B96C4] transition-colors hover:text-[#A78BFA]"
          >
            <strong className="font-medium text-[#E8E4FF]">
              Still have questions?
            </strong>{" "}
            Ask Reggie Lynch Directly →
          </a>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section
        id="consult"
        className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#07060f] via-[#12103a] to-[#0D0D1A] px-6 py-24 text-center"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.18)_0%,transparent_68%)]" />
        <div className="relative z-10 max-w-[720px] px-4">
          <div className="mb-4 flex items-center justify-center gap-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8B5CF6]">
            Exclusive Partnership · Priority Access
          </div>
          <div className="my-4 font-serif text-[clamp(40px,6vw,76px)] font-bold leading-[1.04] text-white">
            Your Next Season Starts
            <br />
            <em className="italic text-[#A78BFA]">Right Now</em>
          </div>
          <p className="mx-auto my-5 max-w-[580px] text-[14.5px] leading-[1.85] text-[#9B96C4]">
            Don't let injury, chronic pain, or time write the end of your story.
            Your free consultation with a Regenerative Revival specialist is
            waiting — stem cell and exosome therapy built for professional
            athletes, delivered on your schedule, wherever you are.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-sm bg-[#8B5CF6] px-9 py-[18px] text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-px hover:bg-[#A78BFA]"
          >
            Book Your Free Consultation ↗
          </a>
          <div className="mt-9 flex flex-wrap justify-center gap-5">
            {ctaChips.map((c) => (
              <span key={c} className="flex items-center gap-2 text-[11px] font-medium text-[#9B96C4]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-[#8B5CF6]/20 bg-[#13132A] px-6 pb-10 pt-16 lg:px-20">
        <div className="mb-12 grid gap-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Image
              src="/new-logos/White RR Logo_Transparent.png"
              alt="Regenerative Revival"
              width={130}
              height={30}
              className="mb-3 h-[30px] w-auto opacity-85"
            />
            <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B5CF6]">
              × Playing Overseas Partnership
            </div>
            <p className="max-w-[300px] text-[13px] leading-relaxed text-[#9B96C4]">
              A 60-day exclusive partnership bringing elite regenerative
              medicine to the global Playing Overseas athlete community.
            </p>
          </div>
          <div>
            <div className="mb-3.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8B5CF6]">
              Regenerative Revival
            </div>
            <div className="mb-2 text-[12.5px] text-[#9B96C4]">
              Founded 2018 · Seth Berge
            </div>
            <div className="mb-2 text-[12.5px] text-[#9B96C4]">
              Partner: Arora Health Group
            </div>
            <div className="mb-2 text-[12.5px] text-[#9B96C4]">
              100+ Licensed Practitioners
            </div>
            <div className="mb-2 text-[12.5px] text-[#9B96C4]">
              <a
                href="https://regenerativerevival.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A78BFA] transition-colors hover:text-white"
              >
                regenerativerevival.com ↗
              </a>
            </div>
          </div>
          <div>
            <div className="mb-3.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8B5CF6]">
              Playing Overseas
            </div>
            <div className="mb-2 text-[12.5px] text-[#9B96C4]">
              <a
                href="https://instagram.com/playingoverseas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A78BFA] transition-colors hover:text-white"
              >
                @playingoverseas ↗
              </a>
            </div>
            <div className="mb-2 text-[12.5px] text-[#9B96C4]">
              Connecting athletes globally
            </div>
          </div>
        </div>
        <div className="border-t border-[#8B5CF6]/20 pt-6 text-[11px] leading-relaxed text-[#9B96C4]">
          <strong className="font-medium text-[#E8E4FF]">
            Medical Disclaimer:
          </strong>{" "}
          The information on this page is for educational purposes only and does
          not constitute medical advice. Stem cell and exosome therapy results
          vary by individual. Consult a licensed healthcare provider before
          beginning any therapy program. Regenerative Revival therapies are
          administered by licensed practitioners (MDs, DOs, NPs) in partnership
          with Arora Health Group. Not everyone is a candidate for treatment.
        </div>
      </footer>
    </div>
  );
}
