/**
 * Reusable compliance disclaimer band — drop into the bottom of any page
 * that needs to surface compounded/Rx/regen language. Driven by the
 * disclaimerKey enum from `lib/products.ts`.
 */
import { productDisclaimers } from "../lib/products";

type DisclaimerKey = keyof typeof productDisclaimers;

export default function ComplianceDisclaimer({
  variant = "compounded_rx",
  extra,
}: {
  variant?: DisclaimerKey;
  /** Additional disclaimer paragraphs */
  extra?: string[];
}) {
  const body = productDisclaimers[variant];
  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-10 space-y-3">
        <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
        {extra?.map((p, i) => (
          <p key={i} className="text-xs text-gray-500 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
