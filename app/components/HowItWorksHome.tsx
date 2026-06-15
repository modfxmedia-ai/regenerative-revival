"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { ClipboardCheck, Stethoscope, ClipboardList, PackageCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Take the 2-minute quiz",
    desc: "Tell us your goals, symptoms, and state. We route you to the right program and the right clinician on our team.",
    icon: ClipboardCheck,
    accent: "#6762AF",
    glow: "rgba(103,98,175,0.35)",
    bloom: "from-[#6762AF]/20 to-[#583563]/5",
  },
  {
    num: "02",
    title: "Meet your medical team",
    desc: "Connect with a licensed clinician via telehealth. Labs ordered if needed.",
    icon: Stethoscope,
    accent: "#345691",
    glow: "rgba(52,86,145,0.35)",
    bloom: "from-[#345691]/20 to-[#71A7F5]/5",
  },
  {
    num: "03",
    title: "Get a personalized plan",
    desc: "Your provider builds a personalized dosing protocol. Medication ships within 3–5 business days.",
    icon: ClipboardList,
    accent: "#583563",
    glow: "rgba(88,53,99,0.35)",
    bloom: "from-[#583563]/20 to-[#6762AF]/5",
  },
  {
    num: "04",
    title: "Treatment delivered",
    desc: "Ongoing check-ins and dosing adjustments to keep you progressing safely.",
    icon: PackageCheck,
    accent: "#71A7F5",
    glow: "rgba(113,167,245,0.4)",
    bloom: "from-[#71A7F5]/20 to-[#345691]/5",
  },
];

export default function HowItWorksHome() {
  const ref = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  // Scroll progress through the timeline track — drives the fill line + comet.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cometTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cometOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.98, 1],
    [0, 1, 1, 0]
  );

  // Which steps the scroll line has already reached → light them up.
  const [activeCount, setActiveCount] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // step i is "reached" once the fill passes its node center
    const reached = steps.reduce((acc, _, i) => {
      const nodeCenter = (i + 0.5) / steps.length;
      return v >= nodeCenter - 0.06 ? i + 1 : acc;
    }, 0);
    setActiveCount(reached);
  });

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#F0EBF8]"
    >
      {/* Ambient orbs — depth without noise */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full bg-[#6762AF]/[0.06] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#345691]/[0.08] blur-[120px] pointer-events-none" />

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
          className="text-center mb-16 lg:mb-24"
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

        {/* Scroll-driven timeline */}
        <div ref={timelineRef} className="relative">
          {/* Rail position: left on mobile, center on desktop */}
          <div className="absolute left-[27px] lg:left-1/2 lg:-translate-x-1/2 top-2 bottom-2 w-px">
            {/* Static track */}
            <div className="absolute inset-0 bg-[#6762AF]/15" />

            {/* Animated fill that follows scroll */}
            <motion.div
              className="absolute left-0 top-0 w-full origin-top"
              style={{
                height: reduceMotion ? "100%" : lineHeight,
                background:
                  "linear-gradient(to bottom, #6762AF, #345691 45%, #583563 75%, #71A7F5)",
                boxShadow: "0 0 12px 1px rgba(103,98,175,0.45)",
              }}
            />

            {/* Comet head riding the tip of the fill */}
            {!reduceMotion && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 z-20"
                style={{ top: cometTop, opacity: cometOpacity }}
              >
                <span className="relative flex h-3 w-3 -translate-y-1/2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#71A7F5] opacity-70 animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white ring-2 ring-[#6762AF] shadow-[0_0_16px_4px_rgba(113,167,245,0.6)]" />
                </span>
              </motion.div>
            )}
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {steps.map((step, i) => {
              const isRight = i % 2 !== 0;
              const isActive = i < activeCount;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 48 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex items-center pl-16 lg:pl-0"
                >
                  {/* Card */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.985,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative w-full lg:w-[calc(50%-3.5rem)] rounded-[1.75rem] bg-white/90 backdrop-blur-sm
                      p-7 lg:p-9 group overflow-hidden transition-[border-color,box-shadow] duration-500
                      ${
                        isActive
                          ? "border border-[#6762AF]/30 shadow-[0_24px_64px_-16px_rgba(103,98,175,0.28)]"
                          : "border border-[#E2DFF0]/80 shadow-[0_8px_28px_-18px_rgba(103,98,175,0.18)]"
                      }
                      hover:-translate-y-1 hover:border-[#6762AF]/35 hover:shadow-[0_28px_72px_-16px_rgba(103,98,175,0.32)]
                      ${isRight ? "lg:ml-auto" : "lg:mr-auto"}`}
                  >
                    {/* Gradient bloom — intensifies when active */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.bloom} transition-opacity duration-700 rounded-[1.75rem] pointer-events-none ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Ghost number watermark */}
                    <span
                      className="absolute -top-4 right-2 font-[family-name:var(--font-poppins)] font-bold text-[5.5rem] leading-none select-none pointer-events-none transition-colors duration-500"
                      style={{ color: isActive ? `${step.accent}14` : "rgba(103,98,175,0.05)" }}
                      aria-hidden
                    >
                      {step.num}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-5">
                        <span
                          className="inline-flex h-11 w-11 items-center justify-center rounded-xl shrink-0 transition-all duration-500"
                          style={{
                            background: isActive ? step.accent : "#F0EBF8",
                            color: isActive ? "#fff" : step.accent,
                            boxShadow: isActive
                              ? `0 8px 20px -6px ${step.glow}`
                              : "none",
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span
                          className="text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500"
                          style={{ color: isActive ? step.accent : "#9A93B5" }}
                        >
                          Step {step.num}
                        </span>
                      </div>

                      <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[19px] lg:text-[22px] text-[#1A1F30] leading-snug mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[13.5px] text-[#7A7F95] leading-[1.7]">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Node on the rail */}
                  <div className="absolute left-[27px] lg:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      animate={{ scale: isActive ? 1 : 0.75 }}
                      transition={{ type: "spring", stiffness: 320, damping: 18 }}
                      className="relative flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-[#F0EBF8] transition-colors duration-500"
                      style={{
                        background: isActive ? step.accent : "#fff",
                        border: isActive ? "none" : "2px solid rgba(103,98,175,0.35)",
                        boxShadow: isActive ? `0 0 0 6px ${step.glow}` : "none",
                      }}
                    >
                      <span
                        className="h-2 w-2 rounded-full transition-colors duration-500"
                        style={{ background: isActive ? "#fff" : "rgba(103,98,175,0.4)" }}
                      />
                    </motion.div>
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Link
            href="/consult-router"
            className="btn-gradient group inline-flex h-13 py-3.5 items-center gap-2.5 px-9 text-[14px] font-semibold text-white"
          >
            Take The 2-Minute Quiz
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
