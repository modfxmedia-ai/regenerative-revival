"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  peptideCategories,
  toneStyles,
  type PeptideCategory,
} from "../lib/peptide-programs";

/**
 * PeptidePrograms — solution-based funnel for Hormones & Peptides.
 * Instead of a wall of products, users pick a SOLUTION (category);
 * the matching peptides reveal below with benefits + pricing.
 *
 * Addresses V2 change-request item #8 (productize the menu) and the
 * meeting note: "an on-page funnel experience, not just a dropdown."
 */
export default function PeptidePrograms() {
  const [activeId, setActiveId] = useState<string>(peptideCategories[0].id);
  const active: PeptideCategory =
    peptideCategories.find((c) => c.id === activeId) ?? peptideCategories[0];

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full bg-[#6762AF]/06 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-10 lg:mb-14"
        >
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">
            Find Your Protocol
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-medium text-[2rem] sm:text-4xl lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.03em]">
            Start with your goal, not a product list
          </h2>
          <p className="mt-5 text-[15px] lg:text-base text-[#4A4F66] leading-relaxed">
            Tell us what you&apos;re solving for. We&apos;ll show the peptide
            protocols our clinicians prescribe for it — each reviewed against
            your labs and shipped from a licensed compounding pharmacy.
          </p>
        </motion.div>

        {/* Category selector — the funnel entry */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {peptideCategories.map((cat) => {
            const isActive = cat.id === activeId;
            const tone = toneStyles[cat.tone];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`relative rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-white shadow-[0_8px_24px_-8px_rgba(103,98,175,0.5)]"
                    : "text-[#4A4F66] bg-[#F4EFFA] hover:bg-[#EDE6F6] border border-transparent hover:border-[#6762AF]/15"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="peptide-cat-pill"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${tone.frame}`}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active category panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Category intro */}
            <div className="flex items-start gap-4 mb-7">
              <span
                className={`mt-1 h-10 w-1.5 rounded-full bg-gradient-to-b ${toneStyles[active.tone].frame} shrink-0`}
              />
              <div>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[22px] lg:text-[26px] text-[#1A1F30] leading-tight">
                  {active.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-[#7A7F95] max-w-xl leading-relaxed">
                  {active.blurb}
                </p>
              </div>
            </div>

            {/* Peptide cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {active.peptides.map((p, i) => {
                const tone = toneStyles[active.tone];
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative rounded-[1.5rem] bg-white border border-[#ECE7F4] p-6 hover:border-transparent hover:shadow-[0_24px_56px_-16px_rgba(103,98,175,0.25)] transition-all duration-500 overflow-hidden flex flex-col"
                  >
                    {/* Gradient frame accent on top */}
                    <span
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.frame} opacity-70 group-hover:opacity-100 transition-opacity`}
                    />
                    {/* Hover glow */}
                    <span
                      className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${tone.glow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    <h4 className="relative font-[family-name:var(--font-poppins)] font-semibold text-[17px] text-[#1A1F30] leading-snug pr-2">
                      {p.name}
                    </h4>

                    {/* Benefits */}
                    <ul className="relative mt-4 flex flex-col gap-2 flex-1">
                      {p.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[13px] text-[#4A4F66] leading-snug"
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${tone.frame} shrink-0`}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Pricing */}
                    <div className="relative mt-5 pt-4 border-t border-[#F1ECF8] flex items-end justify-between">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#7A7F95]">
                            1-mo
                          </span>
                          <span className={`text-[20px] font-bold ${tone.accent}`}>
                            {p.priceMonthly}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#7A7F95] mt-0.5">
                          3-mo {p.priceQuarterly}
                        </div>
                      </div>
                      {p.slug ? (
                        <Link
                          href={`/hormones-peptides/${p.slug}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F4EFFA] text-[#6762AF] group-hover:bg-[#6762AF] group-hover:text-white transition-all duration-300"
                          aria-label={`Learn more about ${p.name}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <Link
                          href="/consult-router"
                          className="inline-flex h-9 items-center gap-1 rounded-full bg-[#F4EFFA] px-3 text-[11px] font-semibold text-[#6762AF] group-hover:bg-[#6762AF] group-hover:text-white transition-all duration-300"
                        >
                          Consult
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <p className="text-[14px] text-[#7A7F95]">
            Not sure which protocol fits? Let the quiz route you.
          </p>
          <Link
            href="/consult-router"
            className="btn-gradient inline-flex h-12 items-center gap-2 px-7 text-[14px] font-semibold text-white"
          >
            <Sparkles className="h-4 w-4" />
            Take The 2-Minute Quiz
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
