"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import WaveDivider from "./WaveDivider";

const values = [
  { number: "01", title: "Education First", description: "Knowledge so you can make informed decisions about your health." },
  { number: "02", title: "Patient-First Care", description: "Every plan built around your unique biology and goals." },
  { number: "03", title: "Science-Backed", description: "Protocols grounded in peer-reviewed research and evidence." },
  { number: "04", title: "Trusted Network", description: "Licensed practitioners and top-tier labs at every step." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 lg:py-32 bg-[#1A1F30] overflow-hidden">
      {/* Aurora */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-[#6762AF]/15 blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#345691]/20 blur-[140px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 lux-grid opacity-30 pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* IMAGE — left, with stat card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] luxe-shadow">
              <Image
                src="/photos/seth-berge-w-backdrop.jpg"
                alt="Seth Berge — Founder of Regenerative Revival"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#583563]/30 via-transparent to-[#71A7F5]/10" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2.5rem] pointer-events-none" />

              {/* Bottom signature */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="text-white">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-1">Founder</p>
                  <p className="lux-display text-2xl">Seth <span className="text-[#6762AF] font-semibold">Berge</span></p>
                </div>
              </div>
            </div>

            {/* Floating stat — 8+ years */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -right-4 lg:-right-12 rounded-2xl bg-white p-6 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.4)] border border-white/80"
            >
              <div className="lux-display text-5xl text-[#6762AF]">
                <span className="text-[#6762AF] font-semibold">8+</span>
              </div>
              <div className="text-xs text-[#4A4F66] mt-1 leading-snug">
                Years in<br />Regenerative Medicine
              </div>
            </motion.div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="eyebrow text-[#71A7F5]">Our Story</span>
            <h2 className="mt-4 lux-display text-4xl sm:text-5xl lg:text-[4rem] text-white leading-[1.05]">
              Built by a team that's lived the <span className="text-[#6762AF] font-semibold">promise</span> of regenerative medicine
            </h2>
            <p className="mt-7 text-lg text-white/65 leading-relaxed max-w-xl">
              Founded by Seth Berge with a singular mission: to make cutting-edge regenerative therapy accessible to everyone who needs it. We educate, we prescribe, we coordinate — under one physician-led medical team.
            </p>
            <p className="mt-4 text-base text-white/45 leading-relaxed max-w-xl">
              No waiting rooms. No fragmented care. No subscription gimmicks.
              Just clinician-led medicine, in your home or through telehealth, built around your labs and your life.
            </p>

            {/* Values grid — minimal numbered list */}
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="border-t border-white/10 pt-5"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="lux-display text-sm text-[#71A7F5]">
                      <span className="text-[#6762AF] font-semibold">{v.number}</span>
                    </span>
                    <h3 className="text-base font-semibold text-white">{v.title}</h3>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed pl-9">{v.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/about"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#1A1F30] hover:bg-[#F1ECF8] hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.3)] transition-all"
              >
                More About Us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/about/founder"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                Meet Seth →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
