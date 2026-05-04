import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Codefynix | IT Solutions — Web Development, SEO, CRM & Automation",
  description:
    "Codefynix is a full-service IT solutions company delivering SEO-optimized websites, scalable mobile/web applications, custom CRM systems, WhatsApp automation, video editing, and graphic design to drive growth and digital success.",
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
    url: "https://codefynix.com",
    siteName: "Codefynix",
    images: [{ url: "/logo.jpeg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codefynix | IT Solutions",
    description:
      "Web development, SEO, CRM and automation services for growth-focused brands.",
    images: ["/logo.jpeg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://codefynix.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ITService",
  name: "Codefynix",
  description: "IT solutions company offering web development, SEO, CRM, and automation.",
  url: "https://codefynix.com",
  logo: "https://codefynix.com/logo.png",
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
