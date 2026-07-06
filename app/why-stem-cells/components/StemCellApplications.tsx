"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bone, Activity, Brain, FlaskConical } from "lucide-react";

const applications = [
  {
    icon: Bone,
    title: "Orthopedic Injuries & Degeneration",
    description:
      "Stem cell therapy holds promise for accelerating the healing of sports injuries to tendons, ligaments, cartilage, and even bone. It may also combat degenerative conditions like osteoarthritis, relieve pain and improve joint function.",
  },
  {
    icon: Activity,
    title: "Wound Healing",
    description:
      "Research suggests that these stem cells could promote faster wound closure and reduce scarring, supporting the body's natural repair processes.",
  },
  {
    icon: Brain,
    title: "Neurological Conditions",
    description:
      "Exploration is underway to assess potential benefits in multiple sclerosis, spinal cord injuries, and other neurological disorders.",
  },
  {
    icon: FlaskConical,
    title: "Other Applications",
    description:
      "Research continues into the use of Wharton's jelly stem cells for heart disease, autoimmune conditions, and more.",
  },
];

export default function StemCellApplications() {
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
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            Therapeutic Applications
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            From Sports Injuries to{" "}
            <span className="gradient-text">Degenerative Conditions</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16 font-sans"
        >
          The regenerative properties of Wharton&apos;s jelly-derived stem cells
          open doors for exciting therapeutic applications. Here&apos;s a
          glimpse into those areas:
        </motion.p>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-4xl mx-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80"
            alt="Athlete receiving regenerative therapy"
            className="w-full h-[320px] object-cover"
          />
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-cream/60 backdrop-blur-2xl rounded-2xl p-8 border border-gray-100 hover:shadow-[0_16px_50px_rgba(107,63,160,0.1)] hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                  <a.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">
                    {a.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
