"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const conditions = [
  "Osteoarthritis & joint degeneration",
  "Sports injuries (tendons, ligaments, cartilage)",
  "Chronic back and neck pain",
  "Rotator cuff tears & shoulder injuries",
  "Knee pain & cartilage damage",
  "Tennis elbow & golfer's elbow",
  "Plantar fasciitis",
  "Soft tissue injuries",
];

export default function WhoCanBenefit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <img
                src="/724.jpg"
                alt="Patient receiving stem cell therapy consultation"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
              Conditions Treated
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Who Can{" "}
              <span className="gradient-text">Benefit?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed font-sans">
              Stem cell therapy can address a wide range of conditions. Whether
              you&apos;re an athlete recovering from injury or dealing with
              age-related degeneration, this therapy offers a path to relief.
            </p>
            <ul className="mt-8 space-y-4">
              {conditions.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="flex items-center gap-3 text-base text-gray-700 font-sans"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
