import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `https://codefynix.com/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <section className="section-wrap bg-white pt-36">
      <div className="section-inner max-w-5xl">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image src={project.image} alt={project.name} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 70vw" />
        </div>
        <p className="mt-6 font-accent text-xs uppercase tracking-[0.15em] text-[#5BBF1A]">{project.category}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold">{project.name}</h1>
        <p className="mt-4 font-body text-[#666666]">{project.summary}</p>
        <p className="mt-4 font-body text-[#666666]">
          This engagement included discovery workshops, implementation sprints, stakeholder
          reporting, performance improvements, and post-launch support to ensure measurable
          business outcomes.
        </p>
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-full hover:brightness-110 hover:shadow-[0_0_20px_rgba(91,191,26,0.35)] transition-all duration-300"
        >
          Visit Project →
        </a>
      </div>
    </section>
  );
}
