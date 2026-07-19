"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Clock } from "lucide-react";
import { articles } from "../data";
import Link from "next/link";
import Image from "next/image";

const featured = articles[0];
const spotlight = articles.slice(1, 4);
const remaining = articles.slice(4);

export default function NewsList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <div ref={ref}>
      {/* ═══ FEATURED HERO ARTICLE - dark midnight ═══ */}
      <section className="relative bg-gradient-to-b from-[#21253C] to-[#1A1F30] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(103,98,175,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-20 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Link href={`/news/${featured.slug}`} className="group block">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#71A7F5]">
                  Featured Story
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-end">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#71A7F5]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
                <div className="lg:pb-4">
                  <span className="text-[11px] text-white/30 font-medium">{featured.date}</span>
                  <h2 className="mt-3 font-[family-name:var(--font-poppins)] font-normal text-[1.75rem] sm:text-4xl lg:text-5xl text-white leading-[1.1] tracking-[-0.02em] group-hover:text-[#8985C5] transition-colors duration-500">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-[14px] text-white/40 leading-relaxed max-w-md">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 text-[13px] font-semibold text-[#71A7F5]">
                    <span>Read Article</span>
                    <span className="flex h-10 w-10 items-center justify-center border border-[#71A7F5]/30 group-hover:bg-[#71A7F5] group-hover:text-[#1A1F30] transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ═══ SPOTLIGHT TRIO - deeper midnight ═══ */}
      <section className="relative bg-[#0F1220] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.05]">
            {spotlight.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              >
                <Link href={`/news/${article.slug}`} className="group block bg-[#0F1220] cursor-pointer">
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={600}
                      height={375}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-[#6762AF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#71A7F5]/60">{article.category}</span>
                      <span className="text-[11px] text-white/25">{article.date}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[17px] text-white leading-snug mb-3 line-clamp-2 group-hover:text-[#8985C5] transition-colors duration-300">{article.title}</h3>
                    <p className="text-[12.5px] text-white/30 leading-relaxed line-clamp-2 mb-5">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#71A7F5]/70 group-hover:text-[#71A7F5] group-hover:gap-3 transition-all duration-300">
                      Read <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REMAINING - EDITORIAL LIST - white ═══ */}
      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5 mb-2"
          >
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">More Stories</span>
            <div className="flex-1 h-px bg-[#F1ECF8]" />
          </motion.div>

          {remaining.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.45 + Math.min(i, 5) * 0.05 }}
              className={!expanded && i >= 5 ? "hidden" : ""}
            >
              <Link href={`/news/${article.slug}`} className="group grid md:grid-cols-12 gap-6 lg:gap-10 py-9 border-b border-[#F1ECF8] last:border-0 cursor-pointer hover:border-[#6762AF]/20 transition-colors">
                <div className="md:col-span-4 overflow-hidden rounded-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6762AF]/60">{article.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[#C5DBF7]" />
                    <span className="text-[11px] text-[#7A7F95]">{article.date}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] font-normal text-[1.25rem] sm:text-2xl text-[#1A1F30] leading-snug mb-2 group-hover:text-[#583563] transition-colors duration-300">{article.title}</h3>
                  <p className="text-[13px] text-[#4A4F66] leading-relaxed line-clamp-2 max-w-lg mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-[#6762AF]" />
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#6762AF]/70 group-hover:text-[#6762AF] group-hover:gap-3 transition-all duration-300">
                      Read Article <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {!expanded && remaining.length > 5 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setExpanded(true)}
                className="group inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#4A4F66] hover:text-[#6762AF] transition-colors duration-300"
              >
                Show All Articles
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
