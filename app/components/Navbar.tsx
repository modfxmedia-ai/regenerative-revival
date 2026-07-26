"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { navLinks, type DropMenu } from "../lib/nav-menus";

/* ── Premium mega-dropdown panel ─────────────────────────────── */
function MegaDropdown({
  menu,
  onEnter,
  onLeave,
}: {
  menu: DropMenu;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute top-full mt-3 w-[640px] rounded-[1.5rem] bg-white/95 backdrop-blur-2xl shadow-[0_32px_80px_-16px_rgba(88,53,99,0.28)] border border-[#F1ECF8] overflow-hidden z-50 ${
        menu.align === "right" ? "right-0" : "left-0"
      }`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Top gradient accent */}
      <div className="h-1 bg-gradient-to-r from-[#6762AF] via-[#71A7F5] to-[#345691]" />

      <div className="grid grid-cols-[1.35fr_1fr]">
        {/* Icon-tile links */}
        <div className="p-3">
          {menu.items.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
              className="group flex items-start gap-3.5 rounded-2xl px-3.5 py-3 hover:bg-[#F4EFFA] transition-colors"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1ECF8] text-[#6762AF] group-hover:bg-gradient-to-br group-hover:from-[#6762AF] group-hover:to-[#4F4A8E] group-hover:text-white transition-all duration-300">
                <item.icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
              </span>
              <div className="flex-1 min-w-0">
                <span className="flex items-center gap-1 text-[14px] font-semibold text-[#1A1F30] group-hover:text-[#583563] transition-colors">
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#C5DBF7] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#6762AF] transition-all" />
                </span>
                <span className="block text-[12px] text-[#7A7F95] leading-snug mt-0.5">
                  {item.desc}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Featured promo */}
        <a
          href={menu.featured.href}
          className={`group relative m-3 rounded-[1.25rem] overflow-hidden bg-gradient-to-br ${menu.featured.frame} p-6 flex flex-col justify-between animate-gradient`}
          style={{ backgroundSize: "180% 180%" }}
        >
          {/* noise / glow */}
          <span className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/15 blur-2xl pointer-events-none" />
          <div className="relative">
            <Sparkles className="h-6 w-6 text-white/90 mb-3" />
            <h4 className="font-[family-name:var(--font-poppins)] font-semibold text-[18px] text-white leading-snug">
              {menu.featured.title}
            </h4>
            <p className="mt-2 text-[12.5px] text-white/75 leading-relaxed">
              {menu.featured.desc}
            </p>
          </div>
          <span className="relative mt-5 inline-flex items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-[12.5px] font-semibold text-[#1A1F30] group-hover:gap-2.5 transition-all">
            {menu.featured.cta}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
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
            {/* Logo + trademark tagline */}
            <a href="/" className="flex items-center gap-3 shrink-0 group">
              <Image
                src="/logo.png"
                alt="Regenerative Revival®"
                width={180}
                height={64}
                className={`h-14 w-auto transition-all duration-500 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
              <span
                className={`hidden sm:block text-[12px] font-medium italic tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-[#6762AF]" : "text-white/75"
                }`}
              >
                got stem cells?™
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
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
                      <MegaDropdown
                        menu={link.dropdown}
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
              {/* Take The Quiz CTA - primary action */}
              <a
                href="/consult-router"
                className={`hidden md:inline-flex h-11 items-center gap-1.5 rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "btn-gradient text-white"
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
                          {link.dropdown.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 py-2.5 text-sm font-medium text-[#4A4F66] hover:text-[#583563] transition-colors"
                            >
                              <item.icon className="h-4 w-4 text-[#6762AF]" strokeWidth={1.9} />
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
                className="btn-gradient mt-2 flex h-14 items-center justify-center gap-2 text-base font-semibold text-white"
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
