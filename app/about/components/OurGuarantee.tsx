"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Microscope, Users, GraduationCap, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const guarantees = [
  { icon: Heart, title: "Personalized Care", description: "Every patient receives a customized care plan tailored to their unique needs and goals." },
  { icon: Microscope, title: "Advanced Techniques", description: "We utilize the latest advancements in regenerative medicine to provide the most effective therapies available." },
  { icon: Users, title: "Expert Team", description: "Our team consists of highly trained professionals dedicated to delivering exceptional care." },
  { icon: GraduationCap, title: "Patient Education", description: "We believe in empowering you with the knowledge and information needed to make informed decisions about your health." },
];

export default function OurGuarantee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-[#F1ECF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">Our Promise</span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
              Our commitment,{" "}
              <span className="text-[#6762AF]">your health</span>
            </h2>
            <p className="mt-6 text-base text-[#4A4F66] leading-relaxed">
              At Regenerative Revival, your health and well-being are our top priorities. We&apos;re committed to:
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {guarantees.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#6762AF]/10 shrink-0 mt-0.5">
                    <g.icon className="h-5 w-5 text-[#6762AF]" />
                  </div>
                  <div>
                    <span className="text-[15px] font-semibold text-[#1A1F30]">{g.title}: </span>
                    <span className="text-[14px] text-[#4A4F66]">{g.description}</span>
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
                href="/consult-router"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#021E3C] px-7 text-sm font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] transition-all duration-300"
              >
                Connect With Us Today
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-12px_rgba(88,53,99,0.2)]">
              <Image src="/About Page & contact page-_Our Guarantee.jpeg" alt="Advanced regenerative medicine therapy" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/25 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2rem] pointer-events-none" />
            </div>

            {/* Floating card — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl p-5 shadow-[0_16px_40px_-8px_rgba(26,31,48,0.2)] border border-[#F1ECF8]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10">
                  <Heart className="h-5 w-5 text-[#6762AF]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#1A1F30]">Personalized Care</div>
                  <div className="text-[11px] text-[#4A4F66]">Tailored to your needs</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-[0_16px_40px_-8px_rgba(26,31,48,0.2)] border border-[#F1ECF8]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1ECF8] border border-[#6762AF]/10">
                  <Microscope className="h-5 w-5 text-[#6762AF]" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#1A1F30]">Advanced Techniques</div>
                  <div className="text-[11px] text-[#4A4F66]">Latest in regen medicine</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
