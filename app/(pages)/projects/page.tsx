import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work & Projects | Codefynix Portfolio — Kochi",
  description: "Explore Codefynix's portfolio of websites, web apps, CRM systems, and design projects delivered for clients across India.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">Our Projects & Work Portfolio</h1>
      <p className="text-lg text-gray-300 mb-6">
        Discover the impactful digital solutions we've built for our clients. From high-speed web apps to comprehensive CRM integrations, Codefynix delivers excellence.
      </p>
      
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Portfolio Coming Soon</h2>
        <p className="text-gray-400">
          We are currently updating our portfolio showcase with our latest Next.js and automation projects. Check back soon!
        </p>
      </div>

      <p className="text-gray-300 mb-12 text-center">
        Want to see relevant case studies for your industry?
      </p>
      <div className="text-center">
        <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
          Request Case Studies
        </Link>
      </div>
    </div>
  );
}
