"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  { title: "The Ultimate Guide to Managing Joint Pain with Regenerative Therapies", excerpt: "Joint pain affects millions worldwide. Traditional treatments offer temporary relief, but regenerative therapies provide a promising long-term alternative.", category: "Treatment Guide", readTime: "8 min read", image: "https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "10 Tips to Naturally Boost Your Energy and Performance", excerpt: "Maintaining high energy levels in today's fast-paced world is a challenge. Discover natural ways to boost your energy and performance.", category: "Wellness", readTime: "5 min read", image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { title: "How to Enhance Your Workout Recovery with Stem Cell Therapy", excerpt: "Intense workouts take a toll on your body. Emerging treatments like stem cell therapy are revolutionizing recovery.", category: "Recovery", readTime: "6 min read", image: "https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Latest News</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Insights & <span className="gradient-text">Updates</span>
            </h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors shrink-0">
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article key={post.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }} className="group bg-white rounded-3xl overflow-hidden soft-shadow border border-gray-100 hover:soft-shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{post.category}</span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
