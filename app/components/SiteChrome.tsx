"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Routes that render their own full-page chrome (custom nav + footer)
// and therefore should NOT show the global Regenerative Revival header/footer.
const FULL_CUSTOM_ROUTES = ["/clp", "/playing-overseas"];

// Routes that should hide the global header/nav only (focused landing pages
// where we don't want visitors navigating away before they take action).
const NAV_HIDDEN_ROUTES = ["/dell-webb-rsvp", "/pre-screen"];

function matchesRoute(pathname: string | null, routes: string[]): boolean {
  if (!pathname) return false;
  return routes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

function isCustom(pathname: string | null): boolean {
  return matchesRoute(pathname, FULL_CUSTOM_ROUTES);
}

export function SiteNavbar() {
  const pathname = usePathname();
  if (isCustom(pathname)) return null;
  if (matchesRoute(pathname, NAV_HIDDEN_ROUTES)) return null;
  return <Navbar />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (isCustom(pathname)) return null;
  return <Footer />;
}
