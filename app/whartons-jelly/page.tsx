import WJHero from "./components/WJHero";
import WhatIsWJ from "./components/WhatIsWJ";
import WJBenefits from "./components/WJBenefits";
import WJApplications from "./components/WJApplications";
import WJCTA from "./components/WJCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, medicalWebPageSchema, breadcrumbSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Wharton's Jelly",
  description: "Discover Wharton's Jelly — a gelatinous substance from the umbilical cord rich in mesenchymal stem cells, growth factors, and anti-inflammatory properties.",
  path: "/whartons-jelly",
});

export default function WhartonsJellyPage() {
  return (
    <>
      <JsonLd data={medicalWebPageSchema({ title: "Wharton's Jelly", description: "Discover Wharton's Jelly — rich in mesenchymal stem cells, growth factors, and anti-inflammatory properties.", url: "/whartons-jelly", medicalConditions: ["Joint Pain", "Chronic Inflammation", "Tissue Degeneration", "Sports Injuries"] })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "Wharton's Jelly", url: "https://www.regenerativerevival.com/whartons-jelly" }])} />
      <Breadcrumbs items={[{ label: "Wharton's Jelly", href: "/whartons-jelly" }]} />
      <WJHero />
      <WhatIsWJ />
      <WJBenefits />
      <WJApplications />
      <WJCTA />
    </>
  );
}
