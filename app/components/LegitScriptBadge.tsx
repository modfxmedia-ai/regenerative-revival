/**
 * LegitScript badge slot.
 *
 * Per dev brief: pending-state badge at launch, swap to certified badge once
 * RR + Wizlo complete LegitScript certification. The badge asset itself is
 * controlled by NEXT_PUBLIC_LEGITSCRIPT_STATUS env var so we can flip the
 * site without a code deploy.
 *
 *   NEXT_PUBLIC_LEGITSCRIPT_STATUS=pending    (default)
 *   NEXT_PUBLIC_LEGITSCRIPT_STATUS=certified
 */
import Image from "next/image";

type Status = "pending" | "certified";

const status =
  ((process.env.NEXT_PUBLIC_LEGITSCRIPT_STATUS as Status) ?? "pending");

const ASSETS: Record<Status, { src: string; alt: string; href: string }> = {
  pending: {
    src: "/badges/legitscript-pending.svg",
    alt: "LegitScript Certification - Application In Progress",
    href: "https://www.legitscript.com/searchresults",
  },
  certified: {
    src: "/badges/legitscript-certified.svg",
    alt: "LegitScript Certified",
    href: "https://www.legitscript.com/searchresults",
  },
};

export default function LegitScriptBadge({
  className = "",
  width = 120,
  height = 56,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  const asset = ASSETS[status];
  return (
    <a
      href={asset.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center ${className}`}
      aria-label={asset.alt}
    >
      {/*
        NOTE: badge assets pending. Drop SVGs into /public/badges/.
        Until then we render a text placeholder so layouts don't shift.
      */}
      {process.env.NODE_ENV === "production" ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          width={width}
          height={height}
          unoptimized
        />
      ) : (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-current text-xs uppercase tracking-wide opacity-70">
          LegitScript · {status}
        </span>
      )}
    </a>
  );
}
