"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Leaf, ShieldCheck, Zap, Activity, Timer } from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Tissue Repair & Regeneration",
    description: "Stem cells differentiate into cartilage, bone, and muscle cells, repairing damaged tissues at the source.",
  },
  {
    icon: Leaf,
    title: "Reduced Inflammation",
    description: "Anti-inflammatory properties help manage pain and swelling, creating a favorable healing environment.",
  },
  {
    icon: ShieldCheck,
    title: "Low Rejection Risk",
    description: "Immune-privileged mesenchymal stem cells minimize the likelihood of rejection, making therapy accessible to more patients.",
  },
  {
    icon: Zap,
    title: "Accelerated Recovery",
    description: "Jumpstart the body's repair mechanisms, reducing recovery time for injuries and chronic conditions.",
  },
  {
    icon: Activity,
    title: "Improved Joint Function",
    description: "Regenerate cartilage and reduce joint inflammation, restoring mobility and reducing stiffness.",
  },
  {
    icon: Timer,
    title: "Long-Lasting Results",
    description: "By addressing root causes rather than symptoms, stem cell therapy provides sustained relief over time.",
  },
];

export default function TherapyBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            Key Benefits
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Benefits of{" "}
            <span className="gradient-text">Stem Cell Therapy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/70 backdrop-blur-2xl rounded-2xl p-7 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)] hover:shadow-[0_16px_50px_rgba(107,63,160,0.1)] hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="relative text-lg font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="relative text-sm text-gray-500 leading-relaxed font-sans">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
