"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const conditions = [
  "Osteoarthritis & joint degeneration",
  "Sports injuries (tendons, ligaments, cartilage)",
  "Chronic back and neck pain",
  "Rotator cuff tears & shoulder injuries",
  "Knee pain & cartilage damage",
  "Tennis elbow & golfer's elbow",
  "Plantar fasciitis",
  "Soft tissue injuries",
];

export default function WhoCanBenefit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F1ECF8]/50 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
              <Image src="/724.jpg" alt="Patient receiving stem cell therapy consultation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2rem] pointer-events-none" />
            </div>
            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-[0_16px_40px_-8px_rgba(26,31,48,0.2)] border border-[#F1ECF8]"
            >
              <div className="font-[family-name:var(--font-poppins)] text-4xl text-[#6762AF]">8+</div>
              <div className="text-[11px] text-[#4A4F66] mt-1 leading-snug">Conditions<br />Addressed</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Conditions Addressed</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Who can <span className="text-[#6762AF]">benefit?</span>
            </h2>
            <p className="mt-6 text-base text-[#4A4F66] leading-relaxed">
              Stem cell therapy can address a wide range of conditions. Whether you&apos;re an athlete recovering from injury or dealing with age-related degeneration, this therapy offers a path to relief.
            </p>
            <ul className="mt-8 flex flex-col gap-3.5">
              {conditions.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  className="flex items-center gap-3 text-[14px] text-[#1A1F30]/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6762AF] shrink-0" />
                  {c}
                </motion.li>
              ))}
            </ul>
            <a
              href="/consult-router"
              className="mt-9 group inline-flex h-12 items-center gap-2 rounded-full bg-[#021E3C] px-7 text-sm font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] transition-all duration-300"
            >
              See if you qualify
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
