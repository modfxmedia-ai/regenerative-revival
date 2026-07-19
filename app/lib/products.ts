// Regenerative Revival - Wizlo product catalog
// Source: Regen Revival - INTAKE FORM _ PRODUCTS SPEC SHEET
// 47 active products with real Wizlo intake form URLs

export type ProductCategory =
  | "glp1"
  | "peptide"
  | "nad"
  | "hormone"
  | "capsule"
  | "supplement";

export type ProductForm =
  | "injection"
  | "sublingual"
  | "capsule"
  | "tablet"
  | "topical";

export type ProductStatus = "active" | "coming_soon" | "concierge_only";

export interface ProductDose {
  label: string;
  mg?: number;
  wizloUrl: string;
  priceMonthly?: number;
  priceQuarterly?: number;
}

export interface Product {
  slug: string;
  name: string;
  seoName?: string;
  category: ProductCategory;
  form: ProductForm;
  status: ProductStatus;
  hub: "hormones-peptides" | "nad" | "regenerative";
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  indications?: string[];
  notFor?: string[];
  introExplainer?: string;
  disclaimerKey: "compounded_rx" | "supplement" | "regen_consult_only";
  doses: ProductDose[];
  priceFrom?: number;
  image?: string;
  keywords: string[];
  directions?: string;
  refrigeration?: "Refrigerated" | "Non-Refrigerated";
  supplyDays?: number;
}

// ─── Wizlo form URLs ──────────────────────────────────────────────────────────
const W = {
  BPC157:        "https://app.wizlo.com/form-submission?token=$2b$12$35bQot7ER80L3KIVjPi2aOqyLNYCGOmeT86PMDAwlo/XVko.70Ib.",
  BPC_COMBO4:    "https://app.wizlo.com/form-submission?token=$2b$12$sncoSle3vUEF7icLMxeA6eCmLfyNA3YxSLxwr3NDLql8Jxo2DFJqm",
  BPC_KPV_TB:    "https://app.wizlo.com/form-submission?token=$2b$12$C25F0Te534UID5mk8eGxTuEHhX/5OwLkGobI7yUDyNqzqeS8yjAf2",
  BPC_TB500:     "https://app.wizlo.com/form-submission?token=$2b$12$wA1bBS1YoUUtNri2YMW/COmMm1N1TwHIQ1hjTNLXKl7LWHXWwbTeS",
  CJC_IPAM:      "https://app.wizlo.com/form-submission?token=$2b$12$Yc30GZCDaMnyskqvw6kmzuxu/XlgEtSnP8DZOFAoduAB3V7H.xIrC",
  DSIP:          "https://app.wizlo.com/form-submission?token=$2b$12$3G.GS6KVvCdLcJ1vkeqKP.1oTtE99z5.xaGkpp1aXX0p2EecNE7rK",
  DSIP_BPC_CJC:  "https://app.wizlo.com/form-submission?token=$2b$12$Ap.11usFqGRYsM0YGBqKq.DC5lcYsEc3jFz4ew0IMlTRxouMiO1J.",
  GHK_CU:        "https://app.wizlo.com/form-submission?token=$2b$12$AtF7cHbTB2rUhnKSPTOw0ezdehC2oWDeB6y7dbE1J3KunplS7KFTG",
  GHK_EPITH:     "https://app.wizlo.com/form-submission?token=$2b$12$TJLHJFjXd0OzNbTzvjiSFe0hIehSvj4ATu1RdzhiIsfXpowVGd8i6",
  GLUT:          "https://app.wizlo.com/form-submission?token=$2b$12$PSJz7l9UHjZ/ULFic2TPWuErsfJnUUflSKpYL./QiFee9whuSZtRO",
  GONADO:        "https://app.wizlo.com/form-submission?token=$2b$12$5x/LevVslT/Igkxlsr/P9eLcG6KJfD29O3JRzA5hPpCBjYQCmW80a",
  LIPO_B:        "https://app.wizlo.com/form-submission?token=$2b$12$6tuvFEVfwlSepXV0QWsNkuc2ezzPwXX3d2.KRcUTee5D5tUqWd1xO",
  MOTS_C:        "https://app.wizlo.com/form-submission?token=$2b$12$KugkBpJhJb/5DNaBqHhWduQTCdz4c.b4fco3cFBsTlmWpBkH.SJcS",
  NAD:           "https://app.wizlo.com/form-submission?token=$2b$12$IweC1dsf/dcOK1J1kzxfxO8GmJdgDLHolRTyldmB2fmTlg7BjDNZe",
  PINEALON:      "https://app.wizlo.com/form-submission?token=$2b$12$NVdMcUMtSAsCwUKk0sEw/Owy./VVrZjdVUZDDPK21VFkPPQsfrTle",
  PT141:         "https://app.wizlo.com/form-submission?token=$2b$12$QzfYlrZmf82awm3yEUcPfeM3lNQSdxkOKVKWukKKm8nrlIsv45kua",
  SEMAX:         "https://app.wizlo.com/form-submission?token=$2b$12$NQOYUKw3fauUhWSHwKnx6OMM5bs57pv26k2cqcPdqqcT3iTRhG6GC",
  SERMO:         "https://app.wizlo.com/form-submission?token=$2b$12$ZNHfHprcwUFFgxA9sNOq4uc9pxsJcSFnfSh.CuDHimfNprazxSoqC",
  TESAMO:        "https://app.wizlo.com/form-submission?token=$2b$12$ieQD.SwTzLJc51UiHCgfOeo2k/PKsG9w3UQrXr3LJ/1Inui6QSJwe",
  TESAMO_IPAM:   "https://app.wizlo.com/form-submission?token=$2b$12$RObxwfYn3PUNwW2AyXWYv.Tu.JaJbhNdVBtq5KskvWBxmX5TwAUkW",
  THYMO:         "https://app.wizlo.com/form-submission?token=$2b$12$KKXcsH6ZETowVy3Jl0EXm.YZLqfqg/4WQlP.hKJHASjc7O3qTWX6C",
  SEMA_B12:      "https://app.wizlo.com/form-submission?token=$2b$12$9uiiwVYvQoXyGCHiguZn1OO79MdziIAhiXpgg1AFZu3y5YJnA8xp6",
  TIRZ_B12:      "https://app.wizlo.com/form-submission?token=$2b$12$fwAWtxi9PH.bPFoXn23Czur/8ushwUdcgEwweF0KhtUmyJBFWfJe2",
  SUB_TIRZ:      "https://app.wizlo.com/form-submission?token=$2b$12$bsPCazTPHJFWzdUhQ4hLp.3lLiExT8vxsA5ICbn4H9sxokO7d5We.",
  SUB_SEMA:      "https://app.wizlo.com/form-submission?token=$2b$12$eC8dNVP1wPb7mP2iZifXG.MnEmglYGJsLWkDr4457tOyHP.8ZxMAC",
};

export const products: Product[] = [

  // ── PEPTIDES - Injectable ─────────────────────────────────────────────────

  {
    slug: "bpc-157",
    name: "BPC-157",
    seoName: "BPC-157 Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Recovery and tissue repair peptide for soft-tissue injuries, tendon healing, and gut health.",
    longDescription: "BPC-157 (Body Protection Compound 157) is a synthetic pentadecapeptide studied for soft-tissue healing, tendon and ligament repair, gut lining integrity, and anti-inflammatory signaling. Research published in the Journal of Physiology-Paris demonstrates BPC-157's ability to accelerate tendon-to-bone healing and reduce inflammation in injured tissue. All protocols are prescribed and monitored by a licensed clinician.",
    benefits: ["Supports recovery from soft-tissue injuries", "Studied for tendon and ligament repair", "May support gastrointestinal health", "Personalized dosing by a licensed clinician", "Ships from NABP-accredited compounding pharmacy"],
    directions: "Inject 20 units subcutaneously once daily in the morning for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "3 mg/mL - 1 Month Supply", mg: 3, wizloUrl: W.BPC157, priceMonthly: 229 },
      { label: "3 mg/mL - 3 Month Supply", mg: 3, wizloUrl: W.BPC157, priceQuarterly: 549 },
    ],
    priceFrom: 229,
    keywords: ["BPC-157", "BPC 157 peptide", "recovery peptide", "tissue repair"],
  },

  {
    slug: "bpc-157-ghk-cu-kpv-tb500",
    name: "BPC-157/GHK-Cu/KPV/TB500",
    seoName: "BPC-157 GHK-Cu KPV TB500 Peptide Stack",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Advanced 4-peptide recovery stack combining BPC-157, GHK-Cu, KPV, and TB500 for comprehensive tissue repair.",
    longDescription: "This combination peptide stack pairs BPC-157's tissue repair properties with GHK-Cu's skin and hair regeneration, KPV's anti-inflammatory action, and TB500's systemic healing and flexibility support. Designed for patients seeking comprehensive recovery and regeneration.",
    benefits: ["Comprehensive tissue repair from 4 synergistic peptides", "Anti-inflammatory and regenerative action", "Supports skin, hair, and connective tissue", "Clinician-supervised protocol"],
    directions: "Inject 20 units subcutaneously once daily in the morning for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "3mg/10mg/3mg/3mg/mL - 1 Month Supply", wizloUrl: W.BPC_COMBO4, priceMonthly: 259 },
      { label: "3mg/10mg/3mg/3mg/mL - 3 Month Supply", wizloUrl: W.BPC_COMBO4, priceQuarterly: 622 },
    ],
    priceFrom: 259,
    keywords: ["BPC-157 stack", "GHK-Cu", "TB500", "peptide combination"],
  },

  {
    slug: "bpc-157-kpv-tb500",
    name: "BPC-157/KPV/TB500",
    seoName: "BPC-157 KPV TB500 Peptide Stack",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Triple peptide stack combining BPC-157, KPV, and TB500 for tissue repair and inflammation control.",
    longDescription: "A targeted 3-peptide combination of BPC-157 for tissue healing, KPV for anti-inflammatory support, and TB500 for systemic recovery and flexibility. Ideal for active recovery protocols.",
    benefits: ["Tissue repair and healing support", "Anti-inflammatory action via KPV", "TB500 supports systemic recovery", "Clinician-supervised dosing"],
    directions: "Inject 20 units subcutaneously once daily in the morning for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "3mg/3mg/3mg/mL - 1 Month Supply", wizloUrl: W.BPC_KPV_TB, priceMonthly: 249 },
      { label: "3mg/3mg/3mg/mL - 3 Month Supply", wizloUrl: W.BPC_KPV_TB, priceQuarterly: 597 },
    ],
    priceFrom: 249,
    keywords: ["BPC-157 KPV TB500", "peptide stack", "recovery"],
  },

  {
    slug: "bpc-157-tb500",
    name: "BPC-157/TB500",
    seoName: "BPC-157 TB500 Peptide Stack",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Classic BPC-157 and TB500 combination for soft-tissue healing and systemic recovery.",
    longDescription: "The BPC-157/TB500 stack is one of the most studied peptide combinations for musculoskeletal recovery. BPC-157 targets local tissue repair while TB500 (Thymosin Beta-4) promotes systemic healing, flexibility, and reduced inflammation throughout the body.",
    benefits: ["Local and systemic tissue repair", "Reduces inflammation and promotes flexibility", "Studied for sports injury recovery", "Clinician-supervised protocol"],
    directions: "Inject 20 units subcutaneously once daily in the morning for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "3mg/3mg/mL - 1 Month Supply", wizloUrl: W.BPC_TB500, priceMonthly: 249 },
      { label: "3mg/3mg/mL - 3 Month Supply", wizloUrl: W.BPC_TB500, priceQuarterly: 597 },
    ],
    priceFrom: 249,
    keywords: ["BPC-157 TB500", "TB-500", "peptide recovery stack"],
  },

  {
    slug: "cjc-ipamorelin",
    name: "CJC/Ipamorelin",
    seoName: "CJC-1295 Ipamorelin Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Growth hormone-releasing peptide combination for body composition, recovery, and sleep quality.",
    longDescription: "CJC-1295 and Ipamorelin are two complementary growth hormone secretagogues. CJC-1295 extends the half-life of growth hormone-releasing hormone, while Ipamorelin selectively stimulates GH release without significantly affecting cortisol or prolactin. Together they produce a sustained, physiologic GH pulse - supporting lean mass, fat metabolism, recovery, and sleep.",
    benefits: ["Stimulates natural growth hormone release", "Supports lean body composition", "Improves sleep quality and recovery", "Selective - minimal cortisol impact", "Clinician-supervised nightly protocol"],
    directions: "Inject 25 units subcutaneously nightly at bedtime for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "1.2mg/2mg/mL - 1 Month Supply", wizloUrl: W.CJC_IPAM, priceMonthly: 269 },
      { label: "1.2mg/2mg/mL - 3 Month Supply", wizloUrl: W.CJC_IPAM, priceQuarterly: 645 },
    ],
    priceFrom: 269,
    keywords: ["CJC-1295", "Ipamorelin", "growth hormone peptide", "GH secretagogue"],
  },

  {
    slug: "dsip",
    name: "DSIP",
    seoName: "DSIP Delta Sleep-Inducing Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Delta sleep-inducing peptide for sleep quality, stress resilience, and neuroendocrine regulation.",
    longDescription: "DSIP (Delta Sleep-Inducing Peptide) is a naturally occurring neuropeptide studied for its role in sleep regulation, stress response modulation, and neuroendocrine function. It has been researched for its potential to improve sleep architecture, reduce cortisol, and support overall hormonal balance.",
    benefits: ["Supports deep sleep quality", "May reduce cortisol and stress response", "Neuroendocrine regulation support", "Clinician-supervised nightly protocol"],
    directions: "Inject 25 units subcutaneously nightly at bedtime for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "1 mg/mL - 1 Month Supply", mg: 1, wizloUrl: W.DSIP, priceMonthly: 199 },
      { label: "1 mg/mL - 3 Month Supply", mg: 1, wizloUrl: W.DSIP, priceQuarterly: 479 },
    ],
    priceFrom: 199,
    keywords: ["DSIP", "delta sleep peptide", "sleep peptide therapy"],
  },

  {
    slug: "dsip-bpc-cjc",
    name: "DSIP/BPC/CJC",
    seoName: "DSIP BPC-157 CJC Peptide Stack",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Sleep, recovery, and growth hormone stack combining DSIP, BPC-157, and CJC-1295.",
    longDescription: "This triple-peptide combination pairs DSIP's sleep-regulating properties with BPC-157's tissue repair and CJC-1295's growth hormone stimulation. Designed for patients seeking comprehensive overnight recovery - better sleep, tissue healing, and GH optimization in a single nightly protocol.",
    benefits: ["Optimizes sleep quality and depth", "Tissue repair during overnight recovery", "Growth hormone stimulation", "Single nightly injection protocol"],
    directions: "Inject 25 units subcutaneously nightly at bedtime for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "1mg/2mg/2mg/mL - 1 Month Supply", wizloUrl: W.DSIP_BPC_CJC, priceMonthly: 249 },
      { label: "1mg/2mg/2mg/mL - 3 Month Supply", wizloUrl: W.DSIP_BPC_CJC, priceQuarterly: 597 },
    ],
    priceFrom: 249,
    keywords: ["DSIP BPC CJC stack", "sleep recovery peptide", "overnight recovery"],
  },

  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    seoName: "GHK-Cu Copper Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Copper peptide studied for skin remodeling, hair follicle support, and anti-inflammatory effects.",
    longDescription: "GHK-Cu is a naturally occurring copper-binding tripeptide found in human plasma, saliva, and urine. It has been extensively studied for its role in skin remodeling, collagen synthesis, hair follicle stimulation, and anti-inflammatory signaling. GHK-Cu activates wound healing pathways and has been shown to increase skin thickness and elasticity.",
    benefits: ["Studied for skin remodeling and elasticity", "May support hair follicle health", "Anti-inflammatory and wound healing properties", "Collagen synthesis support", "Clinician-supervised protocol"],
    directions: "Inject 20 units subcutaneously once daily in the morning for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "10 mg/mL - 1 Month Supply", mg: 10, wizloUrl: W.GHK_CU, priceMonthly: 209 },
      { label: "10 mg/mL - 3 Month Supply", mg: 10, wizloUrl: W.GHK_CU, priceQuarterly: 502 },
    ],
    priceFrom: 209,
    keywords: ["GHK-Cu", "copper peptide", "skin peptide", "hair peptide"],
  },

  {
    slug: "ghk-cu-epithalon",
    name: "GHK-Cu/Epithalon",
    seoName: "GHK-Cu Epithalon Anti-Aging Peptide Stack",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Anti-aging peptide combination pairing GHK-Cu's regenerative properties with Epithalon's telomere support.",
    longDescription: "GHK-Cu and Epithalon are two of the most studied anti-aging peptides. GHK-Cu promotes skin regeneration and collagen synthesis, while Epithalon (Epitalon) is a tetrapeptide studied for its ability to activate telomerase, potentially extending telomere length and supporting cellular longevity.",
    benefits: ["Skin regeneration and collagen support", "Telomere length support via Epithalon", "Anti-aging and longevity protocol", "Clinician-supervised dosing"],
    directions: "Inject 20 units subcutaneously once daily in the morning for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "10mg/2mg/mL - 1 Month Supply", wizloUrl: W.GHK_EPITH, priceMonthly: 229 },
      { label: "10mg/2mg/mL - 3 Month Supply", wizloUrl: W.GHK_EPITH, priceQuarterly: 549 },
    ],
    priceFrom: 229,
    keywords: ["GHK-Cu Epithalon", "Epitalon", "anti-aging peptide", "telomere peptide"],
  },

  {
    slug: "glutathione",
    name: "Glutathione",
    seoName: "Glutathione Injection Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Master antioxidant injection for detoxification, immune support, and cellular health.",
    longDescription: "Glutathione is the body's most powerful endogenous antioxidant, produced in every cell. It plays a central role in detoxification, immune function, and protection against oxidative stress. Injectable glutathione bypasses the digestive system for superior bioavailability compared to oral supplementation.",
    benefits: ["Master antioxidant - neutralizes free radicals", "Supports liver detoxification pathways", "Immune system modulation", "Skin brightening and cellular health", "Superior bioavailability via injection"],
    directions: "Inject 1 mL (200 mg) intramuscularly twice weekly.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "200 mg/mL - 1 Month Supply", mg: 200, wizloUrl: W.GLUT, priceMonthly: 179 },
      { label: "200 mg/mL - 3 Month Supply", mg: 200, wizloUrl: W.GLUT, priceQuarterly: 429 },
    ],
    priceFrom: 179,
    keywords: ["glutathione injection", "glutathione therapy", "antioxidant injection"],
  },

  {
    slug: "gonadorelin",
    name: "Gonadorelin",
    seoName: "Gonadorelin Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "GnRH analog for maintaining testicular function and fertility during TRT.",
    longDescription: "Gonadorelin is a synthetic analog of gonadotropin-releasing hormone (GnRH). It is commonly used alongside testosterone replacement therapy to maintain testicular size, function, and fertility by stimulating the pituitary to continue producing LH and FSH. It is an alternative to hCG for patients on TRT.",
    benefits: ["Maintains testicular function during TRT", "Supports fertility and LH/FSH production", "Alternative to hCG", "Nightly subcutaneous protocol", "Clinician-supervised dosing"],
    directions: "Inject 15 units subcutaneously nightly at bedtime.",
    refrigeration: "Refrigerated", supplyDays: 99,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "1 mg/mL - 1 Month Supply", mg: 1, wizloUrl: W.GONADO, priceMonthly: 209 },
      { label: "1 mg/mL - 3 Month Supply", mg: 1, wizloUrl: W.GONADO, priceQuarterly: 502 },
    ],
    priceFrom: 209,
    keywords: ["Gonadorelin", "GnRH peptide", "TRT fertility", "testicular function"],
  },

  {
    slug: "lipo-b",
    name: "LIPO-B",
    seoName: "LIPO-B Lipotropic Injection Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Lipotropic injection combining MIC (methionine, inositol, choline) with B12 for fat metabolism and energy.",
    longDescription: "LIPO-B is a lipotropic injection containing methionine, inositol, choline, and B12. These compounds work synergistically to support fat metabolism, liver function, and energy production. Commonly used alongside weight management programs to enhance fat mobilization and support metabolic health.",
    benefits: ["Supports fat metabolism and mobilization", "Liver health and detoxification support", "B12 for energy and neurological function", "Complements weight management programs", "Twice-weekly IM injection protocol"],
    directions: "Inject 1 mL (100 units) into the muscle two times a week.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "50mg/50mg/25mg/1mg/mL - 1 Month Supply", wizloUrl: W.LIPO_B, priceMonthly: 149 },
      { label: "50mg/50mg/25mg/1mg/mL - 3 Month Supply", wizloUrl: W.LIPO_B, priceQuarterly: 359 },
    ],
    priceFrom: 149,
    keywords: ["LIPO-B", "lipotropic injection", "MIC injection", "fat metabolism injection"],
  },

  {
    slug: "mots-c",
    name: "MOTS-C",
    seoName: "MOTS-C Mitochondrial Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Mitochondria-derived peptide for metabolic regulation, insulin sensitivity, and longevity.",
    longDescription: "MOTS-C is a mitochondria-derived peptide encoded in the mitochondrial genome. Research from the University of Southern California has shown it plays a key role in metabolic regulation, insulin sensitivity, and exercise capacity. It activates AMPK pathways - the same longevity pathway activated by caloric restriction and exercise.",
    benefits: ["Activates AMPK longevity pathways", "Supports insulin sensitivity and metabolic health", "Studied for exercise capacity and endurance", "Mitochondrial energy optimization", "Clinician-supervised protocol"],
    directions: "Inject 60 units subcutaneously in the morning three times weekly.",
    refrigeration: "Refrigerated", supplyDays: 60,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "2 mg/mL - 1 Month Supply", mg: 2, wizloUrl: W.MOTS_C, priceMonthly: 249 },
      { label: "2 mg/mL - 3 Month Supply", mg: 2, wizloUrl: W.MOTS_C, priceQuarterly: 597 },
    ],
    priceFrom: 249,
    keywords: ["MOTS-C", "mitochondrial peptide", "metabolic peptide", "AMPK"],
  },

  {
    slug: "pinealon-pe22-28-selank",
    name: "Pinealon/PE22-28/Selank",
    seoName: "Pinealon PE22-28 Selank Cognitive Peptide Stack",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Cognitive and neuroprotective peptide stack combining Pinealon, PE22-28, and Selank.",
    longDescription: "This triple nootropic peptide stack combines Pinealon's neuroprotective and anti-aging properties, PE22-28's antidepressant and cognitive-enhancing effects, and Selank's anxiolytic and immune-modulating action. Designed for patients seeking cognitive clarity, stress resilience, and neuroprotection.",
    benefits: ["Neuroprotective and anti-aging support", "Cognitive clarity and focus", "Anxiolytic - reduces stress and anxiety", "Immune modulation via Selank", "Monday–Friday morning protocol"],
    directions: "Inject 25 units subcutaneously once daily in the morning, Monday through Friday, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "2mg/2mg/2mg/mL - 1 Month Supply", wizloUrl: W.PINEALON, priceMonthly: 269 },
      { label: "2mg/2mg/2mg/mL - 3 Month Supply", wizloUrl: W.PINEALON, priceQuarterly: 645 },
    ],
    priceFrom: 269,
    keywords: ["Pinealon", "Selank", "PE22-28", "cognitive peptide", "nootropic peptide"],
  },

  {
    slug: "pt-141",
    name: "PT-141",
    seoName: "PT-141 Sexual Health Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Melanocortin peptide studied for sexual arousal and libido in men and women.",
    longDescription: "PT-141 (bremelanotide) is a melanocortin receptor agonist that acts on the central nervous system to enhance sexual arousal and libido. Unlike PDE5 inhibitors (Viagra, Cialis), PT-141 works through the brain's melanocortin system rather than the vascular system - making it effective for both men and women. It is prescribed and monitored by a licensed clinician.",
    benefits: ["Enhances sexual arousal via CNS pathways", "Effective for both men and women", "Works independently of vascular mechanisms", "Clinician-supervised dosing", "As-needed protocol - not daily"],
    directions: "Inject 75 units (1.5 mg) subcutaneously approximately 45 minutes prior to sexual activity. Do not administer more than 1 dose within a 24-hour period or more than 3 doses per week.",
    refrigeration: "Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "2 mg/mL - 1 Month Supply", mg: 2, wizloUrl: W.PT141, priceMonthly: 209 },
      { label: "2 mg/mL - 3 Month Supply", mg: 2, wizloUrl: W.PT141, priceQuarterly: 502 },
    ],
    priceFrom: 209,
    keywords: ["PT-141", "bremelanotide", "libido peptide", "sexual health peptide"],
  },

  {
    slug: "semax-selank",
    name: "Semax/Selank",
    seoName: "Semax Selank Nootropic Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Dual nootropic peptide stack for cognitive enhancement, anxiety reduction, and neuroprotection.",
    longDescription: "Semax is a synthetic analog of ACTH studied for cognitive enhancement, neuroprotection, and BDNF upregulation. Selank is an anxiolytic peptide derived from tuftsin, studied for reducing anxiety, improving memory, and modulating the immune system. Together they form a balanced cognitive and stress-resilience protocol.",
    benefits: ["Cognitive clarity and memory support", "Anxiolytic - reduces anxiety without sedation", "BDNF upregulation via Semax", "Immune modulation via Selank", "Morning protocol for daily cognitive support"],
    directions: "Inject 20 units subcutaneously once daily in the morning for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "1mg/1mg/mL - 1 Month Supply", wizloUrl: W.SEMAX, priceMonthly: 249 },
      { label: "1mg/1mg/mL - 3 Month Supply", wizloUrl: W.SEMAX, priceQuarterly: 597 },
    ],
    priceFrom: 249,
    keywords: ["Semax", "Selank", "nootropic peptide", "cognitive peptide", "anxiety peptide"],
  },

  {
    slug: "sermorelin",
    name: "Sermorelin",
    seoName: "Sermorelin Growth Hormone Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Growth hormone-releasing hormone analog for anti-aging, body composition, and sleep quality.",
    longDescription: "Sermorelin is a synthetic analog of growth hormone-releasing hormone (GHRH). It stimulates the pituitary gland to produce and release growth hormone naturally - a safer, more physiologic approach than direct HGH administration. Sermorelin supports lean body composition, fat metabolism, sleep quality, and recovery.",
    benefits: ["Stimulates natural GH production", "Supports lean mass and fat metabolism", "Improves sleep quality and recovery", "More physiologic than direct HGH", "Nightly subcutaneous protocol"],
    directions: "Inject 20 units subcutaneously nightly at bedtime for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "3 mg/mL - 1 Month Supply", mg: 3, wizloUrl: W.SERMO, priceMonthly: 219 },
      { label: "3 mg/mL - 3 Month Supply", mg: 3, wizloUrl: W.SERMO, priceQuarterly: 525 },
    ],
    priceFrom: 219,
    keywords: ["Sermorelin", "GHRH peptide", "growth hormone peptide", "anti-aging peptide"],
  },

  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    seoName: "Tesamorelin Growth Hormone Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "FDA-studied GHRH analog for visceral fat reduction and growth hormone optimization.",
    longDescription: "Tesamorelin is a stabilized analog of growth hormone-releasing hormone (GHRH) that has been studied in FDA clinical trials for visceral adiposity reduction. It stimulates pulsatile GH release, supporting fat metabolism - particularly visceral fat - while also improving body composition, cognitive function, and metabolic markers.",
    benefits: ["Studied for visceral fat reduction", "Stimulates pulsatile GH release", "Supports body composition and metabolism", "Cognitive function support", "Nightly subcutaneous protocol"],
    directions: "Inject 20 units subcutaneously nightly at bedtime for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "3 mg/mL - 1 Month Supply", mg: 3, wizloUrl: W.TESAMO, priceMonthly: 229 },
      { label: "3 mg/mL - 3 Month Supply", mg: 3, wizloUrl: W.TESAMO, priceQuarterly: 549 },
    ],
    priceFrom: 229,
    keywords: ["Tesamorelin", "GHRH analog", "visceral fat peptide", "growth hormone peptide"],
  },

  {
    slug: "tesamorelin-ipamorelin",
    name: "Tesamorelin/Ipamorelin",
    seoName: "Tesamorelin Ipamorelin Growth Hormone Stack",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Powerful GH-releasing combination of Tesamorelin and Ipamorelin for body composition and recovery.",
    longDescription: "Combining Tesamorelin's GHRH activity with Ipamorelin's selective GH secretagogue action creates a synergistic growth hormone optimization protocol. Tesamorelin extends the GH pulse while Ipamorelin amplifies it - without significantly affecting cortisol or prolactin. Ideal for body composition, recovery, and anti-aging goals.",
    benefits: ["Synergistic GH optimization", "Supports lean mass and fat metabolism", "Selective - minimal cortisol impact", "Improved sleep and recovery", "Nightly subcutaneous protocol"],
    directions: "Inject 20 units subcutaneously nightly at bedtime for 5 days on, followed by 2 days off.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "3mg/2mg/mL - 1 Month Supply", wizloUrl: W.TESAMO_IPAM, priceMonthly: 269 },
      { label: "3mg/2mg/mL - 3 Month Supply", wizloUrl: W.TESAMO_IPAM, priceQuarterly: 645 },
    ],
    priceFrom: 269,
    keywords: ["Tesamorelin Ipamorelin", "GH stack", "growth hormone combination"],
  },

  {
    slug: "thymosin-a1",
    name: "Thymosin A-1",
    seoName: "Thymosin Alpha-1 Immune Peptide Therapy",
    category: "peptide", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Immune-modulating peptide for immune system optimization and antiviral defense.",
    longDescription: "Thymosin Alpha-1 (Tα1) is a naturally occurring peptide derived from the thymus gland. It is one of the most studied immune-modulating peptides, with research spanning viral infections, cancer immunotherapy, and autoimmune conditions. Tα1 enhances T-cell function, NK cell activity, and dendritic cell maturation - supporting both innate and adaptive immunity.",
    benefits: ["Enhances T-cell and NK cell function", "Supports innate and adaptive immunity", "Studied for viral and immune conditions", "Twice-weekly subcutaneous protocol", "Clinician-supervised dosing"],
    directions: "Inject 50 units subcutaneously twice a week.",
    refrigeration: "Refrigerated", supplyDays: 105,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "1 mg/mL - 1 Month Supply", mg: 1, wizloUrl: W.THYMO, priceMonthly: 229 },
      { label: "1 mg/mL - 3 Month Supply", mg: 1, wizloUrl: W.THYMO, priceQuarterly: 549 },
    ],
    priceFrom: 229,
    keywords: ["Thymosin Alpha-1", "Tα1", "immune peptide", "immune modulating peptide"],
  },

  // ── NAD+ ─────────────────────────────────────────────────────────────────

  {
    slug: "nad-plus",
    name: "NAD+",
    seoName: "NAD+ Injection Therapy for Longevity",
    category: "nad", form: "injection", status: "active", hub: "nad",
    shortDescription: "Clinician-supervised NAD+ injection therapy for cellular energy, mitochondrial function, and longevity.",
    longDescription: "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme present in every living cell, essential for mitochondrial energy production (the electron transport chain), DNA repair (via PARP enzymes), and longevity signaling (via sirtuins). Research from Harvard Medical School and the Sinclair Lab has demonstrated that NAD+ levels decline approximately 50% between age 40 and 60. NAD+ injection therapy restores circulating levels, supporting cellular energy, DNA repair capacity, and sirtuin-mediated longevity pathways.",
    benefits: ["Supports mitochondrial ATP production", "Activates sirtuin longevity pathways", "DNA repair via PARP enzyme activation", "Cognitive clarity and energy support", "Clinician-supervised dosing protocol"],
    directions: "Inject 50 units subcutaneously 2–3 times weekly for 2 weeks, then may increase to 75 units subcutaneously 2–3 times weekly if well tolerated.",
    refrigeration: "Refrigerated", supplyDays: 93,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "100 mg/mL - 1 Month Supply", mg: 100, wizloUrl: W.NAD, priceMonthly: 249 },
      { label: "100 mg/mL - 3 Month Supply", mg: 100, wizloUrl: W.NAD, priceQuarterly: 597 },
    ],
    priceFrom: 249,
    keywords: ["NAD+", "NAD injection", "NAD therapy", "longevity therapy", "cellular energy"],
  },

  // ── GLP-1 - Sublingual Semaglutide ───────────────────────────────────────

  {
    slug: "sublingual-semaglutide",
    name: "Sublingual Semaglutide",
    seoName: "Sublingual Semaglutide for Weight Loss",
    category: "glp1", form: "sublingual", status: "active", hub: "hormones-peptides",
    shortDescription: "Physician-prescribed compounded GLP-1 program for sustainable weight loss - no injections required.",
    longDescription: "Semaglutide is a GLP-1 (glucagon-like peptide-1) receptor agonist. It works by mimicking a hormone your gut naturally releases after eating - signaling your brain that you're full, slowing gastric emptying, and reducing the constant background noise of hunger. Clinical trials (STEP 1–4) demonstrated average weight loss of 14.9% body weight over 68 weeks at the 2.4mg dose. Compounded sublingual semaglutide delivers the same active molecule under the tongue, absorbed through the oral mucosa - a practical alternative for patients who prefer not to self-inject.",
    benefits: ["Clinically studied GLP-1 receptor agonist", "Regulates appetite and reduces food noise", "No needles - sublingual delivery", "Personalized dosing by a licensed clinician", "Ships from NABP-accredited compounding pharmacy"],
    indications: ["Adults with BMI 27+ (with comorbidities) or 30+", "Patients who prefer not to self-inject", "Anyone seeking clinician-guided weight management"],
    notFor: ["Not a quick fix - sustainable results take 3–6 months minimum", "Not for everyone - your provider will tell you honestly if another path fits better", "Not a pill mill - every prescription requires a clinical evaluation"],
    introExplainer: "Semaglutide is a GLP-1 receptor agonist - a class of medications originally developed for type 2 diabetes and now widely used for weight management. It works by signaling fullness, slowing gastric emptying, and reducing food noise and cravings. Compounded sublingual semaglutide delivers the same active molecule under the tongue, where it is absorbed through the oral mucosa. For patients who don't tolerate injections or prefer a daily oral dose, sublingual is a practical alternative - when prescribed and monitored by a clinician.",
    directions: "Place 1 mL under the tongue Monday & Thursday morning and hold in place for 45 seconds, then swallow.",
    refrigeration: "Non-Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "2 mg - 1 Month Supply",  mg: 2,  wizloUrl: W.SUB_SEMA, priceMonthly: 379, priceQuarterly: 837 },
      { label: "4 mg - 1 Month Supply",  mg: 4,  wizloUrl: W.SUB_SEMA, priceMonthly: 379, priceQuarterly: 837 },
      { label: "6 mg - 1 Month Supply",  mg: 6,  wizloUrl: W.SUB_SEMA, priceMonthly: 379, priceQuarterly: 837 },
      { label: "8 mg - 1 Month Supply",  mg: 8,  wizloUrl: W.SUB_SEMA, priceMonthly: 499, priceQuarterly: 837 },
      { label: "10 mg - 1 Month Supply", mg: 10, wizloUrl: W.SUB_SEMA, priceMonthly: 499, priceQuarterly: 837 },
    ],
    priceFrom: 379,
    keywords: ["sublingual semaglutide", "compounded semaglutide", "GLP-1 weight loss", "semaglutide no injection"],
  },

  // ── GLP-1 - Sublingual Tirzepatide ───────────────────────────────────────

  {
    slug: "sublingual-tirzepatide",
    name: "Sublingual Tirzepatide",
    seoName: "Sublingual Tirzepatide for Weight Loss",
    category: "glp1", form: "sublingual", status: "active", hub: "hormones-peptides",
    shortDescription: "Dual GIP/GLP-1 receptor agonist for advanced metabolic and weight management - no injections.",
    longDescription: "Tirzepatide is a dual GIP and GLP-1 receptor agonist - the first of its class. By activating two metabolic pathways simultaneously, it produces stronger appetite suppression and greater metabolic effects than GLP-1 alone. The SURMOUNT-1 trial demonstrated average weight loss of 22.5% body weight at the 15mg dose over 72 weeks - the largest weight loss ever recorded in a pharmaceutical trial at the time of publication. Sublingual delivery makes it accessible to patients who prefer not to inject.",
    benefits: ["Dual GIP + GLP-1 action for stronger metabolic effect", "No needles - sublingual delivery", "Personalized titration by a licensed clinician", "Ships from NABP-accredited compounding pharmacy"],
    directions: "Place 1 mL under the tongue Monday & Thursday morning and hold in place for 45 seconds, then swallow.",
    refrigeration: "Non-Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "5 mg - 1 Month Supply",  mg: 5,  wizloUrl: W.SUB_TIRZ, priceMonthly: 379, priceQuarterly: 910 },
      { label: "10 mg - 1 Month Supply", mg: 10, wizloUrl: W.SUB_TIRZ, priceMonthly: 379, priceQuarterly: 910 },
      { label: "15 mg - 1 Month Supply", mg: 15, wizloUrl: W.SUB_TIRZ, priceMonthly: 379, priceQuarterly: 910 },
      { label: "20 mg - 1 Month Supply", mg: 20, wizloUrl: W.SUB_TIRZ, priceMonthly: 499, priceQuarterly: 1198 },
      { label: "25 mg - 1 Month Supply", mg: 25, wizloUrl: W.SUB_TIRZ, priceMonthly: 499, priceQuarterly: 1198 },
      { label: "30 mg - 1 Month Supply", mg: 30, wizloUrl: W.SUB_TIRZ, priceMonthly: 499, priceQuarterly: 1198 },
    ],
    priceFrom: 379,
    keywords: ["sublingual tirzepatide", "compounded tirzepatide", "GLP-1 GIP weight loss", "tirzepatide no injection"],
  },

  // ── GLP-1 - Semaglutide + B12 Injectable ─────────────────────────────────

  {
    slug: "semaglutide-b12-injection",
    name: "Semaglutide + B12 Injection",
    seoName: "Compounded Semaglutide B12 Injection",
    category: "glp1", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Compounded injectable semaglutide with B12 - the most clinically studied GLP-1 delivery method.",
    longDescription: "Injectable semaglutide remains the most clinically studied delivery method for GLP-1 weight management. Our compounded formulation pairs semaglutide with B12 (cyanocobalamin) to support energy levels during caloric reduction. Weekly subcutaneous injection, prescribed and monitored by a licensed clinician.",
    benefits: ["Most clinically studied GLP-1 delivery method", "B12 supports energy during caloric reduction", "Weekly subcutaneous injection", "Personalized titration by a licensed clinician", "Ships from NABP-accredited compounding pharmacy"],
    directions: "Inject 25 units under the skin once weekly. Dose varies by strength - see your prescription.",
    refrigeration: "Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "1 mg/0.5mg B12 - 1 Month Supply",  mg: 1,  wizloUrl: W.SEMA_B12, priceMonthly: 349, priceQuarterly: 837 },
      { label: "2 mg/0.5mg B12 - 1 Month Supply",  mg: 2,  wizloUrl: W.SEMA_B12, priceMonthly: 349, priceQuarterly: 837 },
      { label: "4 mg/0.5mg B12 - 1 Month Supply",  mg: 4,  wizloUrl: W.SEMA_B12, priceMonthly: 349, priceQuarterly: 837 },
      { label: "6 mg/0.5mg B12 - 1 Month Supply",  mg: 6,  wizloUrl: W.SEMA_B12, priceMonthly: 349, priceQuarterly: 837 },
      { label: "10 mg/0.5mg B12 - 1 Month Supply", mg: 10, wizloUrl: W.SEMA_B12, priceMonthly: 349, priceQuarterly: 837 },
    ],
    priceFrom: 349,
    keywords: ["injectable semaglutide", "semaglutide B12", "compounded GLP-1 injection", "compounded semaglutide"],
  },

  // ── GLP-1 - Tirzepatide + B12 Injectable ─────────────────────────────────

  {
    slug: "tirzepatide-b12-injection",
    name: "Tirzepatide + B12 Injection",
    seoName: "Compounded Tirzepatide B12 Injection",
    category: "glp1", form: "injection", status: "active", hub: "hormones-peptides",
    shortDescription: "Compounded injectable tirzepatide with B12 - dual GIP/GLP-1 action with energy support.",
    longDescription: "Injectable tirzepatide combines dual GIP/GLP-1 receptor activation for stronger metabolic effects, paired with B12 in a compounded formulation. Weekly subcutaneous injection, prescribed and monitored by a licensed clinician with dose titration every 4 weeks.",
    benefits: ["Dual GIP + GLP-1 for stronger metabolic effect", "B12 supports energy during caloric reduction", "Weekly subcutaneous injection", "Personalized titration by a licensed clinician"],
    directions: "Inject 50 units under the skin once weekly. Dose varies by strength - see your prescription.",
    refrigeration: "Refrigerated", supplyDays: 84,
    disclaimerKey: "compounded_rx",
    doses: [
      { label: "5 mg/0.5mg B12 - 1 Month Supply",  mg: 5,  wizloUrl: W.TIRZ_B12, priceMonthly: 379, priceQuarterly: 910 },
      { label: "10 mg/0.5mg B12 - 1 Month Supply", mg: 10, wizloUrl: W.TIRZ_B12, priceMonthly: 379, priceQuarterly: 910 },
      { label: "15 mg/0.5mg B12 - 1 Month Supply", mg: 15, wizloUrl: W.TIRZ_B12, priceMonthly: 379, priceQuarterly: 910 },
      { label: "20 mg/0.5mg B12 - 1 Month Supply", mg: 20, wizloUrl: W.TIRZ_B12, priceMonthly: 499, priceQuarterly: 1198 },
      { label: "25 mg/0.5mg B12 - 1 Month Supply", mg: 25, wizloUrl: W.TIRZ_B12, priceMonthly: 499, priceQuarterly: 1198 },
      { label: "30 mg/0.5mg B12 - 1 Month Supply", mg: 30, wizloUrl: W.TIRZ_B12, priceMonthly: 499, priceQuarterly: 1198 },
    ],
    priceFrom: 379,
    keywords: ["injectable tirzepatide", "tirzepatide B12", "compounded GIP GLP-1 injection"],
  },

  // ── Regenerative (concierge-only) ─────────────────────────────────────────

  {
    slug: "whartons-jelly",
    name: "Wharton's Jelly Therapy",
    seoName: "Wharton's Jelly Mesenchymal Stem Cell Therapy",
    category: "peptide", form: "injection", status: "concierge_only", hub: "regenerative",
    shortDescription: "Concierge-only regenerative therapy. Consult required - never sold online.",
    longDescription: "Wharton's Jelly contains a high concentration of mesenchymal stem cells and growth factors. This therapy requires an in-person consult with our medical team. We do not sell stem cell therapy online.",
    benefits: ["High concentration of mesenchymal stem cells", "In-home concierge delivery available", "Physician-led care planning"],
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
    "Compounded medications are not FDA-approved drugs. They are prepared by licensed compounding pharmacies based on a clinician's prescription for an individual patient. Individual results vary. A medical evaluation is required to determine if this therapy is appropriate for you. Some uses discussed may be considered off-label. The FDA does not review or approve any compounded medications for safety or effectiveness.",
  supplement:
    "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
  regen_consult_only:
    "Regenerative therapies are provided as a concierge medical service following an in-person consultation. We do not sell stem cell or exosome products online.",
};
