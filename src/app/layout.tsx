import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhijeet Singh — Full-Stack Developer & Business Technology Engineer",
  description:
    "Full-stack developer and automation engineer shipping production systems across PCL Construction, NWMO, Loblaw Companies Limited, and AI-native platforms like Spot2Go.",
  authors: [{ name: "Abhijeet Singh" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Abhijeet Singh — Systems & Automation Engineer",
    description:
      "Production systems across enterprise IT infrastructure, federally regulated environments, national retail supply chains, and AI-native products.",
    type: "website",
    url: "https://abhijeet.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhijeet Singh — Systems & Automation Engineer",
    description:
      "PCL Construction · ex-NWMO · ex-Loblaw · Founder of Spot2Go.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090A0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-obsidian-950 text-alabaster font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
