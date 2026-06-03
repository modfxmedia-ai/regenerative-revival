"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WaveDivider from "./WaveDivider";

/**
 * PatientStories — ONE wave used intentionally here: white → dark.
 * This is the only meaningful light-to-dark shift on the homepage.
 * The wave is subtle (tilt, low height) — a quiet gesture, not a headline.
 */

const stories = [
  {
    quote:
      "I was six months out from a knee replacement. The RR team walked me through what regenerative therapy could and couldn't do, including what probably wouldn't work. I decided to try it. Two months later, I'm hiking with my dog again. They never promised that outcome. For me, it's been the right call so far.",
    name: "David R.",
    location: "Florida",
    program: "Regenerative Therapy",
    initial: "D",
    accent: "#6762AF",
  },
  {
    quote:
      "The thing that sold me was that the same clinician reviewing my testosterone was reviewing my peptide stack. Nobody had ever looked at the whole picture before. It finally feels like I have a medical team, not four subscriptions.",
    name: "Marcus T.",
    location: "Texas",
    program: "Hormone & Peptide",
    initial: "M",
    accent: "#345691",
  },
  {
    quote:
      "NAD+ was something I'd been curious about for two years. Doing it inside a real clinical program, with my labs, with a team that also manages my hormones, changed the whole equation. This is what longevity care was supposed to look like.",
    name: "Sandra K.",
    location: "California",
    program: "NAD+ & Longevity",
    initial: "S",
    accent: "#583563",
  },
];

export default function PatientStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Single intentional transition: white → midnight */}
      <WaveDivider fill="#1A1F30" type="tilt" height={60} />

      <section
        ref={ref}
        className="relative py-24 lg:py-32 bg-[#1A1F30] overflow-hidden"
      >
        {/* Aurora — restrained */}
        <div className="absolute top-0 left-[-8%] w-[600px] h-[500px] rounded-full bg-[#6762AF]/10 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-[-8%] w-[500px] h-[400px] rounded-full bg-[#345691]/12 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-[0.18] pointer-events-none" />

        <div className="relative mx-auto max-w-[1100px] px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-14 lg:mb-16"
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5]">
              Patient Stories
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-medium text-[2.5rem] sm:text-5xl lg:text-[3.25rem] text-white leading-[1.05] tracking-[-0.04em]">
              Real patients.<br className="hidden sm:block" /> Real words.
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {stories.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-[1.75rem] bg-white/[0.05] border border-white/[0.07]
                  hover:border-white/[0.14] hover:bg-white/[0.08]
                  hover:shadow-[0_24px_56px_-12px_rgba(103,98,175,0.25)]
                  hover:-translate-y-1 transition-all duration-500 overflow-hidden p-7 lg:p-8 flex flex-col"
              >
                {/* Per-card top accent line — appears on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${s.accent}88, transparent)`,
                  }}
                />

                {/* Quote mark */}
                <span
                  className="block text-[48px] leading-none mb-3 font-[family-name:var(--font-poppins)]"
                  style={{ color: s.accent + "CC" }}
                >
                  &ldquo;
                </span>

                <p className="text-[13.5px] text-white/70 leading-[1.75] flex-1">{s.quote}</p>

                {/* Attribution */}
                <div className="mt-7 pt-5 border-t border-white/[0.08] flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                    style={{ background: `${s.accent}33`, border: `1px solid ${s.accent}44` }}
                  >
                    {s.initial}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white">
                      {s.name}{" "}
                      <span className="text-white/35 font-normal">· {s.location}</span>
                    </p>
                    <p className="text-[11px] text-white/35 mt-0.5">{s.program} patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
