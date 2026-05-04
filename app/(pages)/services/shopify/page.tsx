import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopify Development Kochi | Custom Shopify Stores — Codefynix",
  description: "Custom Shopify storefronts, themes, and headless builds by Codefynix in Kochi. Built to convert visitors into customers.",
};

export default function ShopifyPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">Shopify Development Services in Kochi</h1>
      <p className="text-lg text-gray-300 mb-6">
        Codefynix provides expert Shopify development services in Kochi, Kerala. We build high-converting, visually stunning e-commerce stores that help brands scale online.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Custom Stores That Convert</h2>
      <p className="text-gray-400 mb-6">
        Our team goes beyond basic templates. We create custom Shopify themes, integrate third-party apps, and optimize your store for speed and SEO to maximize your return on investment.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">What We Offer</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
        <li>Custom theme design and development</li>
        <li>Store setup and configuration</li>
        <li>App integrations and bespoke functionality</li>
        <li>Headless Shopify development with Next.js</li>
      </ul>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Build Your Shopify Store
      </Link>
    </div>
  );
}
