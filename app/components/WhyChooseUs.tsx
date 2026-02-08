"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Play } from "lucide-react";

const reasons = [
  {
    title: "Expertise in Stem Cell Therapy",
    description:
      "Our team brings decades of combined experience in regenerative medicine, staying at the forefront of stem cell research and clinical application.",
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "No two patients are alike. We develop customized protocols based on your unique biology, condition, and wellness goals.",
  },
  {
    title: "Patient Education & Empowerment",
    description:
      "We believe informed patients get better outcomes. You'll understand every step of your treatment journey.",
  },
  {
    title: "Premium Wharton's Jelly Products",
    description:
      "We source only the highest-quality, rigorously tested Wharton's Jelly MSCs from accredited tissue banks.",
  },
  {
    title: "Nationwide Practitioner Network",
    description:
      "Access licensed, vetted practitioners across the country who deliver our protocols with precision and care.",
  },
  {
    title: "Proven Results & Outcomes",
    description:
      "Thousands of patients have experienced life-changing improvements in pain, mobility, and overall vitality.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Sticky content + video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why Us
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Why Choose{" "}
              <span className="gradient-text">Regenerative Revival?</span>
            </h2>
            <p className="mt-6 text-lg text-text-light leading-relaxed">
              Expertise and innovation in regenerative medicine. We&apos;re committed
              to delivering cutting-edge treatments in a patient-centered
              environment.
            </p>

            {/* Testimonial video */}
            <div className="mt-10 relative rounded-3xl overflow-hidden soft-shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.regenerativerevival.com/wp-content/uploads/2024/08/pexels-tima-miroshnichenko-5407206-scaled.jpg"
                alt="Patient testimonial"
                className="w-full h-auto rounded-3xl object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm cursor-pointer hover:bg-white transition-colors soft-shadow">
                  <Play className="h-6 w-6 text-primary ml-0.5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Reasons list */}
          <div className="flex flex-col gap-5">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="rounded-2xl p-6 bg-cream border border-sage hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed">
                      {r.description}
                    </p>
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
