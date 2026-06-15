"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Activity, HeartPulse, ShieldCheck, Gauge, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import WaveDivider from "./WaveDivider";

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
    icon: Activity,
    frame: "from-[#6762AF] to-[#4F4A8E]",
  },
  {
    eyebrow: "Recovering From An Injury",
    title: "You tore something, or woke up one day and couldn't bend it.",
    body: "Regenerative therapy for active adults recovering from sports injuries, joint wear, and soft-tissue damage.",
    tag: "Regenerative Therapy",
    href: "/stem-cell-therapy",
    icon: HeartPulse,
    frame: "from-[#71A7F5] to-[#345691]",
  },
  {
    eyebrow: "Before You Say Yes To Surgery",
    title: "The surgeon gave you a date. You're not sure you want it.",
    body: "Non-surgical regenerative options with honest candidacy assessment. If we're not a fit, we'll tell you.",
    tag: "Regenerative Therapy",
    href: "/concierge-care-model",
    icon: ShieldCheck,
    frame: "from-[#583563] to-[#3F2549]",
  },
  {
    eyebrow: "Optimizing After 40",
    title: "Your labs look different than they used to. So does the mirror.",
    body: "Hormone optimization for men and women — HRT, TRT, and coordinated longevity planning built around real labs, not guesses.",
    tag: "Hormones & Peptides",
    href: "/hormones-peptides",
    icon: Gauge,
    frame: "from-[#6F4A7A] to-[#6762AF]",
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
    image: "/team/shannon-arora.png",
    quote:
      "It makes sense to integrate regenerative medicine, hormone therapies, and peptide treatments rather than separating them into different facilities. A single team can effectively manage these services, as the same individual may benefit from all of them.",
  },
];

const stats = [
  { value: "8+", label: "Years in Regenerative Medicine" },
  { value: "100+", label: "Licensed Clinicians" },
  { value: "50", label: "States" },
  { value: "6k+", label: "Patients Treated" },
];

export default function WhoWeHelp() {
  return (
    <section className="relative bg-gradient-to-b from-[#1A1F30] via-[#1F2138] to-[#252245]">
      {/* === Aurora orbs span all three sections === */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6762AF]/12 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#345691]/15 blur-[140px] pointer-events-none animate-float-slow" style={{ animationDelay: "-7s" }} />
      <div className="absolute bottom-[20%] left-1/3 w-[700px] h-[500px] rounded-full bg-[#583563]/15 blur-[140px] pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 lux-grid opacity-25 pointer-events-none" />

      <WhoWeHelpBlock />
      <PhysicianLedBlock />
      <NumbersBlock />
      {/* dark #252245 → white AroraPartner */}
      <WaveDivider fill="#ffffff" type="wave" height={100} />
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
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
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
  icon: Icon,
  frame,
}: (typeof personas)[number]) {
  return (
    <a
      href={href}
      className="group relative flex flex-col h-full overflow-hidden rounded-[1.5rem] bg-white/[0.04] border border-white/[0.07] p-7 lg:p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_28px_64px_-16px_rgba(103,98,175,0.3)]"
    >
      {/* Gradient bloom — top-right, blooms on hover */}
      <span
        className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${frame} opacity-[0.12] blur-3xl group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`}
      />
      {/* Watermark icon — large, faint, behind */}
      <Icon
        className="absolute -bottom-6 -right-4 h-40 w-40 text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-700 pointer-events-none"
        strokeWidth={1}
      />

      {/* Icon tile */}
      <div className="relative mb-6">
        <span
          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${frame} shadow-[0_10px_30px_-8px_rgba(103,98,175,0.5)]`}
        >
          <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
        </span>
      </div>

      {/* Text */}
      <div className="relative flex-1">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#71A7F5]">
          {eyebrow}
        </span>
        <h3 className="mt-3 font-[family-name:var(--font-poppins)] font-semibold text-[21px] lg:text-[23px] text-white leading-[1.2] tracking-[-0.01em]">
          {title}
        </h3>
        <p className="mt-3 text-[13px] text-white/55 leading-[1.65] max-w-[420px]">{body}</p>
      </div>

      {/* Tag link */}
      <div className="relative mt-7 pt-5 border-t border-white/[0.08] flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-white/80 group-hover:text-white transition-colors">
          {tag}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/50 group-hover:bg-[#6762AF] group-hover:text-white transition-all duration-300">
          <ArrowUpRight className="h-4 w-4" />
        </span>
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
   3. NUMBERS WE ACTUALLY EARNED
   Figma: outer wrapper gradient #1A1F30→#6762AF, 16px padding
   Inner card: 24px radius, 64px 100px padding
   Numbers: 112px Poppins 400, -6px tracking, gradient white→#BCBAE2→#6762AF
   Labels: 20px Poppins 500, -0.5px, white
   ============================================================ */
function NumbersBlock() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-start p-4"
      style={{ background: "linear-gradient(180deg, #1A1F30 0%, #6762AF 100%)" }}
    >
      {/* Inner rounded card */}
      <div
        className="w-full rounded-3xl flex items-center justify-center"
        style={{ padding: "64px 0" }}
      >
        {/* Container */}
        <div className="flex flex-col items-center gap-16 w-full max-w-[1280px] px-6 lg:px-16 xl:px-20">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 w-full"
          >
            {/* Eyebrow: Poppins 500 14px uppercase 1px spacing white */}
            <span
              className="font-[family-name:var(--font-poppins)] font-medium text-[14px] leading-[100%] tracking-[1px] uppercase text-white text-center"
            >
              Track Record
            </span>

            {/* H2: Poppins 500 48px/51px -2px white */}
            <h2
              className="font-[family-name:var(--font-poppins)] font-medium text-white text-center"
              style={{ fontSize: "48px", lineHeight: "51px", letterSpacing: "-2px" }}
            >
              Numbers we actually earned
            </h2>
          </motion.div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-10 lg:gap-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-6 py-8"
              >
                {/* Big number + label stacked */}
                <div className="flex flex-col items-center gap-6">
                  {/* Number: 112px Poppins 400, -6px tracking, gradient */}
                  <span
                    className="font-[family-name:var(--font-poppins)] font-normal text-center"
                    style={{
                      fontSize: "clamp(64px, 7vw, 112px)",
                      lineHeight: "100%",
                      letterSpacing: "-6px",
                      background: "linear-gradient(180deg, #FFFFFF 10.65%, #BCBAE2 55%, #6762AF 85.65%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </span>

                  {/* Label: Poppins 500 20px/24px -0.5px white */}
                  <span
                    className="font-[family-name:var(--font-poppins)] font-medium text-white text-center"
                    style={{ fontSize: "20px", lineHeight: "24px", letterSpacing: "-0.5px" }}
                  >
                    {s.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote: Poppins 500 16px/150% -0.25px white, max 620px */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-[family-name:var(--font-poppins)] font-medium text-white text-center max-w-[620px]"
            style={{ fontSize: "16px", lineHeight: "150%", letterSpacing: "-0.25px" }}
          >
            Built on trust, backed by Arora Health Group, delivered through telehealth.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
