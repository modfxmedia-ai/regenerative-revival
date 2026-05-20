# Regenerative Revival — Build Status & Handoff Notes

**For review with:** Justin (ModFX Media)
**Prepared by:** Lesser Media
**Date:** May 20, 2026
**Stack:** Next.js 16.1.6 (Turbopack), App Router, TypeScript, Tailwind v4, Resend

---

## 1. Executive Summary

The V2 site is **architecturally complete and building clean**: 1,829 static pages prerender, all hub routes resolve 2xx, sitemap is honest and lint-free, dual-write lead pipeline is wired (GHL + Tyriacore), telehealth + concierge dual-track IA is shipped.

**Readiness for design handoff: ~85%.** What's blocking the final 15% is almost entirely **client-supplied content and assets** — not engineering. Section 5 lists every blocker by owner.

---

## 2. What's Done

### 2.1 Information Architecture (V2)

- **Dual-hub model** shipped: in-home concierge regenerative + nationwide telehealth marketplace.
- **Navbar** (sticky, framer-motion): Regenerative ▾ (7 items) · Hormones & Peptides · NAD+ · About ▾ · News · Contact + "For Providers" pill + "Take The Quiz" CTA.
- **Footer**: 5-column hub nav (Brand+Quiz / Regenerative / Telehealth / Company / For Providers) + single sitemap CTA + legal row (Privacy / Terms / Disclaimer / Sitemap). No directory enumeration — sitemap.xml carries crawler discovery.
- **Clinical umbrella**: "Operating under Arora Health Group clinical oversight" tagline in footer.

### 2.2 Routes built

**Hub pages:**
- `/` home
- `/stem-cell-therapy`, `/whartons-jelly`, `/why-exosomes`, `/why-stem-cells`
- `/hormones-peptides`, `/nad`
- `/concierge-care-model`
- `/consult-router` (2-question quiz, noindex)
- `/treatments`, `/locations`, `/services`
- `/partners`, `/partner-with-us`, `/for-providers`
- `/about`, `/about/founder`, `/about/why-were-different`
- `/testimonials`, `/news`, `/contact`
- Legal: `/privacy-policy`, `/terms-conditions`, `/disclaimer`

**Programmatic (prerendered):**
- 14 treatments × 112 locations = **1,568 treatment×location pages**
- 4 partner services × 112 locations = **448 partner×location pages**
- 10 Wizlo product pages (`/hormones-peptides/[slug]`, `/nad/[slug]`)
- News article detail pages

### 2.3 Lead pipeline

- `/api/leads` route: fire-and-forget dual-write to **GHL** + **Tyriacore** webhooks; never blocks UX.
- Resend email with graceful console.log fallback when domain isn't verified.
- `UtmCapture` component mounted in layout; UTMs persist to sessionStorage and merge into every form POST.

### 2.4 SEO foundation

- `app/sitemap.ts` rebuilt per playbook §2.2/§2.3: honest `lastmod` only where we can vouch for it, omitted on programmatic URLs. `regenerative`-hub products excluded (no `/regenerative/[slug]` route → no 404s).
- `app/robots.ts` clean.
- `app/lib/schema.tsx`: organization, webPage, breadcrumb, medical, FAQ, product, article, local-business helpers.
- `app/lib/seo.ts`: `generatePageMetadata()` helper used sitewide.
- OG image route (`app/opengraph-image.tsx`) live.

### 2.5 Keyword research (executed)

- **42 in-scope keywords** pulled via OOPSEO MCP (DataForSEO), total spend **$0.10**.
- Filtered out medical-tourism and out-of-scope (Tijuana, Panama, hair loss, diabetes cure).
- Top transactional finds: **compounded semaglutide (49,500 vol, $27 CPC)**, peptide therapy (18,100), NAD IV cluster (18,100 × 4 variants).
- File: [KW Research/regenerative-revival-keywords.md](KW%20Research/regenerative-revival-keywords.md)
- Page plan: [KW Research/page-plan.md](KW%20Research/page-plan.md)

### 2.6 V2 palette tokens shipped (both options)

- `--color-navy`, `--color-navy-light`, `--color-magenta`, `--color-magenta-light`, `--color-success` in [app/globals.css](app/globals.css)
- Legacy gold/red V1 tokens preserved so swap is one PR

### 2.7 Compliance scaffolding

- `ComplianceDisclaimer` component (per-product disclaimer keys)
- `LegitScriptBadge` component (waiting on SVG asset)

---

## 3. What's Left — Engineering (small)

| Item | Estimate | Notes |
|---|---|---|
| 5 `/for-providers/[topic]` spoke pages | small | Hub exists; spokes are content-driven |
| 36-post blog cluster (5 pillars) | medium | Plan in [KW Research/page-plan.md](KW%20Research/page-plan.md); each post can use `build_content_brief` MCP |
| Optional: tighter keyword pull (~$0.60) on Wharton's Jelly variants, BPC-157, GHK-Cu, PT-141, MK-677, TRT online, HRT for women, GLP-1 alternative, tirzepatide sublingual | small | Only if Justin wants deeper coverage on specific telehealth SKUs |
| Phase-1 service area trim | small | Only if client confirms they can't physically service all 112 metros at launch |

---

## 4. What's Left — Design / Visual

This is the next workstream. **The skeleton is ready** — IA, copy buckets, components, and palette tokens are all in place. Design needs:

- Final palette decision (see §5)
- Hero / section imagery (see §5)
- Component visual treatments (cards, CTAs, badges)
- Provider portal visual identity (currently inherits site shell)

---

## 5. Blockers — Need Client / Justin Decisions

These are the items to walk through together.

### 5.1 Assets we need from client (Seth / Lydia)

- [ ] **Wizlo xlsx** — real intake URLs + full 47-SKU list. Current `app/lib/products.ts` has 10 seeded SKUs with placeholder Wizlo URLs.
- [ ] **LegitScript SVG badges** → `/public/badges/`
- [ ] **Founder photo** (Seth) → `/public/team/`
- [ ] **Team photos** → `/public/team/`
- [ ] **In-home concierge photos** → `/public/photos/`
- [ ] **Real phone, address, social URLs** — currently `(555) 123-4567` placeholder in `app/lib/schema.tsx`

### 5.2 Copy we need from Lydia

- [ ] Founder bio + narrative (`/about/founder`)
- [ ] Concierge care model long-form copy (`/concierge-care-model`)
- [ ] For-providers value prop + program detail (`/for-providers` + 5 spokes)
- [ ] 36-post blog editorial brief (or approve the OOPSEO `build_content_brief` per-post workflow)

### 5.3 Decisions for Justin

- [ ] **Palette: gold/red (Dev Brief) vs navy/magenta (Redline)** — both tokens shipped, just need a call. Affects every CTA and accent.
- [ ] **Service-area scope at launch** — 112 metros or Phase-1 subset? Programmatic system handles either.
- [ ] **Whether to spend ~$0.60 on the tighter keyword pull** (see §3 row 3). Recommend yes — gives us defensible content briefs on every telehealth SKU.
- [ ] **Blog cadence + ownership** — agency drafts, client reviews, or vice versa?
- [ ] **Photography brief sign-off** before scheduling shoot.

### 5.4 Env / infra (need values from client)

- [ ] `GHL_WEBHOOK_URL`
- [ ] `TYRIACORE_WEBHOOK_URL`
- [ ] Resend domain verification (DNS records to add to whatever DNS the client controls)
- [ ] Production deployment target confirmed (Vercel assumed)

---

## 6. Suggested Agenda for the Justin Call

1. **Walk the live build** — confirm IA matches the Redline.
2. **Palette decision** (5 min — biggest unblock for design).
3. **Wizlo product sheet status** — when can we drop in real URLs + the full 47 SKUs?
4. **Copy delivery plan** — who, what, when for Lydia's deliverables.
5. **LegitScript badges + real contact info** — quick wins to chase down.
6. **Webhook endpoint values** — need from Seth / Tyriacore team.
7. **Service-area scope** — confirm 112 or phase down.
8. **Blog cluster ownership + cadence**.
9. **Photo shoot brief + scheduling**.
10. **Design handoff date target** — once palette + photos + copy land, we're ready.

---

## 7. Quick Links

- Page architecture: [KW Research/page-plan.md](KW%20Research/page-plan.md)
- Keyword pull: [KW Research/regenerative-revival-keywords.md](KW%20Research/regenerative-revival-keywords.md)
- Project checklist (original): [Programmatic SEO Project Checklist.txt](Programmatic%20SEO%20Project%20Checklist.txt)
- Sitemap (live route): `/sitemap.xml`
- Robots: `/robots.txt`
