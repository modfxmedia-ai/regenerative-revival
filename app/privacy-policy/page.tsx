import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "How Regenerative Revival collects, uses, and protects your personal information. Read our complete privacy policy.",
  path: "/privacy-policy",
});

const CONTENT_HTML = `
<p><strong>Privacy Policy of Regenerative Revival</strong></p>
<p>Regenerative Revival operates the https://regenerativerevival.com/ website, which provides the SERVICE.</p>
<p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Regenerative Revival website.</p>
<p>If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
<p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://regenerativerevival.com/, unless otherwise defined in this Privacy Policy.</p>
<h2>Information Collection and Use</h2>
<p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>
<h2>Log Data</h2>
<p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer&rsquo;s Internet Protocol (&ldquo;IP&rdquo;) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>
<h2>Cookies</h2>
<p>Cookies are files with small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer&rsquo;s hard drive.</p>
<p>Our website uses these &ldquo;cookies&rdquo; to collect information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
<h2>Service Providers</h2>
<p>We may employ third-party companies and individuals due to the following reasons:</p>
<ul>
<li>To facilitate our Service;</li>
<li>To provide the Service on our behalf;</li>
<li>To perform Service-related services; or</li>
<li>To assist us in analyzing how our Service is used.</li>
</ul>
<p>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
<h2>Security</h2>
<p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
<h2>Links to Other Sites</h2>
<p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
<h2>Children&rsquo;s Privacy</h2>
<p>Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
<h2>Changes to This Privacy Policy</h2>
<p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
<h2>Contact Us</h2>
<p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Privacy Policy — Regenerative Revival",
          description:
            "How Regenerative Revival collects, uses, and protects your personal information.",
          url: "/privacy-policy",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.regenerativerevival.com" },
          {
            name: "Privacy Policy",
            url: "https://www.regenerativerevival.com/privacy-policy",
          },
        ])}
      />
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-white/50">
            How Regenerative Revival collects, uses, and protects your personal information.
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
              [&_ul]:my-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-1
              [&_li]:text-gray-700
              [&_a]:text-primary [&_a]:underline hover:[&_a]:text-primary-dark
            "
            dangerouslySetInnerHTML={{ __html: CONTENT_HTML }}
          />
        </div>
      </section>
    </>
  );
}
