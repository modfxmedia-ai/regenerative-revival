"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const reasons = [
  {
    title: "Expertise in regenerative medicine",
    description:
      "Decades of combined experience in regenerative medicine, staying at the forefront of stem cell research.",
  },
  {
    title: "Personalized treatment plans",
    description:
      "No two patients are alike. Custom protocols built around your unique biology, condition, and wellness goals.",
  },
  {
    title: "Patient education & empowerment",
    description:
      "Informed patients get better outcomes. You'll understand every step of your treatment journey.",
  },
  {
    title: "Premium Wharton's Jelly products",
    description:
      "Only the highest-quality, rigorously tested Wharton's Jelly MSCs from accredited tissue banks.",
  },
  {
    title: "Nationwide practitioner network",
    description:
      "Access licensed, vetted practitioners across the country who deliver our protocols with precision and care.",
  },
  {
    title: "May support results & outcomes",
    description:
      "Thousands of patients report meaningful improvements in pain, mobility, and overall vitality. Individual results may vary.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-28 lg:py-32 bg-white overflow-hidden">
      <div className="lux-divider absolute top-0 left-0 right-0" />

      {/* Aurora orbs */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[#6762AF]/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-[#71A7F5]/10 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Sticky left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="eyebrow">Why Us</span>
            <h2 className="mt-4 lux-display text-4xl sm:text-5xl lg:text-[3.75rem] text-[#1A1F30] leading-[1.05]">
              Why choose <span className="text-[#6762AF] font-semibold">Regenerative Revival</span>
            </h2>
            <p className="mt-7 text-base lg:text-lg text-[#4A4F66] leading-relaxed">
              Expertise and innovation in regenerative medicine. We&apos;re committed to delivering cutting-edge treatments in a patient-centered environment — under one physician-led medical team.
            </p>

            {/* Image with frame */}
            <div className="mt-10 relative rounded-[2rem] overflow-hidden aspect-[4/3] luxe-shadow">
              <Image
                src="/HomePage-_Why Choose Regenerative Revival__ section.jpeg"
                alt="Patient testimonial"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1F30]/30 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2rem] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right — numbered list */}
          <div className="lg:col-span-7 flex flex-col gap-1">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group relative grid grid-cols-[80px_1fr] gap-6 py-7 border-b border-[#F1ECF8] hover:border-[#6762AF]/30 transition-colors"
              >
                {/* Number */}
                <div className="lux-display text-3xl text-[#6762AF]/40 group-hover:text-[#6762AF] transition-colors duration-300">
                  <span className="text-[#6762AF] font-semibold">0{i + 1}</span>
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-[#1A1F30] mb-2 group-hover:text-[#583563] transition-colors duration-300">
                    {r.title}
                  </h3>
                  <p className="text-sm text-[#4A4F66] leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
