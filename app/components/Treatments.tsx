"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  ShieldCheck,
  Timer,
  Sparkles,
  Activity,
  Bone,
  Brain,
  HeartPulse,
  Play,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Enhanced Regeneration",
    description:
      "MSCs from Wharton's Jelly accelerate the body's natural repair processes, significantly reducing recovery time.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Inflammation",
    description:
      "Powerful anti-inflammatory properties help manage pain and swelling associated with tissue damage.",
  },
  {
    icon: Timer,
    title: "Minimal Rejection Risk",
    description:
      "The immune-privileged nature of Wharton's Jelly-derived MSCs makes treatment viable for most patients.",
  },
  {
    icon: Sparkles,
    title: "Non-Invasive Treatment",
    description:
      "No surgery required. Our protocols use advanced delivery methods for maximum efficacy with minimal downtime.",
  },
];

const conditions = [
  { icon: Bone, label: "Joint Pain & Arthritis" },
  { icon: Activity, label: "Sports Injuries" },
  { icon: HeartPulse, label: "Chronic Pain" },
  { icon: Brain, label: "Degenerative Conditions" },
];

export default function Treatments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="treatments" className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Treatments
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            The Power of{" "}
            <span className="gradient-text">Wharton&apos;s Jelly</span>
          </h2>
          <p className="mt-6 text-lg text-text-light leading-relaxed">
            This remarkable substance, found in the umbilical cord, is rich in
            mesenchymal stem cells (MSCs) and growth factors essential for tissue
            repair and regeneration.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group bg-white rounded-3xl p-8 soft-shadow hover:soft-shadow-lg transition-all hover:-translate-y-1 border border-sage"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/15 transition-colors">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{b.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Conditions + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Conditions We <span className="gradient-text">Treat</span>
            </h3>
            <p className="text-text-light mb-8 leading-relaxed">
              Stem cell therapy can relieve a variety of conditions. Our
              personalized approach ensures the right protocol for your specific
              needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {conditions.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 soft-shadow border border-sage hover:border-primary/20 transition-colors"
                >
                  <c.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{c.label}</span>
                </motion.div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              See if you qualify →
            </a>
          </motion.div>

          {/* Treatment image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-3xl overflow-hidden soft-shadow-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.regenerativerevival.com/wp-content/uploads/2024/08/pexels-edward-jenner-4033148-scaled.jpg"
              alt="Stem cell therapy treatment"
              className="w-full h-auto rounded-3xl object-cover aspect-video"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm cursor-pointer hover:bg-white transition-colors soft-shadow-lg">
                <Play className="h-8 w-8 text-primary ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
