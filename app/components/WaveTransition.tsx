"use client";

import { useEffect, useRef } from "react";

/**
 * WaveTransition — full-bleed animated canvas wave that bridges
 * the Hero (#021E3C) into the ValueProps (#0B0E16) dark section.
 *
 * Technique: pixel-level sinusoidal interference pattern rendered
 * on a downscaled canvas (SCALE=3 for perf) then CSS-scaled up.
 * Uses a pre-computed LUT (sin/cos tables) so the per-pixel loop
 * stays smooth even at 60fps on mid-range devices.
 *
 * Color palette locks to the brand purples/navys:
 *   deep navy  #021E3C  →  brand purple #6762AF  →  indigo #345691
 */

const SCALE = 3; // downsample factor — bigger = faster, softer

// ── Brand colour stops (0-1 range per channel) ──────────────────────────
// We blend between three stops based on the wave pattern value:
//   stop A → deep navy   (#021E3C)
//   stop B → brand purple (#6762AF)
//   stop C → indigo       (#345691)
const A = [0.008, 0.118, 0.235] as const; // #021E3C
const B = [0.404, 0.384, 0.686] as const; // #6762AF
const C = [0.204, 0.337, 0.569] as const; // #345691

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function mix3(
  [ar, ag, ab]: readonly [number, number, number],
  [br, bg, bb]: readonly [number, number, number],
  t: number
) {
  return [lerp(ar, br, t), lerp(ag, bg, t), lerp(ab, bb, t)] as const;
}

export default function WaveTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // respect prefers-reduced-motion — render a static gradient instead
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // LUT for fast sin/cos (1024 entries)
    const LUT_SIZE = 1024;
    const SIN = new Float32Array(LUT_SIZE);
    const COS = new Float32Array(LUT_SIZE);
    for (let i = 0; i < LUT_SIZE; i++) {
      const angle = (i / LUT_SIZE) * Math.PI * 2;
      SIN[i] = Math.sin(angle);
      COS[i] = Math.cos(angle);
    }
    const fsin = (x: number) =>
      SIN[((Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * LUT_SIZE) %
        LUT_SIZE) +
        LUT_SIZE) %
        LUT_SIZE];
    const fcos = (x: number) =>
      COS[((Math.floor(((x % (Math.PI * 2)) / (Math.PI * 2)) * LUT_SIZE) %
        LUT_SIZE) +
        LUT_SIZE) %
        LUT_SIZE];

    let ww = 0,
      wh = 0,
      pw = 0,
      ph = 0;
    let imgData: ImageData | null = null;
    let buf: Uint8ClampedArray | null = null;

    const resize = () => {
      ww = canvas.parentElement?.clientWidth ?? window.innerWidth;
      wh = canvas.parentElement?.clientHeight ?? 240;
      canvas.width = ww;
      canvas.height = wh;
      pw = Math.ceil(ww / SCALE);
      ph = Math.ceil(wh / SCALE);
      imgData = ctx.createImageData(pw, ph);
      buf = imgData.data;
    };

    window.addEventListener("resize", resize);
    resize();

    const t0 = performance.now();

    const render = () => {
      const t = (performance.now() - t0) * 0.0007; // time in seconds, slowed
      if (!buf || !imgData) return;

      for (let py = 0; py < ph; py++) {
        for (let px = 0; px < pw; px++) {
          // UV coords in [-1, 1] range, aspect-corrected
          const ux = ((2 * px - pw) / ph) * 1.4;
          const uy = (2 * py - ph) / ph;

          // 3-iteration interference pattern (cheap, beautiful)
          let a = 0;
          let d = 0;
          for (let i = 0; i < 3; i++) {
            a += fcos(i - d + t * 0.4 - a * ux * 0.5);
            d += fsin(i * uy * 0.8 + a);
          }

          // wave value → [-1, 1] → normalise to [0, 1]
          const wave = (fsin(a + d * 0.5) + 1) * 0.5;

          // vertical mask: fade to opaque at bottom edge, transparent at top
          const yMask = Math.max(0, Math.min(1, py / ph)) ** 1.5;

          // blend brand colours based on wave + position
          const blend1 = wave < 0.5 ? mix3(A, B, wave * 2) : mix3(B, C, (wave - 0.5) * 2);
          // subtle vertical depth — deeper colour lower in frame
          const blend2 = mix3(blend1, A, uy * 0.18 + 0.18);

          const idx = (py * pw + px) * 4;
          buf[idx + 0] = blend2[0] * 255;
          buf[idx + 1] = blend2[1] * 255;
          buf[idx + 2] = blend2[2] * 255;
          buf[idx + 3] = yMask * 255; // alpha = 0 at top → full at bottom
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // Scale up with imageSmoothingEnabled for the soft pixel look
      if (SCALE > 1) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(canvas, 0, 0, pw, ph, 0, 0, ww, wh);
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    // Negative margins pull the wave over the section seams above/below
    <div
      className="relative w-full overflow-hidden pointer-events-none select-none"
      style={{ height: 220, marginTop: -60, marginBottom: -60, zIndex: 10 }}
      aria-hidden
    >
      {/* Fallback static gradient for SSR / reduced-motion */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #021E3C 0%, #2A2060 35%, #1A2F50 65%, #0B0E16 100%)",
        }}
      />
      {/* Live canvas sits on top */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "normal" }}
      />
      {/* Top feather — blends into Hero */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #021E3C, transparent)",
        }}
      />
      {/* Bottom feather — blends into ValueProps */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #0B0E16, transparent)",
        }}
      />
    </div>
  );
}
