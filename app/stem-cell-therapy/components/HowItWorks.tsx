"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Consultation & Assessment", description: "Your journey begins with a thorough consultation where our licensed practitioners assess your condition, review your medical history, and determine if stem cell therapy is right for you." },
  { num: "02", title: "Care Planning", description: "A personalized care plan is created based on your specific needs, targeting the root cause of your pain or condition rather than just masking symptoms." },
  { num: "03", title: "Stem Cell Administration", description: "Mesenchymal stem cells are carefully administered to the affected area through minimally invasive injections, guided by advanced imaging when needed." },
  { num: "04", title: "Healing & Recovery", description: "The stem cells begin working immediately — differentiating into needed cell types, reducing inflammation, and stimulating your body's natural repair mechanisms." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F1ECF8]/50 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">The Process</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            How stem cell therapy <span className="text-[#6762AF]">works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-t-2 border-[#F1ECF8] hover:border-[#6762AF] pt-6 transition-colors duration-500"
            >
              <span className="font-[family-name:var(--font-poppins)] text-[4rem] leading-none text-[#6762AF]/10 group-hover:text-[#6762AF]/20 block mb-3 select-none transition-colors duration-500">
                {s.num}
              </span>
              <h3 className="text-[17px] font-semibold text-[#1A1F30] mb-3">{s.title}</h3>
              <p className="text-[13.5px] text-[#4A4F66] leading-[1.65]">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
