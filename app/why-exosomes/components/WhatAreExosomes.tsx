"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, FlaskConical, ShieldCheck, Dna } from "lucide-react";

const highlights = [
  {
    icon: Send,
    title: "Cell Communication",
    description:
      "Act as communication vehicles between cells, carrying therapeutic signals.",
  },
  {
    icon: FlaskConical,
    title: "Proteins & Lipids",
    description:
      "Carry proteins, lipids, and genetic material like microRNA to recipient cells.",
  },
  {
    icon: ShieldCheck,
    title: "Cell-Free Therapy",
    description:
      "Not living cells — they are byproducts that carry therapeutic signals safely.",
  },
  {
    icon: Dna,
    title: "MSC Derived",
    description:
      "Secreted by mesenchymal stem cells known for regenerative properties.",
  },
];

export default function WhatAreExosomes() {
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
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80"
                alt="Exosome therapy research"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-2xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Nano-Sized
                  </div>
                  <div className="text-xs text-gray-500 font-sans">
                    Cell-free vesicles
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Accent badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -left-4 bg-primary/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(107,63,160,0.3)]"
            >
              <div className="text-2xl font-bold text-white">MSC</div>
              <div className="text-xs text-white/70 font-sans">
                Stem Cell Derived
              </div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
              The Science
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              What Are{" "}
              <span className="gradient-text">Stem Cell Exosomes?</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed font-sans">
              Exosomes are tiny vesicles — essentially small packets — that stem
              cells release to communicate with surrounding tissue. They carry
              proteins, lipids, and genetic material like microRNA that instruct
              other cells on how to respond. In short, they deliver the
              regenerative message without any of the complexity of using live
              cells.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed font-sans">
              Because they aren&apos;t living cells, exosomes are easier to
              standardize, store, and administer. Research into their role in
              tissue repair and inflammation reduction has grown significantly —
              and what&apos;s becoming clear is that a lot of the regenerative
              benefit we associate with stem cells may actually be driven by
              the exosomes they produce.
            </p>

            {/* Highlight cards */}
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
                    <div className="text-sm font-semibold text-gray-900">
                      {h.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5 font-sans">
                      {h.description}
                    </div>
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
