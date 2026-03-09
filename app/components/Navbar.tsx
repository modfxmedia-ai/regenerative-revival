"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ArrowUpRight, BookOpen, Users } from "lucide-react";
import Image from "next/image";

type DropdownItem = { label: string; href: string; desc: string };

const educationDropdown: DropdownItem[] = [
  {
    label: "What Are Stem Cells?",
    href: "/why-stem-cells",
    desc: "The science behind stem cell therapy",
  },
  {
    label: "Where Do They Come From?",
    href: "/whartons-jelly",
    desc: "Wharton's Jelly & umbilical cord sourcing",
  },
  {
    label: "Why We're Different",
    href: "/about/why-were-different",
    desc: "Our protocols, quality & transparent approach",
  },
];

const aboutDropdown: DropdownItem[] = [
  {
    label: "About Us",
    href: "/about",
    desc: "Our mission, team & story",
  },
  {
    label: "Why We're Different",
    href: "/about/why-were-different",
    desc: "What sets Regenerative Revival apart",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    desc: "Real results from real people",
  },
];

type NavLink = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  icon?: React.ReactNode;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", dropdown: aboutDropdown },
  { label: "Education", href: "#", dropdown: educationDropdown, icon: <BookOpen className="h-3.5 w-3.5" /> },
  { label: "Services", href: "/services" },
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
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-2xl bg-white shadow-xl shadow-gray-900/10 border border-gray-100/80 overflow-hidden z-50"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="p-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex flex-col gap-0.5 rounded-xl px-4 py-3 hover:bg-primary/5 transition-colors group"
          >
            <span className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {item.label}
            </span>
            <span className="text-xs text-gray-500 leading-relaxed">{item.desc}</span>
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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/logo.png"
                alt="Regenerative Revival"
                width={160}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && openDropdown(link.label)}
                  onMouseLeave={() => link.dropdown && closeDropdown()}
                >
                  <a
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      scrolled
                        ? "text-gray-600 hover:text-primary hover:bg-primary/5"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                   
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
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
              <a
                href="tel:+1234567890"
                className={`hidden xl:flex items-center gap-2 text-sm transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-primary"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </a>

              {/* For Providers / Partners */}
              <a
                href="/partner-with-us"
                className={`hidden lg:inline-flex items-center gap-1.5 h-9 rounded-full px-4 text-xs font-semibold border transition-all ${
                  scrolled
                    ? "border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50"
                    : "border-white/25 text-white/80 hover:bg-white/10 hover:border-white/45 hover:text-white"
                }`}
              >
                <Users className="h-3.5 w-3.5" />
                For Providers
                <ArrowUpRight className="h-3 w-3" />
              </a>

              {/* Book Consultation CTA */}
              <a
                href="/contact"
                className={`hidden md:inline-flex h-10 items-center rounded-full px-6 text-sm font-semibold transition-all ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                    : "bg-white/15 backdrop-blur-md text-white border border-white/20 hover:bg-white/25"
                }`}
              >
                Book Consultation
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-1 pb-10">
              {navLinks.map((link, i) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.label ? null : link.label
                        )
                      }
                      className="w-full flex items-center justify-between py-3 text-xl font-semibold text-gray-900 hover:text-primary transition-colors"
                    >
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        {link.icon && (
                          <span className="text-primary/60">{link.icon}</span>
                        )}
                        {link.label}
                      </motion.span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
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
                          className="overflow-hidden pl-4 border-l-2 border-primary/20 mb-2"
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 text-base font-medium text-gray-700 hover:text-primary transition-colors"
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
                    className="block py-3 text-xl font-semibold text-gray-900 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </motion.a>
                )
              )}

              {/* Divider */}
              <div className="h-px bg-gray-100 my-3" />

              {/* For Providers link */}
              <a
                href="/partner-with-us"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 py-2.5 text-base font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <Users className="h-4 w-4" />
                For Providers / Partners
                <ArrowUpRight className="h-4 w-4" />
              </a>

              {/* Book Consultation */}
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex h-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
