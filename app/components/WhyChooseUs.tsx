"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Expertise in Stem Cell Therapy", description: "Our team brings decades of combined experience in regenerative medicine, staying at the forefront of stem cell research." },
  { title: "Personalized Treatment Plans", description: "No two patients are alike. We develop customized protocols based on your unique biology, condition, and wellness goals." },
  { title: "Patient Education & Empowerment", description: "We believe informed patients get better outcomes. You'll understand every step of your treatment journey." },
  { title: "Premium Wharton's Jelly Products", description: "We source only the highest-quality, rigorously tested Wharton's Jelly MSCs from accredited tissue banks." },
  { title: "Nationwide Practitioner Network", description: "Access licensed, vetted practitioners across the country who deliver our protocols with precision and care." },
  { title: "Proven Results & Outcomes", description: "Thousands of patients have experienced life-changing improvements in pain, mobility, and overall vitality." },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage/40 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">Why Us</span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Why Choose <span className="gradient-text">Regenerative Revival?</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Expertise and innovation in regenerative medicine. We&apos;re committed to delivering cutting-edge treatments in a patient-centered environment.
            </p>

            {/* Video card with glass frame */}
            <div className="mt-10 relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 z-10 pointer-events-none" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Patient testimonial" className="w-full h-auto rounded-[2rem] object-cover aspect-video" />
              <div className="absolute inset-0 bg-secondary/10" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 30, scale: 0.97 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl p-6 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_4px_24px_rgba(107,63,160,0.04)] hover:shadow-[0_12px_40px_rgba(107,63,160,0.1)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Glass shine */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />
                {/* Hover border glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{r.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}