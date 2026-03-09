"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Microscope,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const guarantees = [
  {
    icon: Heart,
    title: "Personalized Care",
    description:
      "Every patient receives a customized treatment plan tailored to their unique needs and goals.",
  },
  {
    icon: Microscope,
    title: "Advanced Techniques",
    description:
      "We utilize the latest advancements in regenerative medicine to provide the most effective treatments available.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team consists of highly trained professionals dedicated to delivering exceptional care.",
  },
  {
    icon: GraduationCap,
    title: "Patient Education",
    description:
      "We believe in empowering you with the knowledge and information needed to make informed decisions about your health.",
  },
];

export default function OurGuarantee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-cream overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
              Our Promise
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Our Guarantee,{" "}
              <span className="gradient-text">Your Health</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed font-sans">
              At Regenerative Revival, your health and well-being are our top
              priorities. We guarantee:
            </p>

            {/* Guarantee list */}
            <div className="mt-8 flex flex-col gap-5">
              {guarantees.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-base font-semibold text-gray-900">
                      {g.title}:
                    </span>{" "}
                    <span className="text-base text-gray-600 font-sans">
                      {g.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <a
                href="/#contact"
                className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 font-sans"
              >
                Connect With Regenerative Revival Today
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — image collage with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <img
                src="/About Page & contact page-_Our Guarantee.jpeg"
                alt="Advanced regenerative medicine treatment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>

            {/* Floating guarantee cards over image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-2xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Personalized Care
                  </div>
                  <div className="text-xs text-gray-500 font-sans">
                    Tailored to your needs
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-2xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/15">
                  <Microscope className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Advanced Techniques
                  </div>
                  <div className="text-xs text-gray-500 font-sans">
                    Latest in regen medicine
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary image — small accent */}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
