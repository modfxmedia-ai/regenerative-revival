"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    image: "/1.webp",
    title: "Enhanced Regeneration",
    description:
      "MSCs from Wharton's Jelly accelerate the body's natural repair processes, significantly reducing recovery time for injuries and chronic conditions.",
  },
  {
    image: "/2.webp",
    title: "Reduced Inflammation",
    description:
      "These stem cells possess powerful anti-inflammatory properties, effectively helping to manage pain and swelling associated with tissue damage.",
  },
  {
    image: "/3.webp",
    title: "Minimal Rejection Risk",
    description:
      "The immune-privileged nature of Wharton's Jelly-derived MSCs lowers the likelihood of rejection, making the treatment viable for most patients.",
  },
];

export default function WhartonsJellyPower() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
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
            Wharton&apos;s Jelly
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Harness the Power of{" "}
            <span className="gradient-text">Wharton&apos;s Jelly</span> that
            Revolutionizes Stem Cell Therapy
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed font-sans">
            At Regenerative Revival, we specialize in providing advanced stem
            cell therapy using the regenerative properties of Wharton&apos;s
            Jelly. This remarkable substance, found in the umbilical cord, is
            rich in mesenchymal stem cells (MSCs) and growth factors essential
            for tissue repair and regeneration.
          </p>
        </motion.div>

        {/* Sub-heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-14"
        >
          Benefits of Wharton&apos;s Jelly in{" "}
          <span className="gradient-text">Stem Cell Therapy:</span>
        </motion.h3>

        {/* 3 Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {b.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="/contact"
            className="group relative flex items-center justify-center gap-3 w-full py-6 bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white text-xl font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-3">
              Book Your FREE Consultation Today!
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
