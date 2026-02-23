"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import "swiper/css";
import testimonialsData from "./testimonialsData";
import SingleItem from "./SingleItem";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden border-t border-gray-3/80 bg-gray-1 py-14 sm:py-18">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="mb-2 block h-0.5 w-12 bg-[var(--color-primary)]" />
            <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
              What our customers say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="testimonial-nav-prev flex h-10 w-10 items-center justify-center rounded-full border border-gray-4 bg-white text-dark hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="testimonial-nav-next flex h-10 w-10 items-center justify-center rounded-full border border-gray-4 bg-white text-dark hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          ref={sliderRef}
          className="testimonial-swiper-equal"
          slidesPerView={3}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {testimonialsData.map((item, key) => (
            <SwiperSlide key={key} className="h-full">
              <SingleItem testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
