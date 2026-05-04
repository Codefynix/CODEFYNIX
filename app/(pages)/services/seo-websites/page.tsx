import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Optimized Website Development in Kochi | Codefynix",
  description: "Get high-ranking, fast SEO websites built in Kochi by Codefynix. We engineer websites for visibility, performance, and measurable business growth.",
};

export default function SeoWebsitesPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">SEO Optimized Website Development in Kochi</h1>
      <p className="text-lg text-gray-300 mb-6">
        At Codefynix, we specialize in building fast, responsive, and highly optimized websites designed to rank on Google. Based in Kochi, Kerala, we help businesses establish a strong digital presence that drives organic traffic and generates leads.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Why Choose Our SEO Website Services?</h2>
      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
        <li>Lightning-fast load times with Next.js</li>
        <li>Built-in technical SEO best practices</li>
        <li>Mobile-responsive and accessible designs</li>
        <li>Strategic content structuring for target keywords in India</li>
      </ul>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Dominate the Kochi Market</h3>
      <p className="text-gray-300 mb-12">
        Whether you are a startup in Infopark or a retail business across India, our SEO-optimized website development will give you the competitive edge.
      </p>
      <Link href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-lg">
        Start Your SEO Journey
      </Link>
    </div>
  );
}
