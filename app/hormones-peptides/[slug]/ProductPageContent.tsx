"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Plus, Minus, Truck, Globe2, Clock, Stethoscope, ArrowUpRight } from "lucide-react";
import type { Product } from "../../lib/products";

interface FaqEntry {
  question: string;
  answer: string;
}

interface Props {
  product: Product;
  primaryWizloUrl: string;
  faqs: FaqEntry[];
}

/**
 * Product page content — exactly per figma:
 * - 50/50 split: lavender bubble image on left, product info right
 * - Stock + ship pill, big serif title, price, description
 * - Green checkmark benefit list
 * - Two CTAs: dark navy primary, white outline secondary
 * - 3 accordion rows: "What are X Injections?", "Who X Is For", "What This Program Is Not"
 * - Asterisk fine-print
 * - Bottom trust strip with 5 icons across full-width lavender band
 */
export default function ProductPageContent({ product, primaryWizloUrl, faqs }: Props) {
  // Build the three accordion entries from product data
  const explainerTitle = `What ${
    product.category === "glp1" ? "are GLP-1 Injections" : product.name
  }?`;

  const accordionRows: { title: string; body: string | string[] }[] = [
    {
      title: explainerTitle,
      body: product.introExplainer ?? product.longDescription,
    },
    {
      title: `Who ${product.name} Is For`,
      body: product.indications ?? [],
    },
    {
      title: "What This Program Is Not",
      body:
        product.notFor ?? [
          "Not a quick fix — sustainable results take time and clinician oversight.",
          "Not for everyone — your provider will tell you honestly if another path fits better.",
          "Not a pill mill — every prescription requires a clinical evaluation.",
        ],
    },
  ];

  return (
    <>
      {/* ── Main product section ── */}
      <section className="bg-white pt-10 pb-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ── LEFT: Product image with lavender gradient bubble ── */}
            <div>
              <ProductImageStage product={product} />
              <p className="mt-5 text-center text-[12px] text-[#7A7F95] leading-relaxed max-w-md mx-auto">
                Results may vary. Actual vial appearance, contents, and dosage may vary and is based on your prescription. View full disclaimer in footer.*
              </p>
            </div>

            {/* ── RIGHT: Product info ── */}
            <div className="lg:pt-2">
              {/* Stock + ship pill */}
              <div className="flex items-center gap-4 mb-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F5E9] border border-[#A5D6A7] px-3 py-1 text-[12px] font-semibold text-[#2E7D32]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2E7D32]" />
                  In Stock
                </span>
                <span className="text-[12.5px] font-medium text-[#345691]">
                  Ships in 3–5 Business Days
                </span>
              </div>

              {/* Title */}
              <h1 className="font-[family-name:var(--font-fraunces)] font-normal text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] text-[#1A1F30] leading-[1.05] tracking-[-0.02em]">
                {product.name}
              </h1>

              {/* Price */}
              {product.priceFrom !== undefined && (
                <div className="mt-6">
                  <p className="text-[15px] font-semibold text-[#1A1F30]">
                    Programs starting at ${product.priceFrom}/month.
                  </p>
                  <p className="text-[13.5px] text-[#7A7F95] mt-0.5">
                    Includes provider consult, prescription, and shipping.
                  </p>
                </div>
              )}

              {/* Description */}
              <p className="mt-6 text-[14px] text-[#4A4F66] leading-[1.7] max-w-lg">
                {product.shortDescription}
              </p>

              {/* Benefits with green checkmarks */}
              <ul className="mt-7 flex flex-col gap-3.5">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-[#1A1F30] leading-[1.55]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]">
                      <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={2.5} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs — dark navy primary + outline secondary */}
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href={primaryWizloUrl}
                  className="inline-flex h-13 py-3.5 items-center justify-center gap-2 rounded-full bg-[#021E3C] px-9 text-[14px] font-semibold text-white hover:bg-[#345691] hover:shadow-[0_10px_30px_-8px_rgba(2,30,60,0.5)] hover:-translate-y-0.5 transition-all"
                >
                  Take The 2-Minute Quiz
                </a>
                <Link
                  href="/consult-router"
                  className="inline-flex h-13 py-3.5 items-center justify-center gap-2 rounded-full border-2 border-[#021E3C] bg-white px-9 text-[14px] font-semibold text-[#021E3C] hover:bg-[#F1ECF8] transition-all"
                >
                  Talk to a Provider First
                </Link>
              </div>

              {/* Accordion */}
              <div className="mt-10">
                {accordionRows.map((row, i) => (
                  <AccordionRow key={row.title} title={row.title} body={row.body} index={i} />
                ))}
              </div>

              {/* Fine print */}
              <div className="mt-8 space-y-3 text-[12.5px] text-[#7A7F95] leading-[1.6]">
                <p>
                  *Price shown applies to 6-Month plan paid upfront or with buy now, pay later programs. Actual price will depend on product and plan prescribed.
                </p>
                <p>
                  **The FDA does not review or approve any compounded medications for safety or effectiveness.
                </p>
              </div>

              {/* FAQ Schema-friendly extra Q&A — collapsed below for SEO */}
              {faqs.length > 0 && (
                <div className="mt-10 pt-8 border-t border-[#F1ECF8]">
                  <h2 className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691] mb-5">
                    More Questions
                  </h2>
                  <div className="flex flex-col">
                    {faqs.map((faq, i) => (
                      <AccordionRow key={faq.question} title={faq.question} body={faq.answer} index={i + accordionRows.length} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip — full-width lavender band ── */}
      <TrustStrip />
    </>
  );
}

/* ============================================================
   Product image stage — lavender gradient bubble background
   matching the figma aesthetic
   ============================================================ */
function ProductImageStage({ product }: { product: Product }) {
  // Figma-matched: square aspect ratio, soft lavender gradient with blurred
  // bubbles and a centered product silhouette. If a real product image is
  // provided in `product.image`, render it on top of the gradient.
  return (
    <div className="relative aspect-square w-full rounded-[24px] overflow-hidden">
      {/* Base lavender gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1ECF8] via-[#EAEFF7] to-[#E8E0F2]" />

      {/* Floating blurred bubbles — abstract liquid feel */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-white/40 blur-2xl" />
        <span className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-[#C5DBF7]/50 blur-2xl" />
        <span className="absolute top-[40%] right-[8%] w-20 h-20 rounded-full bg-white/60 blur-xl" />
        <span className="absolute bottom-[35%] left-[18%] w-24 h-24 rounded-full bg-[#F1ECF8]/80 blur-xl" />
      </div>

      {/* Subtle ring/swoosh — soft amethyst arc */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 600 600" fill="none">
          <ellipse cx="200" cy="200" rx="180" ry="40" fill="url(#amethystArc)" opacity="0.35" transform="rotate(-25 200 200)" />
          <ellipse cx="450" cy="450" rx="160" ry="35" fill="url(#blueArc)" opacity="0.25" transform="rotate(20 450 450)" />
          <defs>
            <linearGradient id="amethystArc" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#6762AF" />
              <stop offset="100%" stopColor="#F1ECF8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blueArc" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#71A7F5" />
              <stop offset="100%" stopColor="#F1ECF8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Product image OR styled bottle placeholder */}
      {product.image ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-12"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      ) : (
        <BottlePlaceholder product={product} />
      )}
    </div>
  );
}

/* SVG bottle placeholder — luxe pharmacy-style amber dropper bottle with
   the Regenerative Revival label, used until real product photography lands.
   Designed to match the figma look — center-stage, generous padding. */
function BottlePlaceholder({ product }: { product: Product }) {
  // Pull the product label data
  const isSublingual = product.form === "sublingual";
  const dose = product.doses[0]?.label ?? "";

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative" style={{ width: "44%", height: "82%" }}>
        {/* Soft drop shadow */}
        <div className="absolute inset-x-0 bottom-0 h-8 rounded-[100%] bg-[#583563]/15 blur-xl" />

        {/* Bottle SVG */}
        <svg viewBox="0 0 220 360" className="relative w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="amber" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#3F2549" />
              <stop offset="50%" stopColor="#2A1A35" />
              <stop offset="100%" stopColor="#1A0F22" />
            </linearGradient>
            <linearGradient id="capGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1A1F30" />
              <stop offset="100%" stopColor="#021E3C" />
            </linearGradient>
            <linearGradient id="glassHighlight" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Dropper bulb (top) */}
          <ellipse cx="110" cy="20" rx="22" ry="14" fill="url(#capGrad)" />

          {/* Cap */}
          <rect x="78" y="32" width="64" height="46" rx="4" fill="url(#capGrad)" />
          {/* Cap ridges */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="78" y1={42 + i * 7} x2="142" y2={42 + i * 7} stroke="#0A0F1F" strokeWidth="0.5" opacity="0.6" />
          ))}

          {/* Bottle neck */}
          <rect x="86" y="78" width="48" height="14" fill="url(#amber)" />

          {/* Bottle body */}
          <rect x="40" y="92" width="140" height="240" rx="14" fill="url(#amber)" />

          {/* Glass highlight */}
          <rect x="48" y="100" width="20" height="220" rx="6" fill="url(#glassHighlight)" />

          {/* Label */}
          <rect x="56" y="130" width="108" height="170" rx="3" fill="#FFFFFF" />

          {/* Brand mark on label */}
          <g transform="translate(110, 156)">
            <text textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#1A1F30" fontWeight="600">
              REGENERATIVE
            </text>
            <text textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#1A1F30" fontWeight="600" y="11">
              REVIVAL™
            </text>
          </g>

          {/* Divider */}
          <line x1="68" y1="184" x2="152" y2="184" stroke="#1A1F30" strokeWidth="0.5" opacity="0.3" />

          {/* Form / Product name */}
          {isSublingual && (
            <text x="110" y="200" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#6762AF" letterSpacing="2" fontWeight="600">
              SUBLINGUAL
            </text>
          )}
          <text x="110" y="222" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fill="#1A1F30" fontWeight="800" letterSpacing="0.5">
            {product.name.split(" ")[0].toUpperCase().slice(0, 11)}
          </text>
          <text x="110" y="234" textAnchor="middle" fontFamily="sans-serif" fontSize="5.5" fill="#7A7F95" letterSpacing="1">
            WEIGHT MANAGEMENT SUPPORT*
          </text>

          {/* Dose pill */}
          {dose && (
            <g>
              <rect x="86" y="244" width="48" height="14" rx="7" fill="#71A7F5" />
              <text x="110" y="253" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#FFFFFF" fontWeight="700">
                {dose.split(" ")[0]}
              </text>
            </g>
          )}

          {/* Bottom info */}
          <text x="74" y="282" fontFamily="sans-serif" fontSize="5.5" fill="#7A7F95" fontStyle="italic">
            Rx Only
          </text>
          <text x="146" y="282" textAnchor="end" fontFamily="sans-serif" fontSize="5.5" fill="#7A7F95">
            30 mL · 1 FL OZ
          </text>
        </svg>
      </div>
    </div>
  );
}

/* ============================================================
   Accordion row — expands with framer-motion
   ============================================================ */
function AccordionRow({
  title,
  body,
  index,
}: {
  title: string;
  body: string | string[];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-[#E8E5F0]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-[15px] font-bold text-[#1A1F30] group-hover:text-[#583563] transition-colors">
          {title}
        </span>
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border border-[#1A1F30]/20 transition-all duration-300 ${
            open ? "bg-[#1A1F30] border-[#1A1F30]" : "bg-white"
          }`}
        >
          {open ? (
            <Minus className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          ) : (
            <Plus className="h-3.5 w-3.5 text-[#1A1F30]" strokeWidth={2.5} />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[13.5px] text-[#4A4F66] leading-[1.7]">
              {Array.isArray(body) ? (
                <ul className="flex flex-col gap-2.5">
                  {body.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6762AF] shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {body}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   Trust strip — figma full-width lavender band, 5 items
   ============================================================ */
function TrustStrip() {
  const items = [
    { icon: Truck, label: "Free, hassle-free delivery" },
    { icon: Globe2, label: "100% entirely online" },
    { icon: Clock, label: "Start your personalized program in less than 48 hours" },
    { icon: CheckCircle2, label: "Free expedited delivery to your door" },
    { icon: Stethoscope, label: "Real doctors, not automated prescriptions" },
  ];
  return (
    <section className="bg-[#F1ECF8] border-y border-[#E8E5F0]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-4 overflow-x-auto">
        <div className="flex items-center justify-between gap-6 min-w-max lg:min-w-0">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
              <item.icon className="h-4 w-4 text-[#345691] shrink-0" strokeWidth={2} />
              <span className="text-[12px] font-medium text-[#1A1F30]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
