import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UI/UX Design Services Kochi | Product Design — Codefynix",
  description: "Research-led UI/UX design by Codefynix in Kochi. We design intuitive interfaces that convert visitors and delight users.",
};

export default function UiUxDesignPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">UI/UX Design Services in Kochi</h1>
      <p className="text-lg text-gray-300 mb-6">
        Craft engaging digital experiences with Codefynix's UI/UX design services. Based in Kochi, our design team focuses on creating intuitive, user-centric interfaces that drive engagement and business growth.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Design That Solves Problems</h2>
      <p className="text-gray-400 mb-6">
        We believe that great design is more than just aesthetics. We employ research-driven methodologies to understand your users, wireframe solutions, and deliver polished designs that enhance usability.
      </p>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Our Design Process</h3>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-12">
        <li>User research and journey mapping</li>
        <li>Wireframing and rapid prototyping</li>
        <li>High-fidelity UI design (Figma)</li>
        <li>Usability testing and design iteration</li>
      </ul>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Discuss Your Design Needs
      </Link>
    </div>
  );
}
