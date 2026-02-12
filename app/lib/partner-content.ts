import type { Location } from "./locations";

export interface PartnerService {
  name: string;
  slug: string;
  shortName: string;
  description: string;
  keywords: string[];
}

export const partnerServices: PartnerService[] = [
  {
    name: "Stem Cell Therapy Provider",
    slug: "stem-cell-provider",
    shortName: "Stem Cell Provider",
    description: "Partner with Regenerative Revival to offer stem cell therapy at your practice with full support, training, and revenue sharing.",
    keywords: ["stem cell provider", "buy stem cells", "stem cell wholesale", "stem cell partnership"],
  },
  {
    name: "Regenerative Medicine Partnership",
    slug: "regenerative-medicine-partner",
    shortName: "Regen Partner",
    description: "Join our network of regenerative medicine providers and add cutting-edge treatments to your practice with zero upfront risk.",
    keywords: ["regenerative medicine partner", "regenerative medicine practice", "regen med partnership"],
  },
  {
    name: "Wharton's Jelly Supplier",
    slug: "whartons-jelly-supplier",
    shortName: "WJ Supplier",
    description: "Access premium Wharton's Jelly products from accredited tissue banks through our wholesale supply and JV partnership program.",
    keywords: ["buy Wharton's Jelly", "Wharton's Jelly wholesale", "WJ supplier", "Wharton's Jelly for practices"],
  },
  {
    name: "Exosome Therapy Provider",
    slug: "exosome-therapy-provider",
    shortName: "Exosome Provider",
    description: "Become an exosome therapy provider in your area with our turnkey integration program, training, and ongoing clinical support.",
    keywords: ["exosome therapy provider", "buy exosomes", "exosome wholesale", "exosome partnership"],
  },
];

// ─── B2B Intro Templates ───

const partnerIntros = [
  (s: PartnerService, l: Location) =>
    `Are you a medical practice or healthcare business in ${l.city}, ${l.state} looking to add regenerative medicine to your service offerings? Regenerative Revival's ${s.shortName} program gives ${l.metro} area practices a turnkey path to offering ${s.name.toLowerCase()} services with full support, training, and a competitive revenue-sharing model. With a growing population of ${l.population} residents and increasing demand for non-surgical treatment options, ${l.city} represents a significant opportunity for practices ready to expand into regenerative medicine. Our JV partnership eliminates the complexity of sourcing products, navigating compliance, and building protocols from scratch — we handle it all so you can focus on patient care.`,

  (s: PartnerService, l: Location) =>
    `The demand for regenerative medicine in ${l.city}, ${l.state} is growing rapidly, and practices that move early are capturing significant market share. Regenerative Revival's ${s.shortName} partnership program is designed specifically for ${l.metro} area medical practices, clinics, and healthcare businesses that want to offer cutting-edge regenerative treatments without the overhead of building a program from the ground up. Our JV model includes premium product supply from accredited tissue banks, comprehensive staff training, marketing support, and a revenue-sharing structure that aligns our success with yours. With ${l.population}+ potential patients in the ${l.city} area, the opportunity is substantial.`,

  (s: PartnerService, l: Location) =>
    `${l.city}, ${l.state} healthcare providers are discovering that regenerative medicine isn't just the future — it's the present. Regenerative Revival's ${s.shortName} program empowers ${l.metro} area practices to offer ${s.name.toLowerCase()} services through a proven JV partnership model. We provide everything you need: FDA-compliant products from accredited tissue banks, hands-on clinical training for your team, patient education materials, marketing support, and ongoing clinical guidance. Our revenue-sharing model means zero upfront product costs and aligned incentives. For practices serving ${l.city}'s ${l.population} residents, this is an opportunity to differentiate your practice and serve patients who are actively seeking non-surgical alternatives.`,
];

export function generatePartnerIntro(service: PartnerService, location: Location): string {
  const idx = hashCode(`${service.slug}-${location.slug}-pintro`) % partnerIntros.length;
  return partnerIntros[idx](service, location);
}

// ─── B2B Benefit Sections ───

const partnerBenefitBlocks = [
  (s: PartnerService, l: Location) => ({
    heading: `Revenue Sharing Model for ${l.city} Practices`,
    content: `Our JV partnership is built on a competitive revenue-sharing model that eliminates upfront product costs for ${l.city} practices. You provide the patients and clinical expertise; we provide the products, training, and support. Revenue is shared on the back end, meaning your practice generates income from day one without significant capital investment. This model has proven successful for practices across the country, and ${l.metro} area providers are seeing strong returns as patient demand for regenerative treatments continues to grow.`,
  }),
  (s: PartnerService, l: Location) => ({
    heading: `Premium Product Supply & Compliance`,
    content: `Regenerative Revival sources all products from AATB-accredited tissue banks with full chain-of-custody documentation. Our ${l.city} partner practices receive FDA-compliant regenerative products including Wharton's Jelly MSCs, exosomes, and growth factor preparations. We handle all logistics — from cold-chain shipping to inventory management — so your ${l.state} practice never has to worry about product sourcing, storage, or compliance. Every product comes with complete documentation for your records and patient transparency.`,
  }),
  (s: PartnerService, l: Location) => ({
    heading: `Training & Clinical Support`,
    content: `When you join our ${s.shortName} program in ${l.city}, your entire clinical team receives comprehensive training on regenerative medicine protocols, patient selection criteria, treatment administration, and post-procedure care. Our clinical support team is available for ongoing consultation, case review, and protocol updates. We also provide continuing education resources to keep your ${l.metro} area practice at the forefront of regenerative science. Training can be conducted on-site at your ${l.city} location or through our virtual training platform.`,
  }),
  (s: PartnerService, l: Location) => ({
    heading: `Marketing & Patient Acquisition`,
    content: `We don't just supply products — we help ${l.city} practices attract patients. Our partnership includes co-branded marketing materials, patient education content, digital marketing templates, and referral program frameworks designed for the ${l.metro} market. With ${l.population}+ residents in ${l.city} alone, there's a substantial addressable market for regenerative treatments. Our marketing team can also provide guidance on local SEO, social media strategy, and community outreach to help your practice become the go-to regenerative medicine provider in ${l.state}.`,
  }),
  (s: PartnerService, l: Location) => ({
    heading: `Why ${l.city} Practices Are Adding Regenerative Medicine`,
    content: `Healthcare practices in ${l.city}, ${l.state} are adding regenerative medicine for several compelling reasons: growing patient demand for non-surgical alternatives, strong revenue potential with minimal overhead, differentiation from competing practices in the ${l.metro} area, and the ability to offer cutting-edge treatments that genuinely improve patient outcomes. The regenerative medicine market is projected to grow significantly over the next decade, and ${l.city} practices that establish themselves now will be well-positioned to capture that growth.`,
  }),
];

export function generatePartnerBenefits(service: PartnerService, location: Location): { heading: string; content: string }[] {
  const seed = hashCode(`${service.slug}-${location.slug}-pben`);
  const count = 3;
  const selected: number[] = [];
  for (let i = 0; i < count; i++) {
    let idx = (seed + i * 5) % partnerBenefitBlocks.length;
    while (selected.includes(idx)) idx = (idx + 1) % partnerBenefitBlocks.length;
    selected.push(idx);
  }
  return selected.map((idx) => partnerBenefitBlocks[idx](service, location));
}

// ─── B2B FAQ Pool ───

const partnerFaqPool = [
  (s: PartnerService, l: Location) => ({
    question: `How does the revenue sharing model work for ${l.city} practices?`,
    answer: `Our JV partnership uses a back-end revenue sharing model. Your ${l.city} practice provides the clinical setting and patient relationships, while Regenerative Revival supplies the products, training, and support. Revenue from treatments is shared according to our partnership agreement, with no upfront product costs to your practice. This means you can start offering ${s.name.toLowerCase()} services immediately with minimal financial risk.`,
  }),
  (s: PartnerService, l: Location) => ({
    question: `What type of practices can partner with Regenerative Revival in ${l.state}?`,
    answer: `We partner with a wide range of healthcare practices in ${l.state} including orthopedic clinics, pain management centers, sports medicine practices, chiropractic offices, medical spas, primary care practices, and wellness centers. If your ${l.city} practice serves patients who could benefit from regenerative treatments, we'd love to discuss how our ${s.shortName} program can work for you.`,
  }),
  (s: PartnerService, l: Location) => ({
    question: `What training is provided for our ${l.city} staff?`,
    answer: `Our comprehensive training program covers regenerative medicine fundamentals, product handling and administration protocols, patient selection criteria, treatment planning, and post-procedure care. Training is available on-site at your ${l.city} location or through our virtual platform. We also provide ongoing clinical support, case consultations, and continuing education to keep your team current with the latest advances in regenerative medicine.`,
  }),
  (s: PartnerService, l: Location) => ({
    question: `Are the products FDA compliant?`,
    answer: `Yes, all regenerative products supplied through our ${s.shortName} program are FDA-compliant and sourced from AATB-accredited tissue banks. Every product comes with full chain-of-custody documentation, testing certificates, and compliance records. We take regulatory compliance seriously and ensure that our ${l.city} partner practices have complete documentation for every product used in patient treatments.`,
  }),
  (s: PartnerService, l: Location) => ({
    question: `How quickly can our ${l.city} practice start offering treatments?`,
    answer: `Most ${l.metro} area practices can begin offering regenerative treatments within 2-4 weeks of signing our partnership agreement. This timeline includes staff training, product delivery, protocol setup, and marketing material preparation. Our onboarding team works closely with your ${l.city} practice to ensure a smooth launch and strong start. We've streamlined the process so you can start generating revenue quickly.`,
  }),
  (s: PartnerService, l: Location) => ({
    question: `What ongoing support does Regenerative Revival provide?`,
    answer: `Our support for ${l.city} partner practices is comprehensive and ongoing. This includes clinical consultation for complex cases, regular product supply and inventory management, marketing support and patient education materials, continuing education and protocol updates, dedicated account management, and access to our network of regenerative medicine practitioners. We're invested in your success because our revenue-sharing model means we grow together.`,
  }),
];

export function generatePartnerFAQs(service: PartnerService, location: Location): { question: string; answer: string }[] {
  const seed = hashCode(`${service.slug}-${location.slug}-pfaq`);
  const count = 5;
  const selected: number[] = [];
  for (let i = 0; i < count; i++) {
    let idx = (seed + i * 3) % partnerFaqPool.length;
    while (selected.includes(idx)) idx = (idx + 1) % partnerFaqPool.length;
    selected.push(idx);
  }
  return selected.map((idx) => partnerFaqPool[idx](service, location));
}

export function getPartnerServiceBySlug(slug: string): PartnerService | undefined {
  return partnerServices.find((s) => s.slug === slug);
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash);
}
