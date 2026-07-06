import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = generatePageMetadata({
  title: "Disclaimer",
  description:
    "Medical disclaimer for Regenerative Revival regarding individual results, off-label therapies, and limitations of liability.",
  path: "/disclaimer",
});

const CONTENT_HTML = `
<p><strong>The information provided by Regenerative Revival is for general educational purposes only and is not medical advice.</strong> It is not intended to diagnose, treat, cure, or prevent any disease and should not be used as a substitute for consultation with a qualified, licensed healthcare provider. Always seek the advice of your physician or other qualified provider with any questions you may have regarding a medical condition.</p>
<p>Statements on this site have not been evaluated by the U.S. Food and Drug Administration (FDA). Regenerative therapies, including those derived from Wharton&rsquo;s Jelly and other perinatal tissues, are considered investigational or off-label for most musculoskeletal and wellness applications. No outcome is promised or guaranteed.</p>
<p><strong>Individual results vary.</strong> Any testimonials, case examples, or outcomes referenced on this site reflect individual experiences and are not typical, expected, or guaranteed results. Candidacy for any therapy is determined on a case-by-case basis by a licensed clinician following an individualized evaluation. Not everyone qualifies.</p>
<p>All medical services are delivered by licensed clinicians in accordance with applicable state and federal regulations, under physician oversight through our partner medical group. Compounded medications are dispensed by LegitScript- and NABP-accredited pharmacy partners.</p>
<p>To the fullest extent permitted by law, Regenerative Revival is not liable for any decisions made or actions taken in reliance on the information provided on this site. Your use of our products, services, and information is at your own discretion and risk. See our <a href="/terms-conditions">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a> for additional terms, limitations of liability, and information about how we handle your data.</p>
`;

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Disclaimer — Regenerative Revival",
          description:
            "Regenerative Revival disclaimer regarding earnings, individual results, and limitations of liability.",
          url: "/disclaimer",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Disclaimer",
            url: "https://www.regenerativerevival.com/disclaimer",
          },
        ])}
      />
      <Breadcrumbs items={[{ label: "Disclaimer", href: "/disclaimer" }]} />

      <section className="relative bg-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            Disclaimer
          </h1>
          <p className="mt-4 text-base text-white/50">
            Important information about results, liability, and our limitations.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <article
            className="
              text-gray-700 leading-relaxed
              [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-3
              [&_p]:my-4 [&_p]:leading-relaxed
              [&_strong]:font-semibold [&_strong]:text-gray-900
              [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary-dark
            "
            dangerouslySetInnerHTML={{ __html: CONTENT_HTML }}
          />
        </div>
      </section>
    </>
  );
}
