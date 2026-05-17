"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  slug: string;
  name: string;
  category: string;
  image: string;
  link?: string;
};

export default function ProjectsGrid({
  allProjects,
  categories,
}: {
  allProjects: Project[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
              active === cat
                ? "bg-[#5BBF1A] border-[#5BBF1A] text-white"
                : "border-white/15 text-gray-400 hover:border-[#5BBF1A]/60 hover:text-[#9AE764]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, idx) => (
          <a key={project.slug} href={project.link || "#"} target="_blank">
          <article
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111318] hover:border-[#5BBF1A]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(91,191,26,0.08)]"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Index badge */}
              <span className="absolute top-4 left-4 text-xs font-mono font-bold text-white/30">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {/* Category pill */}
              <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 text-[#9AE764] text-xs font-semibold px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-white font-semibold text-lg mb-1 group-hover:text-[#9AE764] transition-colors duration-200">
                {project.name}
              </h2>

              {/* Progress accent bar */}
              <div className="mt-4 h-[2px] w-full rounded-full bg-white/8">
                <div
                  className="h-[2px] rounded-full bg-gradient-to-r from-[#5BBF1A] via-[#7DD63A] to-[#B2EB75] transition-all duration-500 group-hover:w-full!"
                  style={{ width: idx % 2 === 0 ? "45%" : "70%" }}
                />
              </div>
            </div>
          </article>
          </a>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No projects in this category yet.
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-5">Have a project in mind?</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#5BBF1A] to-[#3D8A0E] text-white font-bold rounded-full transition hover:brightness-110 hover:shadow-[0_0_20px_rgba(91,191,26,0.35)]"
        >
          Let&apos;s Build Together →
        </Link>
      </div>
    </div>
  );
}