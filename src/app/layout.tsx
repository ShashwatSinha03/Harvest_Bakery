import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harvest Bakery | Slow mornings. Fresh bread. Honest coffee.",
  description: "Experience the organic, warm, and premium handcrafted bakery in the heart of the city.",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <div className="grain-overlay" />
        <div className="soft-vignette" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
