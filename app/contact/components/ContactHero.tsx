"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#021E3C]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Why Exosomes Page&Contact page-_Ready to Explore Exosome Therapy__ And background image on contact pagesection.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/70 to-[#021E3C]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021E3C]/70 via-[#021E3C]/25 to-transparent" />
        <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
      </div>

      {/* Aurora */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#6762AF]/20 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-8 pb-16 lg:pb-20 pt-12 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <span className="h-px w-8 bg-white/30" />
          <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">Contact Us</span>
          <span className="h-px w-8 bg-white/30" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-poppins)] font-normal text-[2.5rem] sm:text-5xl lg:text-[4.5rem] text-white leading-[1.02] tracking-[-0.02em] max-w-4xl mx-auto"
        >
          Expert guidance on your{" "}
          <span className="text-[#6762AF] font-semibold">
            regenerative health journey
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-7 max-w-xl mx-auto text-base lg:text-lg leading-relaxed text-white/60"
        >
          Have questions about our treatments? Ready to schedule your consultation? We&apos;re here to help.
        </motion.p>

        {/* Quick action pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: CalendarCheck, label: "Schedule Consultation" },
            { icon: HelpCircle, label: "Ask a Question" },
            { icon: MessageCircle, label: "Get in Touch" },
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
    </section>
  );
}
