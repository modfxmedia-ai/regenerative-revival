import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const services = [
  { label: "Regenerative Therapy", href: "/stem-cell-therapy" },
  { label: "Hormones & Peptides", href: "/hormones-peptides" },
  { label: "NAD+ & Supplements", href: "/nad" },
];

const about = [
  { label: "Medical Team", href: "/about" },
  { label: "Arora Health Group", href: "/about/why-were-different" },
  { label: "Our Mission", href: "/concierge-care-model" },
];

const resources = [
  { label: "How It Works", href: "/concierge-care-model" },
  { label: "Patient Portal", href: "https://portal.regenerativerevival.com" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/news" },
  { label: "Site Map", href: "/site-map" },
];

const contact = [
  { label: "Patient Support", href: "/contact" },
  { label: "Wholesale", href: "/partner-with-us" },
  { label: "Press", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-conditions" },
  { label: "HIPAA Notice", href: "/disclaimer" },
  { label: "Site Map", href: "/site-map" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1A1F30] to-[#0F1220] relative overflow-hidden">
        {/* Ambient aurora glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#6762AF]/10 blur-[160px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#345691]/12 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 lux-grid opacity-[0.12] pointer-events-none" />

        {/* ── Top: logo + nav columns ── */}
        <div className="relative mx-auto max-w-[1280px] px-8 lg:px-12 pt-14 pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-[200px_1fr_1fr_1fr_1fr] gap-8 lg:gap-6 items-start">
            {/* Logo */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Regenerative Revival"
                  width={160}
                  height={56}
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>
              <p className="mt-4 text-[12px] text-white/35 leading-[1.7] max-w-[160px]">
                Advanced regenerative medicine, delivered to your door.
              </p>
            </div>

            <FooterColumn title="Services" links={services} />
            <FooterColumn title="About" links={about} />
            <FooterColumn title="Resources" links={resources} />
            <FooterColumn title="Contact" links={contact} />
          </div>
        </div>

        {/* Gradient divider line */}
        <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Mid bar ── */}
        <div className="relative mx-auto max-w-[1280px] px-8 lg:px-12 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <SocialIcon href="https://facebook.com" label="Facebook" icon={<Facebook className="h-[15px] w-[15px]" strokeWidth={2.2} />} />
            <SocialIcon href="https://instagram.com" label="Instagram" icon={<Instagram className="h-[15px] w-[15px]" strokeWidth={2.2} />} />
          </div>

          {/* Copyright */}
          <p className="text-[12.5px] font-medium text-white/30 order-3 md:order-2">
            © {new Date().getFullYear()} Regenerative Revival. All rights reserved.
          </p>

          {/* Legal links */}
          <nav aria-label="Legal" className="order-2 md:order-3 flex items-center">
            {legal.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-[12.5px] font-semibold text-white/40 hover:text-[#71A7F5] transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {i < legal.length - 1 && (
                  <span className="text-white/15 mx-2 text-[11px]">·</span>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* ── Compliance band ── */}
        <div className="relative">
          <div className="mx-auto max-w-[1280px] px-8 lg:px-12">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>
          <div className="mx-auto max-w-[1280px] px-8 lg:px-12 py-5">
            <p className="text-[11px] font-medium text-white/20 leading-[1.75]">
              © {new Date().getFullYear()} Regenerative Revival. All rights reserved. Regenerative Revival provides concierge regenerative medicine and coordinates telehealth-based longevity care through a nationwide network of licensed nurse practitioners under physician oversight. Statements on this site have not been evaluated by the FDA. Our services are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary. Regenerative therapies are considered off-label for most musculoskeletal applications. Telehealth services are delivered by licensed clinicians in accordance with state-specific regulations. Compounded medications are dispensed by LegitScript- and NABP-accredited pharmacy partners.
            </p>
          </div>
        </div>
      </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-bold text-white/50 mb-4 tracking-[0.18em] uppercase">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13.5px] font-medium text-white/55 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-[#6762AF]/50 hover:bg-[#6762AF]/10 transition-all duration-200"
    >
      {icon}
    </a>
  );
}
