"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Take the 2-minute quiz",
    desc: "Tell us your goals, symptoms, and state. We route you to the right program and the right clinician on our team.",
    color: "from-[#6762AF]/20 to-[#583563]/10",
    dot: "bg-[#6762AF]",
  },
  {
    num: "02",
    title: "Meet your medical team",
    desc: "Connect with a licensed clinician via telehealth. Labs ordered if needed.",
    color: "from-[#345691]/20 to-[#71A7F5]/10",
    dot: "bg-[#345691]",
  },
  {
    num: "03",
    title: "Get a personalized plan",
    desc: "Your provider builds a personalized dosing protocol. Medication ships within 3–5 business days.",
    color: "from-[#583563]/20 to-[#6762AF]/10",
    dot: "bg-[#583563]",
  },
  {
    num: "04",
    title: "Treatment delivered",
    desc: "Ongoing check-ins and dosing adjustments to keep you progressing safely.",
    color: "from-[#71A7F5]/20 to-[#345691]/10",
    dot: "bg-[#71A7F5]",
  },
];

export default function HowItWorksHome() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#F0EBF8]"
    >
      {/* Ambient orbs — depth without noise */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full bg-[#6762AF]/06 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#345691]/08 blur-[120px] pointer-events-none" />

      {/* Ghost step counter — visual texture */}
      <div
        className="absolute right-6 bottom-10 text-[18rem] font-bold text-[#6762AF]/[0.03] select-none pointer-events-none leading-none tracking-[-0.06em]"
        aria-hidden
      >
        04
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#6762AF] mb-4">
            Just Four Steps
          </p>
          <h2 className="font-[family-name:var(--font-poppins)] font-medium text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] text-[#1A1F30] leading-[1.1] tracking-[-0.04em]">
            How it works
          </h2>
          <p className="mt-5 text-[15px] text-[#7A7F95] max-w-md mx-auto leading-relaxed">
            Between where you are now and where you actually want to be.
          </p>
        </motion.div>

        {/* Steps — alternating timeline */}
        <div className="relative">
          {/* Vertical connector thread */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-14 bottom-14 w-px origin-top hidden lg:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(103,98,175,0.3) 15%, rgba(103,98,175,0.3) 85%, transparent)",
            }}
          />

          <div className="flex flex-col gap-10 lg:gap-12">
            {steps.map((step, i) => {
              const isRight = i % 2 !== 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.75,
                    delay: 0.15 + i * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0"
                >
                  {/* Card — sits on left or right half */}
                  <div
                    className={`relative w-full lg:w-[calc(50%-3rem)] rounded-[1.75rem] bg-white border border-[#E2DFF0]/80 p-7 lg:p-9
                      hover:border-[#6762AF]/25 hover:shadow-[0_20px_56px_-12px_rgba(103,98,175,0.15)]
                      hover:-translate-y-0.5 transition-all duration-500 group overflow-hidden
                      ${isRight ? "lg:ml-auto" : "lg:mr-auto"}`}
                  >
                    {/* Gradient bloom on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.75rem] pointer-events-none`}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${step.dot} text-white text-[11px] font-bold shrink-0`}
                        >
                          {step.num}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#6762AF]/20 to-transparent" />
                      </div>
                      <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[19px] lg:text-[21px] text-[#1A1F30] leading-snug mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[13.5px] text-[#7A7F95] leading-[1.7]">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.13 }}
                      className={`h-4 w-4 rounded-full ${step.dot} ring-4 ring-white shadow-[0_0_12px_3px_rgba(103,98,175,0.3)]`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            href="/consult-router"
            className="group inline-flex h-13 py-3.5 items-center gap-2.5 rounded-full bg-[#1A1F30] px-9 text-[14px] font-semibold text-white hover:bg-[#583563] hover:shadow-[0_12px_36px_-8px_rgba(88,53,99,0.5)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Take The 2-Minute Quiz
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
