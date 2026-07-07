"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const writtenTestimonials = [
  { name: "Vicki R.", condition: "Osteoarthritis & Knee", quote: "The next morning I woke up and took a deep breath, swung my feet over the bed side and touched the floor. No pain. No hobbling. No tears. No fear. I welcome the journey to recovery and getting back to being able to do things I lost to the injury.", stars: 5, initials: "VR" },
  { name: "Crystal R.", condition: "Back & Ankle Pain", quote: "I had severe injuries to my ankle, bulging discs, and arthritis. Eight days after my appointment, I was driving to work and realized I didn't play my pain game. I didn't have to. It was so great.", stars: 5, initials: "CR" },
  { name: "Grace", condition: "MS & Fibromyalgia", quote: "I had MS, fibromyalgia, degenerative disc disease, and scoliosis. I was on opioids and couldn't get out of bed. I'm now off them. My husband can put his arm around me again.", stars: 5, initials: "G" },
  { name: "Ethan M.", condition: "Rotator Cuff", quote: "I tore my rotator cuff. They told me I needed surgery. I'm 26 — no interest in being cut into. After one injection and 30 days, 80–90% of my range of motion is back, with no surgery recovery.", stars: 5, initials: "EM" },
  { name: "Margaret P.", condition: "Knee Mobility", quote: "For years, I could not bend my leg over my knee to put my socks on. Three days after the injection, I picked it up — I hadn't done it for 10 years. No pain whatsoever. Will I recommend this? You better believe it.", stars: 5, initials: "MP" },
  { name: "Roy B.", condition: "Knee Pain", quote: "I wasn't able to do much with my knee. Three weeks after the shot, I've been bouncing around, walking, almost running, riding bikes. Friends ask where I got it — I refer them to the doctor.", stars: 5, initials: "RB" },
  { name: "John R.", condition: "Knee Burning", quote: "I was feeling a lot of burning in my right knee. Since the stem cell therapy, it has diminished. My knee feels great, I'm back to dancing where I couldn't before.", stars: 5, initials: "JR" },
];

const marqueeItems = [...writtenTestimonials, ...writtenTestimonials];

function TestimonialCard({ t }: { t: (typeof writtenTestimonials)[0] }) {
  return (
    <div className="relative flex flex-col w-[340px] shrink-0 rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] hover:border-[#6762AF]/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#6762AF]/60 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 bg-[#6762AF]/15 border border-[#6762AF]/25 text-[10px] font-semibold uppercase tracking-widest text-[#71A7F5]">
          {t.condition}
        </span>
        <div className="flex items-center gap-0.5">
          {[...Array(t.stars)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-[#71A7F5] text-[#71A7F5]" />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex-1 mb-4">
        <Quote className="h-5 w-5 text-[#6762AF]/40 mb-2" />
        <p className="text-sm text-white/70 leading-relaxed">{t.quote}</p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#6762AF] to-[#583563] flex items-center justify-center shadow-md shrink-0">
          <span className="text-[10px] font-bold text-white">{t.initials}</span>
        </div>
        <p className="text-sm font-bold text-white">{t.name}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="relative py-28 lg:py-32 bg-[#1A1F30] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6762AF]/40 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#6762AF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#345691]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="eyebrow text-[#71A7F5]">Real Results</span>
          <h2 className="mt-4 lux-display text-4xl sm:text-5xl lg:text-[4rem] text-white leading-[1.05]">
            Hear it from <span className="text-[#6762AF] font-semibold">real people</span>
          </h2>
          <p className="mt-7 max-w-2xl mx-auto text-base lg:text-lg text-white/55 leading-relaxed">
            From everyday patients reclaiming their lives — the proof is in the results that speak for themselves.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full overflow-hidden mb-20"
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1A1F30] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1A1F30] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-marquee w-max py-2">
          {marqueeItems.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
