"use client";

import { motion } from "framer-motion";

export default function NewsHero() {
  return (
    <section className="relative bg-secondary overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-20">
        <div className="max-w-4xl">
          {/* <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 48 }}
            transition={{ duration: 0.6 }}
            className="h-[3px] bg-gradient-to-r from-primary-light to-gold mb-8"
          /> */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary-light/60 font-sans mb-5"
          >
            The Journal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight"
          >
            News &<br />
            <span className="bg-gradient-to-r from-primary-light via-[#c4a0f0] to-gold-light bg-clip-text text-transparent">
              Insights
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-lg text-base text-white/35 leading-relaxed font-sans"
          >
            Research updates, expert perspectives, and the latest in
            regenerative medicine and stem cell therapy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
