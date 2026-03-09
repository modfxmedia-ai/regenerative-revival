"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Microscope, Handshake, GraduationCap } from "lucide-react";

const values = [
  { icon: GraduationCap, title: "Education First", description: "We empower you with knowledge so you can make informed decisions about your health." },
  { icon: Heart, title: "Patient-First Care", description: "Every plan is built around your unique needs, goals, and medical history." },
  { icon: Microscope, title: "Science-Backed Protocols", description: "Our therapies are grounded in peer-reviewed research and clinical evidence." },
  { icon: Handshake, title: "Trusted Partnerships", description: "We work with licensed practitioners and top-tier labs to ensure quality at every step." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sage/50 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative">
            {/* Image with glass frame */}
            <div className="relative rounded-[2rem] overflow-hidden">
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 z-10 pointer-events-none" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/seth-berge-w-backdrop.jpg" alt="Seth Berge — Founder of Regenerative Revival" className="w-full h-auto rounded-[2rem] object-cover" />
              {/* Bottom glass overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating glass stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-white/70 backdrop-blur-2xl rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/80"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />
              <div className="relative text-4xl font-bold gradient-text">8+</div>
              <div className="relative text-sm text-gray-500 mt-1">Years in<br />Regenerative Medicine</div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-8">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">Our Story</span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
                Meet <span className="gradient-text">Seth Berge</span>
              </h2>
              <p className="mt-2 text-lg text-gold font-medium">Founder of Regenerative Revival</p>
            </div>
            <p className="text-lg leading-relaxed text-gray-600">
              With over 8 years of experience in regenerative medicine, Seth Berge founded Regenerative Revival with a singular mission: to make cutting-edge stem cell therapy accessible to everyone who needs it.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              We educate clients on advanced wellness protocols that ease pain, restore vitality, and renew the body from within — then provide access to licensed practitioners who deliver them.
            </p>

            {/* Glass value cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="relative rounded-2xl p-5 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.05)] hover:shadow-[0_8px_32px_rgba(107,63,160,0.1)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
                  <v.icon className="relative h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="relative text-sm font-semibold text-gray-900">{v.title}</h3>
                  <p className="relative text-xs text-gray-500 mt-1 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}