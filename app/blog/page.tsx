import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read latest insights from Codefynix on web development, SEO, automation, product design, and digital growth.",
  alternates: { canonical: "https://codefynix.com/blog" },
};

export default function BlogPage() {
  return (
    <section className="section-wrap bg-white pt-36">
      <div className="section-inner">
        <p className="section-tag">Blog & Articles</p>
        <h1 className="section-title">Insights, Tips, and Product Thinking</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-2xl border border-zinc-200">
              <div className="relative h-52">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="font-accent text-xs uppercase tracking-[0.15em] text-[#5BBF1A]">{post.publishedAt}</p>
                <h2 className="mt-2 font-heading text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 font-body text-sm text-[#666666]">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#5BBF1A]">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
