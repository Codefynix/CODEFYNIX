"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { blogPosts } from "@/lib/site-data";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";

export default function Blog() {
  useEffect(() => {
    ensureGsapPlugins();
    gsap.fromTo(
      ".blog-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#blog-home",
          start: "top 72%",
        },
      },
    );
  }, []);

  return (
    <section id="blog-home" className="section-wrap bg-white">
      <div className="section-inner">
        <p className="section-tag">Blog & Articles</p>
        <h2 className="section-title">News & Updates from Codefynix</h2>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 6).map((post) => (
            <article key={post.slug} className="blog-card overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              <div className="relative h-52">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="font-accent text-xs uppercase tracking-[0.2em] text-[#5BBF1A]">{post.publishedAt}</p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-[#111111] transition hover:text-[#5BBF1A]">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-3 font-body text-sm text-[#666666]">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#5BBF1A]">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-full border border-[#5BBF1A] px-6 py-3 font-semibold text-[#5BBF1A] transition hover:bg-[#5BBF1A] hover:text-white"
          >
            See More Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
