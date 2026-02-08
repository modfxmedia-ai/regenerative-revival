"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "For Businesses", href: "#partners" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            <a href="#" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Regenerative Revival"
                className="h-16 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-gray-600 hover:text-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="tel:+1234567890"
                className={`hidden sm:flex items-center gap-2 text-sm transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-primary"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </a>
              <a
                href="#contact"
                className={`hidden md:inline-flex h-10 items-center rounded-full px-6 text-sm font-semibold transition-all ${
                  scrolled
                    ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
                    : "bg-white/15 backdrop-blur-md text-white border border-white/20 hover:bg-white/25"
                }`}
              >
                Book Consultation
              </a>
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-gray-900 hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex h-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white"
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
