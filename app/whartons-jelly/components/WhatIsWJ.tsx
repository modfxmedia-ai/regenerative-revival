"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dna, FlaskConical, HeartPulse, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Dna,
    title: "Mesenchymal Stem Cells",
    description:
      "Rich in powerful stem cells known for their regenerative capabilities.",
  },
  {
    icon: FlaskConical,
    title: "Growth Factors",
    description:
      "Contains cytokines and growth factors that stimulate tissue repair.",
  },
  {
    icon: HeartPulse,
    title: "Hyaluronic Acid",
    description:
      "Naturally occurring compound that supports joint lubrication and cushioning.",
  },
  {
    icon: Leaf,
    title: "Collagen Matrix",
    description:
      "Structural proteins that provide scaffolding for new tissue growth.",
  },
];

export default function WhatIsWJ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src="/8470.jpg"
                alt="Wharton's Jelly stem cells"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-2xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10">
                  <Dna className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Stem Cell Rich</div>
                  <div className="text-xs text-gray-500 font-sans">Umbilical cord derived</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -left-4 bg-primary/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(107,63,160,0.3)]"
            >
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-white/70 font-sans">Natural Source</div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
              The Science
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              What is{" "}
              <span className="gradient-text">Wharton&apos;s Jelly?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed font-sans">
              Found within the umbilical cord, Wharton&apos;s Jelly is a
              gel-like substance rich in mesenchymal stem cells. These powerful
              cells are known for their regenerative capabilities, capable of
              differentiating into various cell types essential for repairing
              damaged tissues and reducing inflammation.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed font-sans">
              Composed of hyaluronic acid, collagen, and growth factors,
              Wharton&apos;s Jelly provides a unique combination of components
              that support tissue repair and regeneration. This makes it an
              innovative option for addressing chronic pain and healing the
              body from within.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-cream/60 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0">
                    <h.icon className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{h.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 font-sans">{h.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
