import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: { canonical: `https://codefynix.com/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="section-wrap bg-white pt-36">
      <div className="section-inner max-w-5xl">
        <div className="relative h-72 overflow-hidden rounded-2xl">
          <Image src={service.image} alt={service.name} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 70vw" />
        </div>
        <span className="mt-6 inline-block rounded-full bg-[#5BBF1A]/15 px-3 py-1 font-accent text-xs text-[#3D8A0E]">
          {service.category}
        </span>
        <h1 className="mt-4 font-heading text-4xl font-bold text-[#111111]">{service.name}</h1>
        <p className="mt-4 font-body text-[#666666]">{service.details}</p>
        <p className="mt-4 font-body text-[#666666]">
          Our delivery model includes discovery, UI/UX planning, iterative development, quality
          assurance, and measurable post-launch improvements tailored to your business objectives.
        </p>
      </div>
    </section>
  );
}
