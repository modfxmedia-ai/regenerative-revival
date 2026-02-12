"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";
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
      "Maintaining high energy levels in today's fast-paced world is a challenge. Discover natural ways to boost your energy and performance.",
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
    <section id="blog" className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5">Latest News</span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Insights & <span className="gradient-text">Updates</span>
            </h2>
          </div>
          <Link href="/news" className="group flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors shrink-0">
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/news/${post.slug}`}
                className="group relative block bg-white/60 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/80 shadow-[0_8px_32px_rgba(107,63,160,0.05)] hover:shadow-[0_20px_60px_rgba(107,63,160,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                {/* Glass shine */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent pointer-events-none z-10" />

                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image src={post.image} alt={post.title} width={640} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="relative p-6 z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary border border-primary/10">{post.category}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors duration-200">{post.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
