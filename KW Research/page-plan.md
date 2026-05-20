# Page Plan — regenerative-revival

> Architecture: OOPSEO **Hybrid** (Model C)  
> `Pages = (Industries + Keywords) × Service Areas + National pages + Blog cluster`

---

## Programmatic surface (auto-generated from data files)

### A. Treatments × Locations — LOCAL (BOF)

Source: `app/lib/treatments.ts` × `app/lib/locations.ts`  
Route: `/treatments/[slug]/[location]`

**Treatments (14 — was 10, added 4):**
1. stem-cell-therapy
2. whartons-jelly-treatment
3. exosome-therapy
4. regenerative-medicine
5. joint-pain-treatment
6. chronic-pain-relief
7. sports-injury-recovery
8. prp-therapy
9. **mobile-stem-cell-therapy** ⬅ new
10. **concierge-regenerative-medicine** ⬅ new
11. **peptide-therapy** ⬅ new
12. **nad-therapy** ⬅ new
13. *(reserved — TRT)*
14. *(reserved — HRT)*

**Locations: 112** (all in `locations.ts`)

**Total: 14 × 112 = 1,568 location pages** (up from 1,120)

### B. Telehealth SKUs — NATIONAL (BOF)
Source: `app/lib/products.ts` → `/hormones-peptides/[slug]`, `/nad/[slug]`  
**Current: 9. Scales to ~58 when Wizlo xlsx lands.**  
No location pages. Ships nationally → location pages = thin/duplicate signal.

### C. Hub pillar pages — NATIONAL (BOF/MOF)
| URL | Primary keyword | Vol | Status |
|---|---|---|---|
| `/stem-cell-therapy` | stem cell therapy | 4,400 | ✅ exists — needs cost + success-rate sections |
| `/whartons-jelly` | wharton's jelly | — | ✅ exists |
| `/why-exosomes` | exosome therapy | — | ✅ exists |
| `/hormones-peptides` | peptide therapy | 18,100 | ✅ exists |
| `/nad` | NAD therapy | 4,400 + 18,100 IV cluster | ✅ exists |
| `/concierge-care-model` | concierge regenerative medicine | — | ✅ exists |
| `/for-providers` | white label telehealth | — | ✅ exists |

### D. Provider B2B — NATIONAL
| URL | Topic |
|---|---|
| `/for-providers` | overview (✅) |
| `/for-providers/telehealth-platform` | Wizlo stack |
| `/for-providers/clinical-umbrella` | Arora oversight |
| `/for-providers/concierge-economics` | unit economics |
| `/for-providers/training-protocols` | protocols & training |

---

## Blog Cluster (TOF → MOF) — 36 posts, 12-month cadence

### Pillar 1: Stem Cell Therapy (`/stem-cell-therapy`)
1. How much does stem cell therapy cost? (1,900 vol — money page)
2. Stem cell therapy success rate: what the data shows (880 vol)
3. Side effects of stem cell therapy: full safety profile (880 vol)
4. Benefits of stem cell therapy (720 vol)
5. Stem cell therapy for back pain (2,400 vol)
6. Stem cell therapy for arthritis (1,000 vol)
7. Does stem cell therapy actually work? (evidence review)
8. Why patients leave the U.S. for stem cells — and why they shouldn't (kills Tijuana intent)

### Pillar 2: Wharton's Jelly (`/whartons-jelly`)
9. What is Wharton's Jelly? (primer)
10. Wharton's Jelly vs PRP: which is right for joint pain?
11. Wharton's Jelly vs amniotic tissue
12. Where Wharton's Jelly comes from (ethics + sourcing)
13. Wharton's Jelly safety profile
14. Recovery timeline after Wharton's Jelly injection

### Pillar 3: Hormones & Peptides (`/hormones-peptides`)
15. Sublingual vs injection GLP-1: side effects, absorption, cost
16. BPC-157 explained (mechanism, indications, evidence)
17. TRT online: how the lab workup actually works
18. HRT for women in your 40s
19. Compounded vs branded GLP-1: what's actually different
20. Peptide stacking: BPC-157 + TB-500, GHK-Cu + PT-141
21. Is compounded semaglutide legit? (BOF objection-killer — 49,500 vol intent)

### Pillar 4: NAD+ (`/nad`)
22. NAD IV vs NAD injection vs sublingual (18,100 vol cluster)
23. NAD vs NMN: which actually raises NAD levels?
24. Who should not take NAD+
25. Stacking NAD+ with peptides for longevity
26. NAD+ what to expect: week-by-week
27. NAD+ at home: how mobile delivery works

### Pillar 5: Concierge Care Model (`/concierge-care-model`)
28. What is concierge medicine? (primer)
29. In-home vs clinic: when concierge actually matters
30. NP-led care under physician oversight: how it works
31. Dinner seminar Q&A: most asked questions about regen
32. Insurance & out-of-pocket: what concierge regen costs
33. How Arora Health Group clinical umbrella works

### Cross-cluster (link bait / authority)
34. Longevity stack 2026: peptides + NAD + regen
35. Sports recovery: which regen modality matches which injury
36. The 2026 guide to choosing a regenerative medicine provider

---

## Internal linking rules

- Every blog post links **up** to its pillar (1 link in intro, 1 in CTA).
- Every pillar links **down** to 3 most-relevant spokes (sidebar/related).
- Every Treatments × Location page links to: (1) parent treatment hub, (2) 3 sibling treatments in same hub, (3) `/contact?path=regen`.
- Telehealth SKU pages link to: (1) hub page, (2) `/consult-router`, (3) related SKU in same category.
- All pages link to `/consult-router` from primary CTA.

## Page templates (already implemented)

- Treatments × Location: `app/treatments/[slug]/[location]/page.tsx`
- Telehealth SKU: `app/hormones-peptides/[slug]/page.tsx`, `app/nad/[slug]/page.tsx`
- Pillar hubs: each as named route above
- Blog: `app/news/[slug]/page.tsx` (need to seed cluster posts)

---

## Total programmatic surface

| Surface | Count |
|---|---|
| Treatments × Locations | 1,568 |
| Telehealth SKUs (current → full) | 9 → 58 |
| Hub pillars | 7 |
| Provider B2B | 5 |
| Blog cluster | 36 |
| **TOTAL (current)** | **1,625** |
| **TOTAL (post-Wizlo)** | **1,674** |

---

## Open items blocking full build

- [ ] Wizlo xlsx → real intake URLs + 47 missing SKUs
- [ ] Re-pull keywords with tighter seeds (gap section in keyword file)
- [ ] Service-area confirmation — if Phase-1 delivery can't reach all 112 metros, trim `locations.ts`
- [ ] Spawn the 5 `/for-providers/[topic]` pages
- [ ] Draft 36 blog cluster posts (use `mcp_marketing-kb_build_content_brief` per post)
