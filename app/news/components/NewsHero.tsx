"use client";

import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <section className="relative bg-gradient-to-b from-[#1A1F30] to-[#21253C] overflow-hidden pt-20">
      {/* Aurora */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#6762AF]/15 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 lux-grid opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-20">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[11px] font-semibold tracking-[0.32em] uppercase text-[#71A7F5] mb-6"
          >
            The Journal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-poppins)] font-normal text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] text-white leading-[0.95] tracking-[-0.02em]"
          >
            News &amp;<br />
            <span className="text-[#6762AF] font-semibold">
              Insights
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-lg text-base text-white/45 leading-relaxed"
          >
            Research updates, expert perspectives, and the latest in regenerative medicine and stem cell therapy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
