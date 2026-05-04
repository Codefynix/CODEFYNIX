import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhatsApp Automation Services India | Business Bots — Codefynix",
  description: "Automate your WhatsApp business with smart bots, campaign automation, and CRM-linked messaging. Serving businesses across India.",
};

export default function WhatsappAutomationPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">WhatsApp Automation for Businesses in India</h1>
      <p className="text-lg text-gray-300 mb-6">
        Transform your customer support and marketing with Codefynix's WhatsApp automation services. We help businesses in Kochi and across India deploy smart bots and automated workflows via the WhatsApp Business API.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Scale Your Communication</h2>
      <p className="text-gray-400 mb-6">
        With WhatsApp being the most popular messaging app in India, leveraging automation allows you to provide 24/7 support, send targeted promotional campaigns, and qualify leads instantly.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Our Automation Solutions</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
        <li>Intelligent Chatbots with natural language processing</li>
        <li>Automated order updates and booking confirmations</li>
        <li>CRM integrations for seamless data sync</li>
        <li>Bulk messaging and marketing campaigns</li>
      </ul>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Automate Your WhatsApp Today
      </Link>
    </div>
  );
}
