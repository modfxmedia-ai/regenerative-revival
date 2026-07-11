import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

/**
 * TalkToProviderCTA — replaces QuizCTA on product and pSEO pages.
 * Single action: contact a clinician. No quiz redirect.
 */
export default function TalkToProviderCTA() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-light bg-primary/10 rounded-full px-4 py-1.5 mb-6">
          Ready When You Are
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Talk to a Provider
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          A licensed clinician will review your case and walk you through your
          options — no commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="group flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary px-9 text-base font-semibold text-white transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Talk to a Provider
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+16513718668"
            className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white/[0.06] border border-white/[0.1] px-7 text-base font-semibold text-white transition-all hover:bg-white/[0.12]"
          >
            <Phone className="h-4 w-4" /> (651) 371-8668
          </a>
        </div>
      </div>
    </section>
  );
}
