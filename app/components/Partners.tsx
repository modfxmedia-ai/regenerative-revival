"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, TrendingUp, Package, Headphones, ArrowRight } from "lucide-react";

const perks = [
  { icon: TrendingUp, title: "Revenue Share Model", description: "Joint venture with competitive rev-share on the back end. Grow your practice revenue with zero upfront risk." },
  { icon: Package, title: "Premium Product Supply", description: "Access to top-tier Wharton's Jelly stem cell products from accredited tissue banks, delivered reliably." },
  { icon: Headphones, title: "Full Practice Support", description: "Marketing materials, patient education resources, training, and ongoing clinical support for your team." },
  { icon: Building2, title: "Turnkey Integration", description: "We handle the complexity — from compliance to logistics — so you can focus on patient care." },
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="relative py-28 bg-secondary overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(155,109,215,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(155,109,215,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-white/[0.06] backdrop-blur-xl rounded-full px-4 py-1.5 border border-white/[0.08]">For Medical Practices & Businesses</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-white">Partner With Regenerative Revival</h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Looking to add stem cell therapy to your practice or buy wholesale? We offer a turnkey JV partnership with revenue sharing that makes it easy to get started.
          </p>
        </motion.div>

        {/* Glass cards on dark bg */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-3xl p-8 bg-white/[0.06] backdrop-blur-2xl border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300"
            >
              {/* Glass shine */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none" />
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.08] border border-white/[0.08] mb-6 group-hover:scale-110 group-hover:bg-white/[0.12] transition-all duration-300">
                <p.icon className="h-7 w-7 text-primary-light" />
              </div>
              <h3 className="relative text-xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="relative text-sm text-white/50 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA card — glass on dark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative rounded-3xl bg-white/[0.07] backdrop-blur-2xl border border-white/[0.1] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-transparent to-gold/10 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to grow your practice?</h3>
            <p className="mt-2 text-white/50 max-w-lg">Join our network of medical partners and start offering cutting-edge stem cell therapy with full support and shared revenue.</p>
          </div>
          <a href="#contact" className="relative group shrink-0 flex h-14 items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-8 text-base font-semibold text-white transition-all hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(155,109,215,0.2)]">
            Become a Partner
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}