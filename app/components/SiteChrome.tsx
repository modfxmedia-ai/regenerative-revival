"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Routes that render their own full-page chrome (custom nav + footer)
// and therefore should NOT show the global Regenerative Revival header/footer.
const FULL_CUSTOM_ROUTES = ["/clp", "/playing-overseas"];

function isCustom(pathname: string | null): boolean {
  if (!pathname) return false;
  return FULL_CUSTOM_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export function SiteNavbar() {
  const pathname = usePathname();
  if (isCustom(pathname)) return null;
  return <Navbar />;
}

export function SiteFooter() {
  const pathname = usePathname();
  if (isCustom(pathname)) return null;
  return <Footer />;
}
