"use client";

import { useEffect } from "react";

/**
 * Captures UTM (and gclid/fbclid) params from the URL on first arrival and
 * stashes them in sessionStorage as `rr_utm`. submit-lead.ts reads from
 * sessionStorage and attaches them to every lead POST so the team email +
 * GHL/Tyriacore webhooks receive source attribution.
 *
 * First-touch wins for the session - we don't overwrite an existing entry
 * if a downstream click rewrites the URL.
 */
const KEYS = [
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "utmTerm",
  "utmContent",
  "gclid",
  "fbclid",
] as const;

const URL_PARAM: Record<(typeof KEYS)[number], string> = {
  utmSource: "utm_source",
  utmMedium: "utm_medium",
  utmCampaign: "utm_campaign",
  utmTerm: "utm_term",
  utmContent: "utm_content",
  gclid: "gclid",
  fbclid: "fbclid",
};

export default function UtmCapture() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("rr_utm")) return; // first-touch wins
      const params = new URLSearchParams(window.location.search);
      const captured: Record<string, string> = {};
      for (const key of KEYS) {
        const v = params.get(URL_PARAM[key]);
        if (v) captured[key] = v;
      }
      if (Object.keys(captured).length > 0) {
        window.sessionStorage.setItem("rr_utm", JSON.stringify(captured));
      }
    } catch {
      // sessionStorage may be blocked - fail silent, attribution is best-effort
    }
  }, []);

  return null;
}
