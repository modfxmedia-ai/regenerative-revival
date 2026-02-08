"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Shield, Award, Users } from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "10,000+", label: "Patients Treated", icon: Users },
  { value: "98%", label: "Satisfaction Rate", icon: Award },
  { value: "15+", label: "Years Experience", icon: Shield },
];

export default function Hero() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.regenerativerevival.com/wp-content/uploads/2024/08/pexels-chokniti-khongchum-1197604-2280547-scaled.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-sage blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Now Accepting New Patients
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
            >
              Reviving Health{" "}
              <span className="gradient-text">Through Science</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-lg text-lg sm:text-xl leading-relaxed text-text-light"
            >
              Advanced stem cell therapy powered by Wharton&apos;s Jelly — easing
              pain, restoring vitality, and renewing your body from within.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <button
                onClick={() => setVideoPlaying(true)}
                className="group flex h-14 items-center justify-center gap-3 rounded-full border-2 border-primary/20 px-8 text-base font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Play className="h-4 w-4 text-primary ml-0.5" />
                </span>
                Watch Our Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-4 pt-8 border-t border-primary/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <stat.icon className="h-4 w-4 text-primary" />
                    <span className="text-2xl sm:text-3xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column — Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden soft-shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.regenerativerevival.com/wp-content/uploads/2024/08/pexels-chokniti-khongchum-1197604-2280547-scaled.jpg"
                alt="Advanced stem cell therapy"
                className="w-full h-auto rounded-3xl object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent rounded-3xl" />

              {/* Floating badges */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 soft-shadow animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">FDA Compliant</span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 soft-shadow animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold" />
                  <span className="text-sm font-semibold text-foreground">Board Certified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-6 rounded-full border-2 border-primary/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2 w-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>

      {/* Video Modal */}
      {videoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video mx-6 rounded-2xl overflow-hidden bg-white">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted">
              Video player — add your video URL here
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
