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
      "Joint pain affects millions worldwide. Traditional treatments offer temporary relief, but regenerative therapies provide a promising long-term alternative.",
    category: "Treatment Guide",
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
      "Intense workouts take a toll on your body. Emerging treatments like stem cell therapy are revolutionizing recovery.",
    category: "Recovery",
    readTime: "6 min read",
    image: "/news/imgi_13_enhance-workout-recovery-1080x675.jpg",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-28 lg:py-32 bg-[#F1ECF8] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/40 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="eyebrow">Latest News</span>
            <h2 className="mt-4 lux-display text-4xl sm:text-5xl lg:text-[3.75rem] text-[#1A1F30] leading-[1.05]">
              Insights & <em className="em">updates</em>
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/news/${post.slug}`}
                className="group relative block bg-white rounded-[1.75rem] overflow-hidden hover:-translate-y-1.5 transition-all duration-500 luxe-shadow luxe-shadow-hover"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Top corner — read time */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-[#1A1F30] shadow-sm">
                    <Clock className="h-3 w-3 text-[#6762AF]" />
                    {post.readTime}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F30]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-7">
                  <span className="inline-block rounded-full bg-[#F1ECF8] px-3 py-1 text-[11px] font-semibold text-[#583563] uppercase tracking-wider mb-4">
                    {post.category}
                  </span>
                  <h3 className="lux-display text-xl text-[#1A1F30] leading-snug mb-3 group-hover:text-[#583563] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#4A4F66] leading-relaxed line-clamp-2 mb-5">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#6762AF] group-hover:text-[#583563] transition-colors">
                    Read article
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
