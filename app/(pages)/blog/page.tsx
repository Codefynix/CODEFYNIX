import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | IT Tips, Web Development & SEO Insights — Codefynix",
  description: "Read the Codefynix blog for insights on web development, SEO, CRM, WhatsApp automation, and IT trends for businesses in India.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "Why Codefynix is the Best IT Company in Kochi for Your Business",
      slug: "it-company-kochi-why-codefynix",
      excerpt: "Discover why local and national businesses are choosing Codefynix for their tech needs.",
    },
    {
      title: "How WhatsApp Automation Can Transform Small Businesses in India",
      slug: "whatsapp-automation-small-business-india",
      excerpt: "Learn the benefits of using WhatsApp API to automate sales and customer support.",
    },
    {
      title: "Next.js Web Development: Why Kerala Businesses Are Choosing It in 2025",
      slug: "nextjs-web-development-kerala",
      excerpt: "Explore the SEO and performance advantages of moving your web app to Next.js.",
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#7DD63A]">Codefynix Blog — IT Insights for Growing Businesses</h1>
      <p className="text-lg text-gray-300 mb-12">
        Stay updated with the latest trends in web development, SEO strategies, CRM implementations, and business automation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#7DD63A]/50 transition-colors">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <span className="text-[#7DD63A] font-semibold text-sm">Read Article →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
