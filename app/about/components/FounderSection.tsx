"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Users2, Building2, Stethoscope } from "lucide-react";

const stats = [
  { icon: Users2, value: "10,000+", label: "Patients Connected" },
  { icon: Stethoscope, value: "100+", label: "Licensed Practitioners" },
  { icon: MapPin, value: "50", label: "States Covered" },
  { icon: Building2, value: "Since 2018", label: "Industry Leader" },
];

export default function FounderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Subtle background image wash */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/about/imgi_28_Untitled-design.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.03]"
        />
      </div>

      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20 z-10 pointer-events-none" />
              <img
                src="/photos/seth-berge-w-backdrop.jpg"
                alt="Seth Berge — Founder of Regenerative Revival"
                className="w-full h-auto rounded-[2rem] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
              {/* Name overlay on image */}
              <div className="absolute bottom-6 left-6 z-10">
                <div className="text-white font-bold text-lg">Seth Berge</div>
                <div className="text-white/60 text-sm font-sans">Founder &amp; CEO</div>
              </div>
            </div>

            {/* Floating stat card — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-2xl rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/80"
            >
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-xs text-gray-500 mt-1 font-sans">
                Years in Regenerative
                <br />
                Medicine
              </div>
            </motion.div>

            {/* Floating accent — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -left-4 bg-primary/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_8px_32px_rgba(107,63,160,0.3)]"
            >
              <div className="text-2xl font-bold text-white">1000s</div>
              <div className="text-xs text-white/70 font-sans">Lives Changed</div>
            </motion.div>

            {/* Small secondary image — accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-8 -right-10 hidden xl:block"
            >
              <div className="w-28 h-36 rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-2 border-white rotate-3">
                <img
                  src="/about/imgi_72_HERO-PRESENTER.jpg"
                  alt="Medical professional"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/5 rounded-full px-4 py-1.5 font-sans">
              Our Founder
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
              Meet <span className="gradient-text">Seth Berge</span>
            </h2>
            <p className="mt-2 text-lg text-gold font-semibold font-sans">
              Founder of Regenerative Revival
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed font-sans">
              Seth Berge is a visionary leader in the field of regenerative
              medicine, dedicated to helping individuals overcome chronic pain.
              Since 2018, Seth has been at the forefront of connecting thousands
              of patients with experienced providers offering the best
              regenerative medicine products on the market.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed font-sans">
              He has built strong relationships with top tissue manufacturers and
              has access to over 100 trained and licensed practitioners,
              including PAs, MDs, and DOs, across the 50 states.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-relaxed font-sans">
              Seth&apos;s innovative approach includes offering concierge
              regenerative therapy treatments that can be administered in the
              comfort of your home or office, regardless of your location in the
              US, and all at an affordable price point. His commitment to patient
              care and exceptional service have transformed countless lives,
              making Regenerative Revival a trusted name in stem cell therapy.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="text-center p-3 rounded-xl bg-cream/60 border border-gray-100"
                >
                  <s.icon className="h-5 w-5 text-primary mx-auto mb-1.5" />
                  <div className="text-lg font-bold text-gray-900 font-sans">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 font-sans">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8"
            >
              <a
                href="/#contact"
                className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 font-sans"
              >
                Schedule A Free Consultation ASAP
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
