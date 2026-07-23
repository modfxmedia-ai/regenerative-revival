"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, CreditCard } from "lucide-react";

const STORAGE_KEY = "rr-financing-cta-dismissed";

/**
 * Small dismissible floating CTA (bottom-left) advertising Cherry financing.
 * Once dismissed, it stays hidden for the browser session via sessionStorage.
 */
export default function FinancingFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    // Small delay so it eases in after the page settles.
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-75 animate-[reveal-up_0.4s_ease-out]">
      <div className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-secondary px-4 py-3 pr-9 shadow-2xl shadow-black/30">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss financing offer"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-light">
          <CreditCard className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-tight text-white">
            Pay over time
          </p>
          <Link
            href="/financing"
            className="text-xs font-medium text-primary-light transition-colors hover:text-white"
          >
            Financing from 0% APR &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
