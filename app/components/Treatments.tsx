"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "One medical team that holds the whole picture" — exact figma layout:
 *
 * - Centered eyebrow → big dark serif headline → centered body
 * - Three centered cards on light lavender (#F4EFFA) backgrounds
 * - Each card: centered title, centered body, then a purple gradient
 *   "stage" with the image sitting inside — subjects appear to rise out
 *   of the gradient with subtle highlights and a soft inner shadow.
 * - Single "Get Started" dark navy pill below all cards.
 */

const cards = [
  {
    title: "Regeneration, delivered to your door.",
    body: "Stem cell and exosome therapy for joints and soft tissue, in your home, by a licensed nurse practitioner, under physician oversight. No clinic visits. No waiting rooms.",
    image: "/2149230689.jpg",
    objectPosition: "center 30%",
    href: "/stem-cell-therapy",
  },
  {
    title: "Hormones and peptides, prescribed online.",
    body: "HRT and TRT. Clinician-led peptide protocols. Prescribed through telehealth, dispensed by licensed compounding pharmacies, shipped to your door.",
    image: "/2149374070.jpg",
    objectPosition: "center 25%",
    href: "/hormones-peptides",
    showFloatChip: true,
  },
  {
    title: "One medical team. One patient record. One plan.",
    body: "Every service coordinated across in-home regenerative care and virtual longevity programs, under one physician-led team.",
    image: "/2149611219.jpg",
    objectPosition: "center 30%",
    href: "/concierge-care-model",
    showCertChip: true,
  },
];

export default function Treatments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="treatments"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Subtle ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#F1ECF8]/40 blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* === Section header === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#345691]">
            Wholistic Care
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-poppins)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.75rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            One medical team that<br className="hidden sm:block" /> holds the whole picture
          </h2>
          <p className="mt-7 text-[15px] lg:text-[16px] text-[#4A4F66] leading-[1.7] max-w-[640px] mx-auto">
            Sublingual Semaglutide doesn&apos;t have to exist in a silo. Our clinicians can coordinate it with peptide protocols, hormone optimization (TRT/HRT), NAD+ programs, and even regenerative therapy — so your weight loss plan plugs into your bigger longevity strategy instead of competing with it.
          </p>
        </motion.div>

        {/* === Three cards === */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TreatmentCard {...c} />
            </motion.div>
          ))}
        </div>

        {/* === Get Started CTA === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14 lg:mt-16"
        >
          <a
            href="/consult-router"
            className="group inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-[#021E3C] px-9 text-[15px] font-semibold text-white hover:bg-[#345691] hover:shadow-[0_16px_40px_-8px_rgba(2,30,60,0.5)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   TREATMENT CARD — light lavender card with gradient image stage
   ============================================================ */
function TreatmentCard({
  title,
  body,
  image,
  objectPosition,
  href,
  showFloatChip,
  showCertChip,
}: {
  title: string;
  body: string;
  image: string;
  objectPosition: string;
  href: string;
  showFloatChip?: boolean;
  showCertChip?: boolean;
}) {
  return (
    <a
      href={href}
      className="group relative block h-full rounded-[28px] bg-[#F4EFFA] p-5 lg:p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] hover:bg-white"
    >
      <div className="flex flex-col h-full">
        {/* === Title + body (centered) === */}
        <div className="px-2 pt-3 pb-6 text-center">
          <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[24px] lg:text-[26px] text-[#1A1F30] leading-[1.2] tracking-[-0.015em] mb-3">
            {title}
          </h3>
          <p className="text-[13px] lg:text-[14px] text-[#4A4F66] leading-[1.65] max-w-[90%] mx-auto">
            {body}
          </p>
        </div>

        {/* === Image stage with gradient backdrop === */}
        <div className="relative mt-auto rounded-[20px] overflow-hidden aspect-[16/11]">
          {/* Multi-stop amethyst gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7B72BA] via-[#6762AF] to-[#4F4A8E]" />

          {/* Top-right highlight — gives the gradient depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.22),transparent_55%)] pointer-events-none" />

          {/* Bottom-left vignette — adds richness */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(63,37,73,0.4),transparent_55%)] pointer-events-none" />

          {/* Subtle inner glow ring */}
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[20px] pointer-events-none z-10" />

          {/* Image — sits INSIDE the gradient with subtle padding so the
              gradient shows around the edges as a luxe frame. The image
              uses `object-position` to ensure subjects rise to the top. */}
          <div className="absolute inset-x-3 top-3 bottom-3 rounded-[14px] overflow-hidden shadow-[0_8px_24px_-6px_rgba(63,37,73,0.5)]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              style={{ objectPosition }}
            />
            {/* Soft top-of-image fade — makes subjects feel like they're
                rising out of the gradient backdrop */}
            <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#7B72BA]/50 to-transparent pointer-events-none" />
            {/* Bottom soft shadow */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#3F2549]/30 to-transparent pointer-events-none" />
          </div>

          {/* Optional floating chips (matches figma overlays) */}
          {showCertChip && (
            <div className="absolute top-5 right-5 z-20 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#1A1F30] shadow-[0_8px_24px_-4px_rgba(26,31,48,0.3)]">
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#345691]">
                <svg viewBox="0 0 12 12" className="h-2 w-2 text-white" fill="currentColor">
                  <path d="M10 3L4.5 8.5 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              Board Certified
            </div>
          )}

          {showFloatChip && (
            <div className="absolute bottom-5 left-5 z-20 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-[11px] font-semibold text-[#1A1F30] shadow-[0_8px_24px_-4px_rgba(26,31,48,0.3)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#71A7F5] animate-pulse" />
              Telehealth Rx
            </div>
          )}

          {/* Hover arrow indicator */}
          <div className="absolute bottom-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <ArrowUpRight className="h-4 w-4 text-[#1A1F30]" />
          </div>
        </div>
      </div>
    </a>
  );
}
