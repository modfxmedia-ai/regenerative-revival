import {
  Dna,
  Droplets,
  Orbit,
  Stethoscope,
  Sparkles,
  Info,
  User,
  Star,
  FlaskConical,
  HeartPulse,
  Scale,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type DropdownItem = {
  label: string;
  href: string;
  desc: string;
  icon: LucideIcon;
};

export type Featured = {
  title: string;
  desc: string;
  href: string;
  cta: string;
  frame: string;
};

export type DropMenu = {
  align: "left" | "right";
  items: DropdownItem[];
  featured: Featured;
};

export const regenerativeDropdown: DropMenu = {
  align: "left",
  items: [
    { label: "Stem Cell Therapy", href: "/stem-cell-therapy", desc: "In-home Wharton's Jelly regenerative care", icon: Dna },
    { label: "Wharton's Jelly", href: "/whartons-jelly", desc: "Source, science, and how it's delivered", icon: Droplets },
    { label: "Why Exosomes", href: "/why-exosomes", desc: "The signaling layer that drives repair", icon: Orbit },
    { label: "Concierge Care Model", href: "/concierge-care-model", desc: "NP-led, physician-overseen, in your home", icon: Stethoscope },
  ],
  featured: {
    title: "Not sure which therapy fits?",
    desc: "Take the 2-minute quiz and we'll route you to the right protocol and clinician.",
    href: "/consult-router",
    cta: "Take The Quiz",
    frame: "from-[#6762AF] via-[#583563] to-[#345691]",
  },
};

/** Most-prescribed peptides — nav dropdown (per client Loom / V2 change request). */
export const peptidesDropdown: DropMenu = {
  align: "left",
  items: [
    { label: "BPC-157", href: "/hormones-peptides/bpc-157", desc: "Recovery, tissue repair & gut support", icon: FlaskConical },
    { label: "Semaglutide — Sublingual", href: "/hormones-peptides/sublingual-semaglutide", desc: "GLP-1 weight management — no needles", icon: Scale },
    { label: "Semaglutide — GLP-1 Injection", href: "/hormones-peptides/semaglutide-b12-injection", desc: "Injectable GLP-1 + B12 for weight loss", icon: Scale },
    { label: "Tirzepatide — Sublingual", href: "/hormones-peptides/sublingual-tirzepatide", desc: "Dual GIP/GLP-1 support — no needles", icon: Scale },
    { label: "Tirzepatide — GLP-1 Injection", href: "/hormones-peptides/tirzepatide-b12-injection", desc: "Injectable dual GIP/GLP-1 + B12", icon: Scale },
    { label: "CJC-1295 / Ipamorelin", href: "/hormones-peptides/cjc-ipamorelin", desc: "Sleep, recovery & body composition", icon: Zap },
    { label: "GHK-Cu", href: "/hormones-peptides/ghk-cu", desc: "Skin rejuvenation & cellular repair", icon: Sparkles },
    { label: "All Peptide Programs", href: "/peptides", desc: "Browse by goal — weight, recovery, longevity", icon: FlaskConical },
  ],
  featured: {
    title: "Not sure which peptide fits?",
    desc: "Pick a goal — recovery, weight, sleep, longevity — and we'll show the protocols our clinicians prescribe.",
    href: "/peptides",
    cta: "Browse Programs",
    frame: "from-[#345691] via-[#6762AF] to-[#583563]",
  },
};

export const aboutDropdown: DropMenu = {
  align: "right",
  items: [
    { label: "About Us", href: "/about", desc: "Our mission, team & story", icon: Info },
    { label: "Founder — Seth Berge", href: "/about/founder", desc: "Why Regenerative Revival exists", icon: User },
    { label: "Why We're Different", href: "/about/why-were-different", desc: "What sets Regenerative Revival apart", icon: Sparkles },
    { label: "Testimonials", href: "/testimonials", desc: "Real results from real patients", icon: Star },
  ],
  featured: {
    title: "One medical team. One plan.",
    desc: "Physician-led, NP-delivered care coordinated under Arora Health Group.",
    href: "/concierge-care-model",
    cta: "How It Works",
    frame: "from-[#345691] via-[#4F4A8E] to-[#583563]",
  },
};

export type NavLink = {
  label: string;
  href: string;
  dropdown?: DropMenu;
};

export const navLinks: NavLink[] = [
  { label: "Regenerative", href: "/stem-cell-therapy", dropdown: regenerativeDropdown },
  { label: "Hormones", href: "/hormones" },
  { label: "Peptides", href: "/peptides", dropdown: peptidesDropdown },
  { label: "NAD+", href: "/nad" },
  { label: "For Providers", href: "/for-providers" },
  { label: "About", href: "/about", dropdown: aboutDropdown },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

/** Hormone program cards for /hormones hub. */
export const hormonePrograms = [
  {
    title: "TRT — Testosterone Optimization",
    desc: "Bioidentical testosterone replacement for men — labs reviewed, dosing adjusted, shipped to your door.",
    href: "/consult-router",
    icon: HeartPulse,
    frame: "from-[#345691] to-[#021E3C]",
  },
  {
    title: "HRT — Women's Hormone Therapy",
    desc: "BHRT for peri-menopause, post-menopause, and women's hormone optimization through telehealth.",
    href: "/consult-router",
    icon: Sparkles,
    frame: "from-[#6762AF] to-[#583563]",
  },
  {
    title: "Thyroid & Metabolic Support",
    desc: "Clinician-led protocols for energy, metabolism, and hormone balance — reviewed against your labs.",
    href: "/consult-router",
    icon: Zap,
    frame: "from-[#71A7F5] to-[#345691]",
  },
];
