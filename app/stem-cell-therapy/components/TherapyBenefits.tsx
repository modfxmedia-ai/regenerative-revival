"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Leaf, ShieldCheck, Zap, Activity, Timer } from "lucide-react";

const benefits = [
  { icon: HeartPulse, title: "Tissue Repair & Regeneration", description: "Stem cells differentiate into cartilage, bone, and muscle cells, repairing damaged tissues at the source." },
  { icon: Leaf, title: "Reduced Inflammation", description: "Anti-inflammatory properties help manage pain and swelling, creating a favorable healing environment." },
  { icon: ShieldCheck, title: "Low Rejection Risk", description: "Immune-privileged mesenchymal stem cells minimize the likelihood of rejection, making therapy accessible to more patients." },
  { icon: Zap, title: "Accelerated Recovery", description: "Jumpstart the body's repair mechanisms, reducing recovery time for injuries and chronic conditions." },
  { icon: Activity, title: "Improved Joint Function", description: "Regenerate cartilage and reduce joint inflammation, restoring mobility and reducing stiffness." },
  { icon: Timer, title: "Long-Lasting Results", description: "By addressing root causes rather than symptoms, stem cell therapy provides sustained relief over time." },
];

export default function TherapyBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-[#F1ECF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6762AF]/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Key Benefits</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            Benefits of <span className="text-[#6762AF]">stem cell therapy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white rounded-[20px] p-7 border border-white hover:border-[#6762AF]/15 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10 mb-5 group-hover:scale-110 transition-transform duration-300">
                <b.icon className="h-6 w-6 text-[#6762AF]" />
              </div>
              <h3 className="text-[16px] font-semibold text-[#1A1F30] mb-2">{b.title}</h3>
              <p className="text-[13.5px] text-[#4A4F66] leading-[1.65]">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
