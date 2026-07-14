"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export default function ExosomesCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/Why Exosomes Page&Contact page-_Ready to Explore Exosome Therapy__ And background image on contact pagesection.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/85 to-secondary/75" />
        <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply" />
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] px-5 py-2.5 mb-8"
        >
          <Sparkles className="h-4 w-4 text-primary-light" />
          <span className="text-sm font-medium text-white/80 font-sans">
            Get Started Today
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
        >
          Ready to Explore{" "}
          <span className="bg-gradient-to-r from-primary-light via-[#c4a0f0] to-gold-light bg-clip-text text-transparent">
            Exosome Therapy?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 text-lg text-white/55 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Discover how exosome therapy can support your body&apos;s natural
          healing processes. Our team is ready to answer your questions and
          create a personalized care plan.
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
            href="tel:+16124533182"
            className="inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] px-9 text-lg font-semibold text-white transition-all hover:bg-white/[0.15] hover:-translate-y-0.5 font-sans"
          >
            <Phone className="h-5 w-5" />
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
