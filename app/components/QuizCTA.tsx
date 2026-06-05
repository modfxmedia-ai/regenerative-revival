"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

/**
 * QuizCTA — Figma S12 FINAL CTA
 * 600px tall, gradient(117.51deg, #533861 → #7CA8EF)
 * Background image flipped vertically, opacity 0.4, hard-light blend
 * Centered column: eyebrow · 56px headline · 18px body · white pill button
 */

export default function QuizCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: "600px" }}
    >
      {/* === Background image — flipped vertically, visible base === */}
      <div className="absolute inset-0">
        <Image
          src="/stocks-cta-image.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }}
          sizes="100vw"
          aria-hidden
        />
      </div>

      {/* === Gradient overlay — hard-light blend lets image show through === */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(117.51deg, #2a1a32 29.33%, #4a6fa8 79.71%)",
          mixBlendMode: "hard-light",
          opacity: 0.95,
        }}
      />

      {/* === Content — centered === */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="flex flex-col items-center gap-6 max-w-[1260px] w-full text-center">

          {/* Eyebrow: Poppins 500 14px uppercase 1px spacing white */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-poppins)] font-medium text-[14px] leading-[100%] tracking-[1px] uppercase text-white"
          >
            Get Started
          </motion.span>

          {/* H2: Poppins 500 56px/56px -2px white, max 623px */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-poppins)] font-medium text-white max-w-[623px]"
            style={{
              fontSize: "clamp(2rem, 4vw, 56px)",
              lineHeight: "56px",
              letterSpacing: "-2px",
            }}
          >
            Not sure where to start?<br />Take the 2-minute quiz.
          </motion.h2>

          {/* P1: Poppins 400 18px/150% -0.25px white, max 556px */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-[family-name:var(--font-poppins)] font-normal text-white max-w-[556px]"
            style={{
              fontSize: "18px",
              lineHeight: "150%",
              letterSpacing: "-0.25px",
            }}
          >
            We&apos;ll route you to the right clinician and the right program. If you&apos;re not a fit for any of them, we&apos;ll tell you that too. That&apos;s the whole point.
          </motion.p>

          {/* Button: white pill, 40px radius, 16px 32px padding */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/consult-router"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-[40px] bg-white px-8 font-semibold transition-all duration-300 hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.4)] hover:scale-[1.02]"
              style={{
                fontSize: "18px",
                letterSpacing: "-0.01em",
                color: "#1A1F30",
              }}
            >
              <Sparkles className="h-4 w-4 text-[#6762AF]" />
              Take The 2-Minute Quiz
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
