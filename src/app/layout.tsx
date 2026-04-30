import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlobalEffects from "@/components/GlobalEffects";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      <body className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
        <Navigation />
        {children}
        <Footer />
        <GlobalEffects />
        <Analytics />
      </body>
    </html>
  );
}
