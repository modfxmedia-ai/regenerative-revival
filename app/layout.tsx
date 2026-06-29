import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import UtmCapture from "./components/UtmCapture";
import EverflowCapture from "./components/EverflowCapture";
import { JsonLd, organizationSchema, localBusinessSchema } from "./lib/schema";

// Poppins — primary font for all headings and body text
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Regenerative Revival | Stem Cell Therapy, Peptides & Longevity Medicine",
  description:
    "In-home stem cell therapy and nationwide telehealth for peptides, hormones, and NAD+. One physician-led medical team, one patient record, one plan for the best decade of your life.",
  keywords: [
    "regenerative medicine",
    "stem cell therapy",
    "peptide therapy",
    "NAD+ therapy",
    "compounded semaglutide",
    "hormone optimization",
    "Wharton's Jelly",
    "concierge medicine",
    "longevity medicine",
    "telehealth",
  ],
  alternates: {
    canonical: "https://www.regenerativerevival.com",
  },
  openGraph: {
    title: "Regenerative Revival | Stem Cell Therapy, Peptides & Longevity Medicine",
    description:
      "In-home stem cell therapy and nationwide telehealth for peptides, hormones, and NAD+. One physician-led medical team.",
    url: "https://www.regenerativerevival.com",
    siteName: "Regenerative Revival",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenerative Revival | Stem Cell Therapy, Peptides & Longevity Medicine",
    description:
      "In-home stem cell therapy and nationwide telehealth for peptides, hormones, and NAD+. One physician-led medical team.",
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
      <head>
        <meta
          name="ahrefs-site-verification"
          content="860ee78bbd3510a9f7de6aa645b16cc796ddb986b5baa867c609ca40ba805e93"
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="cvy7YBrUuNdzaeWFmx7Pqw"
          strategy="afterInteractive"
          async
        />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-white text-[#1A1F30]`}
      >
        <GoogleAnalytics />
        <UtmCapture />
        <EverflowCapture />
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
