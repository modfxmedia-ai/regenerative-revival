"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Quote, Star, Award } from "lucide-react";

const BLOB_BASE = "https://65iosdxq0lyc5cm9.public.blob.vercel-storage.com";

const videoTestimonials = [
  {
    name: "Joe Rogan",
    title: "Podcast Host & Commentator",
    src: `${BLOB_BASE}/testimonial_video/joe-rogan-resize.mp4`,
    featured: false,
  },
  {
    name: "Morgan Freeman",
    title: "Actor & Philanthropist",
    src: `${BLOB_BASE}/testimonial_video/Morgan-freeman-resize.mp4`,
    featured: false,
  },
  {
    name: "Tony Robbins",
    title: "Peak Performance Coach",
    src: `${BLOB_BASE}/testimonial_video/Tony-robbins-resize.mp4`,
    featured: false,
  },
];

const writtenTestimonials = [
  {
    name: "Cody Jefferson",
    title: "Entrepreneur & Speaker",
    quote:
      "Regenerative Revival completely changed the way I look at recovery and health. The stem cell therapy got me back on my feet faster than anything I've ever tried. I feel stronger and more alive at 45 than I did at 30.",
    stars: 5,
    featured: true,
    initials: "CJ",
    accentColor: "from-primary to-primary-dark",
  },

];

function VideoCard({
  video,
  index,
  inView,
}: {
  video: (typeof videoTestimonials)[0];
  index: number;
  inView: boolean;
}) {
  const featured = video.featured;
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-3xl overflow-hidden bg-white/[0.04] border shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(107,63,160,0.25)] hover:-translate-y-1 transition-all duration-500 cursor-pointer ${
        featured
          ? "border-primary/40 ring-2 ring-primary/20"
          : "border-white/[0.08]"
      }`}
      onClick={togglePlay}
    >
      {featured && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-primary text-xs font-bold text-white shadow-lg shadow-primary/30 uppercase tracking-wider">
            <Award className="h-3 w-3" />
            Featured
          </span>
        </div>
      )}
      {/* Video element */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
          onLoadedMetadata={() => {
            if (videoRef.current) videoRef.current.currentTime = 5;
          }}
          onEnded={() => setPlaying(false)}
        />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent pointer-events-none opacity-60" />

        {/* Play / Pause button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-2xl shadow-primary/40">
            <div className="absolute inset-0 rounded-full animate-ping bg-primary/40" style={{ animationDuration: playing ? "0s" : "1.5s" }} />
            {playing ? (
              <Pause className="h-7 w-7 text-white fill-white" />
            ) : (
              <Play className="h-7 w-7 text-white fill-white translate-x-0.5" />
            )}
          </div>
        </div>

      </div>

      {/* Name card at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-5 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-2.5 bg-primary/20 border border-primary/30">
          <div className="h-1.5 w-1.5 rounded-full bg-primary-light" />
          <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">Testimonial</span>
        </div>
        <p className="text-xl font-bold text-white">{video.name}</p>
        {video.title && <p className="text-sm text-white/55 mt-0.5">{video.title}</p>}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const featuredTestimonial = writtenTestimonials.find((t) => t.featured)!;
  const gridTestimonials = writtenTestimonials.filter((t) => !t.featured);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Background ambience */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5">
            Real Results
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hear It From{" "}
            <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
              Real People
            </span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/45 leading-relaxed">
            From world-renowned figures to everyday patients — the proof is in
            the results that speak for themselves.
          </p>
        </motion.div>

        {/* Featured written testimonial — Cody Jefferson */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/[0.12] via-white/[0.03] to-transparent border border-white/[0.08] p-8 sm:p-12 mb-8 shadow-[0_8px_60px_rgba(107,63,160,0.15)]"
        >
          {/* Glow accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-2xl font-bold text-white">{featuredTestimonial.initials}</span>
              </div>
            </div>

            <div className="flex-1">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(featuredTestimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/40 mb-3" />

              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div>
                  <p className="text-base font-bold text-white">{featuredTestimonial.name}</p>
                  <p className="text-sm text-white/45">{featuredTestimonial.title}</p>
                </div>
                <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-primary-light bg-primary/15 border border-primary/20 rounded-full px-3 py-1">
                  Featured
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20 origin-center"
        />

        {/* Video testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {videoTestimonials.map((video, i) => (
            <VideoCard key={video.name} video={video} index={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

