"use client";

import { motion } from "framer-motion";
import { Dna, ShieldCheck, Zap } from "lucide-react";

export default function StemTherapyHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/2148882109.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-secondary/35 mix-blend-multiply" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] px-5 py-2.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light" />
            </span>
            <span className="text-sm font-medium text-white/80 font-sans">Advanced Treatment</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white"
          >
            Stem Cell{" "}
            <span className="bg-gradient-to-r from-primary-light via-[#c4a0f0] to-gold-light bg-clip-text text-transparent">
              Therapy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-white/55 font-sans"
          >
            Harness the regenerative power of mesenchymal stem cells to promote
            natural healing, reduce inflammation, and restore damaged tissues.
            A cutting-edge, non-invasive approach to lasting pain relief and
            improved quality of life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {[
              { icon: Dna, label: "MSC-Based Therapy" },
              { icon: ShieldCheck, label: "Minimally Invasive" },
              { icon: Zap, label: "Accelerated Healing" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] px-5 py-2.5">
                <item.icon className="h-4 w-4 text-primary-light" />
                <span className="text-sm font-medium text-white/70 font-sans">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
