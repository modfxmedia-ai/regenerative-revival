import AboutHero from "./components/AboutHero";
import OurGuarantee from "./components/OurGuarantee";
import HowItWorks from "./components/HowItWorks";
import FounderSection from "./components/FounderSection";
import TeamSection from "./components/TeamSection";
import CTABanner from "./components/CTABanner";
import QuizCTA from "../components/QuizCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";

/**
 * Primary keyword: "regenerative medicine doctor" / "about us"
 * High-traffic page: 597 clicks, 9,508 impressions (GSC 3-month data)
 */
export const metadata = generatePageMetadata({
  title: "About — Physician-Led Regenerative Medicine",
  description:
    "Meet founder Seth Berge and the physician-led team delivering regenerative medicine, peptides, and NAD+ care nationwide.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ title: "About Regenerative Revival", description: "Learn about our team of doctors, nurse practitioners, and wellness advocates dedicated to advanced regenerative therapies.", url: "/about" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://regenerativerevival.com" }, { name: "About", url: "https://regenerativerevival.com/about" }])} />
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <AboutHero />
      <HowItWorks />
      <OurGuarantee />
      <FounderSection />
      {/* <CTABanner /> */}
      <TeamSection />
      <QuizCTA />
    </>
  );
}
