"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Quote, Star, ArrowRight, MessageSquare } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";


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
    initials: "CJ",
    accentColor: "from-primary to-primary-dark",
    category: "Recovery & Vitality",
    featured: true,
  },
 
];

function VideoCard({
  video,
  index,
  inView,
  featured = false,
}: {
  video: (typeof videoTestimonials)[0];
  index: number;
  inView: boolean;
  featured?: boolean;
}) {
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
      transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgba(107,63,160,0.25)] hover:-translate-y-1 transition-all duration-500 cursor-pointer ${
        featured ? "ring-2 ring-primary/40" : ""
      }`}
      onClick={togglePlay}
    >
      {featured && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-primary text-xs font-bold text-white shadow-lg shadow-primary/30 uppercase tracking-wider">
            <Star className="h-3 w-3 fill-white" />
            Featured
          </span>
        </div>
      )}

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
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent pointer-events-none opacity-60" />

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-2xl shadow-primary/40">
            <div
              className="absolute inset-0 rounded-full animate-ping bg-primary/40"
              style={{ animationDuration: playing ? "0s" : "1.5s" }}
            />
            {playing ? (
              <Pause className="h-7 w-7 text-white fill-white" />
            ) : (
              <Play className="h-7 w-7 text-white fill-white translate-x-0.5" />
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-5 py-5 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-2 bg-primary/20 border border-primary/30">
          <div className="h-1.5 w-1.5 rounded-full bg-primary-light" />
          <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">
            Testimonial
          </span>
        </div>
        <p className="text-lg font-bold text-white">{video.name}</p>
        {video.title && <p className="text-sm text-white/55 mt-0.5">{video.title}</p>}
      </div>
    </motion.div>
  );
}

function WrittenCard({
  t,
  index,
  inView,
}: {
  t: (typeof writtenTestimonials)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.07] p-7 hover:bg-white/[0.07] hover:-translate-y-1 hover:border-white/[0.12] transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
    >
      <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${t.accentColor} opacity-50`} />

      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-semibold text-white/40 uppercase tracking-widest bg-white/[0.06] rounded-full px-2.5 py-0.5">
          {t.category}
        </span>
      </div>

      <div className="flex items-center gap-0.5 mb-4 mt-3">
        {[...Array(t.stars)].map((_, idx) => (
          <Star key={idx} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <Quote className="h-6 w-6 text-primary/35 mb-3" />

      <blockquote className="text-sm text-white/65 leading-relaxed mb-6">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
        <div
          className={`h-10 w-10 rounded-xl bg-gradient-to-br ${t.accentColor} flex items-center justify-center shrink-0 shadow-md`}
        >
          <span className="text-sm font-bold text-white">{t.initials}</span>
        </div>
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-white/40">{t.title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const videoRef = useRef(null);
  const writtenRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true, margin: "-80px" });
  const writtenInView = useInView(writtenRef, { once: true, margin: "-80px" });

  return (
    <>
      <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }]} />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Real Results
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
          >
            Hear It From{" "}
            <span className="bg-gradient-to-r from-primary-light via-[#b794e0] to-primary bg-clip-text text-transparent">
              Real People
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-xl text-white/50 leading-relaxed max-w-2xl mx-auto"
          >
            From world-renowned names to everyday people reclaiming their lives — the results
            speak for themselves.
          </motion.p>
        </div>
      </section>

      {/* Written testimonials */}
      <section
        ref={writtenRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.06] rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={writtenInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5">
              Written Reviews
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              What Our Clients Are Saying
            </h2>
          </motion.div>

          {/* Featured written testimonial — Cody Jefferson */}
          {writtenTestimonials.filter((t) => t.featured).map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={writtenInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/[0.12] via-white/[0.03] to-transparent border border-primary/20 p-8 sm:p-12 mb-8 shadow-[0_8px_60px_rgba(107,63,160,0.18)]"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30">
                    <span className="text-2xl font-bold text-white">{t.initials}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/40 mb-3" />
                  <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div>
                      <p className="text-base font-bold text-white">{t.name}</p>
                      <p className="text-sm text-white/45">{t.title}</p>
                    </div>
                    <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-primary-light bg-primary/15 border border-primary/20 rounded-full px-3 py-1">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Rest of written testimonials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {writtenTestimonials.filter((t) => !t.featured).map((t, i) => (
              <WrittenCard key={t.name} t={t} index={i} inView={writtenInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section
        ref={videoRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5">
              Video Stories
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Watch Their Journey</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {videoTestimonials.map((video, i) => (
              <VideoCard
                key={video.name}
                video={video}
                index={i}
                inView={videoInView}
                featured={video.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Ready to Write Your{" "}
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Own Story?
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/50">
              Book a free consultation and find out if regenerative therapy is right for you.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-10 text-sm font-semibold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

