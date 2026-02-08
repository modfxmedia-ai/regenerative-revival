import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
