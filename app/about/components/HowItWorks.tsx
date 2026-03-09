"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CalendarCheck,
  ClipboardList,
  Sparkles,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule Your Consultation",
    description:
      "Book an appointment with our experienced team to discuss your health concerns and goals, offering flexible scheduling options to accommodate your busy lifestyle.",
    image: "/2149230689.jpg",
  },
  {
    icon: ClipboardList,
    title: "Personalized Treatment Plan",
    description:
      "During your consultation, we'll review your medical history and assess your specific needs, creating a tailored treatment plan designed for the best possible outcomes.",
    image:
      "/About page-_Your Journey to Revival_ section 2.jpeg",
  },
  {
    icon: Sparkles,
    title: "Regenerative Therapy",
    description:
      "Experience the transformative power of Wharton's Jelly-derived stem cell therapy, providing non-invasive and innovative solutions to enhance your health and well-being.",
    image: "/2149040261.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Follow-Up and Support",
    description:
      "We're committed to your long-term health and well-being, providing ongoing support and follow-up care to ensure optimal results and maintain your improved quality of life.",
    image: "/About Page & contact page-_Our Guarantee.jpeg",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            How It Works
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Your Journey to <span className="gradient-text">Revival</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 font-sans">
            Four simple steps to a healthier, pain-free life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgba(107,63,160,0.05)] hover:shadow-[0_20px_60px_rgba(107,63,160,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Card image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                {/* Step number overlay */}
                <div className="absolute top-4 left-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30 font-sans">
                    {i + 1}
                  </span>
                </div>
              </div>

              <div className="relative p-6 pt-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Start Your Journey CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center"
        >
          <a
            href="/#contact"
            className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-10 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 font-sans"
          >
            Start Your Journey Today
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
