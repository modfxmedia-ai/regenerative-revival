"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * "Patient stories" — three soft lavender quote cards in a clean row.
 * Pure typography focus per figma: big serif heading, no embellishments
 * on the cards beyond the curly opening quote glyph.
 */

const stories = [
  {
    quote:
      "I was six months out from a knee replacement. The RR team walked me through what regenerative therapy could and couldn't do, including what probably wouldn't work. I decided to try it. Two months later, I'm hiking with my dog again. They never promised that outcome. For me, it's been the right call so far.",
    name: "David R.",
    location: "Florida",
    program: "Regenerative Therapy patient",
  },
  {
    quote:
      "The thing that sold me was that the same clinician reviewing my testosterone was reviewing my peptide stack. Nobody had ever looked at the whole picture before. It finally feels like I have a medical team, not four subscriptions.",
    name: "David R.",
    location: "Florida",
    program: "Hormone & Peptide patient",
  },
  {
    quote:
      "NAD+ was something I'd been curious about for two years. Doing it inside a real clinical program, with my labs, with a team that also manages my hormones, changed the whole equation. This is what longevity care was supposed to look like.",
    name: "David R.",
    location: "Florida",
    program: "NAD+ & Longevity patient",
  },
];

export default function PatientStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative pt-12 pb-24 lg:pt-16 lg:pb-28 bg-white overflow-hidden">
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">
            Patient Stories
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-fraunces)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            Real patients. Real words. Real lives.
          </h2>
        </motion.div>

        {/* Three quote cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl bg-[#F4EFFA] p-6 lg:p-7 hover:bg-white hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Curly opening quote */}
              <span className="block font-[family-name:var(--font-fraunces)] text-[42px] leading-none text-[#1A1F30] mb-2">
                &ldquo;
              </span>

              <p className="text-[13.5px] text-[#1A1F30] leading-[1.7]">{s.quote}</p>

              {/* Attribution */}
              <div className="mt-6 pt-5 border-t border-[#6762AF]/15">
                <p className="text-[13px] font-semibold text-[#1A1F30]">
                  {s.name} <span className="text-[#7A7F95] font-normal">| {s.location}</span>
                </p>
                <p className="text-[12px] text-[#7A7F95] mt-0.5">{s.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
