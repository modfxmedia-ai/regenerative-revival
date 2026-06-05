"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "One medical team that holds the whole picture"
 * Matches Figma: white bg, 64px padding, centered header, 3 cards
 * Cards: #F7FAFF bg, 1px #F5F5F5 border, 8px radius, 416×463px feel
 * Image area at bottom with gradient stage
 */

const cards = [
  {
    title: "Regeneration, delivered to right your door.",
    body: "Stem cell and exosome therapy for joints and soft tissue, in your home, by a licensed nurse practitioner, under physician oversight. No clinic visits. No waiting rooms.",
    image: "/regeneration.png",
    href: "/stem-cell-therapy",
    imageOffset: 0,
  },
  {
    title: "Hormones and peptides, prescribed online.",
    body: "HRT and TRT. Clinician-led peptide protocols. Prescribed through telehealth, dispensed by licensed compounding pharmacies, shipped to your door.",
    image: "/nads.png",
    href: "/hormones-peptides",
    imageOffset: 30,
  },
  {
    title: "One medical team. One patient record. One plan.",
    body: "Every service coordinated across in-home regenerative care and virtual longevity programs, under one physician-led team.",
    image: "/medical-team.png",
    href: "/concierge-care-model",
    imageOffset: 0,
  },
];

export default function Treatments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="treatments"
      className="relative bg-white overflow-hidden py-16 lg:py-20"
    >
      <div ref={ref} className="mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20 flex flex-col items-center gap-10">
        {/* === Section header — matches Figma: 690px wide, centered === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 max-w-[690px] text-center"
        >
          {/* Eyebrow: Poppins 500 14px, uppercase, 1px spacing, #1B3A5C */}
          <span
            className="font-[family-name:var(--font-poppins)] font-medium text-[14px] leading-[100%] tracking-[1px] uppercase"
            style={{ color: "#1B3A5C" }}
          >
            Wholistic Care
          </span>

          {/* H2: Poppins 500 56px/56px, -2px spacing, #1A1F30 */}
          <h2
            className="font-[family-name:var(--font-poppins)] font-medium text-[#1A1F30]"
            style={{
              fontSize: "clamp(2rem, 4vw, 56px)",
              lineHeight: "56px",
              letterSpacing: "-2px",
            }}
          >
            One medical team that holds the whole picture
          </h2>

          {/* P1: Poppins 400 18px/150%, -0.25px, #4D4D4D */}
          <p
            className="font-[family-name:var(--font-poppins)] font-normal text-[18px] leading-[150%]"
            style={{ letterSpacing: "-0.25px", color: "#4D4D4D" }}
          >
            Sublingual Semaglutide doesn&apos;t have to exist in a silo. Our clinicians can
            coordinate it with peptide protocols, hormone optimization (TRT/HRT), NAD+ programs,
            and even regenerative therapy — so your weight loss plan plugs into your bigger
            longevity strategy instead of competing with it.
          </p>
        </motion.div>

        {/* === Three cards row === */}
        <div className="w-full flex flex-col items-center gap-10">
          <div className="grid md:grid-cols-3 gap-4 w-full">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TreatmentCard {...c} />
              </motion.div>
            ))}
          </div>

          {/* === Get Started button: #1B3A5C, 40px radius, 16px 32px padding === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <a
              href="/consult-router"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[40px] px-8 text-[18px] font-semibold text-white transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(27,58,92,0.5)] hover:-translate-y-0.5"
              style={{
                background: "#1B3A5C",
                letterSpacing: "-0.01em",
              }}
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TREATMENT CARD
   Figma: 416×463, #F7FAFF bg, 1px #F5F5F5 border, 8px radius
   Title area at top (centered, padded), image stage at bottom
   with purple-to-blue gradient backdrop
   ============================================================ */
function TreatmentCard({
  title,
  body,
  image,
  href,
  imageOffset = 0,
}: {
  title: string;
  body: string;
  image: string;
  href: string;
  imageOffset?: number;
}) {
  return (
    <a
      href={href}
      className="group relative flex flex-col h-[463px] rounded-lg overflow-visible transition-none"
      style={{
        background: "#F7FAFF",
        border: "1px solid #F5F5F5",
      }}
    >
      {/* === Title area: centered, top 32px, 363px max-width === */}
      <div className="flex flex-col items-center gap-4 pt-8 px-6 text-center">
        {/* H4: Poppins 500 28px/30px, -0.5px, #1A1F30 */}
        <h3
          className="font-[family-name:var(--font-poppins)] font-medium text-[#1A1F30] max-w-[363px]"
          style={{
            fontSize: "28px",
            lineHeight: "30px",
            letterSpacing: "-0.5px",
          }}
        >
          {title}
        </h3>

        {/* P4: Poppins 400 14px/140%, #707070 */}
        <p
          className="font-[family-name:var(--font-poppins)] font-normal max-w-[363px]"
          style={{
            fontSize: "14px",
            lineHeight: "140%",
            color: "#707070",
          }}
        >
          {body}
        </p>
      </div>

      {/* === Image stage at bottom === */}
      <div className="relative mt-auto w-full h-[269px] overflow-visible">
        {/* Gradient backdrop — taller so images sit IN it with tops breaking out */}
        <div
          className="absolute inset-x-[14px] bottom-0 h-[160px] rounded-lg"
          style={{
            background:
              "linear-gradient(164.68deg, #533861 25.08%, #7CA8EF 89.25%)",
          }}
        />

        {/* Image — bottom-aligned with the gradient, top breaks out */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center overflow-visible">
          <Image
            src={image}
            alt={title}
            width={337}
            height={250}
            className="relative z-10 object-contain w-auto max-w-[85%]"
            style={{ maxHeight: "250px", transform: `translateY(${imageOffset}px)` }}
          />
        </div>
      </div>
    </a>
  );
}
