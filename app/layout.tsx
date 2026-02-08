import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
    "Reviving health through cutting-edge regenerative medicine. Wharton's Jelly stem cell therapy for pain relief, tissue repair, and total body renewal.",
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
  openGraph: {
    title: "Regenerative Revival | Advanced Stem Cell Therapy",
    description:
      "Cutting-edge regenerative medicine powered by Wharton's Jelly stem cell therapy.",
    url: "https://www.regenerativerevival.com",
    siteName: "Regenerative Revival",
    type: "website",
  },
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
