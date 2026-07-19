import type { MetadataRoute } from "next";

/**
 * robots.ts - 2026 AI/GEO-optimized bot policy
 *
 * Architecture (per Agentic Search 2026 playbook):
 *   INDEXING bots - crawl for index/training; allow all strategic ones
 *   LIVE-FETCH bots - user-triggered at query time; must ALSO be allowed
 *                     (denying live-fetch = invisible even if indexed)
 *   DISALLOWED - heavy non-strategic crawlers (Bytespider/ByteDance)
 *
 * Hard rule: denying Google-Extended forfeits Google AI Mode citation.
 * Perplexity has the highest cite-to-click ratio of any AI surface - never deny.
 *
 * Reference: https://regenerativerevival.com/llms.txt
 */

const allow = { allow: "/" as const, disallow: ["/api/", "/_next/"] };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Standard search engines ──────────────────────────────────────────
      { userAgent: "*",              ...allow },
      { userAgent: "Googlebot",      ...allow },
      { userAgent: "Bingbot",        ...allow },

      // ── Google AI Mode / Gemini grounding ────────────────────────────────
      // Denying Google-Extended = forfeits AI Mode carousel citation entirely
      { userAgent: "Google-Extended", ...allow },

      // ── ChatGPT Search (OAI-SearchBot = index, ChatGPT-User = live fetch) ─
      // Both must be allowed - indexing ≠ live retrieval
      { userAgent: "GPTBot",          ...allow }, // training corpus
      { userAgent: "OAI-SearchBot",   ...allow }, // ChatGPT search index
      { userAgent: "ChatGPT-User",    ...allow }, // live fetch at query time

      // ── Perplexity (highest cite-to-click of any AI surface) ─────────────
      { userAgent: "PerplexityBot",   ...allow }, // indexing
      { userAgent: "Perplexity-User", ...allow }, // live fetch at query time

      // ── Claude / Anthropic ───────────────────────────────────────────────
      { userAgent: "ClaudeBot",       ...allow }, // indexing
      { userAgent: "anthropic-ai",    ...allow }, // live fetch at query time
      { userAgent: "Claude-SearchBot",...allow }, // Claude web search

      // ── Apple Intelligence ───────────────────────────────────────────────
      { userAgent: "Applebot",         ...allow },
      { userAgent: "Applebot-Extended",...allow },

      // ── Meta AI ──────────────────────────────────────────────────────────
      { userAgent: "FacebookBot",      ...allow },

      // ── Common Crawl (feeds many LLM training corpora) ───────────────────
      { userAgent: "CCBot",            ...allow },

      // ── Cohere / AI21 / Mistral ──────────────────────────────────────────
      { userAgent: "cohere-ai",        ...allow },

      // ── Agentic browsers (read paths) ────────────────────────────────────
      // Allow on read; payment/form paths are CAPTCHA-gated at the app layer
      { userAgent: "ChatGPT-browsing", ...allow },

      // ── DENY: ByteDance / TikTok - heavy over-fetcher, zero strategic value
      { userAgent: "Bytespider", allow: [], disallow: ["/"] },

      // ── DENY: scraper-class bots with no citation/referral value ─────────
      { userAgent: "AhrefsBot",   allow: [], disallow: ["/"] },
      { userAgent: "SemrushBot",  allow: [], disallow: ["/"] },
      { userAgent: "DotBot",      allow: [], disallow: ["/"] },
      { userAgent: "MJ12bot",     allow: [], disallow: ["/"] },
    ],
    sitemap: [
      "https://regenerativerevival.com/sitemap.xml",
    ],
  };
}
