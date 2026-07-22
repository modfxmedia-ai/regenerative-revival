// ---------------------------------------------------------------------------
// Regenlix logo
// Renders the official REGENLIX brand lockup (orb + wordmark + tagline). The
// tagline ("Regenerative Lifestyle") is baked into the artwork, so `showTagline`
// is kept only for call-site compatibility and no longer changes the output.
// ---------------------------------------------------------------------------
import { ImageWithFallback } from "./ImageWithFallback";
import { ASSETS } from "../config";

export function RegenLinxLogo({
  className = "",
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  void showTagline;
  return (
    <ImageWithFallback
      src={ASSETS.regenlixLogo}
      alt="Regenlix — Regenerative Lifestyle"
      className={`w-auto object-contain ${className}`}
    />
  );
}
