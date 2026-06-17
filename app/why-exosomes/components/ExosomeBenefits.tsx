"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Zap,
  Leaf,
  Brain,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Wound Healing",
    description:
      "Exosomes play a critical role in accelerating wound healing by delivering growth factors to damaged tissue.",
  },
  {
    icon: ShieldCheck,
    title: "Inflammation Reduction",
    description:
      "Carry anti-inflammatory signals that help modulate the immune response and reduce chronic inflammation.",
  },
  {
    icon: Zap,
    title: "Tissue Repair",
    description:
      "Deliver regenerative signals that stimulate the body's natural tissue repair mechanisms.",
  },
  {
    icon: Leaf,
    title: "Non-Cellular Therapy",
    description:
      "As cell-free vesicles, exosomes offer regenerative benefits without introducing foreign living cells.",
  },
  {
    icon: Brain,
    title: "Cellular Communication",
    description:
      "Act as messengers between cells, coordinating repair processes across damaged or aging tissues.",
  },
  {
    icon: Sparkles,
    title: "Anti-Aging Potential",
    description:
      "Carry therapeutic signals to aging tissues, supporting rejuvenation at the cellular level.",
  },
];

export default function ExosomeBenefits() {
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
            Regenerative Benefits
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            The Power of{" "}
            <span className="gradient-text">Exosome Therapy</span>
          </h2>
        </motion.div>

        {/* Main paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16 font-sans"
        >
          The regenerative potential of exosomes has been a subject of intense
          research in recent years. They have been shown to play a critical role
          in wound healing, tissue repair, and inflammation reduction — offering
          a cell-free approach to regenerative medicine.
        </motion.p>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-4xl mx-auto"
        >
          <img
            src="/AdobeStock_1862763747.jpeg"
            alt="Advanced regenerative medicine laboratory"
            className="w-full h-[320px] object-cover"
          />
        </motion.div>

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
            href="/contact"
            className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-10 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 font-sans"
          >
            Learn More About Exosome Therapy
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
