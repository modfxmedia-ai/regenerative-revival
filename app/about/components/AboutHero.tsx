"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Star } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="/about/imgi_71_HERO-STEM-CELL.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply" />
      </div>

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 pt-32 pb-24 text-center">
        {/* Badge */}
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
          <span className="text-sm font-medium text-white/80 font-sans">
            About Regenerative Revival
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white"
        >
          Delivering Advanced Regenerative{" "}
          <span className="bg-gradient-to-r from-primary-light via-[#c4a0f0] to-gold-light bg-clip-text text-transparent">
            Therapies for Everyone
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed text-white/60 font-sans"
        >
          Helping you harness the power of stem cell therapy and take the first
          step towards a healthier and happier life.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/#contact"
            className="group relative flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 font-sans"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Get Started With Your Treatment Today
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-5"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1.5 text-sm font-bold text-white font-sans">4.9</span>
          </div>
          <span className="h-3.5 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-sm text-white/60 font-sans">
            <Shield className="h-4 w-4 text-primary-light" />
            FDA Compliant
          </div>
          <span className="h-3.5 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-sm text-white/60 font-sans">
            <Sparkles className="h-4 w-4 text-primary-light" />
            10,000+ Patients Treated
          </div>
        </motion.div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
