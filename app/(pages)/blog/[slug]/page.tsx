import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://codefynix.com/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-wrap bg-white pt-36">
      <div className="section-inner max-w-4xl">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 70vw" />
        </div>
        <p className="mt-6 font-accent text-xs uppercase tracking-[0.15em] text-[#5BBF1A]">{post.publishedAt}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-[#111111]">{post.title}</h1>
        <p className="mt-6 font-body leading-8 text-[#666666]">{post.content}</p>
      </div>
    </article>
  );
}
