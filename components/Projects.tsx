"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { projects } from "@/lib/site-data";

const filters = ["All", "Websites", "Web Apps", "CRM", "Design", "Automation"] as const;

export default function Projects() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const isotopeRef = useRef<{
    arrange: (options: { filter: string }) => void;
    destroy: () => void;
  } | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!gridRef.current) return;
      const Isotope = (await import("isotope-layout")).default;
      if (!mounted) return;

      isotopeRef.current = new Isotope(gridRef.current, {
        itemSelector: ".project-item",
        layoutMode: "masonry",
        percentPosition: true,
        masonry: { gutter: 20 },
      });
    })();

    return () => {
      mounted = false;
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!isotopeRef.current) return;
    const value = activeFilter === "All" ? "*" : `.${activeFilter.replace(/\s+/g, "-")}`;
    isotopeRef.current.arrange({ filter: value });
  }, [activeFilter]);

  useEffect(() => {
    ensureGsapPlugins();
    gsap.fromTo(
      ".project-item",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: "#projects-home",
          start: "top 70%",
        },
      },
    );
  }, []);

  const items = useMemo(() => projects.slice(0, 8), []);

  return (
    <section id="projects-home" className="section-wrap bg-[#F5F5F5]">
      <div className="section-inner">
        <p className="section-tag">Our Projects</p>
        <h2 className="section-title word-reveal-heading">Explore Our Recent Work</h2>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              data-hover
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-[#5BBF1A] bg-[#5BBF1A] text-white"
                  : "border-zinc-300 text-[#111111] hover:border-[#5BBF1A] hover:text-[#5BBF1A]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="mt-8 -m-[10px]">
          {items.map((project) => (
            <article
              key={project.slug}
              className={`project-item reveal ${project.category.replace(/\s+/g, "-")} w-full p-[10px] sm:w-1/2 lg:w-1/3`}
            >
              <div className="group relative overflow-hidden rounded-2xl" data-hover>
                <div className="relative h-72">
                  <Image src={project.image} alt={project.name} fill className="object-cover transition duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5">
                  <p className="font-accent text-xs uppercase tracking-[0.18em] text-[#7DD63A]">{project.category}</p>
                  <h3 className="mt-2 font-heading text-xl text-white">{project.name}</h3>
                  <Link href={`/projects/${project.slug}`} data-hover className="mt-2 inline-flex w-fit text-sm font-semibold text-[#7DD63A]">
                    View →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            data-hover
            className="inline-flex rounded-full border border-[#5BBF1A] px-6 py-3 font-semibold text-[#5BBF1A] transition hover:bg-[#5BBF1A] hover:text-white"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
