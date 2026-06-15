"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "The three pillars" — cinematic pinned scroll-shuffle.
 *
 * DESKTOP: the section pins full-screen (sticky). As you scroll NATURALLY
 * through a tall wrapper, the active pillar advances — image, content,
 * background colour, and the giant index all shuffle/cross-fade in place.
 * No scroll hijacking — buttery and predictable.
 *
 * MOBILE: clean stacked cards with scroll-reveal.
 */

const pillars = [
  {
    kicker: "Regenerative Medicine",
    title: "Your joints shouldn't be a surgery countdown",
    highlight: "joints",
    body: "Stem cell and exosome therapy, delivered in your home, by a licensed nurse practitioner, under physician oversight. It's the option most of your other providers never bring up, because they don't offer it.",
    chips: ["Knee", "Hip", "Shoulder", "Back", "Elbow"],
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
    kicker: "Hormone & Peptide Therapy",
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
    href: "/hormones-peptides",
    image: "/photos/e0c12adf6bc19abb1aa0bcd6e622d43b89389a59.png",
    frame: "from-[#71A7F5] to-[#345691]",
    glow: "rgba(113,167,245,0.22)",
    accent: "#71A7F5",
  },
  {
    kicker: "Cellular Health · Longevity Protocols",
    title: "Longevity, guided by clinicians, not by an algorithm",
    highlight: "Longevity",
    body: "NAD+ therapy and clinician-curated supplement stacks, prescribed based on your labs and reviewed by the same medical team that manages your hormones, peptides, and — if needed — your regenerative care.",
    chips: ["Cellular energy", "Cognitive", "Recovery", "Resilience"],
    bullets: [
      "Cellular energy and mitochondrial function",
      "Cognitive clarity and stress resilience",
      "Recovery, metabolic efficiency, and healthy aging",
      "Long-term healthspan, built around your labs",
    ],
    note: "This isn't a subscription. It's clinician-led longevity medicine — the standard you should expect in 2026, but almost nobody is actually delivering.",
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
    <section className="relative bg-[#0B0E16]">
      <PinnedShuffle />
      <MobileStack />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   DESKTOP — pinned scroll-shuffle (natural scroll)
───────────────────────────────────────────────────────────── */
function PinnedShuffle() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress → active pillar index
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(
      pillars.length - 1,
      Math.max(0, Math.floor(v * pillars.length))
    );
    setActive((prev) => (prev === next ? prev : next));
  });

  // Subtle parallax drift on the giant ghost number
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const p = pillars[active];

  return (
    <div
      ref={wrapRef}
      className="hidden lg:block relative"
      style={{ height: `${pillars.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Shifting aurora — color-keyed to active pillar */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`aura-${active}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 55% 55% at 28% 55%, ${p.glow}, transparent 70%)`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 lux-grid opacity-[0.08] pointer-events-none" />

        {/* Giant ghost index — drifts with scroll, swaps per pillar */}
        <motion.div
          style={{ y: ghostY }}
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={`ghost-${active}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 0.05, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="block font-[family-name:var(--font-poppins)] font-bold text-white leading-none tracking-[-0.06em]"
              style={{ fontSize: "32rem" }}
            >
              {active + 1}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <div className="relative h-full w-full flex items-center mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">

          {/* TOP BAR — label + progress segments */}
          <div className="absolute top-10 left-6 lg:left-16 xl:left-20 right-6 lg:right-16 xl:right-20 flex items-center justify-between">
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#71A7F5]">
              What We Do — Three Pillars
            </span>
            <div className="flex items-center gap-3">
              {pillars.map((pl, i) => (
                <span
                  key={i}
                  className="relative h-1 w-12 rounded-full bg-white/10 overflow-hidden"
                >
                  <motion.span
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${pl.frame}`}
                    initial={false}
                    animate={{ scaleX: active >= i ? 1 : 0 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* TWO-COLUMN */}
          <div className="w-full grid grid-cols-[0.95fr_1.05fr] gap-16 items-center">

            {/* LEFT — image with clip-reveal swap */}
            <div className="relative h-[560px] rounded-[2.25rem] overflow-hidden bg-[#0F1220] ring-1 ring-white/[0.07]">
              <AnimatePresence>
                <motion.div
                  key={`img-${active}`}
                  initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.12 }}
                  animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={active === 0}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${p.frame} opacity-20 mix-blend-overlay`} />
                </motion.div>
              </AnimatePresence>

              {/* Persistent overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/85 via-transparent to-[#06080F]/15 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.07] rounded-[2.25rem] pointer-events-none" />

              {/* Step counter */}
              <div className="absolute top-7 left-7">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`num-${active}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4 }}
                    className="font-[family-name:var(--font-poppins)] font-bold text-[64px] leading-none text-white tracking-[-0.04em] block"
                  >
                    0{active + 1}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 mt-0.5 block">
                  of 0{pillars.length}
                </span>
              </div>

              {/* Chips */}
              <div className="absolute bottom-7 left-7 right-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`chips-${active}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap gap-2"
                  >
                    {p.chips.map((c, ci) => (
                      <motion.span
                        key={c}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, delay: 0.1 + ci * 0.05 }}
                        className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-white"
                      >
                        {c}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* RIGHT — content shuffle */}
            <div className="relative min-h-[520px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${active}`}
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                    {p.bullets.map((b, bi) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.18 + bi * 0.07 }}
                        className="flex items-start gap-3 text-[14px] text-white/75"
                      >
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.frame} shrink-0`} />
                        <span className="leading-relaxed">{b}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {p.note && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 rounded-xl bg-white/[0.04] border-l-2 px-5 py-4"
                      style={{ borderColor: p.accent }}
                    >
                      <p className="text-[13px] text-white/50 leading-relaxed">{p.note}</p>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    className="mt-8"
                  >
                    <a href={p.href} className="btn-gradient group inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold text-white">
                      {p.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* SIDE STEP INDICATORS */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {pillars.map((pl, i) => (
              <div key={i} className="flex items-center gap-2 justify-end">
                <span
                  className="text-[10px] tabular-nums transition-colors duration-300"
                  style={{ color: active === i ? pl.accent : "rgba(255,255,255,0.25)" }}
                >
                  0{i + 1}
                </span>
                <motion.span
                  animate={{
                    width: active === i ? 24 : 8,
                    background: active === i ? pl.accent : "rgba(255,255,255,0.2)",
                  }}
                  className="h-[3px] rounded-full"
                  transition={{ duration: 0.35 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOBILE — stacked scroll-reveal cards
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
