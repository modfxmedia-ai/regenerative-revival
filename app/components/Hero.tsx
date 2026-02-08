"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Star, Sparkles, ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[750px] max-h-[1100px] overflow-hidden bg-black">
      {/* Full-bleed DNA video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover scale-105"
        >
          <source
            src="https://65iosdxq0lyc5cm9.public.blob.vercel-storage.com/0_Dna_Double_Helix_3840x2160.mp4"
            type="video/mp4"
          />
        </video>
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        {/* Purple brand tint */}
        <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply" />
      </div>

      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content — bottom left */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full mx-auto max-w-7xl px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-28">
          <div className="max-w-3xl">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.08] px-5 py-2.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light" />
              </span>
              <span className="text-sm font-medium text-white/70">
                Advanced Regenerative Medicine
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.04] tracking-tight"
            >
              <span className="text-white">Your Body Can</span>
              <br />
              <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
                Heal Itself.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/50"
            >
              Wharton&apos;s Jelly stem cell therapy that eases pain, restores
              vitality, and renews your body from within — delivered by licensed
              practitioners you can trust.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group relative flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Book Free Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <button
                onClick={() => setVideoOpen(true)}
                className="group flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] px-7 text-base font-semibold text-white transition-all hover:bg-white/[0.12] hover:-translate-y-0.5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Play className="h-4 w-4 text-white ml-0.5" />
                </span>
                Watch Our Story
              </button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-sm font-bold text-white">4.9</span>
              </div>
              <span className="h-3.5 w-px bg-white/15" />
              <div className="flex items-center gap-2 text-sm text-white/50">
                <Shield className="h-4 w-4 text-primary-light" />
                FDA Compliant
              </div>
              <span className="h-3.5 w-px bg-white/15" />
              <span className="text-sm text-white/50">98% Satisfaction</span>
              <span className="h-3.5 w-px bg-white/15 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2 text-sm text-white/50">
                <Sparkles className="h-4 w-4 text-primary-light" />
                10,000+ Patients
              </div>
              <span className="h-3.5 w-px bg-white/15 hidden md:block" />
              <span className="text-sm text-white/50 hidden md:block">15+ Years Experience</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom edge — thin line transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-20 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-white/30" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video mx-6 rounded-2xl overflow-hidden bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Video player
            </div>
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
