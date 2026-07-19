"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "the-ultimate-guide-to-managing-joint-pain-with-regenerative-therapies",
    title: "The Ultimate Guide to Managing Joint Pain with Regenerative Therapies",
    excerpt:
      "Joint pain affects millions worldwide. Traditional options offer temporary relief, but regenerative therapies provide a promising long-term alternative.",
    category: "Therapy Guide",
    readTime: "8 min read",
    image: "/news/imgi_15_manage-joint-pain-naturally-1080x675.jpg",
  },
  {
    slug: "10-tips-to-naturally-boost-your-energy-and-performance",
    title: "10 Tips to Naturally Boost Your Energy and Performance",
    excerpt:
      "Maintaining high energy in today's fast-paced world is a challenge. Discover natural ways to boost your energy and performance.",
    category: "Wellness",
    readTime: "5 min read",
    image: "/news/imgi_40_boost-your-energy-naturally-1080x675.jpg",
  },
  {
    slug: "how-to-enhance-your-workout-recovery-with-stem-cell-therapy",
    title: "How to Enhance Your Workout Recovery with Stem Cell Therapy",
    excerpt:
      "Intense workouts take a toll on your body. Emerging therapies like stem cell therapy are revolutionizing recovery.",
    category: "Recovery",
    readTime: "6 min read",
    image: "/news/imgi_13_enhance-workout-recovery-1080x675.jpg",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [featured, ...rest] = posts;

  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-[#F1ECF8] overflow-hidden">
      {/* ambient */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#6762AF]/06 blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12 lg:mb-14"
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#345691]">
              Latest News
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-poppins)] font-medium text-[2.25rem] sm:text-5xl lg:text-[3.4rem] text-[#1A1F30] leading-[1.05] tracking-[-0.04em]">
              Insights &amp;{" "}
              <span className="bg-gradient-to-r from-[#6762AF] to-[#71A7F5] bg-clip-text text-transparent">
                updates
              </span>
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#583563] hover:text-[#1A1F30] transition-colors shrink-0"
          >
            View All Articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Editorial layout: featured + stacked */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* FEATURED - content over image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Link
              href={`/news/${featured.slug}`}
              className="group relative block h-full min-h-[420px] lg:min-h-[560px] rounded-[1.75rem] overflow-hidden luxe-shadow"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover transition-transform duration-[1.1s] group-hover:scale-105"
              />
              {/* gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E16] via-[#0B0E16]/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6762AF]/25 via-transparent to-transparent mix-blend-overlay" />

              {/* read time chip */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 text-[11px] font-medium text-white">
                <Clock className="h-3 w-3" />
                {featured.readTime}
              </div>

              {/* content */}
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <span className="inline-block rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wider mb-4">
                  {featured.category}
                </span>
                <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[1.6rem] lg:text-[2.1rem] text-white leading-[1.12] tracking-[-0.02em] max-w-[520px]">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[13.5px] text-white/70 leading-relaxed max-w-[460px] line-clamp-2">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white">
                  Read article
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:text-[#1A1F30] transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* STACKED - two compact horizontal cards */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: EASE }}
                className="flex-1"
              >
                <Link
                  href={`/news/${post.slug}`}
                  className="group flex h-full bg-white rounded-[1.5rem] overflow-hidden luxe-shadow luxe-shadow-hover hover:-translate-y-1 transition-all duration-500"
                >
                  {/* image */}
                  <div className="relative w-[42%] shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                  </div>
                  {/* content */}
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block rounded-full bg-[#F1ECF8] px-2.5 py-0.5 text-[10px] font-semibold text-[#583563] uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10.5px] text-[#7A7F95]">
                        <Clock className="h-2.5 w-2.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[16px] lg:text-[18px] text-[#1A1F30] leading-snug group-hover:text-[#583563] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] text-[#4A4F66] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#6762AF] group-hover:gap-2.5 transition-all">
                      Read article
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
