import ServicesHero from "./components/ServicesHero";
import WhatIsWhartonsJelly from "./components/WhatIsWhartonsJelly";
import WhyConsider from "./components/WhyConsider";
import VideoSection from "./components/VideoSection";
import ServicesCTA from "./components/ServicesCTA";

export const metadata = {
  title: "Services | Regenerative Revival",
  description:
    "Unlocking the power of Wharton's Jelly — a breakthrough in chronic pain management. Learn about our stem cell therapy services.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WhatIsWhartonsJelly />
      <WhyConsider />
      <VideoSection />
      <ServicesCTA />
    </>
  );
}
