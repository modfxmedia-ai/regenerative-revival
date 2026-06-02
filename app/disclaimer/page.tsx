import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = generatePageMetadata({
  title: "Disclaimer",
  description:
    "Regenerative Revival disclaimer regarding earnings, individual results, and limitations of liability.",
  path: "/disclaimer",
});

const CONTENT_HTML = `
<p><strong>We also hate SPAM as much as you do and will promise to keep your information safe.</strong></p>
<p>Copyright &copy; 2025 Regenerative Revival</p>
<p><strong>All Rights Reserved</strong></p>
<p>Earnings and income representations made here are aspirational statements only of your earnings potential. Implied earnings, testimonials and other examples used are exceptional, non-typical results and are not intended to be and are not a guarantee that you or others will achieve the same results. Individual results will always vary and yours will depend entirely on your individual capacity, work ethic, business skills and experience, level of motivation, diligence in applying any strategies contained in &ldquo;Regenerative Revival&rdquo; or any other subsequent training.</p>
<p>This can also mean the economy, the normal and unforeseen risks of doing business, and other factors.</p>
<p>We are not responsible for your actions. You are solely responsible for your own moves and decisions and the evaluation and use of our products and services should be based on your own due diligence. You agree that the Author&rsquo;s programs and processes are not liable to you in any way for your results in using our products and services. See our <a href="/terms-conditions">Terms of Use</a> for our full disclaimer of liability and other restrictions.</p>
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
