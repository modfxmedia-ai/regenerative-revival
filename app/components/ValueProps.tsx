"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "The three pillars" — V2 pinned scroll-step redesign.
 * DESKTOP: the section pins full-screen; scroll progress advances through
 * the three pillars in place — both the image and the content swap on the
 * same screen (no scrolling past).
 * MOBILE: simple stacked cards (no pin — best for touch / 90% mobile traffic).
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
    glow: "bg-[#6762AF]/15",
  },
  {
    kicker: "Hormone & Peptide Therapy",
    title: "Dial in the energy, recovery, and strength you've been missing",
    highlight: "energy",
    body: "Bioidentical hormone therapy: BHRT for women, TRT for men and clinician-led peptide protocols. Prescribed through telehealth, built around your labs, delivered to your door.",
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
    glow: "bg-[#71A7F5]/15",
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
    glow: "bg-[#583563]/15",
  },
];

export default function ValueProps() {
  return (
    <section className="relative bg-[#0B0E16]">
      <PinnedSteps />
      <MobileStack />
    </section>
  );
}

/* ============================================================
   DESKTOP — pinned, scroll-step (image + content swap in place)
   ============================================================ */
function PinnedSteps() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(pillars.length - 1, Math.floor(v * pillars.length));
    setActive((prev) => (prev === next ? prev : next));
  });

  const p = pillars[active];

  return (
    // Tall wrapper gives ~1 screen of scroll per pillar
    <div ref={wrapRef} className="hidden lg:block relative" style={{ height: `${pillars.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* shifting aurora */}
        <AnimatePresence>
          <motion.div
            key={`aura-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full ${p.glow} blur-[160px] pointer-events-none`}
          />
        </AnimatePresence>
        <div className="absolute inset-0 lux-grid opacity-[0.1] pointer-events-none" />

        <div className="relative mx-auto max-w-[1280px] w-full px-6 lg:px-16 xl:px-20">
          {/* top label + progress */}
          <div className="flex items-center justify-between mb-10">
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#71A7F5]">
              What We Do — Three Pillars
            </span>
            <div className="flex items-center gap-3">
              {pillars.map((_, i) => (
                <span
                  key={i}
                  className="relative h-1 w-12 rounded-full bg-white/10 overflow-hidden"
                >
                  <motion.span
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${pillars[i].frame}`}
                    initial={false}
                    animate={{ scaleX: active >= i ? 1 : 0 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative h-[560px] rounded-[2rem] overflow-hidden">
              {pillars.map((pl, i) => (
                <motion.div
                  key={pl.image}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: active === i ? 1 : 0,
                    scale: active === i ? 1 : 1.08,
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image src={pl.image} alt={pl.title} fill sizes="50vw" className="object-cover" priority={i === 0} />
                </motion.div>
              ))}
              <motion.div
                key={`wash-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.32 }}
                transition={{ duration: 0.7 }}
                className={`absolute inset-0 bg-gradient-to-tr ${p.frame} mix-blend-overlay`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />

              {/* index */}
              <div className="absolute top-7 left-7">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="font-[family-name:var(--font-poppins)] font-bold text-[64px] leading-none text-white/90 tracking-[-0.04em] block"
                  >
                    0{active + 1}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/50">
                  of 0{pillars.length}
                </span>
              </div>

              {/* chips */}
              <div className="absolute bottom-7 left-7 right-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-wrap gap-2"
                  >
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-white"
                      >
                        {c}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative min-h-[480px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-xl"
                >
                  <span className={`inline-block text-[11px] font-semibold tracking-[0.24em] uppercase bg-gradient-to-r ${p.frame} bg-clip-text text-transparent`}>
                    {p.kicker}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-poppins)] font-medium text-[2.4rem] xl:text-[3rem] text-white leading-[1.08] tracking-[-0.03em]">
                    {renderTitle(p.title, p.highlight)}
                  </h3>
                  <p className="mt-5 text-[15px] text-white/60 leading-relaxed">{p.body}</p>

                  <ul className="mt-7 grid grid-cols-1 gap-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[14px] text-white/75">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.frame} shrink-0`} />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {p.note && (
                    <div className="mt-7 rounded-xl bg-white/[0.04] border-l-2 border-[#6762AF] px-5 py-4">
                      <p className="text-[13px] text-white/55 leading-relaxed">{p.note}</p>
                    </div>
                  )}

                  <a href={p.href} className="btn-gradient mt-8 group inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold text-white">
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE — simple stacked cards
   ============================================================ */
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

      {pillars.map((p) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] mb-6">
            <Image src={p.image} alt={p.title} fill sizes="100vw" className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-tr ${p.frame} opacity-25 mix-blend-overlay`} />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[1.75rem]" />
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
          <h3 className="mt-3 font-[family-name:var(--font-poppins)] font-medium text-[1.7rem] text-white leading-[1.1] tracking-[-0.02em]">
            {renderTitle(p.title, p.highlight)}
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
            <div className="mt-5 rounded-xl bg-white/[0.04] border-l-2 border-[#6762AF] px-5 py-4">
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

/** Headline with the key word as a gradient accent. */
function renderTitle(title: string, word: string) {
  if (!word || !title.includes(word)) return title;
  const parts = title.split(word);
  return (
    <>
      {parts[0]}
      <span className="bg-gradient-to-r from-[#8985C5] to-[#71A7F5] bg-clip-text text-transparent">
        {word}
      </span>
      {parts[1]}
    </>
  );
}
