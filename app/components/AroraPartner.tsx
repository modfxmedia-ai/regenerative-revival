"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "The infrastructure behind the care" — Arora Health Group partner block.
 */

export default function AroraPartner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      {/* Soft ambient */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#F1ECF8]/60 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#EAEFF7] blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* === LEFT col === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">
              The Infrastructure Behind The Care
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.5rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Serious medicine needs<br className="hidden sm:block" /> a serious partner.
            </h2>
            <a
              href="/about/arora-health"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-[#6762AF]/30 bg-white px-6 text-[13px] font-semibold text-[#1A1F30] hover:border-[#6762AF] hover:bg-[#F1ECF8]/60 hover:shadow-[0_8px_24px_-8px_rgba(103,98,175,0.3)] transition-all duration-300 group"
            >
              About Arora Health
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* === RIGHT col — Arora card === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl bg-[#F4EFFA] border border-[#6762AF]/10 p-7 lg:p-8 hover:bg-white hover:border-[#6762AF]/20 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.15)] transition-all duration-500"
          >
            {/* Top: official Arora logo */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <h3 className="font-[family-name:var(--font-poppins)] font-normal text-2xl lg:text-[28px] text-[#1A1F30] leading-tight">
                Arora Health Group
              </h3>
              <Image
                src="/arora-logo.png"
                alt="Arora Health Group"
                width={120}
                height={40}
                className="h-10 w-auto object-contain shrink-0"
              />
            </div>

            {/* Subhead */}
            <p className="font-[family-name:var(--font-poppins)] text-[17px] text-[#1A1F30] leading-snug mb-3">
              The clinical backbone.
            </p>

            <p className="text-[14px] text-[#4A4F66] leading-[1.7]">
              Physician-led team, led by our Medical Director, Dr. Sean Arora, that develops and supervises every Regenerative Revival protocol and conducts good-faith exams in every state we serve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
