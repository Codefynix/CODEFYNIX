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
import { ThemeProvider } from "@/context/ThemeContext";

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
  metadataBase: new URL("https://codefynix.com"),
  manifest: "/manifest.json",
  title: {
    default: "Codefynix | IT Solutions, Web Development & Automation",
    template: "%s | Codefynix",
  },
  description:
    "Codefynix is a full-service IT solutions company offering SEO websites, web apps, CRM systems, WhatsApp automation, design, and growth services.",
  keywords: [
    "IT solutions",
    "web development",
    "SEO",
    "CRM",
    "WhatsApp automation",
    "Next.js",
    "graphic design",
  ],
  openGraph: {
    title: "Codefynix | IT Solutions",
    description:
      "Premium IT solutions for growth-focused businesses. Websites, apps, CRM, and automation.",
    url: "https://codefynix.com",
    siteName: "Codefynix",
    images: [{ url: "/logo.jpeg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codefynix | IT Solutions",
    description:
      "Web development, SEO, CRM and automation solutions tailored to your business.",
    images: ["/logo.jpeg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://codefynix.com" },
};

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
        <ThemeProvider>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
