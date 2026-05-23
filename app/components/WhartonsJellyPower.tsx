"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    image: "/1.webp",
    title: "Enhanced Regeneration",
    description:
      "MSCs from Wharton's Jelly accelerate the body's natural repair processes, significantly reducing recovery time for injuries and chronic conditions.",
    accent: "01",
  },
  {
    image: "/2.webp",
    title: "Reduced Inflammation",
    description:
      "Powerful anti-inflammatory properties effectively help manage pain and swelling associated with tissue damage.",
    accent: "02",
  },
  {
    image: "/3.webp",
    title: "Minimal Rejection Risk",
    description:
      "The immune-privileged nature of Wharton's Jelly-derived MSCs lowers the likelihood of rejection, making treatment viable for most patients.",
    accent: "03",
  },
];

export default function WhartonsJellyPower() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 lg:py-32 bg-[#F1ECF8] overflow-hidden">
      {/* Top edge accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/40 to-transparent" />

      {/* Aurora */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#6762AF]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-[#71A7F5]/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="eyebrow">Wharton&apos;s Jelly</span>
          <h2 className="mt-4 lux-display text-4xl sm:text-5xl lg:text-[3.75rem] text-[#1A1F30] leading-[1.05]">
            Harness the power of <span className="text-[#6762AF] font-semibold">Wharton&apos;s Jelly</span> — the gold standard in stem cell therapy
          </h2>
          <p className="mt-7 text-base lg:text-lg text-[#4A4F66] leading-relaxed">
            Sourced from ethically donated umbilical cord tissue, Wharton&apos;s Jelly is one of the richest known sources of high-quality mesenchymal stem cells (MSCs) and growth factors essential for tissue repair and regeneration.
          </p>
        </motion.div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[1.75rem] bg-white border border-white p-6 hover:border-[#6762AF]/15 transition-all duration-500 hover:-translate-y-1.5 luxe-shadow"
            >
              {/* Number accent */}
              <div className="absolute top-5 right-5 lux-display text-2xl text-[#6762AF]/30 group-hover:text-[#6762AF] transition-colors">
                <span className="text-[#6762AF] font-semibold">{b.accent}</span>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#583563]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="lux-display text-xl text-[#1A1F30] mb-3 leading-snug">{b.title}</h3>
              <p className="text-sm text-[#4A4F66] leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar — luxe gradient with shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="/contact"
            className="group relative flex items-center justify-center gap-3 w-full py-7 rounded-2xl bg-gradient-to-r from-[#1A1F30] via-[#583563] to-[#6762AF] text-white text-lg font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_24px_64px_-12px_rgba(103,98,175,0.5)] hover:-translate-y-0.5 animate-gradient"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#71A7F5]" />
              Book Your FREE Consultation Today
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
