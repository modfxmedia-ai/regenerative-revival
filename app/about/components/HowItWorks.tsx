"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, ClipboardList, Sparkles, HeartHandshake, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const steps = [
  { icon: CalendarCheck, title: "Schedule Your Consultation", description: "Book an appointment with our experienced team to discuss your health concerns and goals, offering flexible scheduling options to accommodate your busy lifestyle.", image: "/2149230689.jpg" },
  { icon: ClipboardList, title: "Personalized Treatment Plan", description: "During your consultation, we'll review your medical history and assess your specific needs, creating a tailored treatment plan designed for the best possible outcomes.", image: "/About page-_Your Journey to Revival_ section 2.jpeg" },
  { icon: Sparkles, title: "Regenerative Therapy", description: "Experience the transformative power of Wharton's Jelly-derived stem cell therapy, providing non-invasive and innovative solutions to enhance your health and well-being.", image: "/2149040261.jpg" },
  { icon: HeartHandshake, title: "Follow-Up and Support", description: "We're committed to your long-term health and well-being, providing ongoing support and follow-up care to ensure optimal results and maintain your improved quality of life.", image: "/About Page & contact page-_Our Guarantee.jpeg" },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F1ECF8]/50 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">How It Works</span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-normal text-[2.25rem] sm:text-5xl lg:text-[3.25rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
            Your journey to <em className="italic text-[#6762AF]">revival</em>
          </h2>
          <p className="mt-5 text-base text-[#4A4F66]">Four simple steps to a healthier, pain-free life.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#F4EFFA] rounded-[20px] overflow-hidden hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_48px_-12px_rgba(88,53,99,0.18)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4EFFA] via-[#F4EFFA]/20 to-transparent group-hover:from-white group-hover:via-white/20 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A1F30] text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
              </div>
              <div className="p-6 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-[#6762AF]/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="h-5 w-5 text-[#6762AF]" />
                </div>
                <h3 className="text-[16px] font-semibold text-[#1A1F30] mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#4A4F66] leading-[1.65]">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <a
            href="/consult-router"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#021E3C] px-7 text-sm font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.6)] transition-all duration-300"
          >
            Start Your Journey Today
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
