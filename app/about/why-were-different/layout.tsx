import { generatePageMetadata } from "../../lib/seo";

export const metadata = generatePageMetadata({
  title: "Why We're Different",
  description:
    "What sets Regenerative Revival apart: premium Wharton's Jelly source material, independently verified quality, a licensed practitioner network, and truly personalized regenerative protocols.",
  path: "/about/why-were-different",
});

export default function WhyWereDifferentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
