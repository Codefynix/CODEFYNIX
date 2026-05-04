import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom CRM Development Kochi | CRM Solutions — Codefynix",
  description: "Custom CRM systems built in Kochi to streamline your sales pipeline, customer data, and business operations.",
};

export default function CrmPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">CRM Development Services in Kochi</h1>
      <p className="text-lg text-gray-300 mb-6">
        Streamline your operations with custom CRM solutions by Codefynix. We design and develop Customer Relationship Management systems tailored to your unique business workflows right here in Kochi, Kerala.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Why a Custom CRM?</h2>
      <p className="text-gray-400 mb-6">
        Off-the-shelf CRMs often include bloated features you don't need or lack specific integrations. Our custom CRMs are built strictly around your sales pipeline, integrating seamlessly with your existing tools.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Features We Build</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
        <li>Lead and pipeline management</li>
        <li>Automated follow-ups and notifications</li>
        <li>Advanced analytics and custom reporting dashboards</li>
        <li>Integration with WhatsApp, Email, and internal APIs</li>
      </ul>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Get a CRM Consultation
      </Link>
    </div>
  );
}
