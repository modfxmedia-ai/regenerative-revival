"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function StemTherapyCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/544.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021E3C] via-[#021E3C]/85 to-[#021E3C]/70" />
        <div className="absolute inset-0 bg-[#583563]/20 mix-blend-multiply" />
      </div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#6762AF]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-px w-8 bg-white/30" />
          <span className="text-[11px] font-medium tracking-[0.32em] text-white/60 uppercase">Start Healing</span>
          <span className="h-px w-8 bg-white/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-poppins)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.75rem] text-white leading-[1.05] tracking-[-0.02em]"
        >
          Ready to experience{" "}
          <span className="text-[#6762AF] font-semibold">
            stem cell therapy?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-7 text-base lg:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Take the first step towards lasting relief. Our licensed practitioners will create a personalized care plan tailored to your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/consult-router"
            className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-[15px] font-semibold text-[#1A1F30] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.4)] hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Sparkles className="h-4 w-4 text-[#6762AF]" />
              Take The 2-Minute Quiz
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#F1ECF8] to-transparent" />
          </a>
          <a
            href="tel:+16124533182"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 text-[14px] font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all"
          >
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
