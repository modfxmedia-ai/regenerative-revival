"use client";

const footerLinks = {
  Treatments: [
    { label: "Stem Cell Therapy", href: "#treatments" },
    { label: "Wharton's Jelly", href: "#treatments" },
    { label: "Joint Pain Relief", href: "#treatments" },
    { label: "Sports Recovery", href: "#treatments" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "FAQ", href: "#faq" },
  ],
  Partners: [
    { label: "JV Partnership", href: "#partners" },
    { label: "Wholesale Inquiry", href: "#partners" },
    { label: "For Practices", href: "#partners" },
    { label: "Revenue Share", href: "#partners" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "SMS Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 bg-secondary text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Regenerative Revival" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Reviving health through advanced regenerative medicine and Wharton&apos;s Jelly stem cell therapy.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/50 hover:text-primary-light transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Regenerative Revival. All rights reserved.</p>
          <p className="text-xs text-white/40">Powered by Seth Berge Inc.</p>
        </div>
      </div>
    </footer>
  );
}
