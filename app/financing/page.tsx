import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";
import CherryWidget from "../components/CherryWidget";

export const metadata = generatePageMetadata({
  title: "Financing & Payment Plans",
  description:
    "Pay over time for regenerative medicine, peptides, hormones, and NAD+ with Cherry. 0% APR options available, no hard credit checks, and approvals in 60 seconds.",
  path: "/financing",
});

export default function FinancingPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Financing & Payment Plans - Regenerative Revival",
          description:
            "Flexible payment plans through Cherry for regenerative medicine and longevity care. 0% APR options, no hard credit checks.",
          url: "/financing",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          {
            name: "Financing",
            url: "https://regenerativerevival.com/financing",
          },
        ])}
      />
      <Breadcrumbs items={[{ label: "Financing", href: "/financing" }]} />

      <section className="relative bg-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            Treat now, pay over time
          </h1>
          <p className="mt-4 text-base text-white/60 max-w-2xl">
            Break the cost of your care into manageable monthly payments with
            Cherry. 0% APR options available, no hard credit checks, and it only
            takes 60 seconds to see if you qualify.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <CherryWidget />
      </section>
    </>
  );
}
