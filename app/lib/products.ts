// Regenerative Revival — Wizlo product catalog
// Source of truth: RR_Peptide_product_sheet_w__URL_Links_.xlsx (Wizlo)
// 58 active SKUs total. Wizlo handles intake/checkout/e-Rx; the site is
// the marketing + routing layer. Each SKU links to a Wizlo intake form URL.

export type ProductCategory =
  | "glp1"          // GLP-1 weight loss (Semaglutide, Tirzepatide)
  | "peptide"       // Individual peptides (BPC-157, GHK-Cu, etc.)
  | "nad"           // NAD+ longevity
  | "hormone"       // TRT / HRT (pending product sheet from client)
  | "capsule"       // Oral capsule/tablet peptides
  | "supplement";   // Non-Rx supplements

export type ProductForm =
  | "injection"
  | "sublingual"
  | "capsule"
  | "tablet"
  | "topical";

export type ProductStatus = "active" | "coming_soon" | "concierge_only";

export interface ProductDose {
  /** Display label, e.g. "5 mg / 0.5 mg/mL B12" */
  label: string;
  /** Numeric strength for sorting/filtering */
  mg?: number;
  /** Wizlo intake form URL for this specific dose */
  wizloUrl: string;
}

export interface Product {
  /** URL slug — kebab-case, used for /hormones-peptides/[slug] */
  slug: string;
  /** Display name */
  name: string;
  /** SEO-optimized name variant (e.g. "Sublingual Semaglutide for Weight Loss") */
  seoName?: string;
  category: ProductCategory;
  form: ProductForm;
  status: ProductStatus;
  /** Hub the product lives under for nav/routing */
  hub: "hormones-peptides" | "nad" | "regenerative";
  /** One-line marketing description */
  shortDescription: string;
  /** Long-form description for product page body */
  longDescription: string;
  /** Bullet list of patient-facing benefits */
  benefits: string[];
  /** Who this product is appropriate for */
  indications?: string[];
  /** Contraindications / who should not take */
  contraindications?: string[];
  /** Required compounding/Rx disclaimer text key */
  disclaimerKey: "compounded_rx" | "supplement" | "regen_consult_only";
  /** Available doses with per-dose Wizlo URLs */
  doses: ProductDose[];
  /** Optional starting monthly price, USD */
  priceFrom?: number;
  /** Hero image (in /public/products/) */
  image?: string;
  /** SEO keywords */
  keywords: string[];
  /** "What this program is not" — honest disclaimers per figma */
  notFor?: string[];
  /** Optional intro explainer (shown in first accordion).
   *  Defaults to longDescription if not provided. */
  introExplainer?: string;
}

// ───────────────────────────────────────────────────────────────────────────
// PLACEHOLDER URLS — replace with live Wizlo URLs from product sheet at kickoff
// ───────────────────────────────────────────────────────────────────────────
const WIZLO_PLACEHOLDER = "https://intake.wizlo.com/regenerative-revival/PLACEHOLDER";

export const products: Product[] = [
  // ── GROUPED WIZLO FORMS (4 forms / 27 SKUs) ───────────────────────────────
  {
    slug: "sublingual-semaglutide",
    name: "Semaglutide (Sublingual)",
    seoName: "Sublingual Semaglutide for Weight Loss",
    category: "glp1",
    form: "sublingual",
    status: "active",
    hub: "hormones-peptides",
    shortDescription:
      "A physician-prescribed, compounded GLP-1 program designed for sustainable weight loss without daily injections.",
    longDescription:
      "Semaglutide is a GLP-1 (glucagon-like peptide-1) receptor agonist. It works by mimicking a hormone your gut naturally releases after eating — signaling your brain that you're full, slowing gastric emptying, and reducing the constant background noise of hunger that makes caloric restriction so difficult. Clinical trials (STEP 1–4) demonstrated average weight loss of 14.9% body weight over 68 weeks at the 2.4mg dose. Compounded sublingual semaglutide delivers the same active molecule under the tongue, absorbed through the oral mucosa — a practical alternative for patients who don't tolerate injections or prefer a needle-free protocol. All programs are prescribed and monitored by a licensed clinician, with dose titration every 4 weeks based on your response.",
    benefits: [
      "Clinically studied GLP-1 receptor agonist designed for sustainable, long-term weight loss",
      "Regulates appetite and reduces cravings between meals",
      "Convenient sublingual delivery — no needles, no injection sites, no sharps disposal",
      "Personalized dosing reviewed and adjusted by a licensed clinician",
      "Ships free from a licensed compounding pharmacy, fully tracked",
    ],
    indications: [
      "Adults with a BMI of 27+ (with comorbidities) or 30+",
      "People who have struggled with appetite regulation despite diet and exercise",
      "Patients who don't want to self-inject",
      "Anyone seeking a clinician-guided weight loss program",
    ],
    disclaimerKey: "compounded_rx",
    priceFrom: 379,
    doses: [
      { label: "0.5 mg/mL", mg: 0.5, wizloUrl: WIZLO_PLACEHOLDER },
      { label: "1 mg/mL",   mg: 1,   wizloUrl: WIZLO_PLACEHOLDER },
      { label: "1.5 mg/mL", mg: 1.5, wizloUrl: WIZLO_PLACEHOLDER },
      { label: "2 mg/mL",   mg: 2,   wizloUrl: WIZLO_PLACEHOLDER },
      { label: "2.5 mg/mL", mg: 2.5, wizloUrl: WIZLO_PLACEHOLDER },
    ],
    keywords: [
      "sublingual semaglutide",
      "compounded semaglutide",
      "GLP-1 weight loss",
      "telehealth semaglutide",
    ],
    notFor: [
      "Not a quick fix. Sustainable results take 3–6 months minimum.",
      "Not for everyone. Some patients are better served by injectable GLP-1s, lifestyle programs, or other interventions. Your provider will tell you honestly.",
      "Not a pill mill. Every prescription requires a clinical evaluation, and ongoing dosing is reviewed by your provider.",
    ],
    introExplainer:
      "Semaglutide is a GLP-1 receptor agonist — a class of medications originally developed for type 2 diabetes and now widely used for weight management. It works by signaling fullness, slowing gastric emptying, and reducing food noise and cravings. Most clinical research has been done on injectable forms. Compounded sublingual semaglutide delivers the same active molecule under the tongue, where it is absorbed through the oral mucosa. For patients who don't tolerate injections or prefer a daily oral dose, sublingual is a practical alternative — when prescribed and monitored by a clinician.",
  },
  {
    slug: "sublingual-tirzepatide",
    name: "Tirzepatide (Sublingual)",
    seoName: "Sublingual Tirzepatide for Weight Loss",
    category: "glp1",
    form: "sublingual",
    status: "active",
    hub: "hormones-peptides",
    shortDescription:
      "Dual GIP/GLP-1 receptor agonist for advanced metabolic and weight management, delivered sublingually.",
    longDescription:
      "Tirzepatide is a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist — the first of its class. By activating two metabolic pathways simultaneously, it produces stronger appetite suppression and greater metabolic effects than GLP-1 alone. The SURMOUNT-1 trial demonstrated average weight loss of 22.5% body weight at the 15mg dose over 72 weeks — the largest weight loss ever recorded in a pharmaceutical trial at the time of publication. Sublingual compounded tirzepatide is a needle-free alternative for patients who prefer not to inject, prescribed and monitored by a licensed clinician with dose titration every 4 weeks.",
    benefits: [
      "Dual-action GIP + GLP-1 agonist for stronger metabolic effect",
      "Sublingual delivery — no needles required",
      "Personalized titration by a licensed clinician",
      "Ships from a licensed compounding pharmacy",
    ],
    disclaimerKey: "compounded_rx",
    priceFrom: 449,
    doses: [
      { label: "2.5 mg/mL",  mg: 2.5,  wizloUrl: WIZLO_PLACEHOLDER },
      { label: "5 mg/mL",    mg: 5,    wizloUrl: WIZLO_PLACEHOLDER },
      { label: "7.5 mg/mL",  mg: 7.5,  wizloUrl: WIZLO_PLACEHOLDER },
      { label: "10 mg/mL",   mg: 10,   wizloUrl: WIZLO_PLACEHOLDER },
      { label: "12.5 mg/mL", mg: 12.5, wizloUrl: WIZLO_PLACEHOLDER },
      { label: "15 mg/mL",   mg: 15,   wizloUrl: WIZLO_PLACEHOLDER },
    ],
    keywords: ["sublingual tirzepatide", "compounded tirzepatide", "GLP-1 GIP weight loss"],
  },
  {
    slug: "semaglutide-b12-injection",
    name: "Semaglutide + B12 Injection",
    category: "glp1",
    form: "injection",
    status: "active",
    hub: "hormones-peptides",
    shortDescription:
      "Compounded injectable semaglutide with B12, prescribed and monitored by a licensed clinician.",
    longDescription:
      "Injectable semaglutide remains the most clinically studied delivery method for GLP-1 weight management. Our compounded formulation pairs semaglutide with B12 to support energy levels during caloric reduction.",
    benefits: [
      "Most clinically studied GLP-1 delivery method",
      "B12 supports energy during caloric reduction",
      "Weekly subcutaneous injection",
      "Licensed clinician oversight",
    ],
    disclaimerKey: "compounded_rx",
    priceFrom: 399,
    doses: [
      { label: "1 mg / 0.5 mg/mL B12",  mg: 1,  wizloUrl: WIZLO_PLACEHOLDER },
      { label: "2 mg / 0.5 mg/mL B12",  mg: 2,  wizloUrl: WIZLO_PLACEHOLDER },
      { label: "4 mg / 0.5 mg/mL B12",  mg: 4,  wizloUrl: WIZLO_PLACEHOLDER },
      { label: "6 mg / 0.5 mg/mL B12",  mg: 6,  wizloUrl: WIZLO_PLACEHOLDER },
      { label: "10 mg / 0.5 mg/mL B12", mg: 10, wizloUrl: WIZLO_PLACEHOLDER },
    ],
    keywords: ["injectable semaglutide", "semaglutide B12", "compounded GLP-1"],
  },
  {
    slug: "tirzepatide-b12-injection",
    name: "Tirzepatide + B12 Injection",
    category: "glp1",
    form: "injection",
    status: "active",
    hub: "hormones-peptides",
    shortDescription:
      "Compounded injectable tirzepatide with B12 — dual GIP/GLP-1 action with B12 energy support.",
    longDescription:
      "Injectable tirzepatide combines dual GIP/GLP-1 receptor activation for stronger metabolic effects, paired with B12 in a compounded formulation.",
    benefits: [
      "Dual-action GIP + GLP-1 for stronger metabolic effect",
      "B12 supports energy during caloric reduction",
      "Weekly subcutaneous injection",
      "Licensed clinician oversight",
    ],
    disclaimerKey: "compounded_rx",
    priceFrom: 469,
    doses: [
      { label: "5 mg / 0.5 mg/mL B12",  mg: 5,  wizloUrl: WIZLO_PLACEHOLDER },
      { label: "10 mg / 0.5 mg/mL B12", mg: 10, wizloUrl: WIZLO_PLACEHOLDER },
      { label: "15 mg / 0.5 mg/mL B12", mg: 15, wizloUrl: WIZLO_PLACEHOLDER },
      { label: "20 mg / 0.5 mg/mL B12", mg: 20, wizloUrl: WIZLO_PLACEHOLDER },
      { label: "25 mg / 0.5 mg/mL B12", mg: 25, wizloUrl: WIZLO_PLACEHOLDER },
      { label: "30 mg / 0.5 mg/mL B12", mg: 30, wizloUrl: WIZLO_PLACEHOLDER },
    ],
    keywords: ["injectable tirzepatide", "tirzepatide B12", "compounded GIP GLP-1"],
  },

  // ── INDIVIDUAL PEPTIDE PRODUCTS (25 SKUs — representative seeds) ──────────
  {
    slug: "bpc-157",
    name: "BPC-157",
    seoName: "BPC-157 Peptide Therapy",
    category: "peptide",
    form: "injection",
    status: "active",
    hub: "hormones-peptides",
    shortDescription: "Recovery and tissue repair peptide for soft-tissue injuries and gut health.",
    longDescription:
      "BPC-157 (Body Protection Compound 157) is a synthetic pentadecapeptide derived from a protein found in gastric juice. It has been studied extensively in preclinical models for its role in soft-tissue healing, tendon and ligament repair, gut lining integrity, and anti-inflammatory signaling. Research published in the Journal of Physiology-Paris and multiple orthopedic journals demonstrates BPC-157's ability to accelerate tendon-to-bone healing, reduce inflammation in injured tissue, and support gastrointestinal mucosal repair. It is not FDA-approved for human use, but is prescribed off-label by licensed clinicians as part of supervised recovery protocols. All BPC-157 at Regenerative Revival is compounded by NABP-accredited pharmacies and prescribed following a clinical evaluation.",
    benefits: [
      "Supports recovery from soft-tissue injuries",
      "Studied for tendon and ligament repair",
      "May support gastrointestinal health",
      "Personalized dosing by a licensed clinician",
    ],
    disclaimerKey: "compounded_rx",
    doses: [{ label: "Standard protocol", wizloUrl: WIZLO_PLACEHOLDER }],
    keywords: ["BPC-157", "BPC 157 peptide", "recovery peptide"],
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    seoName: "NAD+ Injection Therapy for Longevity",
    category: "nad",
    form: "injection",
    status: "active",
    hub: "nad",
    shortDescription:
      "Cellular energy and longevity support through NAD+ supplementation, clinician-supervised.",
    longDescription:
      "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every living cell. It is essential for mitochondrial energy production (the electron transport chain), DNA repair (via PARP enzymes), and longevity signaling (via sirtuins). Research from Harvard Medical School and the Sinclair Lab has demonstrated that NAD+ levels decline approximately 50% between age 40 and 60 — a decline associated with reduced mitochondrial function, cognitive decline, and accelerated aging. NAD+ therapy — delivered via injection or IV — restores circulating NAD+ levels, supporting cellular energy production, DNA repair capacity, and sirtuin-mediated longevity pathways. All protocols are prescribed and monitored by a licensed clinician.",
    benefits: [
      "Supports mitochondrial energy production",
      "Studied for cellular longevity pathways",
      "May support cognitive clarity and focus",
      "Clinician-supervised dosing protocol",
    ],
    disclaimerKey: "compounded_rx",
    doses: [{ label: "Standard protocol", wizloUrl: WIZLO_PLACEHOLDER }],
    keywords: ["NAD+", "NAD injection", "longevity therapy", "cellular energy"],
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "peptide",
    form: "injection",
    status: "active",
    hub: "hormones-peptides",
    shortDescription: "Copper peptide studied for skin, hair, and tissue regeneration.",
    longDescription:
      "GHK-Cu is a naturally occurring copper-binding peptide studied for its role in skin remodeling, hair follicle support, and anti-inflammatory effects.",
    benefits: [
      "Studied for skin remodeling and elasticity",
      "May support hair follicle health",
      "Anti-inflammatory properties",
    ],
    disclaimerKey: "compounded_rx",
    doses: [{ label: "Standard protocol", wizloUrl: WIZLO_PLACEHOLDER }],
    keywords: ["GHK-Cu", "copper peptide", "GHK copper"],
  },
  {
    slug: "pt-141",
    name: "PT-141",
    category: "peptide",
    form: "injection",
    status: "active",
    hub: "hormones-peptides",
    shortDescription: "Melanocortin peptide studied for sexual health and libido.",
    longDescription:
      "PT-141 (bremelanotide) is a melanocortin receptor agonist studied for its role in sexual arousal and libido in both men and women. Prescribed by a licensed clinician.",
    benefits: [
      "Studied for sexual arousal and libido",
      "Acts on central nervous system pathways",
      "Clinician-supervised dosing",
    ],
    disclaimerKey: "compounded_rx",
    doses: [{ label: "Standard protocol", wizloUrl: WIZLO_PLACEHOLDER }],
    keywords: ["PT-141", "bremelanotide", "libido peptide"],
  },
  // TODO: Add remaining 21 individual peptides from xlsx:
  // MOTS-C, Sermorelin, Tesamorelin, Tesamorelin/Ipamorelin, CJC/Ipamorelin,
  // DSIP, DSIP/BPC/CJC, Epithalon, GHK-Cu/Epithalon, Glutathione, Gonadorelin,
  // IGF-LR3, Kisspeptin, LIPO-B, LL-37, Pinealon/PE22-28/Selank, Semax/Selank,
  // Thymosin A-1, BPC combo variants.

  // ── CAPSULE / TABLET PRODUCTS (11 SKUs — representative seeds) ────────────
  {
    slug: "ibutamoren-mk-677",
    name: "Ibutamoren (MK-677)",
    category: "capsule",
    form: "capsule",
    status: "active",
    hub: "hormones-peptides",
    shortDescription: "Oral growth hormone secretagogue studied for body composition and recovery.",
    longDescription:
      "Ibutamoren (MK-677) is an orally bioavailable growth hormone secretagogue that stimulates the body's natural GH and IGF-1 production.",
    benefits: [
      "Oral capsule — no injections required",
      "Studied for lean mass and recovery",
      "May support sleep quality",
    ],
    disclaimerKey: "compounded_rx",
    doses: [{ label: "Standard protocol", wizloUrl: WIZLO_PLACEHOLDER }],
    keywords: ["Ibutamoren", "MK-677", "MK677", "GH secretagogue"],
  },
  // TODO: Add remaining 10 capsule SKUs from xlsx:
  // Ondansetron 4mg, SLU_PP 332/BAM 15, SLU-PP 332, 5-Amino, Dihexa,
  // Dihexa/Tesofensine, BPC-157/TB500 capsules, BPC-157 capsules,
  // Tesofensine capsules, BPC-157/TB-500/GHKU.

  // ── REGENERATIVE (concierge-only, never sold online) ──────────────────────
  {
    slug: "whartons-jelly",
    name: "Wharton's Jelly Therapy",
    seoName: "Wharton's Jelly Mesenchymal Stem Cell Therapy",
    category: "peptide", // categorized for routing only — not a peptide
    form: "injection",
    status: "concierge_only",
    hub: "regenerative",
    shortDescription:
      "Concierge-only regenerative therapy. Consult required — never sold online.",
    longDescription:
      "Wharton's Jelly contains a high concentration of mesenchymal stem cells and growth factors. Treatment requires an in-person consult with our medical team. We do not sell stem cell therapy online.",
    benefits: [
      "High concentration of mesenchymal stem cells",
      "In-home concierge delivery available",
      "Physician-led treatment planning",
    ],
    disclaimerKey: "regen_consult_only",
    doses: [{ label: "Consult required", wizloUrl: "/consult-router?path=regen" }],
    keywords: ["Wharton's Jelly", "umbilical cord stem cells", "regenerative medicine"],
  },
];

// ─── Lookups ──────────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByHub(hub: Product["hub"]): Product[] {
  return products.filter((p) => p.hub === hub && p.status !== "concierge_only");
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllProductSlugs(): { slug: string }[] {
  return products.map((p) => ({ slug: p.slug }));
}

// ─── Disclaimer text bank ─────────────────────────────────────────────────

export const productDisclaimers: Record<Product["disclaimerKey"], string> = {
  compounded_rx:
    "Compounded medications are not FDA-approved drugs. They are prepared by licensed compounding pharmacies based on a clinician's prescription for an individual patient. Individual results vary. A medical evaluation is required to determine if this therapy is appropriate for you. Some uses discussed may be considered off-label.",
  supplement:
    "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
  regen_consult_only:
    "Regenerative therapies are provided as a concierge medical service following an in-person consultation. We do not sell stem cell or exosome products online.",
};
