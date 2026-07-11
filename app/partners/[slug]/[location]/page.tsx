import { notFound } from "next/navigation";
import { locations, getNearbyLocations } from "../../../lib/locations";
import { partnerServices, getPartnerServiceBySlug, generatePartnerIntro, generatePartnerBenefits, generatePartnerFAQs } from "../../../lib/partner-content";
import { generatePageMetadata } from "../../../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema, faqSchema } from "../../../lib/schema";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PartnerPageContent from "./PartnerPageContent";
import PatientStories from "../../../components/PatientStories";
import About from "../../../components/About";
import QuizCTA from "../../../components/QuizCTA";

interface Props {
  params: Promise<{ slug: string; location: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; location: string }[] = [];
  for (const s of partnerServices) {
    for (const l of locations) {
      params.push({ slug: s.slug, location: l.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug, location: locSlug } = await params;
  const service = getPartnerServiceBySlug(slug);
  const location = locations.find((l) => l.slug === locSlug);
  if (!service || !location) return {};

  return generatePageMetadata({
    title: `${service.name} in ${location.city}, ${location.stateAbbr}`,
    description: `${service.description} Serving medical practices in ${location.city}, ${location.state}. JV partnership with revenue sharing.`,
    path: `/partners/${service.slug}/${location.slug}`,
    cta: "Partner Now",
  });
}

export default async function PartnerLocationPage({ params }: Props) {
  const { slug, location: locSlug } = await params;
  const service = getPartnerServiceBySlug(slug);
  const location = locations.find((l) => l.slug === locSlug);
  if (!service || !location) notFound();

  const intro = generatePartnerIntro(service, location);
  const benefits = generatePartnerBenefits(service, location);
  const faqs = generatePartnerFAQs(service, location);
  const nearby = getNearbyLocations(location, 4);
  const relatedServices = partnerServices.filter((s) => s.slug !== service.slug).slice(0, 3);

  const SITE_URL = "https://regenerativerevival.com";
  const pagePath = `/partners/${service.slug}/${location.slug}`;

  return (
    <>
      <JsonLd data={webPageSchema({ title: `${service.name} in ${location.city}, ${location.stateAbbr}`, description: service.description, url: pagePath })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Partners", url: `${SITE_URL}/#partners` },
        { name: `${location.city}, ${location.stateAbbr}`, url: `${SITE_URL}${pagePath}` },
      ])} />
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[
        { label: "Partners", href: "/#partners" },
        { label: `${service.shortName} — ${location.city}, ${location.stateAbbr}`, href: pagePath },
      ]} />
      <PartnerPageContent
        service={service}
        location={location}
        intro={intro}
        benefits={benefits}
        faqs={faqs}
        nearby={nearby}
        relatedServices={relatedServices}
      />
      <About />
      <PatientStories />
      <QuizCTA />
    </>
  );
}
