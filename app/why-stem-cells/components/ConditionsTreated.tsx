"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const conditions = [
  {
    category: "Tendon & Ligament Injuries",
    items: ["Rotator cuff tears", "ACL sprains", "Tennis elbow"],
  },
  {
    category: "Cartilage Damage",
    items: [
      "Pain caused by cartilage degeneration",
      "Limited motion from cartilage wear",
    ],
  },
  {
    category: "Chronic Conditions",
    items: ["Osteoarthritis", "Tendinitis / Tendinopathy"],
  },
];

export default function ConditionsTreated() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            Conditions We Address
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Conditions Addressed with{" "}
            <span className="gradient-text">Stem Cell Therapy</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16 font-sans"
        >
          At Regenerative Revival we understand the unique challenges faced by
          athletes. Wharton&apos;s jelly stem cell therapy could become a
          valuable tool for:
        </motion.p>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-4xl mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80"
            alt="Sports medicine and joint therapy"
            className="w-full h-[320px] object-cover"
          />
        </motion.div>

        {/* Condition cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {conditions.map((c, i) => (
            <motion.div
              key={c.category}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white/70 backdrop-blur-2xl rounded-2xl p-8 border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)] hover:shadow-[0_16px_50px_rgba(107,63,160,0.1)] hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <h3 className="relative text-xl font-semibold text-gray-900 mb-5 pb-4 border-b border-gray-100">
                {c.category}
              </h3>
              <ul className="relative space-y-3">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600 font-sans"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
