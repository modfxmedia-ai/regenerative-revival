"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Sparkles, Users } from "lucide-react";
import Image from "next/image";

type DropdownItem = { label: string; href: string; desc: string };

const regenerativeDropdown: DropdownItem[] = [
  { label: "Stem Cell Therapy", href: "/stem-cell-therapy", desc: "In-home Wharton's Jelly regenerative care" },
  { label: "Wharton's Jelly", href: "/whartons-jelly", desc: "Source, science, and how it's delivered" },
  { label: "Why Exosomes", href: "/why-exosomes", desc: "The signaling layer that drives repair" },
  { label: "Concierge Care Model", href: "/concierge-care-model", desc: "NP-led, physician-overseen, in your home" },
];

const aboutDropdown: DropdownItem[] = [
  { label: "About Us", href: "/about", desc: "Our mission, team & story" },
  { label: "Founder — Seth Berge", href: "/about/founder", desc: "Why Regenerative Revival exists" },
  { label: "Why We're Different", href: "/about/why-were-different", desc: "What sets Regenerative Revival apart" },
  { label: "Testimonials", href: "/testimonials", desc: "Real results from real patients" },
];

type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

const navLinks: NavLink[] = [
  { label: "Regenerative", href: "/stem-cell-therapy", dropdown: regenerativeDropdown },
  { label: "Hormones & Peptides", href: "/hormones-peptides" },
  { label: "NAD+", href: "/nad" },
  { label: "For Providers", href: "/for-providers" },
  { label: "About", href: "/about", dropdown: aboutDropdown },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

function NavDropdown({
  items,
  onEnter,
  onLeave,
}: {
  items: DropdownItem[];
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-white shadow-[0_24px_64px_-12px_rgba(88,53,99,0.18)] border border-[#F1ECF8] overflow-hidden z-50"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-[#6762AF] via-[#71A7F5] to-[#345691]" />

      <div className="p-2.5">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-start gap-3 rounded-xl px-4 py-3 hover:bg-[#F1ECF8]/60 transition-colors group"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6762AF]/40 group-hover:bg-[#6762AF] transition-colors shrink-0" />
            <div className="flex-1">
              <span className="block text-sm font-semibold text-[#1A1F30] group-hover:text-[#583563] transition-colors">
                {item.label}
              </span>
              <span className="block text-xs text-[#7A7F95] leading-relaxed mt-0.5">
                {item.desc}
              </span>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#C5DBF7] mt-1 opacity-0 group-hover:opacity-100 group-hover:text-[#6762AF] transition-all -translate-x-1 group-hover:translate-x-0" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl shadow-[0_8px_32px_-12px_rgba(26,31,48,0.12)] border-b border-[#F1ECF8]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0 group">
              <Image
                src="/logo.png"
                alt="Regenerative Revival"
                width={180}
                height={64}
                className={`h-14 w-auto transition-all duration-500 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && openDropdown(link.label)}
                  onMouseLeave={() => link.dropdown && closeDropdown()}
                >
                  <a
                    href={link.href}
                    className={`relative flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium tracking-wide rounded-full transition-all duration-300 ${
                      scrolled
                        ? "text-[#1A1F30]/75 hover:text-[#583563]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    {/* Active underline */}
                    <span
                      className={`absolute left-3.5 right-3.5 -bottom-0.5 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        scrolled ? "bg-[#6762AF]" : "bg-white"
                      }`}
                    />
                  </a>

                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <NavDropdown
                        items={link.dropdown}
                        onEnter={() => openDropdown(link.label)}
                        onLeave={closeDropdown}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Take The Quiz CTA — primary action */}
              <a
                href="/consult-router"
                className={`hidden md:inline-flex h-11 items-center gap-1.5 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "bg-[#1A1F30] text-white hover:bg-[#583563] hover:shadow-[0_8px_24px_-8px_rgba(88,53,99,0.5)]"
                    : "bg-white/10 backdrop-blur-md text-white border border-white/25 hover:bg-white hover:text-[#1A1F30]"
                }`}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Take The Quiz
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                  scrolled
                    ? "text-[#1A1F30] hover:bg-[#F1ECF8]"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-white via-[#F1ECF8]/60 to-white backdrop-blur-2xl pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-1 pb-10 max-w-md mx-auto">
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between py-4 border-b border-[#F1ECF8] hover:border-[#6762AF]/30 transition-colors"
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-2xl font-light tracking-tight text-[#1A1F30] font-[family-name:var(--font-poppins)]"
                      >
                        {link.label}
                      </motion.span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#6762AF]/50 transition-transform duration-200 ${
                          mobileExpanded === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4 border-l-2 border-[#6762AF]/20 my-2"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 text-sm font-medium text-[#4A4F66] hover:text-[#583563] transition-colors"
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 border-b border-[#F1ECF8] hover:border-[#6762AF]/30 text-2xl font-light tracking-tight text-[#1A1F30] hover:text-[#583563] transition-colors font-[family-name:var(--font-poppins)]"
                  >
                    {link.label}
                  </motion.a>
                )
              )}

              {/* For Providers / Partners */}
              <a
                href="/partner-with-us"
                onClick={() => setMobileOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-[#583563] hover:text-[#1A1F30] transition-colors"
              >
                <Users className="h-4 w-4" />
                For Providers / Partners
                <ArrowUpRight className="h-4 w-4" />
              </a>

              {/* Take The Quiz */}
              <a
                href="/consult-router"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex h-14 items-center justify-center gap-2 rounded-full bg-[#1A1F30] text-base font-semibold text-white hover:bg-[#583563] transition-colors"
              >
                <Sparkles className="h-4 w-4" />
                Take The 2-Minute Quiz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
