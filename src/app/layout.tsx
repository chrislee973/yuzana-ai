import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlobalEffects from "@/components/GlobalEffects";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "YUZANA.AI - Security That Holds. Under Real Pressure.",
  description:
    "Security advisory, architecture, and executive alignment for leaders operating under real pressure in complex, high-stakes environments.",
  openGraph: {
    title: "YUZANA.AI - Security That Holds. Under Real Pressure.",
    description:
      "Security advisory, architecture, and executive alignment for leaders operating under real pressure in complex, high-stakes environments.",
    url: "https://yuzana.ai",
    siteName: "YUZANA.AI",
    images: [
      {
        url: "https://yuzana.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuzana",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YUZANA.AI - Security That Holds. Under Real Pressure.",
    description:
      "Security advisory, architecture, and executive alignment for leaders operating under real pressure in complex, high-stakes environments.",
    images: ["https://yuzana.ai/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable}`}>
        <Navigation />
        {children}
        <Footer />
        <GlobalEffects />
        <Analytics />
      </body>
    </html>
  );
}
