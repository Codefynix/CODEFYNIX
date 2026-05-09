import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Codefynix | IT Solutions — Web Development, SEO, CRM & Automation",
  description:
    "Grow your business with Codefynix—SEO websites, mobile/web apps, CRM systems, WhatsApp automation, video editing, and graphic design services.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile app development",
    "SEO",
    "CRM",
    "WhatsApp automation",
    "Next.js",
    "graphic design",
  ],
  openGraph: {
    title: "Codefynix | IT Solutions",
    description:
      "Codefynix offers SEO websites, mobile/web apps, CRM systems, and digital automation for ambitious businesses.",
    url: "https://www.codefynix.com",
    siteName: "Codefynix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codefynix | IT Solutions",
    description:
      "Web development, SEO, CRM and automation services for growth-focused brands.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.codefynix.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ITService",
  name: "Codefynix",
  description: "IT solutions company offering web development, SEO, CRM, and automation.",
  url: "https://www.codefynix.com",
  logo: "https://www.codefynix.com/codefynix-mark.png",
  contactPoint: { "@type": "ContactPoint", contactType: "customer service" },
  sameAs: ["https://linkedin.com/company/codefynix", "https://instagram.com/codefynix"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomePage />
    </>
  );
}
