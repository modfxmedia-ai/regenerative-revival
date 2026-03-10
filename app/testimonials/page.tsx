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
    poster: "/image.png",
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
    name: "Vicki R.",
    condition: "Osteoarthritis & Knee",
    quote:
      "The Osteoarthritis set in fast; as well as the pain from the severely from meniscus in both knees and the extreme bone on bone. I had no cartilage left, I could feel the bones grinding and clicking. So, I had my stem cell injections… the next morning, I woke up and took a deep breath, swung my feet over the bed side and touched the floor. Holy cow! No PAIN… No Hobbling… No Tears… No Fear! I welcome the journey to recovery and getting back to being able to do things I lost to the injury.",
    stars: 5,
    initials: "VR",
  },
  {
    name: "Crystal R.",
    condition: "Back & Ankle Pain",
    quote:
      "I had severe injuries to my ankle, bulging discs in my back, and arthritis. I would play a game each morning, guessing my pain level… My back-pain specialist wanted me to do injections, but I didn't want medication. I never knew about stem cells… Eight days after my appointment, I was driving to work and realized I didn't play my game. I didn't have to, it was so great.",
    stars: 5,
    initials: "CR",
  },
  {
    name: "Grace",
    condition: "MS & Fibromyalgia",
    quote:
      "I had Multiple sclerosis (MS), fibromyalgia, degenerative joint and disc disease, and scoliosis… My husband couldn't put his arm around me because of the pain… I was on opioids and used a walker and couldn't get out of bed most days… I'm now off them and don't need the walker. My husband can put his arm around me again and I don't have the popping in my back.",
    stars: 5,
    initials: "G",
  },
  {
    name: "Ethan M.",
    condition: "Rotator Cuff",
    quote:
      "I tore my rotator cuff while at work… They told me I needed surgery. I'm 26 years old… I had no interest in letting them cut into my body. I looked for alternatives and found stem cells… And after only one injection, and 30 days later, 80–90% of my range of motion in my shoulder has returned and I have minimal to no pain… AND no recovery time from surgery.",
    stars: 5,
    initials: "EM",
  },
  {
    name: "Margaret P.",
    condition: "Knee Mobility",
    quote:
      "For years, I could not bend my leg up over my knee, so that I could put my socks on… I signed up, came in here, got my injection. Three days later I'm sitting on the bed thinking, I'm going to try this… You're not going to believe this, I was just shocked. I took my little right leg here, and I picked it up. I put it over my knee, and I hadn't done it for 10 years… I've had no pain whatsoever. None. Will I recommend this to others? You better believe it.",
    stars: 5,
    initials: "MP",
  },
  {
    name: "Roy B.",
    condition: "Knee Pain",
    quote:
      "I wasn't able to do much of my moving towards my right, with my knee problem. Since I've got the shot, the three weeks, I've been bouncing around, walking all over the place, and almost running, riding bikes, things that I wasn't able to do. I've been talking to a lot of people and they've been asking me \"Where did you get it?\" — I've referred them to the doctor and a few of them have taken the procedure and they're doing great.",
    stars: 5,
    initials: "RB",
  },
  {
    name: "John R.",
    condition: "Knee Burning",
    quote:
      "My problem is in my right knee and I was feeling a lot of burning sensation and since I've taken stem cell system, it has diminished quite a bit. My knee's feeling great, I'm back to dancing, where I couldn't before and it's working for me.",
    stars: 5,
    initials: "JR",
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...writtenTestimonials, ...writtenTestimonials];

function TestimonialCard({ t }: { t: (typeof writtenTestimonials)[0] }) {
  return (
    <div className="relative flex flex-col w-[340px] shrink-0 rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 hover:bg-white/[0.07] hover:border-primary/30 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
      {/* Top purple line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Header row: condition badge + stars */}
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 bg-primary/15 border border-primary/25 text-[10px] font-semibold uppercase tracking-widest text-primary-light">
          {t.condition}
        </span>
        <div className="flex items-center gap-0.5">
          {[...Array(t.stars)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1 mb-4">
        <Quote className="h-5 w-5 text-primary/35 mb-2" />
        <p className="text-sm text-white/65 leading-relaxed">
          {t.quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md shrink-0">
          <span className="text-[10px] font-bold text-white">{t.initials}</span>
        </div>
        <p className="text-sm font-bold text-white">{t.name}</p>
      </div>
    </div>
  );
}

function VideoCard({
  video,
  index,
  inView,
  featured = false,
}: {
  video: (typeof videoTestimonials)[0] & { poster?: string };
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
          poster={video.poster}
          onLoadedMetadata={() => {
            if (!video.poster && videoRef.current) videoRef.current.currentTime = 5;
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

      {/* Written testimonials — marquee */}
      <section
        ref={writtenRef}
        className="relative py-24 bg-black overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={writtenInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-light bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5">
              Written Reviews
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              What Our Patients Are Saying
            </h2>
          </motion.div>
        </div>

        {/* Marquee — full bleed */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={writtenInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden"
        >
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee w-max py-2">
            {marqueeItems.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </motion.div>
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
