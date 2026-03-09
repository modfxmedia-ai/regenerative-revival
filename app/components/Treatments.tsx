"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, ShieldCheck, Timer, Sparkles, Activity, Bone, Brain, HeartPulse } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Enhanced Regeneration", description: "MSCs from Wharton's Jelly accelerate the body's natural repair processes, significantly reducing recovery time." },
  { icon: ShieldCheck, title: "Reduced Inflammation", description: "Powerful anti-inflammatory properties help manage pain and swelling associated with tissue damage." },
  { icon: Timer, title: "Minimal Rejection Risk", description: "The immune-privileged nature of Wharton's Jelly-derived MSCs makes treatment viable for most patients." },
  { icon: Sparkles, title: "Non-Invasive Treatment", description: "No surgery required. Our protocols use advanced delivery methods for maximum efficacy with minimal downtime." },
];

const conditions = [
  { icon: Bone, label: "Joint & Mobility Wellness" },
  { icon: Activity, label: "Active Recovery & Performance" },
  { icon: HeartPulse, label: "Ongoing Discomfort & Fatigue" },
  { icon: Brain, label: "Cellular Renewal & Longevity" },
];

export default function Treatments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="treatments" className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient orbs */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">Our Protocols</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            A Full Spectrum of <span className="gradient-text">Regenerative Therapies</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From stem cells and exosomes to peptides and hormone optimization — we offer a comprehensive suite of science-backed protocols designed to support your body&apos;s natural ability to heal and renew.
          </p>
        </motion.div>

        {/* Glass benefit cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white/70 backdrop-blur-2xl rounded-3xl p-8 border border-white/80 shadow-[0_8px_32px_rgba(107,63,160,0.06)] hover:shadow-[0_20px_60px_rgba(107,63,160,0.12)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Glass shine */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent pointer-events-none" />
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="relative text-lg font-semibold text-gray-900 mb-3">{b.title}</h3>
              <p className="relative text-sm text-gray-600 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Wellness Areas We <span className="gradient-text">Support</span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our regenerative protocols are tailored to a wide range of wellness goals. We work with each client to find the right approach for their unique needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {conditions.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="group flex items-center gap-3 bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/80 shadow-[0_4px_16px_rgba(107,63,160,0.05)] hover:shadow-[0_8px_32px_rgba(107,63,160,0.1)] hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 shrink-0 group-hover:scale-110 transition-transform">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">{c.label}</span>
                </motion.div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:text-primary-dark transition-colors group">
              See if you qualify
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 z-10 pointer-events-none" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Stem cell therapy treatment" className="w-full h-auto rounded-[2rem] object-cover aspect-video" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}