import { generatePageMetadata } from "../lib/seo";

export const metadata = generatePageMetadata({
  title: "Partner With Us",
  description:
    "Join the Regenerative Revival partner network. Turnkey regenerative medicine programs for clinics - products, training, marketing, and revenue sharing.",
  path: "/partner-with-us",
});

export default function PartnerWithUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
