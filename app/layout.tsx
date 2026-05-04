import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import "@/styles/cursor.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import HaloCursor from "@/components/HaloCursor";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Codefynix | IT Company in Kochi — Web Development, SEO & Automation",
    template: "%s | Codefynix"
  },
  description: "Codefynix is a Kochi-based IT company offering SEO-optimized websites, web apps, CRM systems, WhatsApp automation, Shopify development, and UI/UX design.",
  keywords: ["IT company Kochi", "web development Kerala", "SEO agency India", "WhatsApp automation", "CRM development", "Next.js agency India", "Shopify developer Kerala"],
  metadataBase: new URL("https://www.codefynix.com"),
  alternates: { canonical: "https://www.codefynix.com" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.codefynix.com",
    siteName: "Codefynix",
    title: "Codefynix | IT Company in Kochi",
    description: "Kochi-based IT company delivering websites, web apps, CRM, WhatsApp automation & design.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Codefynix IT Solutions" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Codefynix | IT Company in Kochi",
    description: "SEO websites, web apps, CRM, WhatsApp automation & UI/UX design in Kochi, Kerala.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
}

import SchemaMarkup from "@/components/SchemaMarkup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <SchemaMarkup />
        <Providers>
          <HaloCursor />
          <Header />
          <main id="main-content" className="min-h-screen pt-0">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
