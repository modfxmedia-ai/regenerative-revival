export interface Treatment {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  pageLink: string;
  medicalConditions: string[];
  keywords: string[];
}

export const treatments: Treatment[] = [
  {
    name: "Stem Cell Therapy",
    slug: "stem-cell-therapy",
    shortName: "Stem Cells",
    description: "Advanced stem cell therapy using mesenchymal stem cells to promote healing, reduce inflammation, and restore damaged tissues.",
    pageLink: "/stem-cell-therapy",
    medicalConditions: ["Chronic Pain", "Osteoarthritis", "Sports Injuries", "Joint Degeneration", "Tissue Damage"],
    keywords: ["stem cell therapy", "stem cell treatment", "mesenchymal stem cells", "MSC therapy"],
  },
  {
    name: "Wharton's Jelly Treatment",
    slug: "whartons-jelly-treatment",
    shortName: "Wharton's Jelly",
    description: "Wharton's Jelly contains a high concentration of mesenchymal stem cells and growth factors for enhanced tissue repair and regeneration.",
    pageLink: "/whartons-jelly",
    medicalConditions: ["Joint Pain", "Chronic Inflammation", "Cartilage Damage", "Tendon Injuries", "Degenerative Conditions"],
    keywords: ["Wharton's Jelly", "umbilical cord stem cells", "Wharton's Jelly therapy", "WJ-MSC"],
  },
  {
    name: "Exosome Therapy",
    slug: "exosome-therapy",
    shortName: "Exosomes",
    description: "Nano-sized vesicles derived from stem cells that carry therapeutic signals to damaged tissues for targeted regeneration and healing.",
    pageLink: "/why-exosomes",
    medicalConditions: ["Tissue Damage", "Inflammation", "Chronic Pain", "Skin Rejuvenation", "Hair Loss"],
    keywords: ["exosome therapy", "stem cell exosomes", "exosome treatment", "regenerative exosomes"],
  },
  {
    name: "Regenerative Medicine",
    slug: "regenerative-medicine",
    shortName: "Regenerative",
    description: "Comprehensive regenerative medicine treatments that harness the body's natural healing mechanisms for tissue repair and pain relief.",
    pageLink: "/services",
    medicalConditions: ["Chronic Pain", "Degenerative Diseases", "Sports Injuries", "Autoimmune Conditions", "Aging"],
    keywords: ["regenerative medicine", "regenerative therapy", "regenerative treatment", "tissue regeneration"],
  },
  {
    name: "Joint Pain Treatment",
    slug: "joint-pain-treatment",
    shortName: "Joint Pain",
    description: "Non-surgical joint pain treatment using stem cells and growth factors to repair cartilage, reduce inflammation, and restore mobility.",
    pageLink: "/stem-cell-therapy",
    medicalConditions: ["Osteoarthritis", "Rheumatoid Arthritis", "Knee Pain", "Hip Pain", "Shoulder Pain"],
    keywords: ["joint pain treatment", "joint pain relief", "non-surgical joint treatment", "joint regeneration"],
  },
  {
    name: "Chronic Pain Relief",
    slug: "chronic-pain-relief",
    shortName: "Pain Relief",
    description: "Advanced chronic pain relief through regenerative therapies that target the root cause of pain rather than masking symptoms.",
    pageLink: "/services",
    medicalConditions: ["Back Pain", "Neck Pain", "Neuropathy", "Fibromyalgia", "Chronic Inflammation"],
    keywords: ["chronic pain relief", "pain management", "non-surgical pain relief", "regenerative pain treatment"],
  },
  {
    name: "Sports Injury Recovery",
    slug: "sports-injury-recovery",
    shortName: "Sports Recovery",
    description: "Accelerated sports injury recovery using stem cell therapy and regenerative treatments to repair muscles, tendons, and ligaments.",
    pageLink: "/stem-cell-therapy",
    medicalConditions: ["ACL Injuries", "Rotator Cuff Tears", "Tennis Elbow", "Muscle Strains", "Ligament Sprains"],
    keywords: ["sports injury recovery", "sports medicine", "athletic recovery", "sports injury treatment"],
  },
  {
    name: "PRP Therapy",
    slug: "prp-therapy",
    shortName: "PRP",
    description: "Platelet-Rich Plasma therapy concentrates your body's own healing factors to accelerate tissue repair and reduce inflammation.",
    pageLink: "/services",
    medicalConditions: ["Tendinitis", "Muscle Injuries", "Joint Pain", "Hair Loss", "Chronic Wounds"],
    keywords: ["PRP therapy", "platelet-rich plasma", "PRP treatment", "PRP injections"],
  },
  {
    name: "Mobile Stem Cell Therapy",
    slug: "mobile-stem-cell-therapy",
    shortName: "Mobile Stem Cells",
    description: "Concierge in-home stem cell therapy delivered by a licensed clinician - the full regenerative protocol without leaving your home.",
    pageLink: "/stem-cell-therapy",
    medicalConditions: ["Joint Pain", "Osteoarthritis", "Sports Injuries", "Chronic Inflammation", "Mobility Issues"],
    keywords: ["mobile stem cell therapy", "in-home stem cell therapy", "at-home stem cell treatment", "concierge stem cell therapy"],
  },
  {
    name: "Concierge Regenerative Medicine",
    slug: "concierge-regenerative-medicine",
    shortName: "Concierge Regen",
    description: "White-glove regenerative medicine delivered in-home by a physician-led, NP-staffed team operating under Arora Health Group clinical oversight.",
    pageLink: "/concierge-care-model",
    medicalConditions: ["Chronic Pain", "Joint Degeneration", "Sports Injuries", "Recovery & Performance", "Longevity"],
    keywords: ["concierge regenerative medicine", "in-home regenerative medicine", "private regenerative care", "concierge medicine"],
  },
  {
    name: "Peptide Therapy",
    slug: "peptide-therapy",
    shortName: "Peptides",
    description: "Physician-supervised peptide therapy - BPC-157, GHK-Cu, PT-141, MK-677 and more - prescribed via telehealth and shipped from a compounding pharmacy.",
    pageLink: "/peptides",
    medicalConditions: ["Recovery", "Inflammation", "Sleep", "Sexual Health", "Longevity", "Muscle & Performance"],
    keywords: ["peptide therapy", "peptide treatment", "BPC-157", "GHK-Cu", "physician-supervised peptides"],
  },
  {
    name: "NAD+ Therapy",
    slug: "nad-therapy",
    shortName: "NAD+",
    description: "NAD+ therapy via injection or sublingual - supports cellular energy, cognitive function, and longevity. Prescribed via telehealth, shipped nationwide.",
    pageLink: "/nad",
    medicalConditions: ["Fatigue", "Cognitive Function", "Cellular Aging", "Recovery", "Longevity"],
    keywords: ["NAD+ therapy", "NAD therapy", "NAD injection", "NAD IV therapy", "at-home NAD"],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
