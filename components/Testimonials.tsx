"use client";

import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { testimonials } from "@/lib/site-data";
import "swiper/css";

export default function Testimonials() {
  return (
    <section className="section-wrap relative bg-[#0D0D0D]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(91,191,26,0.16),transparent_45%)]" />
      <div className="section-inner relative">
        <p className="section-tag">Testimonials</p>
        <h2 className="section-title text-white">What Our Clients Say</h2>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            centeredSlides
            spaceBetween={20}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            lazyPreloadPrevNext={1}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <article className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full">
                    <Image src={item.image} alt={`${item.name} profile photo`} fill className="object-cover" sizes="80px" />
                  </div>
                  <FaQuoteRight className="mx-auto mt-5 text-2xl text-[#5BBF1A]" />
                  <p className="mt-5 font-body text-lg italic text-zinc-100">{item.quote}</p>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-white">{item.name}</h3>
                  <p className="font-body text-sm text-[#7DD63A]">{item.role}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
