"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Leaf, ShieldCheck, Dna } from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Enhanced Healing & Regeneration",
    description:
      "MSCs from Wharton's jelly jumpstart the body's repair mechanisms, accelerating healing and potentially reducing recovery time for injuries and chronic conditions.",
  },
  {
    icon: Leaf,
    title: "Reduced Inflammation",
    description:
      "These stem cells possess anti-inflammatory properties, helping to manage pain and swelling associated with tissue damage.",
  },
  {
    icon: ShieldCheck,
    title: "Minimal Rejection Risk",
    description:
      "The immune-privileged nature of Wharton's jelly-derived MSCs lowers the likelihood of the body rejecting the therapy, opening up stem cell therapy to a wider range of patients.",
  },
];

export default function StemCellBenefits() {
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
            Key Benefits
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Benefits of Wharton&apos;s Jelly in{" "}
            <span className="gradient-text">Stem Cell Therapy</span>
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16 font-sans"
        >
          When people ask us why MSCs from Wharton&apos;s Jelly, the answer
          comes down to three things that matter most: how well they work,
          how safely they&apos;re tolerated, and how consistently we see
          meaningful results across a wide range of clients.
        </motion.p>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-4xl mx-auto"
        >
          <img
            src="2149611219.jpg"
            alt="Medical professional consulting with patient"
            className="w-full h-[320px] object-cover"
          />
        </motion.div>

        {/* Benefits — horizontal cards */}
        <div className="grid gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white/70 backdrop-blur-2xl rounded-2xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)] hover:shadow-[0_16px_50px_rgba(107,63,160,0.1)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex flex-col sm:flex-row items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                  <b.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed font-sans">
                    {b.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
