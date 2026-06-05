"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "The three pillars" section — directly mirrors the figma layout:
 * joint care → hormone & peptide → longevity
 *
 * Each card is a luxe split layout with image, kicker, headline,
 * tag chips, bullet list, callout note, and a primary CTA button.
 */

const pillars = [
  {
    kicker: "Regenerative Medicine",
    title: "Your joints shouldn't be a surgery countdown",
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
    image: "/HomePage-_Conditions We Treat_ section.jpeg",
    bgClass: "bg-white",
    side: "left" as const,
  },
  {
    kicker: "Hormone & Peptide Therapy",
    title: "Dial in the energy, recovery, and strength you've been missing",
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
    image: "/2148882109.jpg",
    bgClass: "bg-[#F1ECF8]",
    side: "right" as const,
  },
  {
    kicker: "Cellular Health · Longevity Protocols",
    title: "Longevity, guided by clinicians, not by an algorithm",
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
    image: "/2149040261.jpg",
    bgClass: "bg-white",
    side: "left" as const,
  },
];

export default function ValueProps() {
  return (
    <section className="relative">
      {pillars.map((p, i) => (
        <PillarRow key={i} pillar={p} index={i} />
      ))}
    </section>
  );
}

function PillarRow({ pillar, index }: { pillar: (typeof pillars)[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imgFirst = pillar.side === "right";

  return (
    <div className={`relative overflow-hidden ${pillar.bgClass}`}>
      {/* Top decorative gradient line for the lavender section */}
      {pillar.bgClass.includes("F1ECF8") && (
        <>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71A7F5]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71A7F5]/40 to-transparent" />
        </>
      )}

      {/* Subtle ambient orbs */}
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#6762AF]/5 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20 py-24 lg:py-32">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${imgFirst ? "lg:[&>*:first-child]:order-2" : ""}`}>
          {/* TEXT COL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="eyebrow">{pillar.kicker}</span>
            <h2 className="mt-4 lux-display text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05]">
              {renderTitle(pillar.title)}
            </h2>
            <p className="mt-6 text-base text-[#4A4F66] leading-relaxed">{pillar.body}</p>

            {/* Tag chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {pillar.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-full bg-[#F1ECF8] border border-[#6762AF]/15 px-3.5 py-1.5 text-xs font-medium text-[#583563]"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Bullets */}
            <ul className="mt-7 flex flex-col gap-3">
              {pillar.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3 text-sm text-[#1A1F30]/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1A1F30] shrink-0" />
                  <span className="leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* Callout note */}
            {pillar.note && (
              <div className="mt-7 rounded-xl bg-[#F1ECF8]/70 border-l-2 border-[#6762AF] px-5 py-4">
                <p className="text-[13px] text-[#4A4F66] leading-relaxed ">
                  {pillar.note}
                </p>
              </div>
            )}

            {/* CTA */}
            <a
              href={pillar.href}
              className="mt-8 group inline-flex h-12 items-center gap-2 rounded-full bg-[#021E3C] px-7 text-sm font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] transition-all duration-300"
            >
              {pillar.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* IMAGE COL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[5/6] lg:aspect-[4/5] luxe-shadow">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Soft gradient sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1F30]/15 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem] pointer-events-none" />
            </div>

            {/* Index badge */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-white shadow-xl border border-[#F1ECF8]">
              <span className="lux-display text-2xl lg:text-3xl text-[#6762AF]">
                <span className="text-[#6762AF] font-semibold">0{index + 1}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/** Renders the headline with the first word styled as serif accent. */
function renderTitle(title: string) {
  // Find a good word to highlight — usually a key noun
  const highlights: Record<string, string> = {
    "Your joints shouldn't be a surgery countdown": "joints",
    "Dial in the energy, recovery, and strength you've been missing": "energy",
    "Longevity, guided by clinicians, not by an algorithm": "Longevity",
  };
  const word = highlights[title];
  if (!word || !title.includes(word)) return title;

  const parts = title.split(word);
  return (
    <>
      {parts[0]}
      <span className="brand-italic text-[#583563]">{word}</span>
      {parts[1]}
    </>
  );
}
