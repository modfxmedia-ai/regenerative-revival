import type { Location } from "./locations";
import type { Treatment } from "./treatments";

// ─── Intro Paragraph Templates ───
// Each template produces a unique 150-200 word intro based on treatment + location

const introTemplates = [
  (t: Treatment, l: Location) =>
    `If you're searching for ${t.name.toLowerCase()} in ${l.city}, ${l.state}, you've come to the right place. Regenerative Revival brings advanced regenerative medicine to the ${l.metro} area, serving a community of over ${l.population} residents with cutting-edge treatments designed to promote natural healing. Our ${t.shortName.toLowerCase()} treatments use the latest advances in regenerative science to help patients overcome chronic pain, recover from injuries, and restore their quality of life — all without invasive surgery. Whether you're dealing with joint pain, sports injuries, or degenerative conditions, our team of licensed practitioners in ${l.city} is ready to create a personalized treatment plan tailored to your specific needs. We believe everyone in the ${l.metro} area deserves access to the most advanced healing therapies available today.`,

  (t: Treatment, l: Location) =>
    `Residents of ${l.city}, ${l.state} now have access to world-class ${t.name.toLowerCase()} right in the ${l.metro} area. At Regenerative Revival, we specialize in non-invasive regenerative treatments that harness your body's natural ability to heal and repair damaged tissues. Our ${l.city} patients benefit from the same advanced protocols used by elite athletes and leading medical centers across the country. With a population of ${l.population}, ${l.city} is home to thousands of people living with chronic pain, joint issues, and injuries that could benefit from ${t.shortName.toLowerCase()} treatments. Our approach goes beyond symptom management — we target the root cause of your condition using scientifically backed regenerative therapies. From your initial consultation to your follow-up care, our team provides comprehensive support throughout your healing journey.`,

  (t: Treatment, l: Location) =>
    `${l.city}, ${l.state} is quickly becoming a hub for advanced healthcare, and ${t.name.toLowerCase()} is at the forefront of that transformation. Regenerative Revival proudly serves the ${l.metro} community with innovative treatments that promote tissue repair, reduce inflammation, and accelerate recovery. Our patients in ${l.city} range from active professionals and athletes to seniors seeking relief from degenerative conditions — all united by a desire for effective, non-surgical solutions. With over ${l.population} people in the area, the demand for regenerative medicine continues to grow as more ${l.city} residents discover the benefits of ${t.shortName.toLowerCase()} treatments. Our licensed practitioners combine clinical expertise with compassionate care to deliver results that make a real difference in your daily life.`,

  (t: Treatment, l: Location) =>
    `Looking for effective ${t.name.toLowerCase()} in the ${l.metro} area? Regenerative Revival offers ${l.city}, ${l.state} residents a proven path to pain relief and tissue regeneration without surgery or prolonged medication use. Our regenerative medicine protocols leverage the power of ${t.shortName.toLowerCase()} to stimulate your body's own healing response, targeting damaged tissues at the cellular level. Serving a community of ${l.population}+ residents, we understand that ${l.city} patients need treatments that fit their active lifestyles. That's why our approach is minimally invasive with minimal downtime, allowing you to get back to the activities you love. From consultation through recovery, our team is committed to providing the highest standard of regenerative care available in ${l.state}.`,
];

export function generateIntro(treatment: Treatment, location: Location): string {
  const idx = hashCode(`${treatment.slug}-${location.slug}-intro`) % introTemplates.length;
  return introTemplates[idx](treatment, location);
}

// ─── Section Content Blocks ───

const benefitBlocks = [
  (t: Treatment, l: Location) => ({
    heading: `Why Choose ${t.name} in ${l.city}?`,
    content: `${t.name} offers ${l.city} residents a non-surgical alternative to traditional pain management. Unlike conventional treatments that rely on medication or invasive procedures, ${t.shortName.toLowerCase()} works by stimulating your body's natural repair mechanisms. This means faster recovery times, reduced risk of complications, and long-lasting results that address the underlying cause of your condition — not just the symptoms. Our ${l.city} clinic uses only FDA-compliant products sourced from accredited tissue banks, ensuring the highest safety and quality standards for every patient.`,
  }),
  (t: Treatment, l: Location) => ({
    heading: `How ${t.name} Works`,
    content: `${t.name} involves the application of regenerative biological materials to damaged or degenerated tissues. These materials contain powerful growth factors, cytokines, and signaling molecules that activate your body's healing cascade. When applied to the treatment area, they recruit your own stem cells to the site of injury, promote new blood vessel formation, reduce chronic inflammation, and stimulate the regeneration of cartilage, tendons, ligaments, and other soft tissues. For ${l.city} patients, this translates to meaningful pain relief and improved function — often within weeks of treatment.`,
  }),
  (t: Treatment, l: Location) => ({
    heading: `Wellness Areas We Support in ${l.city}`,
    content: `Our ${t.name.toLowerCase()} protocols in ${l.city}, ${l.state} support a wide range of wellness goals including ${t.medicalConditions.join(", ")}. Many of our ${l.metro} area clients come to us after exhausting conventional options — and they're often amazed by what's possible. Whether you're an athlete looking to bounce back from a sports injury, a professional managing repetitive strain, or simply someone who wants to feel better and move more freely, our personalized approach helps you find the right protocol for your unique situation.`,
  }),
  (t: Treatment, l: Location) => ({
    heading: `What to Expect During Your ${l.city} Consultation`,
    content: `Your journey begins with a comprehensive consultation at our ${l.city} location. During this visit, our medical team will review your complete medical history, perform a thorough physical examination, and discuss your health goals. We'll explain how ${t.name.toLowerCase()} can address your specific condition, outline the treatment process, and answer all your questions. Most ${t.shortName.toLowerCase()} procedures take less than an hour, and many patients return to their normal activities the same day. We'll also develop a personalized follow-up plan to monitor your progress and optimize your results.`,
  }),
  (t: Treatment, l: Location) => ({
    heading: `The Science Behind ${t.name}`,
    content: `${t.name} is grounded in decades of scientific research into cellular biology and tissue engineering. The regenerative materials we use contain mesenchymal stem cells (MSCs), growth factors like VEGF and TGF-β, and anti-inflammatory cytokines that work together to create an optimal healing environment. Published studies have demonstrated significant improvements in pain scores, joint function, and tissue quality following regenerative treatments. Our ${l.city} practitioners stay current with the latest research to ensure ${l.metro} area patients receive evidence-based care that reflects the cutting edge of regenerative science.`,
  }),
  (t: Treatment, l: Location) => ({
    heading: `Benefits for ${l.city} Patients`,
    content: `${l.city} residents choosing ${t.name.toLowerCase()} at Regenerative Revival enjoy several key advantages: non-surgical treatment with minimal downtime, no general anesthesia required, reduced dependence on pain medications, treatment that addresses root causes rather than symptoms, and personalized protocols designed for your unique condition. Our patients in the ${l.metro} area consistently report significant improvements in pain levels, mobility, and overall quality of life. With a 98% patient satisfaction rate, we're proud to be a trusted provider of regenerative medicine in ${l.state}.`,
  }),
];

export function generateBenefitSections(treatment: Treatment, location: Location): { heading: string; content: string }[] {
  const seed = hashCode(`${treatment.slug}-${location.slug}-benefits`);
  const count = 3;
  const selected: number[] = [];
  for (let i = 0; i < count; i++) {
    let idx = (seed + i * 7) % benefitBlocks.length;
    while (selected.includes(idx)) idx = (idx + 1) % benefitBlocks.length;
    selected.push(idx);
  }
  return selected.map((idx) => benefitBlocks[idx](treatment, location));
}

// ─── FAQ Pools ───

const faqPool = [
  (t: Treatment, l: Location) => ({
    question: `What is ${t.name.toLowerCase()} and how does it work?`,
    answer: `${t.name} is a form of regenerative medicine that uses ${t.description.charAt(0).toLowerCase() + t.description.slice(1)} For patients in ${l.city}, ${l.state}, this means access to cutting-edge treatments that promote natural healing without surgery. The procedure involves applying regenerative biological materials to the treatment area, where they stimulate your body's own repair mechanisms to regenerate damaged tissues, reduce inflammation, and relieve pain.`,
  }),
  (t: Treatment, l: Location) => ({
    question: `Is ${t.name.toLowerCase()} safe?`,
    answer: `Yes, ${t.name.toLowerCase()} has a strong safety profile. All regenerative products used at our ${l.city} clinic come from accredited tissue banks and undergo rigorous testing for safety and quality. The treatments are minimally invasive, require no general anesthesia, and carry significantly lower risk than surgical alternatives. Our licensed practitioners in ${l.state} follow strict FDA compliance protocols to ensure patient safety at every step.`,
  }),
  (t: Treatment, l: Location) => ({
    question: `How much does ${t.name.toLowerCase()} cost in ${l.city}?`,
    answer: `The cost of ${t.name.toLowerCase()} in ${l.city}, ${l.state} varies depending on the specific condition being treated, the number of treatment sessions needed, and the complexity of your case. During your free consultation, our team will provide a detailed cost breakdown and discuss available payment options. We believe advanced regenerative care should be accessible, and we work with patients to find solutions that fit their budget.`,
  }),
  (t: Treatment, l: Location) => ({
    question: `How long does it take to see results from ${t.name.toLowerCase()}?`,
    answer: `Most ${l.city} patients begin noticing improvements within 2-6 weeks after their ${t.shortName.toLowerCase()} treatment, with continued progress over the following 3-6 months as tissue regeneration continues. The timeline varies based on the condition being treated, its severity, and individual healing factors. Some patients experience relief within days, while more complex conditions may require additional time and follow-up treatments for optimal results.`,
  }),
  (t: Treatment, l: Location) => ({
    question: `Who is a good candidate for ${t.name.toLowerCase()} in ${l.city}?`,
    answer: `Good candidates for ${t.name.toLowerCase()} include individuals experiencing ${t.medicalConditions.slice(0, 3).join(", ")}, or other conditions that haven't responded well to conventional treatments. Whether you're an active adult, an athlete, or a senior in the ${l.metro} area, our team will evaluate your specific situation during a consultation to determine if ${t.shortName.toLowerCase()} is the right approach for you. Most patients who are in generally good health are excellent candidates.`,
  }),
  (t: Treatment, l: Location) => ({
    question: `Do you offer free consultations in ${l.city}?`,
    answer: `Yes, Regenerative Revival offers complimentary consultations for ${l.city}, ${l.state} residents interested in ${t.name.toLowerCase()}. During your consultation, our medical team will evaluate your condition, discuss treatment options, explain the process in detail, and answer all your questions. There's no obligation — we want you to have all the information you need to make an informed decision about your health. Call us at (651) 371-8668 to schedule your free consultation today.`,
  }),
  (t: Treatment, l: Location) => ({
    question: `How is ${t.name.toLowerCase()} different from surgery?`,
    answer: `Unlike surgical procedures, ${t.name.toLowerCase()} is minimally invasive and typically completed in under an hour at our ${l.city} clinic. There's no general anesthesia, no hospital stay, and minimal recovery time — most patients return to normal activities the same day. While surgery carries risks of infection, scarring, and lengthy rehabilitation, ${t.shortName.toLowerCase()} works with your body's natural healing processes to repair and regenerate tissues from within, offering a safer alternative with fewer complications.`,
  }),
  (t: Treatment, l: Location) => ({
    question: `Can ${t.name.toLowerCase()} help with my specific condition?`,
    answer: `${t.name} is effective for a wide range of conditions including ${t.medicalConditions.join(", ")}. However, every patient is unique, and the best way to determine if ${t.shortName.toLowerCase()} is right for your specific situation is through a personalized consultation at our ${l.city} location. Our medical team will thoroughly evaluate your condition, review your medical history, and recommend the most appropriate treatment approach for your needs.`,
  }),
];

export function generateFAQs(treatment: Treatment, location: Location): { question: string; answer: string }[] {
  const seed = hashCode(`${treatment.slug}-${location.slug}-faq`);
  const count = 5;
  const selected: number[] = [];
  for (let i = 0; i < count; i++) {
    let idx = (seed + i * 3) % faqPool.length;
    while (selected.includes(idx)) idx = (idx + 1) % faqPool.length;
    selected.push(idx);
  }
  return selected.map((idx) => faqPool[idx](treatment, location));
}

// ─── Gov Resource Links ───

export const govResources = [
  { title: "NIH: Stem Cell Information", url: "https://stemcells.nih.gov/" },
  { title: "FDA: Regenerative Medicine", url: "https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/regenerative-medicine-advanced-therapy-designation" },
  { title: "NIH: Mesenchymal Stem Cells", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3902161/" },
  { title: "CDC: Chronic Pain", url: "https://www.cdc.gov/chronic-pain/" },
  { title: "NIH: Regenerative Medicine", url: "https://www.nibib.nih.gov/science-education/science-topics/tissue-engineering-and-regenerative-medicine" },
  { title: "FDA: Human Cells, Tissues, and Cellular Products", url: "https://www.fda.gov/vaccines-blood-biologics/tissue-tissue-products" },
];

export function getGovResources(treatment: Treatment): typeof govResources {
  const seed = hashCode(treatment.slug);
  const count = 3;
  const selected: number[] = [];
  for (let i = 0; i < count; i++) {
    let idx = (seed + i * 2) % govResources.length;
    while (selected.includes(idx)) idx = (idx + 1) % govResources.length;
    selected.push(idx);
  }
  return selected.map((idx) => govResources[idx]);
}

// ─── Hash utility for deterministic selection ───

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Math.abs(hash);
}
