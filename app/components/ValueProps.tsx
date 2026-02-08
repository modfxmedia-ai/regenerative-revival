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
    <section ref={ref} className="relative py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {props.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-5">
                <p.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
