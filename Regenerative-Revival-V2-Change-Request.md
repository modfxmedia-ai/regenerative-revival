**REGENERATIVE REVIVAL**

**Website Change Request — V2 Build**

**To:** Brennen (Lead Developer)

**From:** Justin Ingram / ModFX Media

**Re:** Source — [regenerative-revival.vercel.app](https://regenerative-revival.vercel.app/)

**Date:** June 9, 2026

**Call Recording:** [Fireflies — Website Audit with Justin (June 9, 2026\)](https://app.fireflies.ai/view/Website-Audit-with-Justin::01KTPK9BRM900AZBVAZNZ2AG98)

Below is the consolidated change list from today's design/UX review call plus written feedback from the client (Shannon). This is the master punch list for V2 — no fluff. Items are tagged BLOCKER (must be done before go-live), HIGH, or POLISH.

*Direction holds: we are NOT redesigning. Keep the structure, schema, and product-page work intact. The goal is to make it feel elevated / white-glove concierge (not cookie-cutter telehealth), fix the copy \+ numbers, and tighten the UX. Get it accurate and live first, then iterate on visuals during indexing.*

# **Go-Live Blockers — Must Be Done Before Launch**

Do not push live until all of these are complete. Per the call, NAP (name/address/phone) and core data must be solid before indexing starts so we don't burn history on placeholder data.

**1\. Lock ONE clinician count and ONE state count site-wide   \[BLOCKER\]**

**Problem:** Numbers don't match across the page. Clinicians show as 20+ in the hero, 20+ in the physician section, and 50+ in Track Record. State counts jump around (50+, 12+, 50).

**Fix:** Use 100+ licensed clinicians everywhere (Seth confirmed 100+ on the call — recently signed a nationwide medical group). Use the SAME real state number in every location.

**Wording note:** Use “clinicians,” not “physicians.”

**Keep as-is:** 6K+ patients treated stays (intentional in-between figure, do not change).

**2\. Fix the two hero/section typos   \[BLOCKER\]**

**Typo 1:** “Regeneration, delivered to right your door” → “Regeneration, delivered right to your door.”

**Typo 2:** “wholistic care” → “holiday”? No — change to “holistic care” (standard spelling).

**3\. Rewrite the “Built by clinicians” / Track Record line   \[BLOCKER\]**

**Current:** “Built by clinicians, backed by Aurora Health Group, and delivered through telehealth infrastructure designed for medicine not improvised from consumer software.”

**Fix:** “Built on trust, backed by Aurora Health Group, delivered through telehealth.”

**Why:** “Built by clinicians” isn't accurate (Seth built it). Drop the “not improvised from consumer software” clause entirely — too wonky, nobody on the call knew what it meant.

**4\. Replace the wrong staff photo   \[BLOCKER\]**

**Problem:** The photo labeled “Shannon Aurora” is actually one of the nurse practitioners — wrong person.

**Fix:** Use the real photo of Shannon Aurora. The NP photo should not be on the site. Client (Jared) will send a corrected image data dump.

**5\. Real phone number \+ NAP before indexing   \[BLOCKER\]**

**Problem:** Site currently has a dummy/555 number. Cannot go live on placeholder NAP — it pollutes the local schema history.

**Fix:** Drop in the real phone number once the client's new CRM 10DLC/A2P verification clears (client targeting Thursday, by Friday at latest). Email: info@ pattern (client confirmed they have it).

**6\. Load the correct hero video   \[BLOCKER\]**

**Problem:** Wrong hero video is rendering. The correct one is the pink/purple animated version with lights (live on the current regenerativerevival.com).

**Fix:** Use the correct animated hero — Justin is re-sending the file in Slack. Brennen to handle personally if it fell through the cracks with the dev team.

**7\. CRM routing by service line   \[BLOCKER\]**

**Rule:** Peptide / hormone purchases → forms start in WSLO. Stem cell / regenerative patients → forms start in Tyria, then push to WSLO.

**Action:** Any “get a free consult” / stem cell forms must route to Tyria, not WSLO. Brennen \+ Justin to have a dedicated working session on the CRM integration so the right forms hit the right workflows.

# **UX & Functionality Changes**

**8\. Productize the Hormones & Peptides menu (solution-based subcategories)   \[HIGH\]**

**Problem:** Clicking “Hormones & Peptides” dumps users into one big wall of products. Three audience types get lost: people who want a specific peptide, people who don't know peptides yet, and people just looking for a solution.

**Fix:** Break products into solution-based subcategories (e.g. Weight Loss / GLP-1s, Cognitive Function, Longevity & Cellular Health, Performance & Recovery, Cosmetic & Skin). Clicking a category funnels to the relevant products. This is an on-page funnel experience, not just a header/footer dropdown.

**Build note:** Per Brennen, this is a relational mapping in the Neon DB associating each product to a solution — est. \~3–4 hrs, not a structural rework. Reference doc: Jared's interactive one-pager (shared in Slack/SMS thread) \+ the Thrive and LEMD category models.

**9\. Interactive body-part graphic (replace the static hero/ED image)   \[HIGH\]**

**Problem:** The “pills” (knee/hip/shoulder labels) are static and look telehealth-generic. Client also noted body parts are missing (no neck, no foot).

**Fix:** Build an interactive body diagram — hover/tap a joint and it highlights \+ populates info dynamically, then links to that joint's page. Make it *obvious* the elements are interactive, and cover ALL joints (no missing body parts). Reference: [renoregen.com](https://renoregen.com/) — “where's your pain?” model. Make ours more elevated than that.

**Mobile:** 90%+ of traffic is mobile. The interactive graphic must work on mobile — the call accepted a body diagram with tappable points \+ the sections stacked above it as the mobile pattern.

**10\. Pick ONE primary CTA and make it consistent   \[HIGH\]**

**Problem:** “Take the Quiz,” “Get Started,” and “Book Your FREE Consultation Today” are all competing as the main action.

**Fix:** Client's vote is the quiz. Make the quiz the single primary CTA and keep it consistent everywhere. Demote the others to secondary or remove.

**11\. Replace placeholder testimonials with real, correctly-labeled reviews   \[HIGH\]**

**Problem:** Some testimonials are placeholders / mislabeled (e.g. a “NAD & Longevity” review where the category doesn't match). Legally risky in some areas.

**Fix:** Swap in real reviews as fast as possible — client will send. Match each review to the correct service category.

**12\. Source real imagery (kill the clinical / stock look)   \[HIGH\]**

**Problem:** Images read clinical and stock (e.g. girl in scrubs, baby photo, ED placeholder). Off-brand for a white-glove concierge feel.

**Fix:** Use elevated white-glove imagery, not clinical stock. Client (Jared/Shannon) is sending an approved image data dump. Hold non-approved placeholders out of the live build.

# **Design & Brand Direction**

The team is fully on board with the elevated, motion-forward direction discussed on the call. The point is to NOT look like a cookie-cutter, AI-generated telehealth site. Lean into white-glove concierge: high-brow, premium, distinct.

**13\. Fonts: Baskerville Bold headers \+ Poppins body/CTAs   \[HIGH\]**

**Problem:** Site is currently all Poppins.

**Fix:** Use Baskerville Bold for headers; keep Poppins for body copy and CTA buttons. That serif/sans mix is what keeps it premium and on-brand.

**14\. Add motion graphics / scroll-triggered reveals to break up flat sections   \[HIGH\]**

**Problem:** Sections feel stark and static — “section, section, section.” Reads flat and generic.

**Fix:** Lean on motion graphics rather than dated WordPress-style shape dividers. We already have Framer Motion on the site — delay each section's fade-in until it enters the viewport so it reveals on scroll for a smoother, more captivating experience. Add more of the motion-graphic moments the client liked (e.g. the stem cell carousel).

**References:** [heroship-landing.vercel.app](https://heroship-landing.vercel.app/) (scroll-animation style Justin is building), and [sethberge.com](https://sethberge.com/) (the flowing feel Shannon referenced — capture the flow via motion, not literal WordPress “V” dividers).

**15\. Consider unifying the section background color   \[POLISH\]**

**Idea:** Client felt the alternating block colors make it read as “page, then a page.” Test a single consistent background color throughout while keeping the rounded edges, and let motion (not color blocking) create separation.

**Note:** Optional / for V2 iteration — don't block go-live on this.

**16\. Gradient buttons   \[POLISH\]**

**Idea:** Work tasteful gradients into the buttons (currently on-trend) to lift them above the default rounded-button look. Keep rounded edges — those stay.

## **Design References From the Call**

* Body-part / pain graphic model: renoregen.com

* Scroll-animation style: heroship-landing.vercel.app

* Flow feel: sethberge.com

* Premium motion / visuals to aspire to: hims.com (\~$200k site — lands user straight into the journey)

* Concierge look & feel \+ closest competitor (regen med \+ peptides \+ hormones): ways2well.com

* Scaled personalized-wellness journey / industry-standard UX: trimrx.com (\~$2M/day)

*Blend the three — trimrx \+ ways2well for the customer-journey UX, hims for the motion/visual polish.*

# **Compliance Copy — Soften These Claims**

Shift all of the following to “may support”-style language. These hard claims need softening for compliance.

| Current | Change To | Where |
| :---- | :---- | :---- |
| “natural healing” | “may support the body's natural processes” | Global |
| “significantly reducing recovery time” | “may support faster recovery” | Global |
| “effectively help manage pain” | “may help support pain management” | Global |
| “life-changing improvements” | “may support meaningful improvements” | Global |
| “Proven results” | “May support results” / soften to outcomes language | Track Record / headers |

Also remove any AI-improvised research/backend copy (e.g. lines stating keyword difficulty was “wide open”) that leaked into the front end.

# **Footer & Links**

**17\. Fix placeholder social links   \[BLOCKER\]**

**Problem:** Footer social links are still placeholders — plain facebook.com and instagram.com.

**Fix:** Point them to the actual Regenerative Revival Facebook and Instagram pages (client to provide URLs).

# **SEO — Keep & Build (Context for Brennen)**

These are not corrections — they're confirmations of direction so nothing gets lost in the redesign pass.

* Keep the product schema work intact — it's the single most important asset on the site for driving Google product-snippet traffic, and competitors don't have it. Keep the medical-business \+ local schema too.

* Get accurate \+ live first, then iterate on colors/visuals during indexing. Indexing a \~50k-page site can take \~60–90 days; \~70% in month one, the rest in month two. Don't delay launch over polish.

* Stack/branded SEO pages: build dedicated pages for branded peptide stacks (Glow / Klow / Wolverine, etc.) as programmatic SEO pages that backlink to the underlying product pages. Client (Shannon) will send the stack name variations. Treat below-the-fold content on these as bot-facing — don't over-design it.

* Per-name granularity: if a stack has multiple branded names, give each its own optimized page rather than cramming variations into one line.

**Priority order: clear all BLOCKERS → phone/NAP \+ CRM routing locked → go live → work HIGH \+ POLISH design items during indexing. Client targeting end of this week, live by Monday once the phone number and CRM integration are in.**

*Questions on any item — ping Justin in the project channel.*