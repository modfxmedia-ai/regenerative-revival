import { generatePageMetadata } from "../lib/seo";

export const metadata = generatePageMetadata({
  title: "Patient Testimonials",
  description:
    "Real stories from patients who chose regenerative medicine over surgery. Pain relief, recovery, and renewed quality of life with stem cell therapy.",
  path: "/testimonials",
});

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
