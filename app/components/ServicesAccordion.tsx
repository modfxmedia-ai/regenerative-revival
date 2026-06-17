"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Dna, Droplets, Orbit, FlaskConical, Zap } from "lucide-react";
import WaveDivider from "./WaveDivider";

/* ─────────────────────────────────────────────────────────────────────────────
   OUR SERVICES — V2 elevated redesign
   Featured-panel + selectable tiles. Hover/tap a tile to swap the hero panel
   with a smooth crossfade. Numbered indices, service icons, gradient accents.
   ───────────────────────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: "stem-cell-therapy",
    number: "01",
    label: "Stem Cell Therapy",
    description:
      "Science-backed regenerative therapies that may support the body's natural processes — delivered to your door by a licensed nurse practitioner.",
    href: "/stem-cell-therapy",
    image: "/AdobeStock_1848700749.png",
    objectPosition: "center 30%",
    icon: Dna,
    frame: "from-[#6762AF] to-[#4F4A8E]",
  },
  {
    id: "whartons-jelly",
    number: "02",
    label: "Wharton's Jelly",
    description:
      "Premium umbilical cord-derived MSCs with superior potency for deep tissue regeneration — the gold standard in stem cell sourcing.",
    href: "/whartons-jelly",
    image: "/2148882109.jpg",
    objectPosition: "center 20%",
    icon: Droplets,
    frame: "from-[#71A7F5] to-[#345691]",
  },
  {
    id: "exosomes",
    number: "03",
    label: "Exosome Therapy",
    description:
      "Next-generation cellular messengers that amplify healing signals and may accelerate recovery at the cellular level.",
    href: "/why-exosomes",
    image: "/AdobeStock_1862763747.jpeg",
    objectPosition: "center 25%",
    icon: Orbit,
    frame: "from-[#583563] to-[#3F2549]",
  },
  {
    id: "hormones-peptides",
    number: "04",
    label: "Hormones & Peptides",
    description:
      "Clinician-prescribed hormone optimization and peptide protocols tailored to your unique biology — online, shipped to your door.",
    href: "/hormones-peptides",
    image: "/2149611219.jpg",
    objectPosition: "center 30%",
    icon: FlaskConical,
    frame: "from-[#345691] to-[#021E3C]",
  },
  {
    id: "nad",
    number: "05",
    label: "NAD+ Therapy",
    description:
      "Cellular energy restoration and longevity protocols powered by NAD+. Feel younger, think sharper, perform better.",
    href: "/nad",
    image: "/AdobeStock_1877540011.jpeg",
    objectPosition: "center 35%",
    icon: Zap,
    frame: "from-[#6F4A7A] to-[#6762AF]",
  },
];

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];

  return (
    <section className="relative bg-[#0B0E16] py-20 lg:py-28 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-[#6762AF]/12 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#345691]/12 blur-[150px] rounded-full" />
      </div>
      <div className="absolute inset-0 lux-grid opacity-[0.12] pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
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
            className="font-[family-name:var(--font-poppins)] font-medium text-[2.2rem] sm:text-[2.8rem] lg:text-[3.4rem] text-white leading-[1.05] tracking-[-0.04em]"
          >
            Regenerative care, personalized protocols,{" "}
            <span className="bg-gradient-to-r from-[#8985C5] via-[#71A7F5] to-[#8985C5] bg-clip-text text-transparent">
              longevity reimagined.
            </span>
          </motion.h2>
        </div>

        {/* ── Featured panel + tiles ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-5 lg:gap-6"
        >
          {/* FEATURED PANEL */}
          <div className="relative rounded-[28px] overflow-hidden min-h-[420px] lg:min-h-[560px] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.label}
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover"
                  style={{ objectPosition: active.objectPosition }}
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-[#06080F]/45 to-transparent" />
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${active.frame} opacity-20 mix-blend-overlay transition-opacity duration-700`}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[28px] pointer-events-none" />

            {/* content */}
            <div className="absolute inset-0 flex flex-col justify-between p-7 lg:p-10">
              {/* top — number + icon */}
              <div className="flex items-start justify-between">
                <span className="font-[family-name:var(--font-poppins)] text-[13px] font-mono tracking-[0.3em] text-white/50">
                  ({active.number})
                </span>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${active.frame} shadow-lg`}
                >
                  <active.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                </span>
              </div>

              {/* bottom — text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + "-text"}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                >
                  <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[1.9rem] lg:text-[2.6rem] text-white leading-[1.05] tracking-[-0.03em] mb-3">
                    {active.label}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-white/75 leading-[1.7] max-w-[460px] mb-7">
                    {active.description}
                  </p>
                  <Link
                    href={active.href}
                    className="btn-gradient inline-flex h-12 items-center gap-2 px-7 text-[13px] font-semibold text-white uppercase tracking-[0.12em]"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* TILE LIST */}
          <div className="flex flex-col gap-3">
            {SERVICES.map((service, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex items-center gap-4 rounded-2xl border p-4 lg:p-5 text-left transition-all duration-400 overflow-hidden ${
                    isActive
                      ? "border-white/15 bg-white/[0.06]"
                      : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                  }`}
                >
                  {/* active gradient sliver */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.frame} transition-opacity duration-400 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {/* icon */}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-400 ${
                      isActive
                        ? `bg-gradient-to-br ${service.frame} text-white`
                        : "bg-white/[0.05] text-white/55 group-hover:text-white/80"
                    }`}
                  >
                    <service.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  {/* label */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-white/35">
                        {service.number}
                      </span>
                    </div>
                    <span
                      className={`block font-[family-name:var(--font-poppins)] font-semibold text-[15px] lg:text-[17px] transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {service.label}
                    </span>
                  </div>
                  {/* arrow */}
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-[#71A7F5] translate-x-0 opacity-100"
                        : "text-white/30 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
