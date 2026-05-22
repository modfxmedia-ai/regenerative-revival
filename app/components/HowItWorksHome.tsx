"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  {
    num: 1,
    title: "Take the 2-minute quiz",
    desc: "Tell us your goals, symptoms, and state. We route you to the right program and the right clinician on our team.",
  },
  {
    num: 2,
    title: "Meet your medical team",
    desc: "Connect with a licensed clinician via telehealth. Labs ordered if needed.",
  },
  {
    num: 3,
    title: "Get a personalized plan",
    desc: "Your provider builds a personalized dosing protocol. Medication ships within 3–5 business days.",
  },
  {
    num: 4,
    title: "Treatment delivered",
    desc: "Ongoing check-ins and dosing adjustments to keep you progressing safely.",
  },
];

export default function HowItWorksHome() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#EAEFF7] py-20 lg:py-24 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#6762AF] to-transparent" />

      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#6762AF] mb-4">
            Just Four Steps
          </p>
          <h2 className="font-[family-name:var(--font-poppins)] font-bold text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] text-[#1A1F30] leading-[1.1] tracking-[-0.02em]">
            How it works
          </h2>
          <p className="mt-4 text-[15px] text-[#7A7F95]">
            Between where you are now and where you actually want to be.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 border border-[#E2DFF0] hover:border-[#6762AF]/30 hover:shadow-[0_16px_40px_-8px_rgba(103,98,175,0.15)] hover:-translate-y-0.5 transition-all duration-400 text-center"
            >
              {/* Step number badge */}
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAEFF7] border border-[#C5DBF7] text-[14px] font-bold text-[#345691] mb-5 group-hover:bg-[#6762AF] group-hover:text-white group-hover:border-[#6762AF] transition-all duration-300">
                {step.num}
              </div>

              <h3 className="font-[family-name:var(--font-poppins)] font-bold text-[20px] lg:text-[22px] text-[#1A1F30] leading-snug mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-[#7A7F95] leading-[1.65] max-w-[280px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mt-10"
        >
          <Link
            href="/consult-router"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#1A1F30] px-8 text-[14px] font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(26,31,48,0.5)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Take The 2-Minute Quiz
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
