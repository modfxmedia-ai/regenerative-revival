/**
 * WaveDivider — organic SVG wave that bleeds between sections.
 *
 * Usage: place at the BOTTOM of a section, set `fill` to the color of the NEXT section.
 * flip={true}  → flip vertically (for section top transitions)
 *
 * Presets:
 *   type="wave"       — gentle S-curve wave
 *   type="tilt"       — clean diagonal tilt
 *   type="blob"       — asymmetric organic blob edge
 *   type="ripple"     — double-wave ripple
 */

type WaveType = "wave" | "tilt" | "blob" | "ripple";

interface WaveDividerProps {
  fill: string;          // fill color = next section's bg color
  type?: WaveType;
  flip?: boolean;        // flip upside-down for top-of-section use
  height?: number;       // svg height in px
  className?: string;
}

export default function WaveDivider({
  fill,
  type = "wave",
  flip = false,
  height = 80,
  className = "",
}: WaveDividerProps) {
  const paths: Record<WaveType, string> = {
    wave: "M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z",
    tilt: "M0,60 C480,20 960,80 1440,20 L1440,80 L0,80 Z",
    blob: "M0,30 C200,80 400,10 600,50 C800,90 1000,15 1200,55 C1300,70 1380,35 1440,50 L1440,80 L0,80 Z",
    ripple:
      "M0,50 C120,20 240,80 360,50 C480,20 600,80 720,50 C840,20 960,80 1080,50 C1200,20 1320,80 1440,50 L1440,80 L0,80 Z",
  };

  return (
    <div
      className={`pointer-events-none select-none leading-[0] ${className}`}
      style={{
        transform: flip ? "scaleY(-1)" : undefined,
        marginBottom: flip ? undefined : -1,
        marginTop: flip ? -1 : undefined,
      }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height }}
        aria-hidden
      >
        <path d={paths[type]} fill={fill} />
      </svg>
    </div>
  );
}
