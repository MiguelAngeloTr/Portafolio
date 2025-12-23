"use client";
import { serviceData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 16 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[240px] md:h-[360px] w-[290px] md:w-[620px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="
              group relative h-auto md:h-[300px]
              rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-md
              px-6 py-7
              transition-all duration-300
              hover:bg-white/10 hover:border-cyan-400/20
              hover:shadow-xl hover:shadow-cyan-500/10
            "
          >
            {/* glow sutil */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-sky-400/5 to-violet-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-4 text-4xl text-slate-200/80 transition-colors duration-300 group-hover:text-cyan-300">
                {item.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold text-slate-100">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
