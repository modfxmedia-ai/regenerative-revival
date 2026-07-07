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

export const metadata = generatePageMetadata({
  title: "About",
  description: "Learn about Regenerative Revival, our founder Seth Berge, and our team of doctors, nurse practitioners, and wellness advocates dedicated to advanced regenerative therapies.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ title: "About Regenerative Revival", description: "Learn about our team of doctors, nurse practitioners, and wellness advocates dedicated to advanced regenerative therapies.", url: "/about" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "About", url: "https://www.regenerativerevival.com/about" }])} />
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
