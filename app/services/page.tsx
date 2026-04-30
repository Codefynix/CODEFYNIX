import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Codefynix services including web development, SEO, CRM systems, WhatsApp automation, UI/UX, and creative design.",
  alternates: { canonical: "https://codefynix.com/services" },
};

export default function ServicesPage() {
  return (
    <section className="section-wrap bg-[#F5F5F5] pt-36">
      <div className="section-inner">
        <p className="section-tag">All Services</p>
        <h1 className="section-title">Digital Solutions Built for Real Growth</h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="relative h-48">
                <Image src={service.image} alt={service.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-[#5BBF1A]/15 px-3 py-1 font-accent text-xs text-[#3D8A0E]">{service.category}</span>
                <h2 className="mt-3 font-heading text-xl font-semibold">{service.name}</h2>
                <p className="mt-2 font-body text-sm text-[#666666]">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#5BBF1A]">
                  View Service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
