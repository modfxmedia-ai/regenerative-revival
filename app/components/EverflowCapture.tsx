"use client";

import { useEffect } from "react";

/**
 * Loads the Everflow tracking script (clik2trk), fires EF.click() with the
 * affiliate/source params from the URL, and stashes the returned transaction
 * id in sessionStorage as `rr_everflow`. submit-lead.ts reads it and attaches
 * it to every lead POST so the /api/leads route can forward it as the Tyria
 * `everflow_id` field.
 *
 * First-touch wins for the session — once a transaction id is captured we keep
 * it even if a downstream click rewrites the URL.
 */
declare global {
  interface Window {
    EF?: {
      click: (args: Record<string, unknown>) => Promise<string>;
      urlParameter: (name: string) => string | undefined;
    };
  }
}

export default function EverflowCapture() {
  useEffect(() => {
    try {
      if (window.sessionStorage.getItem("rr_everflow")) return; // first-touch wins
    } catch {
      // sessionStorage blocked — best-effort, continue
    }

    const script = document.createElement("script");
    script.src = "https://www.clik2trk.com/scripts/main.js";
    script.defer = true;
    script.onload = function () {
      const EF = window.EF;
      if (!EF) return;
      EF.click({
        offer_id: EF.urlParameter("oid"),
        affiliate_id: EF.urlParameter("affid"),
        source_id: EF.urlParameter("source_id"),
        sub1: EF.urlParameter("sub1"),
        sub2: EF.urlParameter("sub2"),
        sub3: EF.urlParameter("sub3"),
        sub4: EF.urlParameter("sub4"),
        sub5: EF.urlParameter("sub5"),
        sub6: EF.urlParameter("sub6"),
        sub7: EF.urlParameter("sub7"),
        sub8: EF.urlParameter("sub8"),
        sub9: EF.urlParameter("sub9"),
        sub10: EF.urlParameter("sub10"),
        uid: EF.urlParameter("uid"),
        transaction_id: EF.urlParameter("_ef_transaction_id"),
      }).then(function (transactionId) {
        if (transactionId) {
          try {
            window.sessionStorage.setItem("rr_everflow", transactionId);
          } catch {
            // sessionStorage blocked — fail silent
          }
        }
      });
    };
    document.body.append(script);
  }, []);

  return null;
}
