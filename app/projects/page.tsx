import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore recent websites, applications, design systems, and automation projects by Codefynix.",
  alternates: { canonical: "https://codefynix.com/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="section-wrap bg-[#F5F5F5] pt-36">
      <div className="section-inner">
        <p className="section-tag">Project Portfolio</p>
        <h1 className="section-title">Solutions We Crafted for Ambitious Brands</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-2xl bg-white">
              <div className="relative h-52">
                <Image src={project.image} alt={project.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <p className="font-accent text-xs uppercase tracking-[0.15em] text-[#5BBF1A]">{project.category}</p>
                <h2 className="mt-2 font-heading text-xl font-semibold">{project.name}</h2>
                <p className="mt-2 font-body text-sm text-[#666666]">{project.summary}</p>
                <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#5BBF1A]">
                  View Project →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
