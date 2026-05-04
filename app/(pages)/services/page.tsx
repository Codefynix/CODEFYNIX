import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | IT Solutions in Kochi — Codefynix",
  description: "Explore Codefynix's full range of IT services in Kochi: SEO websites, web apps, CRM, WhatsApp automation, Shopify, e-commerce, and UI/UX design.",
};

export default function ServicesPage() {
  const services = [
    { name: "SEO Websites", href: "/services/seo-websites", desc: "Get high-ranking, fast SEO websites built for visibility and growth." },
    { name: "Web Apps", href: "/services/web-apps", desc: "Scalable web applications built with Next.js and modern stacks." },
    { name: "CRM Development", href: "/services/crm", desc: "Custom CRM systems built to streamline your sales pipeline." },
    { name: "WhatsApp Automation", href: "/services/whatsapp-automation", desc: "Automate your WhatsApp business with smart bots and campaigns." },
    { name: "Shopify Development", href: "/services/shopify", desc: "Custom Shopify storefronts, themes, and headless builds." },
    { name: "E-Commerce", href: "/services/ecommerce", desc: "High-converting e-commerce stores with secure checkout." },
    { name: "UI/UX Design", href: "/services/ui-ux-design", desc: "Research-led UI/UX design for intuitive interfaces that convert." },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">IT Services in Kochi, Kerala</h1>
      <p className="text-lg text-gray-300 mb-12">
        Codefynix provides comprehensive IT solutions for businesses in Kochi, across Kerala, and India. Discover how our digital services can help you scale.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map(s => (
          <Link key={s.href} href={s.href} className="block p-6 rounded-2xl bg-white/5 border border-[#7DD63A]/20 hover:border-[#7DD63A]/50 transition-colors">
            <h2 className="text-xl font-semibold mb-3 text-white">{s.name}</h2>
            <p className="text-gray-400">{s.desc}</p>
          </Link>
        ))}
      </div>

      <div className="bg-[#5BBF1A]/10 p-8 rounded-2xl border border-[#5BBF1A]/30 text-center">
        <h3 className="text-2xl font-bold mb-4 text-white">Ready to start your project?</h3>
        <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg shadow-lg hover:shadow-[#5BBF1A]/50 transition-all">
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
