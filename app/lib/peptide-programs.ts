/**
 * Peptide Programs - solution-based category taxonomy.
 * Source: Regenerative Revival "Peptide Programs" one-pager (V2).
 *
 * This is the relational mapping that powers the productized
 * Hormones & Peptides experience: users pick a SOLUTION (category),
 * not a wall of products. Each peptide links to its product page.
 *
 * Pricing reflects the published one-pager (1-month / 3-month).
 */

export type PeptideTone =
  | "amethyst"
  | "lazuli"
  | "orchid"
  | "berge"
  | "midnight";

export interface Peptide {
  name: string;
  benefits: string[];
  priceMonthly: string;
  priceQuarterly: string;
  /** Slug on /hormones-peptides/[slug] - best-effort match; verify against DB. */
  slug?: string;
}

export interface PeptideCategory {
  id: string;
  title: string;
  blurb: string;
  tone: PeptideTone;
  peptides: Peptide[];
}

export const peptideCategories: PeptideCategory[] = [
  {
    id: "metabolic-reset",
    title: "Weight Management & Metabolic Health",
    blurb:
      "Support healthy weight loss, appetite regulation, and metabolic balance - sublingual or injectable GLP-1.",
    tone: "amethyst",
    peptides: [
      {
        name: "Sublingual Semaglutide",
        benefits: [
          "May support appetite control & cravings",
          "May promote healthy weight loss",
          "May improve blood sugar regulation",
        ],
        priceMonthly: "$379",
        priceQuarterly: "$910",
        slug: "sublingual-semaglutide",
      },
      {
        name: "GLP-1 Semaglutide + B12 Injection",
        benefits: [
          "Most clinically studied GLP-1 delivery",
          "May reduce appetite & cravings",
          "B12 supports energy during weight loss",
        ],
        priceMonthly: "$349",
        priceQuarterly: "$837",
        slug: "semaglutide-b12-injection",
      },
      {
        name: "Sublingual Tirzepatide",
        benefits: [
          "May enhance fat loss & appetite suppression",
          "May support blood sugar & insulin balance",
          "May promote sustained metabolic health",
        ],
        priceMonthly: "$379",
        priceQuarterly: "$910",
        slug: "sublingual-tirzepatide",
      },
      {
        name: "GLP-1 Tirzepatide + B12 Injection",
        benefits: [
          "Dual GIP + GLP-1 for stronger metabolic effect",
          "May reduce appetite & cravings",
          "B12 supports energy during weight loss",
        ],
        priceMonthly: "$379",
        priceQuarterly: "$910",
        slug: "tirzepatide-b12-injection",
      },
    ],
  },
  {
    id: "pain-recovery",
    title: "Pain & Recovery",
    blurb: "Support healing, reduce inflammation, and improve recovery.",
    tone: "berge",
    peptides: [
      {
        name: "BPC-157",
        benefits: [
          "May support recovery & healing",
          "May reduce inflammation",
          "May support gut & joint health",
        ],
        priceMonthly: "$229",
        priceQuarterly: "$550",
        slug: "bpc-157",
      },
    ],
  },
  {
    id: "sleep-recovery",
    title: "Sleep & Recovery Optimization",
    blurb: "Enhance sleep, recovery, and overall performance.",
    tone: "lazuli",
    peptides: [
      {
        name: "CJC-1295 / Ipamorelin",
        benefits: [
          "May enhance growth hormone release",
          "May improve sleep & recovery",
          "May support fat loss & muscle",
        ],
        priceMonthly: "$269",
        priceQuarterly: "$646",
        slug: "cjc-ipamorelin",
      },
    ],
  },
  {
    id: "body-sculpting",
    title: "Body Sculpting",
    blurb: "Target stubborn belly fat and improve body composition.",
    tone: "orchid",
    peptides: [
      {
        name: "Tesamorelin",
        benefits: [
          "May target stubborn visceral fat",
          "May support metabolic health",
          "May improve body composition",
        ],
        priceMonthly: "$229",
        priceQuarterly: "$550",
        slug: "tesamorelin",
      },
    ],
  },
  {
    id: "energy-vitality",
    title: "Energy & Vitality",
    blurb: "Boost cellular energy, mental clarity, and overall vitality.",
    tone: "amethyst",
    peptides: [
      {
        name: "NAD+",
        benefits: [
          "May support cellular energy",
          "May enhance mental clarity",
          "May promote healthy aging",
        ],
        priceMonthly: "$249",
        priceQuarterly: "$598",
        slug: "nad-plus",
      },
    ],
  },
  {
    id: "brain-stress",
    title: "Brain & Stress Support",
    blurb: "Support mood, focus, and stress resilience.",
    tone: "midnight",
    peptides: [
      {
        name: "Semax / Selank",
        benefits: [
          "Semax: May support focus, clarity, motivation",
          "Selank: May support calm, mood, anxiety relief",
        ],
        priceMonthly: "$249",
        priceQuarterly: "$598",
        slug: "semax-selank",
      },
    ],
  },
  {
    id: "advanced-recovery",
    title: "Advanced Recovery & Repair",
    blurb: "Support tissue repair, reduce inflammation, and accelerate recovery.",
    tone: "berge",
    peptides: [
      {
        name: "BPC-157 / GHK-Cu / KPV / TB-500",
        benefits: [
          "May support tissue repair & healing",
          "May reduce inflammation",
          "May accelerate recovery",
        ],
        priceMonthly: "$259",
        priceQuarterly: "$622",
        slug: "bpc-157-ghk-cu-kpv-tb500",
      },
      {
        name: "BPC-157 / KPV / TB-500",
        benefits: [
          "May enhance recovery & performance",
          "May reduce inflammation",
          "May support muscle, tendon & joint health",
        ],
        priceMonthly: "$249",
        priceQuarterly: "$598",
        slug: "bpc-157-kpv-tb500",
      },
      {
        name: "DSIP / BPC / CJC",
        benefits: [
          "May support deep sleep & recovery",
          "May enhance healing & regeneration",
          "May reduce pain & inflammation",
        ],
        priceMonthly: "$249",
        priceQuarterly: "$598",
        slug: "dsip-bpc-cjc",
      },
      {
        name: "BPC-157 / TB-500",
        benefits: [
          "May accelerate tissue repair & healing",
          "May reduce inflammation & pain",
          "May support muscle, tendon & joint recovery",
        ],
        priceMonthly: "$249",
        priceQuarterly: "$598",
        slug: "bpc-157-tb500",
      },
      {
        name: "DSIP",
        benefits: [
          "May support deep, restorative sleep",
          "May reduce stress & promote relaxation",
          "May enhance healing & hormonal balance",
        ],
        priceMonthly: "$199",
        priceQuarterly: "$478",
        slug: "dsip",
      },
    ],
  },
  {
    id: "performance-growth",
    title: "Performance & Growth Optimization",
    blurb:
      "Enhance performance, support growth hormone pathways, and optimize physical potential.",
    tone: "lazuli",
    peptides: [
      {
        name: "Sermorelin",
        benefits: [
          "May stimulate natural growth hormone",
          "May support lean muscle & recovery",
          "May enhance energy, sleep & vitality",
        ],
        priceMonthly: "$219",
        priceQuarterly: "$526",
        slug: "sermorelin",
      },
      {
        name: "IGF-LR3",
        benefits: [
          "May support muscle growth & strength",
          "May enhance recovery & performance",
          "May promote tissue & cell growth",
        ],
        priceMonthly: "$299",
        priceQuarterly: "$718",
      },
      {
        name: "Tesamorelin / Ipamorelin",
        benefits: [
          "May support growth hormone production",
          "May reduce visceral fat, improve composition",
          "May enhance recovery, energy & lean muscle",
        ],
        priceMonthly: "$269",
        priceQuarterly: "$646",
        slug: "tesamorelin-ipamorelin",
      },
      {
        name: "Gonadorelin",
        benefits: [
          "May support natural hormone production",
          "May enhance reproductive health",
          "May support vitality",
        ],
        priceMonthly: "$209",
        priceQuarterly: "$502",
        slug: "gonadorelin",
      },
    ],
  },
  {
    id: "longevity-cellular",
    title: "Longevity & Cellular Health",
    blurb: "Promote cellular health, support longevity, and optimize overall wellness.",
    tone: "orchid",
    peptides: [
      {
        name: "Epithalon",
        benefits: [
          "May support telomere health",
          "May promote cellular longevity",
          "May support healthy aging",
        ],
        priceMonthly: "$219",
        priceQuarterly: "$526",
        slug: "ghk-cu-epithalon",
      },
      {
        name: "GHK-Cu / Epithalon",
        benefits: [
          "May support skin rejuvenation",
          "May promote cellular repair",
          "May support anti-aging",
        ],
        priceMonthly: "$229",
        priceQuarterly: "$550",
        slug: "ghk-cu-epithalon",
      },
      {
        name: "GHK-Cu",
        benefits: [
          "May support skin rejuvenation & elasticity",
          "May promote cellular repair & regeneration",
          "May enhance anti-aging & wound healing",
        ],
        priceMonthly: "$209",
        priceQuarterly: "$502",
        slug: "ghk-cu",
      },
      {
        name: "MOTS-C",
        benefits: [
          "May support mitochondrial function",
          "May enhance energy metabolism",
          "May support metabolic health",
        ],
        priceMonthly: "$249",
        priceQuarterly: "$598",
        slug: "mots-c",
      },
    ],
  },
  {
    id: "cognitive-neuro",
    title: "Cognitive & Neuro Support",
    blurb: "Support cognitive function, mood, and mental clarity.",
    tone: "midnight",
    peptides: [
      {
        name: "Pinealon / PE22-28 / Selank",
        benefits: [
          "May support cognitive function",
          "May enhance mood & focus",
          "May promote mental clarity",
        ],
        priceMonthly: "$269",
        priceQuarterly: "$646",
        slug: "pinealon-pe22-28-selank",
      },
    ],
  },
  {
    id: "immune-defense",
    title: "Immune & Defense Support",
    blurb: "Strengthen immune function and support the body's natural defenses.",
    tone: "berge",
    peptides: [
      {
        name: "Thymosin A-1",
        benefits: [
          "May support immune system function",
          "May enhance immune response",
          "May support overall wellness",
        ],
        priceMonthly: "$229",
        priceQuarterly: "$550",
        slug: "thymosin-a1",
      },
      {
        name: "LL-37",
        benefits: [
          "May promote antimicrobial defense",
          "May support neuroprotection",
          "May enhance immune response",
        ],
        priceMonthly: "$229",
        priceQuarterly: "$550",
      },
    ],
  },
  {
    id: "sexual-health",
    title: "Sexual Health & Vitality",
    blurb: "Support libido, sexual wellness, hormone balance, and intimacy.",
    tone: "orchid",
    peptides: [
      {
        name: "PT-141",
        benefits: [
          "May enhance libido & sexual arousal",
          "May support wellness for men & women",
          "May promote intimacy & desire",
        ],
        priceMonthly: "$209",
        priceQuarterly: "$502",
        slug: "pt-141",
      },
      {
        name: "Kisspeptin",
        benefits: [
          "May support hormone balance",
          "May enhance libido & sexual function",
          "May support reproductive health",
        ],
        priceMonthly: "$219",
        priceQuarterly: "$526",
      },
    ],
  },
  {
    id: "detox-metabolic",
    title: "Detox & Metabolic Support",
    blurb: "Support detoxification pathways and optimize metabolic function.",
    tone: "lazuli",
    peptides: [
      {
        name: "Glutathione",
        benefits: [
          "May act as a powerful antioxidant",
          "May support detoxification",
          "May promote immune health",
        ],
        priceMonthly: "$179",
        priceQuarterly: "$430",
        slug: "glutathione",
      },
      {
        name: "LIPO-B",
        benefits: [
          "May support fat metabolism",
          "May aid in fat breakdown",
          "May support energy production",
        ],
        priceMonthly: "$149",
        priceQuarterly: "$358",
        slug: "lipo-b",
      },
    ],
  },
];

/** Tone → gradient + accent classes for the elevated card treatment. */
export const toneStyles: Record<
  PeptideTone,
  { frame: string; chip: string; accent: string; glow: string }
> = {
  amethyst: {
    frame: "from-[#6762AF] to-[#4F4A8E]",
    chip: "bg-[#6762AF]/10 text-[#4F4A8E] border-[#6762AF]/20",
    accent: "text-[#6762AF]",
    glow: "bg-[#6762AF]/20",
  },
  lazuli: {
    frame: "from-[#71A7F5] to-[#345691]",
    chip: "bg-[#71A7F5]/10 text-[#345691] border-[#71A7F5]/25",
    accent: "text-[#345691]",
    glow: "bg-[#71A7F5]/20",
  },
  orchid: {
    frame: "from-[#6F4A7A] to-[#3F2549]",
    chip: "bg-[#583563]/10 text-[#583563] border-[#583563]/20",
    accent: "text-[#583563]",
    glow: "bg-[#583563]/20",
  },
  berge: {
    frame: "from-[#345691] to-[#021E3C]",
    chip: "bg-[#345691]/10 text-[#345691] border-[#345691]/20",
    accent: "text-[#345691]",
    glow: "bg-[#345691]/20",
  },
  midnight: {
    frame: "from-[#2D1A45] to-[#1A1F30]",
    chip: "bg-[#1A1F30]/8 text-[#1A1F30] border-[#1A1F30]/15",
    accent: "text-[#1A1F30]",
    glow: "bg-[#1A1F30]/15",
  },
};
