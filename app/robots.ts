import type { MetadataRoute } from "next";

/**
 * Per SEO playbook §3.5: agency healthcare sites should explicitly opt-in
 * major AI crawlers for GEO/AIO visibility (citation in ChatGPT, Claude,
 * Perplexity, Google AI Overviews). The wildcard rule allows them by
 * default, but explicit user-agent entries make the intent unambiguous.
 */
const baseRules = { allow: "/", disallow: ["/api/", "/_next/"] };

const allowedAIBots = [
  // OpenAI
  "GPTBot", // training
  "OAI-SearchBot", // SearchGPT index
  "ChatGPT-User", // user-initiated fetches
  // Anthropic
  "ClaudeBot", // training
  "Claude-User", // user-initiated fetches
  "Claude-SearchBot", // Claude web search
  // Google AI (for AI Overviews + Gemini)
  "Google-Extended",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Apple Intelligence
  "Applebot",
  "Applebot-Extended",
  // Common Crawl (used by many training corpora)
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...baseRules },
      ...allowedAIBots.map((userAgent) => ({ userAgent, ...baseRules })),
    ],
    sitemap: "https://regenerativerevival.com/sitemap.xml",
  };
}
