"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "The three pillars" - cinematic pinned scroll-shuffle.
 *
 * DESKTOP: the section pins full-screen (sticky). As you scroll NATURALLY
 * through a tall wrapper, the active pillar advances - image, content,
 * background colour, and the giant index all shuffle/cross-fade in place.
 * No scroll hijacking - buttery and predictable.
 *
 * MOBILE: clean stacked cards with scroll-reveal.
 */

const pillars = [
  {
    kicker: "Regenerative Medicine",
    title: "Your joints shouldn't be a surgery countdown",
    highlight: "joints",
    body: "Stem cell and exosome therapy, delivered in your home, by a licensed nurse practitioner, under physician oversight. It's the option most of your other providers never bring up, because they don't offer it.",
    chips: ["Knee", "Hip", "Shoulder", "Back", "Elbow", "Neck", "Ankle", "Wrist"],
    bullets: [
      "Pain or reduced mobility in joints and soft tissue",
      "Post-injury recovery and soft-tissue wear",
      "Patients weighing options before surgery",
      "Active adults whose joints are holding them back",
    ],
    note: "Not every joint is a candidate. If yours isn't, we'll tell you on the consult and send you back to your specialist with a clearer picture. The point is an honest answer, not a sales pitch.",
    cta: "Get Started",
    href: "/stem-cell-therapy",
    image: "/photos/17fc6a47995d819b6afd0180644e79f9f1780fb4.png",
    frame: "from-[#6762AF] to-[#4F4A8E]",
    glow: "rgba(103,98,175,0.22)",
    accent: "#8985C5",
  },
  {
    kicker: "Peptide Therapy",
    title: "Dial in the energy, recovery, and strength you've been missing",
    highlight: "energy",
    body: "Bioidentical hormone therapy: BHRT for women, TRT for men, and clinician-led peptide protocols. Prescribed through telehealth, built around your labs, delivered to your door.",
    chips: ["Energy", "Sleep", "Libido", "Strength", "Cognitive"],
    bullets: [
      "Energy, strength, and body composition",
      "Sleep, recovery, and cognitive resilience",
      "Libido, mood, and metabolic health",
      "Peri-menopause, post-menopause, women's hormone optimization",
      "Weight management and GLP-1 support",
    ],
    cta: "Get Started",
    href: "/peptides",
    image: "/photos/e0c12adf6bc19abb1aa0bcd6e622d43b89389a59.png",
    frame: "from-[#71A7F5] to-[#345691]",
    glow: "rgba(113,167,245,0.22)",
    accent: "#71A7F5",
  },
  {
    kicker: "Cellular Health · Longevity Protocols",
    title: "Longevity, guided by clinicians, not by an algorithm",
    highlight: "Longevity",
    body: "NAD+ therapy and clinician-curated supplement stacks, prescribed based on your labs and reviewed by the same medical team that manages your hormones, peptides, and - if needed - your regenerative care.",
    chips: ["Cellular energy", "Cognitive", "Recovery", "Resilience"],
    bullets: [
      "Cellular energy and mitochondrial function",
      "Cognitive clarity and stress resilience",
      "Recovery, metabolic efficiency, and healthy aging",
      "Long-term healthspan, built around your labs",
    ],
    note: "This isn't a subscription. It's clinician-led longevity medicine - the standard you should expect, but almost nobody is actually delivering.",
    cta: "Get Started",
    href: "/nad",
    image: "/photos/cd1ca0b5a4d6f5adc5e2705a0de1b27b91cf69e2.png",
    frame: "from-[#6F4A7A] to-[#3F2549]",
    glow: "rgba(111,74,122,0.22)",
    accent: "#B07FC4",
  },
];

export default function ValueProps() {
  return (
    <section className="relative overflow-hidden bg-[#0B0E16]">
      <DesktopStack />
      <MobileStack />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   DESKTOP - stacked pillars (natural scroll, no dead runway)
───────────────────────────────────────────────────────────── */
function DesktopStack() {
  return (
    <div className="hidden lg:block relative">
      <div className="absolute inset-0 lux-grid opacity-[0.08] pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-24 pb-28">
        {/* Header */}
        <div className="mb-16 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#71A7F5]">
            What We Do - Three Pillars
          </span>
          <div className="flex items-center gap-3">
            {pillars.map((pl, i) => (
              <span key={i} className={`h-1 w-12 rounded-full bg-gradient-to-r ${pl.frame}`} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-24 xl:gap-28">
          {pillars.map((p, i) => (
            <DesktopPillar key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopPillar({ p, index }: { p: (typeof pillars)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <div ref={ref} className="relative">
      {/* per-pillar aurora glow */}
      <div
        className="absolute -inset-x-16 -inset-y-12 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 50% 60% at 30% 50%, ${p.glow}, transparent 70%)` }}
      />

      {/* Giant ghost index */}
      <motion.span
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 0.05, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none block font-[family-name:var(--font-poppins)] font-bold text-white leading-none tracking-[-0.06em]"
        style={{ fontSize: "24rem" }}
      >
        {index + 1}
      </motion.span>

      <div className="relative w-full grid grid-cols-[0.95fr_1.05fr] gap-16 items-center">

        {/* LEFT - image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[520px] rounded-[2.25rem] overflow-hidden bg-[#0F1220] ring-1 ring-white/[0.07]"
        >
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="50vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${p.frame} opacity-20 mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/85 via-transparent to-[#06080F]/15 pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.07] rounded-[2.25rem] pointer-events-none" />

          {/* Step counter */}
          <div className="absolute top-7 left-7">
            <span className="font-[family-name:var(--font-poppins)] font-bold text-[64px] leading-none text-white tracking-[-0.04em] block">
              0{index + 1}
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 mt-0.5 block">
              of 0{pillars.length}
            </span>
          </div>

          {/* Chips */}
          <div className="absolute bottom-7 left-7 right-7 flex flex-wrap gap-2">
            {p.chips.map((c) => (
              <span
                key={c}
                className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-white"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className={`inline-block text-[11px] font-semibold tracking-[0.24em] uppercase bg-gradient-to-r ${p.frame} bg-clip-text text-transparent`}>
            {p.kicker}
          </span>

          <h3 className="mt-4 font-[family-name:var(--font-poppins)] font-medium text-[2.25rem] xl:text-[2.9rem] text-white leading-[1.07] tracking-[-0.03em]">
            {renderTitle(p.title, p.highlight, p.frame)}
          </h3>

          <p className="mt-5 text-[15px] text-white/60 leading-relaxed">{p.body}</p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[14px] text-white/75">
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.frame} shrink-0`} />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          {p.note && (
            <div
              className="mt-6 rounded-xl bg-white/[0.04] border-l-2 px-5 py-4"
              style={{ borderColor: p.accent }}
            >
              <p className="text-[13px] text-white/50 leading-relaxed">{p.note}</p>
            </div>
          )}

          <a href={p.href} className="btn-gradient group mt-8 inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold text-white">
            {p.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE - stacked scroll-reveal cards
───────────────────────────────────────────────────────────── */
function MobileStack() {
  return (
    <div className="lg:hidden px-6 py-20 flex flex-col gap-16">
      <div>
        <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#71A7F5]">
          What We Do
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-poppins)] font-medium text-[2.1rem] text-white leading-[1.08] tracking-[-0.03em]">
          Three pillars. One medical team.
        </h2>
      </div>

      {pillars.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] mb-6">
            <Image src={p.image} alt={p.title} fill sizes="100vw" className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-tr ${p.frame} opacity-25 mix-blend-overlay`} />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.75rem]" />
            <div className="absolute top-5 left-5">
              <span className="font-[family-name:var(--font-poppins)] font-bold text-[48px] leading-none text-white/90 tracking-[-0.04em]">
                0{i + 1}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-white/40">
                of 0{pillars.length}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {p.chips.map((c) => (
                <span key={c} className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-medium text-white">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <span className={`inline-block text-[11px] font-semibold tracking-[0.24em] uppercase bg-gradient-to-r ${p.frame} bg-clip-text text-transparent`}>
            {p.kicker}
          </span>
          <h3 className="mt-3 font-[family-name:var(--font-poppins)] font-medium text-[1.75rem] text-white leading-[1.1] tracking-[-0.02em]">
            {renderTitle(p.title, p.highlight, p.frame)}
          </h3>
          <p className="mt-4 text-[14px] text-white/60 leading-relaxed">{p.body}</p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[13.5px] text-white/75">
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.frame} shrink-0`} />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
          {p.note && (
            <div className="mt-5 rounded-xl bg-white/[0.04] border-l-2 px-5 py-4" style={{ borderColor: p.accent }}>
              <p className="text-[13px] text-white/55 leading-relaxed">{p.note}</p>
            </div>
          )}
          <a href={p.href} className="btn-gradient mt-7 group inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold text-white">
            {p.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      ))}
    </div>
  );
}

/** Headline with gradient-highlighted keyword */
function renderTitle(title: string, word: string, frame: string) {
  if (!word || !title.includes(word)) return <>{title}</>;
  const parts = title.split(word);
  return (
    <>
      {parts[0]}
      <span className={`bg-gradient-to-r ${frame} bg-clip-text text-transparent`}>{word}</span>
      {parts[1]}
    </>
  );
}
