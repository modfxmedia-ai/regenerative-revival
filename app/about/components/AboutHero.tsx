"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-[#021E3C]">
      <div className="absolute inset-0">
        <Image src="/about/imgi_71_HERO-STEM-CELL.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-[#021E3C]/30 to-transparent" />
        <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-px w-8 bg-white/30" />
          <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">About Regenerative Revival</span>
          <span className="h-px w-8 bg-white/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-fraunces)] font-normal text-[2.75rem] sm:text-6xl lg:text-[5rem] text-white leading-[1.02] tracking-[-0.02em] max-w-4xl mx-auto"
        >
          Delivering advanced{" "}
          <em className="italic bg-gradient-to-r from-[#8985C5] via-[#71A7F5] to-[#6762AF] bg-clip-text text-transparent">
            regenerative therapies
          </em>{" "}
          for everyone
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-7 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed text-white/60"
        >
          Helping you harness the power of stem cell therapy and take the first step towards a healthier and happier life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/consult-router"
            className="group relative inline-flex h-13 py-3.5 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-[14px] font-semibold text-[#1A1F30] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 text-[#6762AF]" />
              Get Started Today
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#F1ECF8] to-transparent" />
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-2 text-sm text-white/60">
            <ShieldCheck className="h-4 w-4 text-[#71A7F5]" />
            FDA Compliant
          </div>
          <span className="h-3.5 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Users className="h-4 w-4 text-[#71A7F5]" />
            10,000+ Patients
          </div>
          <span className="h-3.5 w-px bg-white/20" />
          <span className="text-sm text-white/60">8+ Years Experience</span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
    </section>
  );
}
