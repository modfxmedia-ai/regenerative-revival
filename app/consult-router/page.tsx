import { generatePageMetadata } from "../lib/seo";
import { JsonLd, breadcrumbSchema, webPageSchema } from "../lib/schema";
import ConsultRouterClient from "./ConsultRouterClient";

export const metadata = generatePageMetadata({
  title: "Take The 2-Minute Quiz",
  description:
    "Tell us your goal and how you'd like care delivered. We'll point you to the right program — regenerative therapy, telehealth peptides, GLP-1, or NAD+.",
  path: "/consult-router",
  noIndex: true, // utility router, not an SEO target
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Take The 2-Minute Quiz",
          description:
            "Routes patients to the right consult — regen, hormones, NAD+, or general telehealth.",
          url: "/consult-router",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Take The Quiz",
            url: "https://www.regenerativerevival.com/consult-router",
          },
        ])}
      />
      <ConsultRouterClient />
    </>
  );
}
