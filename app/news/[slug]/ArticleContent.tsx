"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Article } from "../data";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trimStart();
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-gray-900 mt-10 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-gray-900 mt-12 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("- **")) {
      const match = trimmed.match(/^- \*\*(.+?)\*\*\s*(.*)$/);
      if (match) {
        elements.push(
          <li key={key++} className="flex gap-3 text-base text-gray-600 leading-relaxed font-sans ml-1 mb-2">
            <span className="text-primary mt-1.5 shrink-0">•</span>
            <span><span className="font-semibold text-gray-800">{match[1]}</span> {match[2]}</span>
          </li>
        );
      }
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={key++} className="flex gap-3 text-base text-gray-600 leading-relaxed font-sans ml-1 mb-2">
          <span className="text-primary mt-1.5 shrink-0">•</span>
          <span>{trimmed.slice(2)}</span>
        </li>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={key++} className="text-base font-semibold text-gray-800 mt-6 mb-2 font-sans">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else if (trimmed.startsWith("**")) {
      const boldMatch = trimmed.match(/^\*\*(.+?)\*\*\s*(.*)$/);
      if (boldMatch) {
        elements.push(
          <p key={key++} className="text-base text-gray-600 leading-relaxed font-sans mb-3">
            <span className="font-semibold text-gray-800">{boldMatch[1]}</span> {boldMatch[2]}
          </p>
        );
      }
    } else if (trimmed === "") {
      // skip empty lines
    } else {
      elements.push(
        <p key={key++} className="text-base text-gray-600 leading-relaxed font-sans mb-3">
          {trimmed}
        </p>
      );
    }
  }
  return elements;
}

interface Props {
  article: Article;
  related: Article[];
}

export default function ArticleContent({ article, related }: Props) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-8 pb-16">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-primary-light transition-colors font-sans mb-10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 48 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 mb-5"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/30 font-sans">
                <Calendar className="h-3.5 w-3.5" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-light/50 font-sans">
                <Tag className="h-3.5 w-3.5" />
                {article.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight"
            >
              {article.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-white/35 leading-relaxed font-sans"
            >
              {article.excerpt}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mx-auto max-w-5xl px-6 lg:px-8 mt-14"
      >
        <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <Image
            src={article.image}
            alt={article.title}
            width={1080}
            height={675}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* ── ARTICLE BODY ── */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mx-auto max-w-3xl px-6 lg:px-8 py-16"
      >
        {renderMarkdown(article.content)}

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Ready to take the next step?
          </p>
          <Link
            href="/consult-router"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-primary font-sans hover:gap-4 transition-all duration-300"
          >
            Take The 2-Minute Quiz
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.article>

      {/* ── RELATED ARTICLES ── */}
      <section className="bg-cream border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="flex items-center gap-5 mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary font-sans">
              Related Articles
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/news/${r.slug}`}
                className="group block bg-cream"
              >
                <div className="overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    width={640}
                    height={400}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gray-400 font-sans">
                    {r.date}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {r.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60 font-sans group-hover:text-primary group-hover:gap-3 transition-all duration-300">
                    Read <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
