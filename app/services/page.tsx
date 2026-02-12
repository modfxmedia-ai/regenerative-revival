import ServicesHero from "./components/ServicesHero";
import WhatIsWhartonsJelly from "./components/WhatIsWhartonsJelly";
import WhyConsider from "./components/WhyConsider";
import VideoSection from "./components/VideoSection";
import ServicesCTA from "./components/ServicesCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, medicalWebPageSchema, breadcrumbSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Services",
  description: "Unlocking the power of Wharton's Jelly — a breakthrough in chronic pain management. Learn about our stem cell therapy services.",
  path: "/services",
  cta: "Book Now",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema({ title: "Services", description: "Advanced stem cell therapy services using Wharton's Jelly for chronic pain management.", url: "/services", medicalConditions: ["Chronic Pain", "Osteoarthritis", "Sports Injuries", "Joint Pain", "Tissue Degeneration"] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "Services", url: "https://www.regenerativerevival.com/services" }])} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <ServicesHero />
      <WhatIsWhartonsJelly />
      <WhyConsider />
      <VideoSection />
      <ServicesCTA />
    </>
  );
}
