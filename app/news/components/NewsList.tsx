"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { articles } from "../data";
import Link from "next/link";

const featured = articles[0];
const spotlight = articles.slice(1, 4);
const remaining = articles.slice(4);

export default function NewsList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <div ref={ref}>
      {/* ═══ FEATURED HERO ARTICLE ═══ */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(107,63,160,0.12),transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Link href={`/news/${featured.slug}`} className="group block">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold/70 font-sans">
                  Featured Story
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-end">
                <div className="relative overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-auto object-contain transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-light/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
                <div className="lg:pb-4">
                  <span className="text-xs text-white/25 font-sans font-medium">{featured.date}</span>
                  <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight group-hover:text-primary-light transition-colors duration-500">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-base text-white/30 leading-relaxed font-sans max-w-md">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-primary-light font-sans">
                    <span>Read Article</span>
                    <span className="flex h-10 w-10 items-center justify-center border border-primary-light/30 group-hover:bg-primary-light group-hover:text-secondary transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ═══ SPOTLIGHT TRIO ═══ */}
      <section className="relative bg-[#0f0a1a] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06]">
            {spotlight.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              >
                <Link href={`/news/${article.slug}`} className="group block bg-[#0f0a1a] cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-primary-light/50 font-sans">{article.category}</span>
                      <span className="text-xs text-white/20 font-sans">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug mb-3 line-clamp-2 group-hover:text-primary-light transition-colors duration-300">{article.title}</h3>
                    <p className="text-sm text-white/25 leading-relaxed font-sans line-clamp-2 mb-5">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-light/70 font-sans group-hover:text-primary-light group-hover:gap-3 transition-all duration-300">
                      Read <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REMAINING — EDITORIAL LIST ═══ */}
      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-5 mb-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary font-sans">More Stories</span>
            <div className="flex-1 h-px bg-gray-100" />
          </motion.div>

          {remaining.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.45 + Math.min(i, 5) * 0.05 }}
              className={!expanded && i >= 5 ? "hidden" : ""}
            >
              <Link href={`/news/${article.slug}`} className="group grid md:grid-cols-12 gap-6 lg:gap-10 py-9 border-b border-gray-100 last:border-0 cursor-pointer">
                <div className="md:col-span-4 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-primary/50 font-sans">{article.category}</span>
                    <span className="w-1 h-1 bg-gray-300" />
                    <span className="text-xs text-gray-300 font-sans">{article.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors duration-300">{article.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-sans line-clamp-2 max-w-lg mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 font-sans group-hover:text-primary group-hover:gap-3 transition-all duration-300 w-fit">
                    Read Article <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}

          {!expanded && remaining.length > 5 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setExpanded(true)}
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-gray-400 font-sans hover:text-primary transition-colors duration-300"
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
