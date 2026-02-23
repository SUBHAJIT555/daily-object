"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import "swiper/css";
import SingleItem from "./SingleItem";
import categoriesData from "@/constants/categoryData";

const Categories = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) sliderRef.current.swiper.init();
  }, []);

  return (
    <section className="overflow-hidden border-b border-gray-3/80 bg-gray-1 py-14 sm:py-18">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="mb-8">
          <span className="mb-2 block h-0.5 w-12 bg-[var(--color-primary)]" />
          <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
            Browse by category
          </h2>
        </div>

        <Swiper
          ref={sliderRef}
          slidesPerView={6}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 14 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 6, spaceBetween: 16 },
          }}
        >
          {categoriesData.map((item, key) => (
            <SwiperSlide key={key}>
              <SingleItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
