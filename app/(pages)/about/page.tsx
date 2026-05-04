import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Codefynix | IT Company in Kochi, Kerala",
  description: "Learn about Codefynix — a Kochi-based IT company helping businesses across India grow with modern websites, web apps, automation, and design.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">About Codefynix — IT Company in Kochi, Kerala</h1>
      <p className="text-lg text-gray-300 mb-6">
        Codefynix is a forward-thinking IT solutions company based in Kochi, Kerala. We partner with startups, SMEs, and enterprises across India to deliver transformative digital products.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Our Mission</h2>
      <p className="text-gray-400 mb-6">
        Our mission is to empower businesses with scalable technology. Whether it's an SEO-optimized website, a complex web application, or automated CRM workflows, we engineer solutions that generate measurable ROI.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Why Partner With Us?</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
        <li>Deep expertise in modern stacks (Next.js, Node.js)</li>
        <li>A business-first approach to software development</li>
        <li>Transparent communication and agile delivery</li>
        <li>Dedicated ongoing support and maintenance</li>
      </ul>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Get in Touch With Our Team
      </Link>
    </div>
  );
}
