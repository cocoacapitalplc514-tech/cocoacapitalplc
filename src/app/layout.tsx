import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { NAV_ITEMS_WITH_DISCLOSURES } from "@/lib/navigation";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F2" },
    { media: "(prefers-color-scheme: dark)", color: "#3B2418" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Structured capital for Ghana’s cocoa sector`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Cocoa Capital PLC",
    "COCOBOD",
    "Ghana Fixed Income Market",
    "Commercial Paper",
    "Bonds",
    "Note Issuance Programme",
    "cocoa financing Ghana",
    "investor relations",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Structured capital for Ghana’s cocoa sector`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Structured capital for Ghana’s cocoa sector`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Structured capital for Ghana’s cocoa sector`,
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
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
        className={`${manrope.variable} ${cormorant.variable} min-h-screen bg-cream font-sans text-cocoa antialiased`}
      >
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-cocoa"
        >
          Skip to main content
        </a>
        <Navbar items={NAV_ITEMS_WITH_DISCLOSURES} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
