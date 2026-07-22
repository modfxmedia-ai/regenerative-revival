import type { Metadata } from "next";
import Link from "next/link";
import { ImageWithFallback } from "./_components/ImageWithFallback";
import { RegenLinxLogo } from "./_components/RegenLinxLogo";
import { ASSETS, BOOKING_URL } from "./config";

export const metadata: Metadata = {
  title: "Regenerative Revival | Advanced Regenerative Care",
  description:
    "Next-generation cellular therapies to repair tissue, reduce inflammation, and return to the active life you love. Under the direction of Regenerative Revival & Arora Health Group.",
  alternates: { canonical: "https://regenerativerevival.com/patient" },
};

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl transition-all duration-300">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          {/* Left: Logos */}
          <div className="flex items-center gap-5">
            <Link href="/patient" className="flex items-center">
              <RegenLinxLogo className="[&_span:first-child]:text-xl" />
            </Link>
            <span className="hidden h-10 w-px bg-slate-200 lg:block" />
            <div className="hidden items-center gap-3 lg:flex">
              <span className="max-w-[70px] text-[9px] font-bold uppercase leading-tight tracking-[0.16em] text-slate-400">
                Under the direction of
              </span>
              <ImageWithFallback
                src={ASSETS.rrLogo}
                alt="Regenerative Revival"
                className="h-9 object-contain"
              />
              <ImageWithFallback
                src={ASSETS.aroraLogo}
                alt="Arora Health Group"
                className="h-5 object-contain"
              />
            </div>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/patient"
              className="text-sm font-semibold text-blue-600 transition-colors"
            >
              Home
            </Link>
            <span className="cursor-default text-sm font-semibold text-slate-400">
              Peptide Programs <span className="text-blue-600">(Coming Soon)</span>
            </span>
            <a
              href={BOOKING_URL}
              className="rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_8px_30px_rgb(37,99,235,0.2)]"
            >
              Schedule Consult
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <Link
              href="/patient"
              className="text-xs font-semibold text-blue-600 transition-colors"
            >
              Home
            </Link>
            <span className="text-xs font-semibold text-slate-400">
              Peptides <span className="text-blue-600">(Soon)</span>
            </span>
            <a
              href={BOOKING_URL}
              className="rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-600"
            >
              Consult
            </a>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white px-6 pb-16 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 grid gap-16 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-8">
                <RegenLinxLogo showTagline />
              </div>
              <p className="mb-12 max-w-sm text-sm font-medium leading-relaxed text-slate-500">
                Advanced regenerative medicine therapies helping you live a more
                active, pain-free life.
              </p>
              <div className="flex items-center gap-8">
                <ImageWithFallback
                  src={ASSETS.aroraLogo}
                  className="h-6 object-contain opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  alt="Arora Health Group"
                />
                <span className="font-light text-slate-200">|</span>
                <ImageWithFallback
                  src={ASSETS.rrLogo}
                  className="h-10 object-contain opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                  alt="Regenerative Revival"
                />
              </div>
            </div>
            <div>
              <h4 className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
                Patient Links
              </h4>
              <ul className="space-y-5 text-sm font-medium text-slate-500">
                <li>
                  <Link
                    href="/patient"
                    className="transition-colors hover:text-blue-600"
                  >
                    Our Therapies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/patient"
                    className="transition-colors hover:text-blue-600"
                  >
                    Patient FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href={BOOKING_URL}
                    className="transition-colors hover:text-blue-600"
                  >
                    Book Consult
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-10 h-px w-full bg-slate-100" />
          <div className="flex flex-col items-center justify-between gap-6 text-[11px] font-medium text-slate-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} Regenerative Revival. All rights
              reserved.
            </p>
            <p className="max-w-3xl text-center leading-relaxed md:text-right">
              Exosome and stem cell therapies are emerging regenerative
              modalities and are not FDA-approved to diagnose, treat, cure, or
              prevent any specific disease. Results vary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
