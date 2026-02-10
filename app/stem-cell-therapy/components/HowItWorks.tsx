"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Consultation & Assessment",
    description:
      "Your journey begins with a thorough consultation where our licensed practitioners assess your condition, review your medical history, and determine if stem cell therapy is right for you.",
  },
  {
    num: "02",
    title: "Treatment Planning",
    description:
      "A personalized treatment plan is created based on your specific needs, targeting the root cause of your pain or condition rather than just masking symptoms.",
  },
  {
    num: "03",
    title: "Stem Cell Administration",
    description:
      "Mesenchymal stem cells are carefully administered to the affected area through minimally invasive injections, guided by advanced imaging when needed.",
  },
  {
    num: "04",
    title: "Healing & Recovery",
    description:
      "The stem cells begin working immediately — differentiating into needed cell types, reducing inflammation, and stimulating your body's natural repair mechanisms.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            The Process
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            How Stem Cell Therapy{" "}
            <span className="gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative"
            >
              <span className="font-heading text-[4.5rem] leading-none font-bold text-primary/[0.06] block mb-2 select-none">
                {s.num}
              </span>
              <div className="h-[3px] w-10 bg-gradient-to-r from-primary to-primary-light mb-5 group-hover:w-16 transition-all duration-500" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
