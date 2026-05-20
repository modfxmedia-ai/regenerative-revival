import Image from "next/image";
import Link from "next/link";

const regenerativeLinks = [
  { label: "Stem Cell Therapy", href: "/stem-cell-therapy" },
  { label: "Wharton's Jelly", href: "/whartons-jelly" },
  { label: "Why Exosomes", href: "/why-exosomes" },
  { label: "Why Stem Cells", href: "/why-stem-cells" },
  { label: "Concierge Care Model", href: "/concierge-care-model" },
  { label: "All Treatments", href: "/treatments" },
  { label: "Service Areas", href: "/locations" },
];

const telehealthLinks = [
  { label: "Hormones & Peptides", href: "/hormones-peptides" },
  { label: "NAD+", href: "/nad" },
  { label: "Take The Quiz", href: "/consult-router" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Founder", href: "/about/founder" },
  { label: "Why We're Different", href: "/about/why-were-different" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const partnerLinks = [
  { label: "For Providers", href: "/for-providers" },
  { label: "Apply to Partner", href: "/partner-with-us" },
  { label: "Partner Programs", href: "/partners" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 bg-secondary text-white overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(155,109,215,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(155,109,215,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* PRIMARY NAV BAND — 5 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <Image
              src="/logo.png"
              alt="Regenerative Revival"
              width={160}
              height={64}
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-4">
              White-glove regenerative medicine in your home, plus nationwide
              telehealth for peptides, hormones, and NAD+.
            </p>
            <Link
              href="/consult-router"
              className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 text-xs font-semibold text-white transition-colors"
            >
              Take The 2-Question Quiz →
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Regenerative
            </h4>
            <ul className="flex flex-col gap-3">
              {regenerativeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Telehealth
            </h4>
            <ul className="flex flex-col gap-3">
              {telehealthLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white/80 mb-4">
              For Providers
            </h4>
            <ul className="flex flex-col gap-3">
              {partnerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-primary-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DIRECTORY BAND — exposes all programmatic hubs to crawlers + users */}
        <div className="border-t border-white/10 pt-8 mb-10">
          <p className="text-xs text-white/50 leading-relaxed max-w-2xl">
            Looking for a specific treatment, partner program, or city?{" "}
            <Link
              href="/sitemap.xml"
              className="text-primary-light hover:text-white transition-colors font-semibold"
            >
              View the full sitemap →
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Regenerative Revival. All rights
            reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-primary-light transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-white/30">
            Operating under Arora Health Group clinical oversight.
          </p>
        </div>
      </div>
    </footer>
  );
}
