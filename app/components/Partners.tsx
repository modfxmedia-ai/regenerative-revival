"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  TrendingUp,
  Package,
  Headphones,
  ArrowRight,
} from "lucide-react";

const perks = [
  {
    icon: TrendingUp,
    title: "Revenue Share Model",
    description:
      "Joint venture with competitive rev-share on the back end. Grow your practice revenue with zero upfront risk.",
  },
  {
    icon: Package,
    title: "Premium Product Supply",
    description:
      "Access to top-tier Wharton's Jelly stem cell products from accredited tissue banks, delivered reliably.",
  },
  {
    icon: Headphones,
    title: "Full Practice Support",
    description:
      "Marketing materials, patient education resources, training, and ongoing clinical support for your team.",
  },
  {
    icon: Building2,
    title: "Turnkey Integration",
    description:
      "We handle the complexity — from compliance to logistics — so you can focus on patient care.",
  },
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="relative py-28 bg-secondary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            For Medical Practices & Businesses
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-white">
            Partner With Regenerative Revival
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Looking to add stem cell therapy to your practice or buy wholesale?
            We offer a turnkey JV partnership with revenue sharing that makes it
            easy to get started.
          </p>
        </motion.div>

        {/* Perks Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="rounded-3xl p-8 bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-6 group-hover:bg-white/20 transition-colors">
                <p.icon className="h-7 w-7 text-primary-light" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-3xl bg-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Ready to grow your practice?
            </h3>
            <p className="mt-2 text-text-light max-w-lg">
              Join our network of medical partners and start offering
              cutting-edge stem cell therapy with full support and shared
              revenue.
            </p>
          </div>
          <a
            href="#contact"
            className="group shrink-0 flex h-14 items-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20"
          >
            Become a Partner
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
