"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartHandshake, Ribbon, UserCheck, GraduationCap } from "lucide-react";

const props = [
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description: "Tailored plans designed for your specific needs.",
  },
  {
    icon: Ribbon,
    title: "Non-Invasive Techniques",
    description: "Utilizing the latest in regenerative medicine technology.",
  },
  {
    icon: UserCheck,
    title: "Experienced Experts",
    description: "Stem cell therapy experts driven to provide top-notch patient care.",
  },
  {
    icon: GraduationCap,
    title: "Patient Empowerment",
    description: "Guidance and education throughout your treatment.",
  },
];

export default function ValueProps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {props.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col items-center text-center rounded-3xl p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(107,63,160,0.06)] hover:shadow-[0_16px_48px_rgba(107,63,160,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Glass highlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/80 to-transparent opacity-60 pointer-events-none" />

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 mb-5 group-hover:scale-110 transition-transform duration-300">
                <p.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="relative text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="relative text-sm text-gray-500 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}