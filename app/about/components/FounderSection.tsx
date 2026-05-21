"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Users2, Building2, Stethoscope } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users2, value: "10,000+", label: "Patients Connected" },
  { icon: Stethoscope, value: "100+", label: "Licensed Practitioners" },
  { icon: MapPin, value: "50", label: "States Covered" },
  { icon: Building2, value: "Since 2018", label: "Industry Leader" },
];

export default function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-[#1A1F30] overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-[#6762AF]/15 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#345691]/20 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 lux-grid opacity-25 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-12px_rgba(0,0,0,0.5)]">
              <Image src="/photos/seth-berge-w-backdrop.jpg" alt="Seth Berge — Founder of Regenerative Revival" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#583563]/30 via-transparent to-[#71A7F5]/10" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2.5rem] pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-1">Founder</p>
                <p className="font-[family-name:var(--font-fraunces)] italic text-2xl text-white">Seth Berge</p>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-6 shadow-[0_16px_40px_-8px_rgba(26,31,48,0.3)] border border-[#F1ECF8]"
            >
              <div className="font-[family-name:var(--font-fraunces)] italic text-5xl text-[#6762AF]">8+</div>
              <div className="text-[11px] text-[#4A4F66] mt-1 leading-snug">Years in<br />Regenerative Medicine</div>
            </motion.div>

            {/* Floating accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="absolute -top-4 -left-4 bg-gradient-to-br from-[#6762AF] to-[#583563] rounded-2xl p-4 shadow-[0_8px_32px_rgba(103,98,175,0.4)]"
            >
              <div className="font-[family-name:var(--font-fraunces)] italic text-2xl text-white">1000s</div>
              <div className="text-[11px] text-white/70">Lives Changed</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5]">Our Founder</span>
            <h2 className="mt-4 font-[family-name:var(--font-fraunces)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-white leading-[1.05] tracking-[-0.02em]">
              Meet <em className="italic text-[#71A7F5]">Seth Berge</em>
            </h2>
            <p className="mt-2 text-base text-[#71A7F5] font-medium">Founder of Regenerative Revival</p>

            <p className="mt-6 text-base text-white/65 leading-relaxed">
              Seth Berge is a visionary leader in the field of regenerative medicine, dedicated to helping individuals overcome chronic pain. Since 2018, Seth has been at the forefront of connecting thousands of patients with experienced providers offering the best regenerative medicine products on the market.
            </p>
            <p className="mt-4 text-[14px] text-white/45 leading-relaxed">
              He has built strong relationships with top tissue manufacturers and has access to over 100 trained and licensed practitioners, including PAs, MDs, and DOs, across the 50 states.
            </p>

            {/* Stats grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="border-t border-white/10 pt-4"
                >
                  <s.icon className="h-4 w-4 text-[#71A7F5] mb-2" />
                  <div className="text-[17px] font-semibold text-white">{s.value}</div>
                  <div className="text-[11px] text-white/45 mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10"
            >
              <a
                href="/consult-router"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                Schedule A Free Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
