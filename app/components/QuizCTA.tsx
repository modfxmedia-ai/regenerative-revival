"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";

/**
 * "Not sure where to start? Take the 2-minute quiz." — full-bleed CTA
 * with a purple-to-blue gradient, animated DNA helix motif, soft bokeh,
 * and a centered white pill button. Sits just above the footer.
 */

export default function QuizCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* === Background photo === */}
      <div className="absolute inset-0">
        <Image src="/8470.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        {/* Tinted overlays to match the purple-blue figma look */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3F2549]/85 via-[#6762AF]/75 to-[#345691]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(103,98,175,0.45),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(52,86,145,0.45),transparent_65%)] pointer-events-none" />
      </div>

      <div className="relative">
        {/* Bokeh dots */}
        <Bokeh />

        {/* DNA helix — left side */}
        <div className="absolute left-0 top-0 bottom-0 w-[40%] hidden md:block opacity-50 pointer-events-none">
          <DNAHelix />
        </div>
        {/* DNA helix — right side mirrored */}
        <div className="absolute right-0 top-0 bottom-0 w-[35%] hidden md:block opacity-40 pointer-events-none scale-x-[-1]">
          <DNAHelix variant="right" />
        </div>

        {/* Subtle noise */}
        <div className="absolute inset-0 noise-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />

        {/* === Content === */}
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-white/85">
              Get Started
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-[family-name:var(--font-fraunces)] font-normal text-[2.5rem] sm:text-5xl lg:text-[3.75rem] text-white leading-[1.05] tracking-[-0.02em]"
          >
            Not sure where to start?<br />
            Take the 2-minute quiz.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 text-[15px] lg:text-[16px] text-white/80 leading-[1.7] max-w-[540px] mx-auto"
          >
            We&apos;ll route you to the right clinician and the right program. If you&apos;re not a fit for any of them, we&apos;ll tell you that too. That&apos;s the whole point.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10"
          >
            <a
              href="/consult-router"
              className="group relative inline-flex h-14 items-center gap-2.5 rounded-full bg-white px-8 text-[15px] font-semibold text-[#1A1F30] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_48px_-12px_rgba(255,255,255,0.4)] hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-[#6762AF]" />
                Take The 2-Minute Quiz
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-[#F1ECF8] to-transparent" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Animated DNA helix SVG — slow rotation feel via two interlocking
   sine paths and connector rungs that fade with depth.
   ============================================================ */
function DNAHelix({ variant = "left" }: { variant?: "left" | "right" }) {
  // Generate vertical helix points
  const height = 100;
  const cycles = 4;
  const points = Array.from({ length: 80 }, (_, i) => {
    const t = i / 79;
    const y = t * height;
    const x = 50 + Math.sin(t * Math.PI * 2 * cycles) * 40;
    const x2 = 50 + Math.sin(t * Math.PI * 2 * cycles + Math.PI) * 40;
    return { y, x, x2 };
  });

  const rungs = Array.from({ length: 24 }, (_, i) => {
    const t = i / 23;
    const y = t * height;
    const x = 50 + Math.sin(t * Math.PI * 2 * cycles) * 40;
    const x2 = 50 + Math.sin(t * Math.PI * 2 * cycles + Math.PI) * 40;
    return { y, x, x2 };
  });

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`helix-grad-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Strand 1 */}
      <path
        d={`M ${points.map((p, i) => `${i === 0 ? "" : "L "}${p.x} ${p.y}`).join(" ")}`}
        stroke={`url(#helix-grad-${variant})`}
        strokeWidth="0.4"
        vectorEffect="non-scaling-stroke"
      />
      {/* Strand 2 */}
      <path
        d={`M ${points.map((p, i) => `${i === 0 ? "" : "L "}${p.x2} ${p.y}`).join(" ")}`}
        stroke={`url(#helix-grad-${variant})`}
        strokeWidth="0.4"
        vectorEffect="non-scaling-stroke"
      />
      {/* Rungs */}
      {rungs.map((r, i) => (
        <line
          key={i}
          x1={r.x}
          y1={r.y}
          x2={r.x2}
          y2={r.y}
          stroke="#FFFFFF"
          strokeOpacity={0.3}
          strokeWidth="0.3"
          vectorEffect="non-scaling-stroke"
        />
      ))}
      {/* Glowing nodes at peaks */}
      {points.filter((_, i) => i % 6 === 0).map((p, i) => (
        <circle key={`a-${i}`} cx={p.x} cy={p.y} r="0.5" fill="#FFFFFF" fillOpacity={0.6} />
      ))}
    </svg>
  );
}

/* Soft bokeh dots floating across the gradient */
function Bokeh() {
  const dots = [
    { left: "12%", top: "20%", size: 60, opacity: 0.18, delay: 0 },
    { left: "8%", top: "70%", size: 80, opacity: 0.14, delay: -3 },
    { left: "30%", top: "85%", size: 100, opacity: 0.16, delay: -5 },
    { left: "65%", top: "15%", size: 90, opacity: 0.18, delay: -2 },
    { left: "82%", top: "65%", size: 110, opacity: 0.2, delay: -6 },
    { left: "92%", top: "30%", size: 70, opacity: 0.16, delay: -4 },
    { left: "55%", top: "75%", size: 50, opacity: 0.22, delay: -1 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white blur-xl animate-float-slow"
          style={{
            left: d.left,
            top: d.top,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.opacity,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
