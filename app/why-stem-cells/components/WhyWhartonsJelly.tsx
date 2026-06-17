"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ShieldCheck, FlaskConical } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Potent Regenerative Potential",
    description:
      "The combination of MSCs and growth factors offers natural regenerative support for damaged tissues.",
  },
  {
    icon: FlaskConical,
    title: "Minimally Invasive Source",
    description:
      "Wharton's jelly stem cells can be ethically obtained without the need for invasive procedures.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Profile",
    description:
      "Studies demonstrate the safety and potential efficacy of Wharton's jelly-derived stem cell therapies.",
  },
];

export default function WhyWhartonsJelly() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            The Source
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Why Wharton&apos;s Jelly for{" "}
            <span className="gradient-text">Stem Cell Therapy?</span>
          </h2>
        </motion.div>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-16 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-4xl mx-auto"
        >
          <img
            src="/AdobeStock_1848700749.png"
            alt="Stem cell research and therapy"
            className="w-full h-[320px] object-cover"
          />
        </motion.div>

        {/* 3-column cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-cream/60 backdrop-blur-2xl rounded-2xl p-8 border border-gray-100 hover:shadow-[0_16px_50px_rgba(107,63,160,0.1)] hover:-translate-y-1.5 transition-all duration-500 text-center"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                <r.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="relative text-xl font-semibold text-gray-900 mb-3">
                {r.title}
              </h3>
              <p className="relative text-sm text-gray-500 leading-relaxed font-sans">
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
