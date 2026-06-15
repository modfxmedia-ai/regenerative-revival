"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, Users, MapPin, ShieldCheck } from "lucide-react";

const HERO_VIDEO = "https://65iosdxq0lyc5cm9.public.blob.vercel-storage.com/hero-video.mov";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#021E3C]">
      {/* === Full-bleed background video === */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          poster="/8470.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        {/* Dark cinematic overlays — preserve readability over the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/80 via-[#1A1F30]/30 to-transparent" />
        <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
      </div>

      {/* === Background layers === */}

      {/* Aurora orbs — sit on top of photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-[#6762AF]/25 blur-[140px] animate-float-slow" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#345691]/30 blur-[140px] animate-float-slow" style={{ animationDelay: "-6s" }} />
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-[#583563]/20 blur-[120px] animate-pulse-soft" />
      </div>

      {/* Diagonal grid */}
      <div className="absolute inset-0 lux-grid opacity-30 pointer-events-none" />

      {/* Subtle noise */}
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none mix-blend-overlay" />

      {/* === Main content === */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top spacer for navbar */}
        <div className="h-20" />

        <div className="flex-1 flex items-center justify-center px-6 lg:px-8 py-12 lg:py-20">
          <div className="w-full max-w-5xl mx-auto text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center gap-3 mb-8"
            >
              <span className="h-px w-8 bg-white/30" />
              <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">
                Regenerative Medicine · Telehealth · Longevity
              </span>
              <span className="h-px w-8 bg-white/30" />
            </motion.div>

            {/* Headline — Poppins Medium 500, 72px, -4px letter-spacing, 110% line-height, centered */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-center"
              style={{
                fontFamily: "var(--font-poppins), system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(2.5rem, 6vw, 72px)",
                lineHeight: "110%",
                letterSpacing: "-4px",
              }}
            >
              Your Concierge Hub for<br />
              Regeneration &amp; Longevity
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 max-w-3xl mx-auto text-[15px] sm:text-[16px] leading-relaxed text-white/65 text-center"
            >
              Regenerative therapy in your home. Hormones, peptides, and NAD+ through telehealth.<br className="hidden sm:block" />
              One physician-led medical team, one patient record, one plan for the best decade of your life.
            </motion.p>

            {/* CTA — single white pill, centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex justify-center"
            >
              <a
                href="/consult-router"
                className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-white px-10 text-[15px] font-semibold text-[#1A1F30] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.5)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <Sparkles className="h-4 w-4 text-[#6762AF]" />
                  Take The 2-Minute Quiz
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#F1ECF8] to-transparent" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* === Credentials strip — matches figma: 1188×54 pill, 8px radius, bottom-16 === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative z-10 flex justify-center pb-4"
        >
          <div className="w-full max-w-[1188px] mx-auto h-[54px] bg-[#1A1F30] rounded-lg flex items-center justify-center px-10 gap-12">
            <CredItem icon={<Award className="h-[18px] w-[18px]" />} label="8+ years in Regenerative Medicine" />
            <CredItem icon={<Users className="h-[18px] w-[18px]" />} label="100+ Licensed Clinicians" />
            <CredItem icon={<MapPin className="h-[18px] w-[18px]" />} label="50 States Covered" />
            <CredItem icon={<ShieldCheck className="h-[18px] w-[18px]" />} label="Backed by Arora Health Group" />
          </div>
        </motion.div>
      </div>

      {/* Side brand text — vertical, right edge */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="brand-side-text text-white/30">SETH BERGE</span>
      </div>
    </section>
  );
}

function CredItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1 text-white">
      <span className="shrink-0">{icon}</span>
      <span className="text-[16px] font-bold leading-[110%] whitespace-nowrap">{label}</span>
    </div>
  );
}


