import { notFound } from "next/navigation";
import { locations, getNearbyLocations } from "../../../lib/locations";
import { treatments, getTreatmentBySlug } from "../../../lib/treatments";
import {
  generateIntro,
  generateBenefitSections,
  generateFAQs,
  getGovResources,
  generateHeroHeadline,
  generateHeroSubheadline,
  generatePainPoints,
  generateKeywordBody,
  generateAuthorityBlock,
  generateContextBlock,
  generateMetaTitle,
  generateMetaDesc,
} from "../../../lib/content-engine";
import { generatePageMetadata } from "../../../lib/seo";
import { JsonLd, medicalWebPageSchema, breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "../../../lib/schema";
import Breadcrumbs from "../../../components/Breadcrumbs";
import TreatmentPageContent from "./TreatmentPageContent";
import PatientStories from "../../../components/PatientStories";
import WhyChooseUs from "../../../components/WhyChooseUs";
import QuizCTA from "../../../components/QuizCTA";

// ISR: revalidate every 24 hours — body pools re-draw on each revalidation
export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string; location: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; location: string }[] = [];
  for (const t of treatments) {
    for (const l of locations) {
      params.push({ slug: t.slug, location: l.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug, location: locSlug } = await params;
  const treatment = getTreatmentBySlug(slug);
  const location = locations.find((l) => l.slug === locSlug);
  if (!treatment || !location) return {};

  // Pooled title + desc — seeded by slug so stable across ISR crawls
  return generatePageMetadata({
    title: generateMetaTitle(treatment, location),
    description: generateMetaDesc(treatment, location),
    path: `/treatments/${treatment.slug}/${location.slug}`,
  });
}

export default async function TreatmentLocationPage({ params }: Props) {
  const { slug, location: locSlug } = await params;
  const treatment = getTreatmentBySlug(slug);
  const location = locations.find((l) => l.slug === locSlug);
  if (!treatment || !location) notFound();

  const intro = generateIntro(treatment, location);
  const sections = generateBenefitSections(treatment, location);
  const faqs = generateFAQs(treatment, location);
  const govLinks = getGovResources(treatment);
  const nearby = getNearbyLocations(location, 4);
  const relatedTreatments = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 4);

  // v2 OOPSEO pillars
  const heroHeadline = generateHeroHeadline(treatment, location);
  const heroSubheadline = generateHeroSubheadline(treatment, location);
  const painPoints = generatePainPoints(treatment, location);
  const keywordBody = generateKeywordBody(treatment, location);
  const authorityBlock = generateAuthorityBlock(treatment);
  const contextBlock = generateContextBlock(treatment, location);

  const SITE_URL = "https://regenerativerevival.com";
  const pagePath = `/treatments/${treatment.slug}/${location.slug}`;

  const localBiz = {
    ...localBusinessSchema(),
    name: `Regenerative Revival — ${location.city}`,
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: String(location.lat),
      longitude: String(location.lng),
    },
    areaServed: {
      "@type": "City" as const,
      name: location.city,
      containedInPlace: { "@type": "State" as const, name: location.state },
    },
  };

  return (
    <>
      <JsonLd data={localBiz} />
      <JsonLd data={medicalWebPageSchema({ title: `${treatment.name} in ${location.city}, ${location.stateAbbr}`, description: treatment.description, url: pagePath, medicalConditions: treatment.medicalConditions })} />
      <JsonLd data={serviceSchema({
        name: `${treatment.name} in ${location.city}, ${location.state}`,
        description: treatment.description,
        url: pagePath,
        serviceType: treatment.name,
        areaServed: `${location.city}, ${location.state}`,
      })} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: treatment.name, url: `${SITE_URL}${treatment.pageLink}` },
        { name: `${location.city}, ${location.stateAbbr}`, url: `${SITE_URL}${pagePath}` },
      ])} />
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[
        { label: treatment.name, href: treatment.pageLink },
        { label: `${location.city}, ${location.stateAbbr}`, href: pagePath },
      ]} />
      <TreatmentPageContent
        treatment={treatment}
        location={location}
        intro={intro}
        sections={sections}
        faqs={faqs}
        govLinks={govLinks}
        nearby={nearby}
        relatedTreatments={relatedTreatments}
        heroHeadline={heroHeadline}
        heroSubheadline={heroSubheadline}
        painPoints={painPoints}
        keywordBody={keywordBody}
        authorityBlock={authorityBlock}
        contextBlock={contextBlock}
      />
      <WhyChooseUs />
      <PatientStories />
    </>
  );
}
