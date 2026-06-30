"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export default function WJCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/544.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/85 to-secondary/75" />
        <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply" />
      </div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] px-5 py-2.5 mb-8"
        >
          <Sparkles className="h-4 w-4 text-primary-light" />
          <span className="text-sm font-medium text-white/80 font-sans">Learn More</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Discover the Power of{" "}
          <span className="bg-gradient-to-r from-primary-light via-[#c4a0f0] to-gold-light bg-clip-text text-transparent">
            Wharton&apos;s Jelly
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 text-lg text-white/55 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Ready to explore how Wharton&apos;s Jelly can support your healing
          journey? Schedule a free consultation with our team to learn more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/consult-router"
            className="group relative flex h-16 items-center justify-center gap-2.5 rounded-2xl bg-primary px-10 text-lg font-semibold text-white overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 font-sans"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Take The 2-Minute Quiz
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="tel:+16513718668"
            className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] px-9 text-lg font-semibold text-white transition-all hover:bg-white/[0.15] hover:-translate-y-0.5 font-sans"
          >
            <Phone className="h-5 w-5" /> Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
