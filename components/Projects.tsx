"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { projects } from "@/lib/site-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const placeholderProjects = [
  {
    slug: "whatsapp-crm",
    name: "WhatsApp CRM",
    category: "Web Apps",
    image: "/projects/whatsappcrm1.png"
  },
  // {
  //   slug: "growth-agency-site",
  //   name: "Growth Agency Site",
  //   category: "Websites",
  //   image : ""

  // },
];

export default function Projects() {
  useEffect(() => {
    ensureGsapPlugins();
    gsap.fromTo(
      ".project-item",
      { y: 44, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects-home",
          start: "top 70%",
        },
      },
    );
  }, []);

  const items = useMemo(
    () => [...projects.slice(0, 8), ...placeholderProjects],
    [],
  );

  return (
    <section id="projects-home" className="section-wrap bg-[#0D0D0D]">
      <div className="section-inner">
        <p className="section-tag bg-[#192614] text-[#9AE764]">Our Projects</p>
        <h2 className="section-title word-reveal-heading text-white" style={{ color: "#ffffff" }}>
          Explore Our Recent Work
        </h2>

        <div className="mt-10">
          <Swiper
            modules={[EffectCoverflow, Mousewheel]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
            slidesPerView={1.12}
            breakpoints={{
              640: { slidesPerView: 1.45 },
              1024: { slidesPerView: 2.1 },
              1280: { slidesPerView: 2.7 },
            }}
            coverflowEffect={{
              rotate: 8,
              stretch: -8,
              depth: 230,
              modifier: 1.75,
              slideShadows: true,
            }}
            className="overflow-visible!"
          >
            {items.map((project, idx) => (
              <SwiperSlide key={project.slug} className="project-item reveal h-auto! py-2">
                <article
                  className="group relative h-72 overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(180deg,#171923,#0F1118)] p-6 shadow-[0_22px_44px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:border-[#7DD63A]/45"
                  data-hover
                >
                  <div className="pointer-events-none absolute inset-0 -z-10 translate-x-5 translate-y-4 rounded-2xl bg-black/40 blur-sm transition duration-300 group-hover:translate-x-6 group-hover:translate-y-5" />
                  <div className="pointer-events-none absolute inset-0 -z-20 translate-x-10 translate-y-8 rounded-2xl bg-black/25 blur-md" />
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover absolute inset-0 z-0" />
                  <p className="font-heading text-4xl font-bold text-white/7">{`0${(idx % 9) + 1}`}</p>
                  <h3 className="mt-3 line-clamp-2 font-heading text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{project.category}</p>

                  <div className="mt-6 h-[3px] w-full rounded-full bg-white/12">
                    <div
                      className="h-[3px] rounded-full bg-linear-to-r from-[#5BBF1A] via-[#7DD63A] to-[#B2EB75]"
                      style={{ width: idx % 2 === 0 ? "52%" : "74%" }}
                    />
                  </div>

                  {/* <Link
                    href="/#contact"
                    data-hover
                    className="mt-8 inline-flex rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#7DD63A] hover:text-[#7DD63A]"
                  >
                    Read More
                  </Link> */}
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="mt-10 text-center">
          <Link
            href="/#proje"
            data-hover
            className="inline-flex rounded-full border border-[#5BBF1A] px-6 py-3 font-semibold text-[#5BBF1A] transition hover:bg-[#5BBF1A] hover:text-white"
          >
            View All Projects →
          </Link>
        </div> */}
      </div>
    </section>
  );
}
