import { generatePageMetadata } from "../lib/seo";

export const metadata = generatePageMetadata({
  title: "Provider Portal",
  description: "Regenerative Revival provider portal.",
  path: "/clp",
  noIndex: true,
});

export default function ClpPage() {
  return (
    <iframe
      src="https://jazzy-blancmange-6331d3.netlify.app/"
      title="Provider Portal"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
