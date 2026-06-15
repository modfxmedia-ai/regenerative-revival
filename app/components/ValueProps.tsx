"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";

/**
 * "The three pillars" — single-scroll trigger redesign.
 *
 * DESKTOP:
 *  • One scroll locks (pins) the full viewport.
 *  • Each wheel / touch tick advances the active pillar counter.
 *  • Only after all pillars are seen does normal scroll continue.
 *  • Image strip slides vertically (translateY) — Netflix/Apple style.
 *  • Content cross-fades in place.
 *  • Progress bars expand per pillar.
 *
 * MOBILE: stacked cards with scroll-reveal.
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
    glow: "rgba(103,98,175,0.18)",
    accent: "#6762AF",
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
    glow: "rgba(113,167,245,0.18)",
    accent: "#71A7F5",
  },
  {
    kicker: "Cellular Health · Longevity Protocols",
    title: "Longevity, guided by clinicians, not by an algorithm",
    highlight: "Longevity",
    body: "NAD+ therapy and clinician-curated supplement stacks, prescribed based on your labs and reviewed by the same medical team that manages your hormones, peptides, and regenerative care.",
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
    glow: "rgba(88,53,99,0.18)",
    accent: "#9B72B0",
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

/* ─────────────────────────────────────────────────────────────
   DESKTOP — single-scroll-trigger pinned showcase
───────────────────────────────────────────────────────────── */
function PinnedSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [entered, setEntered] = useState(false);
  const tickCooldown = useRef(false);
  const prefersReduced = useReducedMotion();

  // Advance or retreat the active pillar; release lock when done.
  const tick = useCallback(
    (dir: 1 | -1) => {
      if (tickCooldown.current) return;
      tickCooldown.current = true;
      setTimeout(() => { tickCooldown.current = false; }, 700);

      setActive((prev) => {
        const next = prev + dir;
        if (next < 0) {
          // scrolling up past first — release lock upward
          setLocked(false);
          setEntered(false);
          return 0;
        }
        if (next >= pillars.length) {
          // scrolling past last — release lock downward
          setLocked(false);
          return pillars.length - 1;
        }
        return next;
      });
    },
    []
  );

  // IntersectionObserver to enter lock when section hits viewport center
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setLocked(true);
          setEntered(true);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Wheel handler — intercept while locked
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!locked) return;
      e.preventDefault();
      tick(e.deltaY > 0 ? 1 : -1);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [locked, tick]);

  // Touch handler — intercept while locked
  useEffect(() => {
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchEnd = (e: TouchEvent) => {
      if (!locked) return;
      const dy = startY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 30) {
        e.preventDefault();
        tick(dy > 0 ? 1 : -1);
      }
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [locked, tick]);

  const p = pillars[active];

  return (
    <div
      ref={containerRef}
      className="hidden lg:block relative h-screen overflow-hidden"
    >
      {/* Shifting aurora background — color-keyed to active pillar */}
      <motion.div
        animate={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 50% at 30% 60%, ${p.glow}, transparent 70%)` }}
        transition={{ duration: 1.2 }}
      />
      <div className="absolute inset-0 lux-grid opacity-[0.08] pointer-events-none" />

      <div className="relative h-full flex items-center mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">

        {/* ── TOP BAR ── */}
        <div className="absolute top-8 left-6 lg:left-16 xl:left-20 right-6 lg:right-16 xl:right-20 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#71A7F5]">
            What We Do — Three Pillars
          </span>
          {/* Progress pills */}
          <div className="flex items-center gap-3">
            {pillars.map((pl, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setLocked(true); setEntered(true); }}
                className="relative h-1 w-12 rounded-full bg-white/10 overflow-hidden cursor-pointer"
                aria-label={`Go to pillar ${i + 1}`}
              >
                <motion.span
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${pl.frame}`}
                  initial={false}
                  animate={{ scaleX: active >= i ? 1 : 0 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div className="w-full grid grid-cols-[1fr_1fr] gap-16 items-center">

          {/* LEFT — image strip that slides vertically */}
          <div className="relative h-[580px] rounded-[2.25rem] overflow-hidden bg-[#0F1220] ring-1 ring-white/[0.07]">
            {/* Image strip: all 3 stacked, translateY moves them up */}
            <motion.div
              className="absolute inset-x-0 top-0"
              animate={{
                y: prefersReduced ? 0 : `${-active * (100 / pillars.length)}%`,
              }}
              transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
              style={{ height: `${pillars.length * 100}%` }}
            >
              {pillars.map((pl, i) => (
                <div
                  key={pl.image}
                  className="relative w-full"
                  style={{ height: `${100 / pillars.length}%` }}
                >
                  <Image
                    src={pl.image}
                    alt={pl.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* Per-image gradient overlay keyed to its frame */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${pl.frame} opacity-20 mix-blend-overlay`} />
                </div>
              ))}
            </motion.div>

            {/* Persistent overlays — sit on top of the strip */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/80 via-transparent to-[#06080F]/20 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.07] rounded-[2.25rem] pointer-events-none" />

            {/* Step counter */}
            <div className="absolute top-7 left-7">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
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
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
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

          {/* RIGHT — content cross-fades */}
          <div className="relative min-h-[520px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl"
              >
                {/* Kicker */}
                <span
                  className={`inline-block text-[11px] font-semibold tracking-[0.24em] uppercase bg-gradient-to-r ${p.frame} bg-clip-text text-transparent`}
                >
                  {p.kicker}
                </span>

                {/* Headline */}
                <h3 className="mt-4 font-[family-name:var(--font-poppins)] font-medium text-[2.25rem] xl:text-[2.75rem] text-white leading-[1.08] tracking-[-0.03em]">
                  {renderTitle(p.title, p.highlight, p.frame)}
                </h3>

                {/* Body */}
                <p className="mt-5 text-[15px] text-white/60 leading-relaxed">{p.body}</p>

                {/* Bullets */}
                <ul className="mt-6 flex flex-col gap-2.5">
                  {p.bullets.map((b, bi) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + bi * 0.07 }}
                      className="flex items-start gap-3 text-[14px] text-white/75"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${p.frame} shrink-0`}
                      />
                      <span className="leading-relaxed">{b}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Optional note */}
                {p.note && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="mt-6 rounded-xl bg-white/[0.04] border-l-2 px-5 py-4"
                    style={{ borderColor: p.accent }}
                  >
                    <p className="text-[13px] text-white/50 leading-relaxed">{p.note}</p>
                  </motion.div>
                )}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <a
                    href={p.href}
                    className="btn-gradient group inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold text-white"
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Scroll hint — shown on first pillar before user has scrolled */}
            <AnimatePresence>
              {entered && active === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-10 left-0 flex items-center gap-2 text-[11px] text-white/30 tracking-wider uppercase"
                >
                  <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                  Scroll to explore
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── SIDE STEP INDICATORS ── */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {pillars.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setLocked(true); setEntered(true); }}
              aria-label={`Pillar ${i + 1}`}
              className="group flex items-center gap-2 cursor-pointer"
            >
              <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors pr-1">
                0{i + 1}
              </span>
              <motion.span
                animate={{
                  width: active === i ? 24 : 8,
                  background: active === i ? pillars[i].accent : "rgba(255,255,255,0.2)",
                }}
                className="h-[3px] rounded-full"
                transition={{ duration: 0.35 }}
              />
            </button>
          ))}
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
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
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
                <span
                  key={c}
                  className="rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 text-[11px] font-medium text-white"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <span
            className={`inline-block text-[11px] font-semibold tracking-[0.24em] uppercase bg-gradient-to-r ${p.frame} bg-clip-text text-transparent`}
          >
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
            <div
              className="mt-5 rounded-xl bg-white/[0.04] border-l-2 px-5 py-4"
              style={{ borderColor: p.accent }}
            >
              <p className="text-[13px] text-white/55 leading-relaxed">{p.note}</p>
            </div>
          )}
          <a
            href={p.href}
            className="btn-gradient mt-7 group inline-flex h-12 items-center gap-2 px-7 text-sm font-semibold text-white"
          >
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
      <span className={`bg-gradient-to-r ${frame} bg-clip-text text-transparent`}>
        {word}
      </span>
      {parts[1]}
    </>
  );
}
