import AboutHero from "./components/AboutHero";
import OurGuarantee from "./components/OurGuarantee";
import HowItWorks from "./components/HowItWorks";
import FounderSection from "./components/FounderSection";
import TeamSection from "./components/TeamSection";
import CTABanner from "./components/CTABanner";

export const metadata = {
  title: "About | Regenerative Revival",
  description:
    "Learn about Regenerative Revival, our founder Seth Berge, and our team of doctors, nurse practitioners, and revival advocates dedicated to advanced regenerative therapies.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <HowItWorks />
      <OurGuarantee />
      <FounderSection />
      <TeamSection />
      <CTABanner />
    </>
  );
}
