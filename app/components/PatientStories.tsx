"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * PatientStories — Figma S11 TESTIMONIALS
 * White bg, 64px 100px padding, left-aligned header
 * Three #F1ECF8 cards, 16px radius, 32px padding, 24px gap
 * Navy quote mark, 18px body, 14px semibold attribution
 */

const stories = [
  {
    quote:
      "I was six months out from a knee replacement. The RR team walked me through what regenerative therapy could and couldn't do, including what probably wouldn't work. I decided to try it. Two months later, I'm hiking with my dog again. They never promised that outcome. For me, it's been the right call so far.",
    name: "David R.",
    location: "Florida",
    program: "Regenerative Therapy patient",
  },
  {
    quote:
      "The thing that sold me was that the same clinician reviewing my testosterone was reviewing my peptide stack. Nobody had ever looked at the whole picture before. It finally feels like I have a medical team, not four subscriptions.",
    name: "Marcus T.",
    location: "Texas",
    program: "Hormone & Peptide patient",
  },
  {
    quote:
      "NAD+ was something I'd been curious about for two years. Doing it inside a real clinical program, with my labs, with a team that also manages my hormones, changed the whole equation. This is what longevity care was supposed to look like.",
    name: "Sandra K.",
    location: "California",
    program: "NAD+ & Longevity patient",
  },
];

export default function PatientStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-16 xl:px-20 flex flex-col gap-11">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-3.5"
        >
          {/* Eyebrow: Poppins 500 14px uppercase 1px spacing #1B3A5C */}
          <span
            className="font-[family-name:var(--font-poppins)] font-medium text-[14px] leading-[100%] tracking-[1px] uppercase"
            style={{ color: "#1B3A5C" }}
          >
            Patient Stories
          </span>

          {/* H2: Poppins 500 48px/51px -2px #2D1A45 */}
          <h2
            className="font-[family-name:var(--font-poppins)] font-medium"
            style={{
              fontSize: "clamp(2rem, 4vw, 48px)",
              lineHeight: "51px",
              letterSpacing: "-2px",
              color: "#2D1A45",
            }}
          >
            Real patients. Real words. Real lives.
          </h2>
        </motion.div>

        {/* Cards row — scrollable on mobile */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4 rounded-2xl p-8"
              style={{ background: "#F1ECF8" }}
            >
              {/* Navy quote mark */}
              <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M0 14.72V8.32C0 5.97333 0.64 3.97333 1.92 2.32C3.2 0.64 5.01333 0 7.36 0V2.56C6.21333 2.56 5.28 2.93333 4.56 3.68C3.84 4.4 3.48 5.28 3.48 6.32H7.36V14.72H0ZM11.36 14.72V8.32C11.36 5.97333 12 3.97333 13.28 2.32C14.56 0.64 16.3733 0 18.72 0V2.56C17.5733 2.56 16.64 2.93333 15.92 3.68C15.2 4.4 14.84 5.28 14.84 6.32H18.72V14.72H11.36Z"
                  fill="#1B3A5C"
                />
              </svg>

              {/* Quote body: Poppins 400 18px/150% -0.25px #1A1F30 */}
              <p
                className="font-[family-name:var(--font-poppins)] font-normal flex-1"
                style={{
                  fontSize: "18px",
                  lineHeight: "150%",
                  letterSpacing: "-0.25px",
                  color: "#1A1F30",
                }}
              >
                {s.quote}
              </p>

              {/* Attribution */}
              <div className="flex flex-col gap-0.5">
                {/* Name | Location: Poppins 600 14px/140% #1B3A5C */}
                <span
                  className="font-[family-name:var(--font-poppins)] font-semibold"
                  style={{
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#1B3A5C",
                  }}
                >
                  {s.name} | {s.location}
                </span>

                {/* Program: Poppins 400 14px/140% #1B3A5C */}
                <span
                  className="font-[family-name:var(--font-poppins)] font-normal"
                  style={{
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#1B3A5C",
                  }}
                >
                  {s.program}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
