import { generatePageMetadata } from "../lib/seo";
import { JsonLd, webPageSchema, breadcrumbSchema } from "../lib/schema";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = generatePageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms governing your use of the Regenerative Revival website and services. Please read carefully before using our Service.",
  path: "/terms-conditions",
});

const CONTENT_HTML = `
<p><strong>Last updated: September 5, 2024</strong></p>
<p>Please read these Terms of Use (&ldquo;Terms&rdquo;, &ldquo;Terms of Use&rdquo;) carefully before using the website (the &ldquo;Service&rdquo;) operated by <strong>Regenerative Revival</strong> (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).</p>
<p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
<p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
<h2>Accounts</h2>
<p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
<p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
<p>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
<h2>Intellectual Property</h2>
<p>The Service and its original content, features and functionality are and will remain the exclusive property of Regenerative Revival and its licensors.</p>
<h2>Links To Other Web Sites</h2>
<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Regenerative Revival.</p>
<p>Regenerative Revival has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Regenerative Revival shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
<h2>Termination</h2>
<p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
<p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
<p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
<p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
<h2>Disclaimer</h2>
<p>Your use of the Service is at your sole risk. The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
<h2>Governing Law</h2>
<p>These Terms shall be governed and construed in accordance with the laws of Canada and the United States without regard to its conflict of law provisions.</p>
<p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
<h2>Changes</h2>
<p>Regenerative Revival reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
<p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
<h2>Contact Us</h2>
<p>If you have any questions about these Terms, please contact us at <a href="mailto:info@regenerativerevival.com">info@regenerativerevival.com</a>.</p>
`;

export default function TermsConditionsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Terms & Conditions — Regenerative Revival",
          description:
            "The terms governing your use of the Regenerative Revival website and services.",
          url: "/terms-conditions",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://regenerativerevival.com" },
          {
            name: "Terms & Conditions",
            url: "https://regenerativerevival.com/terms-conditions",
          },
        ])}
      />
      <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms-conditions" }]} />

      <section className="relative bg-secondary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(107,63,160,0.3),transparent)] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-base text-white/50">
            Please read these terms carefully before using our Service.
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
