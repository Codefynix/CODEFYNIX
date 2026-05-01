"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { services } from "@/lib/site-data";
import "swiper/css";

export default function Services() {
  useEffect(() => {
    ensureGsapPlugins();
    gsap.fromTo(
      ".service-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#services",
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section id="services" className="section-wrap bg-[#F5F5F5]">
      <div className="section-inner">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-tag">Our Services</p>
            <h2 className="section-title word-reveal-heading">We Provide Smart Digital Solutions</h2>
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous services"
              data-hover
              className="services-prev rounded-full border border-[#5BBF1A] p-3 text-[#5BBF1A] transition hover:bg-[#5BBF1A] hover:text-white"
            >
              <FaArrowLeft />
            </button>
            <button
              aria-label="Next services"
              data-hover
              className="services-next rounded-full border border-[#5BBF1A] p-3 text-[#5BBF1A] transition hover:bg-[#5BBF1A] hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
          navigation={{ prevEl: ".services-prev", nextEl: ".services-next" }}
          lazyPreloadPrevNext={1}
        >
          {services.map((service) => (
            <SwiperSlide key={service.slug} className="h-auto pb-1">
              <article className="service-card reveal flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm" data-hover>
                <div className="relative h-52">
                  <Image src={service.image} alt={service.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-full bg-[#5BBF1A]/15 px-3 py-1 font-accent text-xs text-[#3D8A0E]">
                    {service.category}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-[#111111]">{service.name}</h3>
                  <p className="mt-3 flex-1 font-body text-sm text-[#666666]">{service.shortDescription}</p>
                  <Link href={`/services/${service.slug}`} data-hover className="mt-5 font-body text-sm font-semibold text-[#5BBF1A]">
                    Learn More →
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
