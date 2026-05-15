import { ImageResponse } from "next/og";

// Per SEO playbook §4.7 / §16.12: dynamic OG image generator.
// Replaces /logo.png as the default OG image (logos at 1200×630 look bad
// on social — mostly empty space). This produces a branded card with
// title + tagline in the safe area, 1200×630, ~80 KB.

export const runtime = "edge";
export const alt = "Regenerative Revival — Stem Cell Therapy & Regenerative Medicine";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #3a1f5c 0%, #4e2d78 50%, #6b3fa0 100%)",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative orb (purple ambient blur) */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "rgba(155, 109, 215, 0.25)",
            filter: "blur(120px)",
          }}
        />

        {/* Brand chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 22px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 9999,
            color: "rgba(255,255,255,0.85)",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Regenerative Revival
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          Stem Cell Therapy &{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #d4b3f4, #b794e0, #9b6dd7)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Regenerative Medicine
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Cutting-edge Wharton&rsquo;s Jelly therapy for pain relief, tissue
          repair &amp; recovery.
        </div>
      </div>
    ),
    { ...size }
  );
}
