import type { Metadata } from "next";
import { projects } from "@/lib/site-data";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Our Work & Projects | Codefynix Portfolio — Kochi",
  description:
    "Explore Codefynix's portfolio of websites, web apps, CRM systems, and design projects delivered for clients across India.",
};

const placeholderProjects = [
  {
    slug: "whatsapp-crm",
    name: "WhatsApp CRM",
    category: "Web Apps",
    image: "/projects/whatsappcrm1.png",
  },
];

const allProjects = [...projects.slice(0, 8), ...placeholderProjects];

const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] pt-28 pb-24 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <span className="inline-block bg-[#192614] text-[#9AE764] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
          Our Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5">
          Work That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5BBF1A] to-[#B2EB75]">
            Speaks
          </span>{" "}
          for Itself
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          From high-speed web apps to comprehensive CRM integrations — every project built with precision and purpose.
        </p>
      </div>

      {/* Category Filter — client island */}
      <ProjectsGrid allProjects={allProjects} categories={categories} />
    </main>
  );
}