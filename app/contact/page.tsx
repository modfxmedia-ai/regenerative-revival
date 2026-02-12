import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import Breadcrumbs from "../components/Breadcrumbs";
import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";

export const metadata = generatePageMetadata({
  title: "Contact",
  description: "Contact Regenerative Revival for expert guidance on your regenerative health journey. Schedule your consultation today.",
  path: "/contact",
  cta: "Call Now",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={webPageSchema({ title: "Contact Regenerative Revival", description: "Contact us for expert guidance on your regenerative health journey. Schedule your consultation today.", url: "/contact" })} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "https://www.regenerativerevival.com" }, { name: "Contact", url: "https://www.regenerativerevival.com/contact" }])} />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <ContactHero />
      <ContactForm />
    </>
  );
}
