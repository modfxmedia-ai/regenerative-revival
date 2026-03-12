import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { JsonLd, organizationSchema, localBusinessSchema } from "./lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Regenerative Revival | Advanced Stem Cell Therapy & Regenerative Medicine",
  description:
    "Reviving health through cutting-edge regenerative medicine. Wharton's Jelly stem cell therapy for pain relief, tissue repair, and total body renewal. Book your free consultation today.",
  keywords: [
    "stem cell therapy",
    "regenerative medicine",
    "Wharton's Jelly",
    "stem cell treatment",
    "pain relief",
    "tissue regeneration",
    "buy stem cells",
    "regenerative revival",
  ],
  alternates: {
    canonical: "https://www.regenerativerevival.com",
  },
  openGraph: {
    title: "Regenerative Revival | Advanced Stem Cell Therapy",
    description:
      "Cutting-edge regenerative medicine powered by Wharton's Jelly stem cell therapy.",
    url: "https://www.regenerativerevival.com",
    siteName: "Regenerative Revival",
    type: "website",
    images: [
      {
        url: "https://www.regenerativerevival.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Regenerative Revival",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenerative Revival | Advanced Stem Cell Therapy",
    description:
      "Cutting-edge regenerative medicine powered by Wharton's Jelly stem cell therapy.",
    images: ["https://www.regenerativerevival.com/logo.png"],
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
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <GoogleAnalytics />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
