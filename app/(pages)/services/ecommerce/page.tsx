import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Commerce Development Kochi | Online Store Solutions — Codefynix",
  description: "High-converting e-commerce stores with secure checkout and growth analytics. Built by Codefynix, Kochi's trusted e-commerce development team.",
};

export default function EcommercePage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">E-Commerce Development in Kochi, Kerala</h1>
      <p className="text-lg text-gray-300 mb-6">
        Launch a powerful online store with Codefynix's e-commerce development solutions. We create scalable and secure e-commerce platforms that drive sales and enhance the shopping experience.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Built for Growth</h2>
      <p className="text-gray-400 mb-6">
        From custom product catalogs to robust payment gateway integrations, we ensure that your online store is optimized for conversions across all devices. We partner with businesses in Kochi and nationwide to achieve digital commerce success.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Our E-Commerce Expertise</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
        <li>Custom e-commerce platforms using Next.js and Node.js</li>
        <li>WooCommerce and custom WordPress integrations</li>
        <li>Secure payment processing (Razorpay, Stripe, etc.)</li>
        <li>Inventory and order management systems</li>
      </ul>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Start Selling Online
      </Link>
    </div>
  );
}
