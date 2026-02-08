"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  {
    title: "What is Wharton's Jelly?",
    description:
      "Learn about the science behind Wharton's Jelly and how mesenchymal stem cells work to repair and regenerate damaged tissues.",
    thumbnail:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "How Stem Cell Therapy Works",
    description:
      "Discover the step-by-step process of how regenerative therapy is administered and what to expect during treatment.",
    thumbnail:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    title: "Patient Success Stories",
    description:
      "Hear from real patients who have experienced the transformative power of Wharton's Jelly stem cell therapy.",
    thumbnail:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
            Learn More
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Watch the Videos Below
          </h2>
          <p className="mt-5 text-lg text-gray-500 font-sans">
            Watch the videos below for more information about Wharton&apos;s
            Jelly and what it can do for you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgba(107,63,160,0.05)] hover:shadow-[0_20px_60px_rgba(107,63,160,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer"
              onClick={() => setActiveVideo(i)}
            >
              {/* Thumbnail */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/30 group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-300">
                    <Play className="h-7 w-7 text-white ml-1" />
                  </div>
                </div>

                {/* YouTube badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-red-600/90 backdrop-blur-sm px-3 py-1">
                  <svg
                    className="h-3.5 w-3.5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                    <path
                      d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      fill="#fff"
                    />
                  </svg>
                  <span className="text-[10px] font-semibold text-white font-sans">
                    YouTube
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* YouTube Modal */}
      {activeVideo !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video mx-6 rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videos[activeVideo].youtubeId}?autoplay=1&rel=0`}
              title={videos[activeVideo].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
