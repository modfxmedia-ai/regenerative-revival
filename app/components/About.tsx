"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Microscope, Handshake, GraduationCap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Patient-First Care",
    description: "Every treatment plan is built around your unique needs, goals, and medical history.",
  },
  {
    icon: Microscope,
    title: "Science-Backed Protocols",
    description: "Our therapies are grounded in peer-reviewed research and clinical evidence.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "We work with licensed practitioners and top-tier labs to ensure quality at every step.",
  },
  {
    icon: GraduationCap,
    title: "Education First",
    description: "We empower you with knowledge so you can make informed decisions about your health.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Seth Berge Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden soft-shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.regenerativerevival.com/wp-content/uploads/2024/08/Seth-Berge-Regenerative-Revival-1024x1024.png"
                alt="Seth Berge — Founder of Regenerative Revival"
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-white rounded-2xl p-6 soft-shadow-lg border border-sage">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-sm text-text-muted mt-1">Years in<br />Regenerative Medicine</div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Story
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-foreground">
                Meet <span className="gradient-text">Seth Berge</span>
              </h2>
              <p className="mt-2 text-lg text-gold font-medium">
                Founder of Regenerative Revival
              </p>
            </div>

            <p className="text-lg leading-relaxed text-text-light">
              With over 15 years of experience in regenerative medicine, Seth Berge
              founded Regenerative Revival with a singular mission: to make
              cutting-edge stem cell therapy accessible to everyone who needs it.
            </p>
            <p className="text-base leading-relaxed text-text-muted">
              We educate clients on advanced wellness protocols that ease pain,
              restore vitality, and renew the body from within — then provide
              access to licensed practitioners who deliver them. Our approach
              combines the latest scientific research with personalized care to
              deliver outcomes that truly change lives.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="rounded-2xl p-5 bg-cream border border-sage hover:border-primary/20 transition-colors group"
                >
                  <v.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-semibold text-foreground">{v.title}</h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
