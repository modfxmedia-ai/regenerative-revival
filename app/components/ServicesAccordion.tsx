"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────────
   SERVICES ACCORDION
   Ways2Well-inspired expanding card strip.
   Hover (desktop) or tap (mobile) a card to expand it.
   Uses flex-grow CSS transition for buttery-smooth width changes.
   ───────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: "stem-cell-therapy",
    label: "STEM CELL\nTHERAPY",
    tagline: "STEM CELL THERAPY",
    description:
      "Support your body's natural healing with advanced, science-backed regenerative therapies delivered to your door by a licensed nurse practitioner.",
    href: "/stem-cell-therapy",
    image: "/2149230689.jpg",
    objectPosition: "center 30%",
  },
  {
    id: "whartons-jelly",
    label: "WHARTON'S\nJELLY",
    tagline: "WHARTON'S JELLY",
    description:
      "Premium umbilical cord-derived MSCs with superior potency for deep tissue regeneration — the gold standard in stem cell sourcing.",
    href: "/whartons-jelly",
    image: "/2148882109.jpg",
    objectPosition: "center 20%",
  },
  {
    id: "exosomes",
    label: "EXOSOME\nTHERAPY",
    tagline: "EXOSOME THERAPY",
    description:
      "Next-generation cellular messengers that amplify healing signals and accelerate recovery at the cellular level.",
    href: "/why-exosomes",
    image: "/2149374070.jpg",
    objectPosition: "center 25%",
  },
  {
    id: "hormones-peptides",
    label: "HORMONES &\nPEPTIDES",
    tagline: "HORMONES & PEPTIDES",
    description:
      "Clinician-prescribed hormone optimization and peptide protocols tailored to your unique biology — online, ship to door.",
    href: "/hormones-peptides",
    image: "/2149611219.jpg",
    objectPosition: "center 30%",
  },
  {
    id: "nad",
    label: "NAD+\nTHERAPY",
    tagline: "NAD+ THERAPY",
    description:
      "Cellular energy restoration and longevity protocols powered by NAD+ infusions. Feel younger, think sharper, perform better.",
    href: "/nad",
    image: "/2149040261.jpg",
    objectPosition: "center 35%",
  },
];

/* ─── SHARED TRANSITION TIMING ─────────────────────────────────────────────── */
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION_MS = 700;
const CARD_TRANSITION = `flex-grow ${DURATION_MS}ms ${EASE}, min-width ${DURATION_MS}ms ${EASE}`;

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#080B12] py-20 lg:py-28 overflow-hidden">
      {/* ── ambient background glow ───────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#6762AF]/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* ── Section heading ───────────────────────────────────────────────── */}
        <div className="mb-12 lg:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#71A7F5] mb-5"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-[family-name:var(--font-poppins)] font-black text-[2.2rem] sm:text-[2.8rem] lg:text-[3.5rem] text-white uppercase leading-[1.05] tracking-[-0.01em]"
          >
            Regenerative Care.
            <br />
            Personalized Protocols.
            <br />
            <span className="text-[#71A7F5]">Longevity, Reimagined.</span>
          </motion.h2>
        </div>

        {/* ──────────────────────────────────────────────────────────────────
            DESKTOP — horizontal expanding accordion
        ─────────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden lg:flex gap-3 h-[520px]"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {SERVICES.map((service, i) => {
            const isActive = activeIndex === i;
            return (
              <a
                key={service.id}
                href={service.href}
                className="relative overflow-hidden rounded-[20px] cursor-pointer group block"
                style={{
                  flexGrow: isActive ? 20 : 1,
                  flexShrink: 1,
                  flexBasis: "80px",
                  minWidth: "80px",
                  transition: CARD_TRANSITION,
                }}
                onMouseEnter={() => setActiveIndex(i)}
                aria-label={service.tagline}
              >
                {/* ── background image ──────────────────────────────────── */}
                <Image
                  src={service.image}
                  alt={service.tagline}
                  fill
                  sizes="(max-width: 1280px) 60vw, 700px"
                  className="object-cover"
                  style={{
                    objectPosition: service.objectPosition,
                    transition: `transform ${DURATION_MS}ms ${EASE}`,
                    transform: isActive ? "scale(1.04)" : "scale(1.0)",
                  }}
                  priority={i === 0}
                />

                {/* ── overlays ──────────────────────────────────────────── */}
                {/* Dark base — heavier on inactive, lighter on active */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.75) 100%)",
                    transition: `background ${DURATION_MS}ms ${EASE}`,
                  }}
                />

                {/* Brand accent glow at bottom of active card */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="glow"
                      className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        background:
                          "radial-gradient(ellipse at bottom center, rgba(103,98,175,0.30) 0%, transparent 70%)",
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* ── INACTIVE label ────────────────────────────────────── */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="inactive-label"
                      className="absolute inset-0 flex flex-col justify-between p-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Label — rotated for narrow column */}
                      <span
                        className="block text-white font-black text-[11px] tracking-[0.12em] uppercase leading-[1.3] whitespace-pre-line"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                          alignSelf: "flex-end",
                        }}
                      >
                        {service.label.replace(/\n/g, " ")}
                      </span>

                      {/* Plus icon */}
                      <div className="self-center flex items-center justify-center w-9 h-9 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white/60 transition-all duration-300">
                        <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── ACTIVE content ────────────────────────────────────── */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="active-content"
                      className="absolute bottom-0 left-0 right-0 p-8"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.45, delay: 0.15 }}
                    >
                      <p className="font-black text-[1.6rem] lg:text-[2rem] uppercase text-[#71A7F5] leading-[1.1] tracking-[0.01em] mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-[14px] text-white/75 leading-[1.65] max-w-[420px] mb-6">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/90 uppercase tracking-[0.15em] group/cta">
                        Learn More
                        <span className="inline-flex items-center gap-0.5 transition-transform duration-300 group-hover/cta:translate-x-1">
                          <ArrowRight className="w-4 h-4" />
                          <span className="w-8 h-px bg-white/60 inline-block" />
                        </span>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </motion.div>

        {/* ──────────────────────────────────────────────────────────────────
            MOBILE — vertical stacked accordion
        ─────────────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="flex lg:hidden flex-col gap-3"
        >
          {SERVICES.map((service, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  height: isActive ? 280 : 72,
                  transition: `height ${DURATION_MS}ms ${EASE}`,
                }}
                onClick={() => setActiveIndex(isActive ? 0 : i)}
              >
                {/* bg image */}
                <Image
                  src={service.image}
                  alt={service.tagline}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    objectPosition: service.objectPosition,
                    transition: `transform ${DURATION_MS}ms ${EASE}`,
                    transform: isActive ? "scale(1.04)" : "scale(1.0)",
                  }}
                />

                {/* overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%)"
                      : "rgba(0,0,0,0.72)",
                    transition: `background ${DURATION_MS}ms ${EASE}`,
                  }}
                />

                {/* collapsed row */}
                <div className="absolute inset-x-0 top-0 h-[72px] flex items-center justify-between px-5">
                  <span className="text-white font-black text-[12px] tracking-[0.15em] uppercase">
                    {service.tagline}
                  </span>
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-white/10"
                    style={{
                      transition: `transform ${DURATION_MS}ms ${EASE}`,
                      transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="mobile-content"
                      className="absolute bottom-0 left-0 right-0 p-5 pt-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, delay: 0.18 }}
                    >
                      <p className="font-black text-[1.25rem] uppercase text-[#71A7F5] leading-[1.1] mb-2">
                        {service.tagline}
                      </p>
                      <p className="text-[13px] text-white/70 leading-[1.6] mb-4">
                        {service.description}
                      </p>
                      <a
                        href={service.href}
                        className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/90 uppercase tracking-[0.15em]"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5" />
                        <span className="w-6 h-px bg-white/60 inline-block" />
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
