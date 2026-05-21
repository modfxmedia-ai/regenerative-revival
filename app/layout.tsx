import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import UtmCapture from "./components/UtmCapture";
import { JsonLd, organizationSchema, localBusinessSchema } from "./lib/schema";

// Body sans — Inter (clean, neutral)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Display serif — Fraunces (luxury, slightly editorial — closest match to the
// elegant italic "Regenerative" treatment in the v3 brand book)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Regenerative Revival | Concierge Hub for Regeneration & Longevity",
  description:
    "Regenerative therapy in your home. Hormones, peptides, and NAD+ through telehealth. One physician-led medical team, one record, one plan for the best decade of your life.",
  keywords: [
    "regenerative medicine",
    "stem cell therapy",
    "Wharton's Jelly",
    "exosome therapy",
    "NAD+ therapy",
    "peptides",
    "hormone optimization",
    "longevity medicine",
    "concierge medicine",
  ],
  alternates: {
    canonical: "https://www.regenerativerevival.com",
  },
  openGraph: {
    title: "Regenerative Revival | Concierge Hub for Regeneration & Longevity",
    description:
      "One physician-led medical team. Regenerative therapy at home, plus telehealth for hormones, peptides, and NAD+.",
    url: "https://www.regenerativerevival.com",
    siteName: "Regenerative Revival",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenerative Revival | Concierge Hub for Regeneration & Longevity",
    description:
      "One physician-led medical team. Regenerative therapy at home, plus telehealth for hormones, peptides, and NAD+.",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} antialiased bg-white text-[#1A1F30]`}
      >
        <GoogleAnalytics />
        <UtmCapture />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
