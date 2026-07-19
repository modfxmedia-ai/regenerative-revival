"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Activity,
  ShieldCheck,
  Timer,
  Bone,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Activity,
    title: "Targets Root Causes",
    description:
      "Works to restore and rejuvenate the underlying tissues causing discomfort, not just mask symptoms.",
  },
  {
    icon: Bone,
    title: "Joint Pain & Arthritis",
    description:
      "Effective for joint pain, arthritis, and soft tissue injuries with long-term relief.",
  },
  {
    icon: TrendingUp,
    title: "Improved Function",
    description:
      "Provides long-term relief, improved function, and a better quality of life.",
  },
  {
    icon: ShieldCheck,
    title: "Minimally Invasive",
    description:
      "Offers a safer, quicker recovery compared to surgical alternatives.",
  },
  {
    icon: Timer,
    title: "Quicker Recovery",
    description:
      "Get back to your daily activities faster with minimal downtime.",
  },
  {
    icon: Stethoscope,
    title: "Expert Administration",
    description:
      "Administered by licensed practitioners - PAs, MDs, and DOs across all 50 states.",
  },
];

export default function WhyConsider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            Why Choose This Therapy
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Why Consider Wharton&apos;s Jelly{" "}
            <span className="gradient-text">Stem Cell Therapy?</span>
          </h2>
        </motion.div>

        {/* Main paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16 font-sans"
        >
          Unlike traditional options that often focus on masking pain
          symptoms, Wharton&apos;s Jelly stem cell therapy works to restore and
          rejuvenate the underlying tissues causing discomfort. Whether dealing
          with joint pain, arthritis, or soft tissue injuries, the regenerative
          properties of these stem cells can provide long-term relief, improved
          function, and a better quality of life. Plus, with its minimally
          invasive application, this therapy offers a safer, quicker recovery
          compared to surgical alternatives.
        </motion.p>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white/70 backdrop-blur-2xl rounded-2xl p-7 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)] hover:shadow-[0_16px_50px_rgba(107,63,160,0.1)] hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="relative text-lg font-semibold text-gray-900 mb-2">
                {b.title}
              </h3>
              <p className="relative text-sm text-gray-500 leading-relaxed font-sans">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="/consult-router"
            className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-10 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 font-sans"
          >
            Take The 2-Minute Quiz
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
