"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, TrendingUp, Package, Headphones, ArrowUpRight } from "lucide-react";

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
    <section id="partners" className="relative py-28 lg:py-32 bg-[#1A1F30] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#6762AF]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#345691]/20 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 lux-grid opacity-30 pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow text-[#71A7F5]">For Medical Practices & Businesses</span>
          <h2 className="mt-4 lux-display text-4xl sm:text-5xl lg:text-[3.75rem] text-white leading-[1.05]">
            Partner with <span className="text-[#6762AF] font-semibold">Regenerative Revival</span>
          </h2>
          <p className="mt-7 text-base lg:text-lg text-white/65 leading-relaxed">
            Looking to add stem cell therapy to your practice or buy wholesale? We offer a turnkey JV partnership with revenue sharing that makes it easy to get started.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-7 mb-16">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[1.75rem] p-7 lg:p-8 bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:bg-white/[0.07] hover:border-[#6762AF]/30 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#6762AF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6762AF]/25 to-[#583563]/15 border border-[#6762AF]/20 mb-6 group-hover:scale-110 transition-all duration-300">
                <p.icon className="h-6 w-6 text-[#71A7F5]" />
              </div>
              <h3 className="lux-display text-xl text-white mb-3">{p.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative rounded-[1.75rem] bg-gradient-to-r from-[#6762AF] via-[#583563] to-[#345691] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden animate-gradient"
        >
          <div className="relative">
            <h3 className="lux-display text-2xl sm:text-3xl text-white">
              Ready to <span className="text-[#6762AF] font-semibold">grow</span> your practice?
            </h3>
            <p className="mt-3 text-white/85 max-w-lg text-sm sm:text-base">
              Join our network of medical partners and start offering cutting-edge stem cell therapy with full support and shared revenue.
            </p>
          </div>
          <a
            href="/partner-with-us"
            className="relative group shrink-0 flex h-13 py-3.5 items-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#1A1F30] transition-all hover:bg-[#F1ECF8] hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.4)]"
          >
            Become a Partner
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
