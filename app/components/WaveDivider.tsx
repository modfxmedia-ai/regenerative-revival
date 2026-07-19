"use client";

/**
 * WaveDivider - animated SVG wave between sections.
 * fill = the NEXT section's background colour.
 *
 * The wave path always fills solid to the bottom edge.
 * A matching solid rectangle fills from the wave's lowest point
 * to the SVG bottom so there is zero gap / dark line.
 */

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type WaveType = "wave" | "tilt" | "blob" | "ripple";

interface WaveDividerProps {
  fill: string;
  type?: WaveType;
  flip?: boolean;
  height?: number;
  className?: string;
}

const makePath = (type: WaveType, h: number): string => {
  switch (type) {
    case "wave":
      return `M0,${h * 0.45} C240,${h * 0.9} 480,${h * 0.05} 720,${h * 0.5} C960,${h * 0.95} 1200,${h * 0.1} 1440,${h * 0.5} L1440,${h} L0,${h} Z`;
    case "tilt":
      return `M0,${h * 0.7} C480,${h * 0.1} 960,${h * 0.95} 1440,${h * 0.2} L1440,${h} L0,${h} Z`;
    case "blob":
      return `M0,${h * 0.3} C200,${h * 0.85} 420,${h * 0.05} 640,${h * 0.55} C860,${h} 1080,${h * 0.1} 1280,${h * 0.55} C1360,${h * 0.72} 1420,${h * 0.48} 1440,${h * 0.52} L1440,${h} L0,${h} Z`;
    case "ripple":
    default:
      return `M0,${h * 0.55} C120,${h * 0.2} 240,${h * 0.85} 360,${h * 0.55} C480,${h * 0.25} 600,${h * 0.82} 720,${h * 0.55} C840,${h * 0.28} 960,${h * 0.8} 1080,${h * 0.55} C1200,${h * 0.3} 1320,${h * 0.78} 1440,${h * 0.55} L1440,${h} L0,${h} Z`;
  }
};

export default function WaveDivider({
  fill,
  type = "wave",
  flip = false,
  height = 80,
  className = "",
}: WaveDividerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "120px" });
  const prefersReduced = useReducedMotion();

  const path = makePath(type, height);

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={{
        transform: flip ? "scaleY(-1)" : undefined,
        // Overlap both adjacent sections by 2px to guarantee no seam
        marginTop: "-2px",
        marginBottom: "-2px",
        lineHeight: 0,
        fontSize: 0,
        display: "block",
        // The div itself gets the fill colour as background so
        // any sub-pixel gap under the SVG is invisible
        backgroundColor: fill,
      }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: `${height}px` }}
      >
        <motion.path
          d={path}
          fill={fill}
          initial={prefersReduced ? undefined : { y: height * 0.4, opacity: 0 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: prefersReduced ? 0 : [0, -5, 0, 5, 0],
                }
              : {}
          }
          transition={
            inView
              ? {
                  opacity: { duration: 0.6, ease: "easeOut" },
                  y: prefersReduced
                    ? undefined
                    : {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                }
              : {}
          }
        />
      </svg>
    </div>
  );
}
