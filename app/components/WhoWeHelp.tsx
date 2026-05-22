"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

/**
 * Three stacked sections on a continuous midnight purple-navy background.
 * Designed to mirror figma exactly:
 *
 *   1. "Who we help"            — 2x2 persona cards, image on right
 *   2. "Physician-led care"     — two large doctor quote cards (portrait left, quote right)
 *   3. "Numbers we actually earned" — 4-stat band on a lighter amethyst gradient
 */

const personas = [
  {
    eyebrow: "Performance Mindset",
    title: "You're optimizing, not catching up.",
    body: "Peptides, NAD+, and hormone support for professionals and athletes chasing energy, body composition, recovery, and cognitive edge.",
    tag: "Hormones & Peptides",
    href: "/hormones-peptides",
    image: "/2149230689.jpg",
    objectPosition: "center 30%",
  },
  {
    eyebrow: "Recovering From An Injury",
    title: "You tore something, or woke up one day and couldn't bend it.",
    body: "Regenerative therapy for active adults recovering from sports injuries, joint wear, and soft-tissue damage.",
    tag: "Regenerative Therapy",
    href: "/stem-cell-therapy",
    image: "/HomePage-_Conditions We Treat_ section.jpeg",
    objectPosition: "center 25%",
  },
  {
    eyebrow: "Before You Say Yes To Surgery",
    title: "The surgeon gave you a date. You're not sure you want it.",
    body: "Non-surgical regenerative options with honest candidacy assessment. If we're not a fit, we'll tell you.",
    tag: "Regenerative Therapy",
    href: "/concierge-care-model",
    image: "/HomePage-_Why Choose Regenerative Revival__ section.jpeg",
    objectPosition: "center 30%",
  },
  {
    eyebrow: "Optimizing After 40",
    title: "Your labs look different than they used to. So does the mirror.",
    body: "Hormone optimization for men and women — HRT, TRT, and coordinated longevity planning built around real labs, not guesses.",
    tag: "Hormones & Peptides",
    href: "/hormones-peptides",
    image: "/2149040261.jpg",
    objectPosition: "center 20%",
  },
];

const doctors = [
  {
    name: "Dr. Sean Arora",
    title: "Co-founder, CEO · Regenerative Revival",
    image: "/about/imgi_5_Dr-Sean-Arora.jpg",
    quote:
      "Regenerative medicine, hormone therapy, and peptide protocols don't belong in separate clinics. The same patient owns all of them, so the same team should, too.",
  },
  {
    name: "Dr. Shannon Arora",
    title: "Chief Medical Officer · Regenerative Revival",
    image: "/team/4.jpg",
    quote:
      "It makes sense to integrate regenerative medicine, hormone therapies, and peptide treatments rather than separating them into different facilities. A single team can effectively manage these services, as the same individual may benefit from all of them.",
  },
];

const stats = [
  { value: "8+", label: "Years in Regenerative Medicine" },
  { value: "50+", label: "Licensed Clinicians" },
  { value: "50", label: "States" },
  { value: "6k+", label: "Patients Treated" },
];

export default function WhoWeHelp() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1A1F30] via-[#1F2138] to-[#252245]">
      {/* === Aurora orbs span all three sections === */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6762AF]/12 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#345691]/15 blur-[140px] pointer-events-none animate-float-slow" style={{ animationDelay: "-7s" }} />
      <div className="absolute bottom-[20%] left-1/3 w-[700px] h-[500px] rounded-full bg-[#583563]/15 blur-[140px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 lux-grid opacity-25 pointer-events-none" />

      <WhoWeHelpBlock />
      <PhysicianLedBlock />
      <NumbersBlock />
    </section>
  );
}

/* ============================================================
   1. WHO WE HELP — 2x2 persona cards
   ============================================================ */
function WhoWeHelpBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative pt-24 pb-20 lg:pt-28 lg:pb-24">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#71A7F5]">
            This is probably you
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.25rem] text-white leading-[1.05] tracking-[-0.02em]">
            Who we help
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <PersonaCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PersonaCard({
  eyebrow,
  title,
  body,
  tag,
  href,
  image,
  objectPosition,
}: (typeof personas)[number]) {
  return (
    <a
      href={href}
      className="group relative flex items-stretch gap-5 rounded-2xl bg-[#252840]/70 border border-white/[0.06] p-5 lg:p-6 hover:bg-[#2A2D48]/80 hover:border-[#6762AF]/30 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_64px_-12px_rgba(103,98,175,0.25)]"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#71A7F5]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* === Text col === */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#71A7F5]">
            {eyebrow}
          </span>
          <h3 className="mt-2.5 font-[family-name:var(--font-poppins)] font-normal text-[20px] lg:text-[22px] text-white leading-[1.2] tracking-[-0.01em]">
            {title}
          </h3>
          <p className="mt-3 text-[12.5px] text-white/55 leading-[1.6]">{body}</p>
        </div>
        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white group-hover:text-[#71A7F5] transition-colors">
            {tag}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>

      {/* === Image col === */}
      <div className="relative shrink-0 self-stretch w-[140px] sm:w-[160px] rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="180px"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ objectPosition }}
        />
        {/* Soft ring */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        {/* Soft top fade */}
        <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#1A1F30]/30 to-transparent pointer-events-none" />
      </div>
    </a>
  );
}

/* ============================================================
   2. PHYSICIAN-LED CARE — two large doctor quote cards
   Portrait on LEFT with name underneath, quote on RIGHT
   ============================================================ */
function PhysicianLedBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-[960px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 lg:mb-16"
        >
          <h2 className="font-[family-name:var(--font-poppins)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-[-0.02em]">
            Physician-led care
          </h2>
          <p className="mt-5 text-base text-white/85 font-medium leading-relaxed">
            A nationwide medical team you can actually name
          </p>
          <p className="mt-4 text-[13px] text-white/45 leading-[1.7] max-w-[540px] mx-auto">
            Every Regenerative Revival patient is cared for by a licensed nurse practitioner and overseen by our Medical Director, Dr. Sean Arora, CEO of Arora Health Group. Twenty-plus clinicians practicing across 12+ states. Concierge-level care coordinated in all 50.
          </p>
        </motion.div>

        {/* Doctor cards */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <DoctorCard {...d} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DoctorCard({
  name,
  title,
  image,
  quote,
}: {
  name: string;
  title: string;
  image: string;
  quote: string;
}) {
  return (
    <div className="group relative grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-5 lg:gap-7 rounded-[20px] bg-[#252840]/70 border border-white/[0.06] p-5 lg:p-6 hover:bg-[#2A2D48]/80 hover:border-[#6762AF]/25 transition-all duration-500">
      {/* Top accent */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#71A7F5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Portrait + name caption */}
      <div className="shrink-0">
        <div className="relative w-full aspect-[5/6] sm:w-[260px] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="260px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        </div>
        <div className="mt-4 px-1">
          <p className="text-[15px] font-semibold text-white">{name}</p>
          <p className="text-[11.5px] text-white/45 mt-0.5 tracking-wide">{title}</p>
        </div>
      </div>

      {/* Quote col */}
      <div className="flex flex-col justify-center pt-2 sm:pt-2">
        <Quote className="h-7 w-7 text-[#71A7F5] mb-5 fill-[#71A7F5]" />
        <p className="font-[family-name:var(--font-poppins)] font-normal text-[18px] lg:text-[21px] text-white/90 leading-[1.5] tracking-[-0.005em]">
          {quote}
        </p>
        <p className="mt-6 text-[11.5px] text-[#71A7F5] tracking-wide">
          {name} — {title}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   3. NUMBERS WE ACTUALLY EARNED — stat band on lighter gradient
   ============================================================ */
function NumbersBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#352D5C] via-[#403785] to-[#34316A]">
        {/* Top + bottom edge accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71A7F5]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#71A7F5]/30 to-transparent" />

        {/* Aurora highlights */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#71A7F5]/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#583563]/30 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-[1100px] px-6 lg:px-8 py-20 lg:py-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-white/70">
              Track Record
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.5rem] text-white leading-[1.05] tracking-[-0.02em]">
              Numbers we actually earned
            </h2>
          </motion.div>

          {/* Stats — huge gradient numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center group"
              >
                <div className="font-[family-name:var(--font-poppins)] font-normal text-[5rem] sm:text-[6rem] lg:text-[7rem] leading-[0.9] tracking-[-0.04em] bg-gradient-to-b from-white via-white to-[#9D8FCF] bg-clip-text text-transparent transition-transform duration-500 group-hover:scale-[1.05]">
                  {s.value}
                </div>
                <div className="mt-4 text-[12px] sm:text-[13px] text-white/75 tracking-wide">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center text-[12px] text-white/50 leading-[1.7] max-w-[520px] mx-auto"
          >
            Built by clinicians, backed by Arora Health Group, and delivered through telehealth infrastructure designed for medicine. Not improvised from consumer software.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
