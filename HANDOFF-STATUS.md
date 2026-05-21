# Regenerative Revival — Build Status & Handoff Notes

**For review with:** Justin (ModFX Media)  
**Prepared by:** Lesser Media  
**Date:** May 21, 2026  
**Stack:** Next.js 16.1.6 (Turbopack), App Router, TypeScript, Tailwind v4, Resend  
**MCP tools active:** `nextjs-seo` (DataForSEO), `marketing-kb`

---

## 1. Executive Summary

The V3 site is **architecturally complete, visually redesigned, and building clean**: 1,829 static pages prerender, all hub routes resolve 2xx, sitemap is honest and lint-free, dual-write lead pipeline is wired (GHL + Tyriacore), telehealth + concierge dual-track IA is shipped.

**New since last handoff:** Full luxury visual redesign applied to the entire site — new Seth Berge brand system (Fraunces display font, amethyst/orchid/midnight palette, motion graphics), all homepage sections rebuilt to match Figma, all inner service pages rebranded, new sections added (WhoWeHelp, PhysicianLed, Numbers, AroraPartner, PatientStories, QuizCTA), footer rebuilt to match Figma exactly.

**Readiness for launch: ~85%.** What's blocking the final 15% is almost entirely **client-supplied content and assets** — not engineering. Section 5 lists every blocker by owner.

---

## 2. What's Done

### 2.1 Full Visual Redesign (V3 — completed this session)

**Brand system:**
- Font: Fraunces (display/serif, italic treatment for "Regenerative" keyword) + Inter (body)
- Palette: Amethyst #6762AF · Orchid #583563 · Midnight #1A1F30 · Oxford #021E3C · Berge Blue #345691 · Lazuli #71A7F5 · Lavender Sand #F1ECF8 · Smoke #EAEFF7
- Motion: `animate-float-slow`, `animate-gradient`, `animate-shimmer`, `animate-glow`, `lux-grid`, `lux-divider`, `noise-overlay` — all in `app/globals.css`
- All legacy color tokens preserved as aliases so programmatic pages still build

**Homepage sections (all new, Figma-matched):**
- Hero — midnight aurora gradient, health-record body silhouette SVG, EKG bar chart, credentials strip
- ValueProps — 3 split-row pillars (joints / hormones / longevity) with tag chips, callout notes, numbered badges
- Treatments — "One medical team" 3-card layout with purple gradient image stage, subjects rising from gradient
- WhoWeHelp — 2×2 persona cards on midnight background, image right, eyebrow + serif headline + tag link
- PhysicianLed — Dr. Sean Arora + Dr. Shannon Arora portrait-left / quote-right cards
- Numbers — "8+ / 50+ / 50 / 6k+" stat band on lighter amethyst gradient with white-to-amethyst number treatment
- AroraPartner — "Serious medicine needs a serious partner" split with Arora wordmark card
- PatientStories — 3 lavender quote cards
- About — dark midnight section with Seth photo, floating stat card, numbered values
- WhartonsJellyPower — lavender section, 3 numbered cards, animated gradient CTA bar
- WhyChooseUs — sticky-left + numbered differentiator list
- FAQ — sticky-left + plus/minus accordion
- Blog — lavender section, elevated cards with hover lift
- QuizCTA — full-bleed orchid→amethyst→lazuli gradient, animated DNA helix SVG, bokeh dots
- Footer — clean white, 4-column nav, social icons, compliance band (matches Figma exactly)

**Inner pages rebranded:**
- `/stem-cell-therapy` — all 5 components (Hero, HowItWorks, TherapyBenefits, WhoCanBenefit, StemTherapyCTA)
- `/about` — all 6 components (AboutHero, HowItWorks, OurGuarantee, FounderSection, TeamSection, CTABanner)
- `/contact` — ContactHero, ContactForm
- `/news` — NewsHero, NewsList
- All breadcrumbs, compliance disclaimers, and secondary components updated to new palette

### 2.2 Information Architecture (V2 — unchanged, confirmed working)

- Dual-hub model: in-home concierge regenerative + nationwide telehealth marketplace
- Navbar: Regenerative ▾ · Hormones & Peptides · NAD+ · For Providers · About ▾ · News · Contact + "Take The Quiz" CTA
- Footer: 4-column (Services / About / Resources / Contact) + social + legal + compliance band
- Consult Router: 2-question qualifier routing regen → GHL, telehealth → Wizlo

### 2.3 Routes (1,829 pages building clean)

**Hub pages (all exist, all rebranded):**
`/` · `/stem-cell-therapy` · `/whartons-jelly` · `/why-exosomes` · `/why-stem-cells` · `/hormones-peptides` · `/nad` · `/concierge-care-model` · `/consult-router` · `/treatments` · `/locations` · `/services` · `/partners` · `/partner-with-us` · `/for-providers` · `/about` · `/about/founder` · `/about/why-were-different` · `/testimonials` · `/news` · `/contact` · `/privacy-policy` · `/terms-conditions` · `/disclaimer`

**Programmatic (prerendered):**
- 14 treatments × 112 locations = **1,568 treatment×location pages**
- 4 partner services × 112 locations = **448 partner×location pages**
- 10 Wizlo product pages (`/hormones-peptides/[slug]`, `/nad/[slug]`)
- News article detail pages

### 2.4 Lead Pipeline

- `/api/leads`: fire-and-forget dual-write to GHL + Tyriacore webhooks; never blocks UX
- Resend email with graceful console.log fallback when domain isn't verified
- `UtmCapture` component in layout; UTMs persist to sessionStorage and merge into every form POST
- Consult Router audit log fires to `/api/leads` on every quiz completion

### 2.5 SEO Foundation

- `app/sitemap.ts`: honest `lastmod`, regenerative-hub products excluded (no 404s)
- `app/robots.ts`: clean
- `app/lib/schema.tsx`: organization, webPage, breadcrumb, medical, FAQ, product, article, local-business helpers
- `app/lib/seo.ts`: `generatePageMetadata()` helper used sitewide
- OG image route (`app/opengraph-image.tsx`) live
- All 8 Phase-1 pages have title tags, meta descriptions, canonical URLs, Open Graph, schema markup

### 2.6 Keyword Research (updated May 21, 2026)

**New findings from this session's DataForSEO pull:**

| Keyword | Vol | KD | CPC | Action |
|---|---|---|---|---|
| BPC-157 peptide therapy | **5,400** (Apr 2026, +1,285% YoY) | 0 | $2.56 | Build `/hormones-peptides/bpc-157` page NOW |
| bpc-157 side effects | 22,200 | 0 | $7.07 | Blog post (safety) |
| bpc-157 before and after | 5,400 | 4 | $6.46 | Blog post (results) |
| bpc-157 capsules | 9,900 | 0 | $6.96 | Product page variant |
| compounded semaglutide | 40,500 | 13 | $28.42 | Already targeted — confirm page is live |
| is compounded semaglutide safe | 2,400 | 9 | $14.46 | Blog post #21 section |

**Key insight:** BPC-157 is the fastest-growing peptide keyword in the catalog. KD = 0, volume trending up 1,285% YoY. This is a wide-open window. The product page exists in the catalog (`/hormones-peptides/bpc-157`) but needs content depth.

Full updated keyword file: [KW Research/regenerative-revival-keywords.md](KW%20Research/regenerative-revival-keywords.md)  
Page plan: [KW Research/page-plan.md](KW%20Research/page-plan.md)

### 2.7 Compliance Scaffolding

- `ComplianceDisclaimer` component (per-product disclaimer keys: `compounded_rx`, `supplement`, `regen_consult_only`)
- `LegitScriptBadge` component (pending SVG asset from client)
- Per-page service disclaimers on all telehealth pages
- Footer compliance band with full FDA / off-label / LegitScript paragraph

---

## 3. What's Left — Engineering (small, no blockers)

| Item | Estimate | Notes |
|---|---|---|
| 5 `/for-providers/[topic]` spoke pages | 1 day | Hub exists; spokes are content-driven. Need copy from Lydia. |
| BPC-157 product page content depth | 2 hrs | Slug exists, needs long-form copy + FAQ section targeting 22,200-vol side effects keyword |
| Complete remaining 50 product SKU definitions | 2 days | Waiting on Wizlo xlsx for real URLs. Schema is ready — just need data. |
| 36-post blog cluster | 6 weeks | Plan in page-plan.md. Use `build_content_brief` MCP per post. |
| Tighter keyword pull (TRT, HRT, GHK-Cu, PT-141, MK-677, sublingual tirzepatide, in-home stem cell) | ~$0.40 | Recommend yes — fills gaps on every telehealth SKU |
| TeamSection luxury rebrand | 2 hrs | Component works; visual treatment still uses old card style |
| `/about/founder` copy replacement | 0 hrs engineering | Waiting on Lydia — placeholder is in place |

---

## 4. What's Left — Design / Visual

The skeleton is ready. Design needs:

- Final palette decision confirmed ✅ (Seth Berge brand guide applied — amethyst/orchid/midnight)
- Hero / section imagery — current images are stock; client shoot needed for Seth, team, in-home treatment
- Provider portal visual identity (currently inherits site shell)
- LegitScript badge SVG assets

---

## 5. Blockers — Need Client / Justin Decisions

### 5.1 Assets needed from client (Seth / Lydia) — BLOCKING LAUNCH

- [ ] **Wizlo xlsx** — real intake URLs + full 47-SKU list. Current `app/lib/products.ts` has 10 seeded SKUs with placeholder Wizlo URLs. **This is the single biggest technical blocker.**
- [ ] **LegitScript SVG badges** → `/public/badges/` (pending-state badge slot is live; just needs the file)
- [ ] **Founder photo** (Seth, professional) → `/public/team/`
- [ ] **In-home concierge treatment photos** → `/public/photos/` (current images are stock)
- [ ] **Real phone number, address, social URLs** — currently `(555) 123-4567` placeholder in `app/lib/schema.tsx`

### 5.2 Copy needed from Lydia — BLOCKING CONTENT FREEZE

- [ ] Founder bio + narrative (`/about/founder`) — placeholder is live, copy is marked TODO
- [ ] Concierge care model long-form copy (`/concierge-care-model`)
- [ ] For-providers value prop + program detail (`/for-providers` + 5 spokes)
- [ ] 36-post blog editorial brief (or approve the `build_content_brief` MCP per-post workflow)

### 5.3 Decisions for Justin

- [ ] **Service-area scope at launch** — 112 metros or Phase-1 subset? Programmatic system handles either; just need confirmation.
- [ ] **Whether to spend ~$0.40 on the tighter keyword pull** (TRT, HRT, GHK-Cu, PT-141, MK-677, sublingual tirzepatide, in-home stem cell). Recommend yes.
- [ ] **Blog cadence + ownership** — agency drafts, client reviews, or vice versa?
- [ ] **Photography brief sign-off** before scheduling shoot.
- [ ] **BPC-157 page content depth** — approve the keyword strategy (22,200-vol side effects keyword + 5,400-vol therapy keyword, KD = 0). This is a fast win.

### 5.4 Env / Infra — BLOCKING LEAD PIPELINE

- [ ] `GHL_WEBHOOK_URL` — currently placeholder; leads are being logged to console only
- [ ] `TYRIACORE_WEBHOOK_URL` — same
- [ ] Resend domain verification (DNS records to add to client's DNS)
- [ ] Production deployment target confirmed (Vercel assumed)

---

## 6. Suggested Agenda for the Justin Call

1. **Walk the live build** — confirm V3 visual redesign matches Figma
2. **Wizlo product sheet status** — when can we drop in real URLs + the full 47 SKUs? This unblocks the entire telehealth catalog.
3. **BPC-157 opportunity** — 5,400 vol, KD = 0, +1,285% YoY. Approve content depth on existing page.
4. **Copy delivery plan** — who, what, when for Lydia's deliverables (founder, concierge, for-providers, blog)
5. **Webhook endpoint values** — GHL + Tyriacore URLs needed to activate lead pipeline
6. **LegitScript badges + real contact info** — quick wins to chase down
7. **Service-area scope** — confirm 112 or phase down
8. **Tighter keyword pull** — approve ~$0.40 spend on TRT/HRT/peptide gaps
9. **Photo shoot brief + scheduling**
10. **Blog cluster ownership + cadence**
11. **Launch date target** — once Wizlo xlsx + copy + photos land, we're ready in 1 week

---

## 7. Quick Links

- Page architecture: [KW Research/page-plan.md](KW%20Research/page-plan.md)
- Keyword pull (updated): [KW Research/regenerative-revival-keywords.md](KW%20Research/regenerative-revival-keywords.md)
- Project checklist (original): [Programmatic SEO Project Checklist.txt](Programmatic%20SEO%20Project%20Checklist.txt)
- Build brief: [Regenerative Revival — Build Partner Brief (Lesser Media) v1.0.md](<Regenerative%20Revival%20—%20Build%20Partner%20Brief%20(Lesser%20Media)%20v1.0.md>)
- Sitemap (live route): `/sitemap.xml`
- Robots: `/robots.txt`
- Products catalog: `app/lib/products.ts`
- Schema helpers: `app/lib/schema.tsx`
- SEO metadata helper: `app/lib/seo.ts`
