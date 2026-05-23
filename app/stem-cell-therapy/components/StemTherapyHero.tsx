"use client";

import { motion } from "framer-motion";
import { Dna, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

export default function StemTherapyHero() {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-[#021E3C]">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <Image src="/2148882109.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-[#021E3C]/30 to-transparent" />
        <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
      </div>

      {/* Aurora orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#345691]/25 blur-[120px] pointer-events-none" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />
      <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 lg:pb-28 pt-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-8 bg-white/30" />
            <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">
              Regenerative Medicine
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-poppins)] font-normal text-[2.75rem] sm:text-6xl lg:text-[5rem] text-white leading-[1.02] tracking-[-0.02em]"
          >
            Stem Cell{" "}
            <span className="text-[#6762AF] font-semibold">
              Therapy
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-7 max-w-xl text-base lg:text-lg leading-relaxed text-white/60"
          >
            Harness the regenerative power of mesenchymal stem cells to promote natural healing, reduce inflammation, and restore damaged tissues — delivered in your home by a licensed clinician.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {[
              { icon: Dna, label: "MSC-Based Therapy" },
              { icon: ShieldCheck, label: "Minimally Invasive" },
              { icon: Zap, label: "Accelerated Healing" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] px-5 py-2.5"
              >
                <item.icon className="h-4 w-4 text-[#71A7F5]" />
                <span className="text-sm font-medium text-white/75">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/consult-router"
              className="group inline-flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-7 text-[14px] font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Free Consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-13 py-3.5 items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
    </section>
  );
}
