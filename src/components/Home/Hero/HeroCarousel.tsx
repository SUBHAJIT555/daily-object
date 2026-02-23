"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel !overflow-visible"
    >
      <SwiperSlide>
        <div className="grid min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] w-full grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Text: left half, padded */}
          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:pl-16 xl:pl-24 lg:pr-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary-light-3)]">
              Daily Object
            </p>
            <h1 className="font-zodiak mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl">
              Electronics, stationery, books & garments.
            </h1>
            <p className="mb-8 max-w-md text-base text-gray-400 sm:text-lg">
              Everything you need—gadgets, study supplies, books and fashion. Quality products, honest prices, delivered across India.
            </p>
            <Link
              href="/shop"
              className="inline-flex w-fit items-center gap-2 border-2 border-[var(--color-primary)] bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary)]"
            >
              Shop now
              <span aria-hidden>→</span>
            </Link>
          </div>
          {/* Image: right half, full bleed on desktop */}
          <div className="relative flex min-h-[280px] items-center justify-center  sm:min-h-[320px] lg:min-h-0">
            <div className="relative h-full w-full max-w-lg lg:max-w-none lg:absolute lg:inset-0">
              <Image
                src="/images/HomePageImages/1.webp"
                alt=""
                fill
                className="object-contain object-center lg:object-right"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] w-full grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:pl-16 xl:pl-24 lg:pr-12">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary-light-3)]">
              Limited time
            </p>
            <h1 className="font-zodiak mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl">
              <span className="text-[var(--color-primary)]">30%</span> off across the store.
            </h1>
            <p className="mb-8 max-w-md text-base text-gray-400 sm:text-lg">
              Electronics, books, stationery and more. Best deals and honest prices for the Indian market.
            </p>
            <Link
              href="/shop"
              className="inline-flex w-fit items-center gap-2 border-2 border-[var(--color-primary)] bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary)]"
            >
              Shop now
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="relative flex min-h-[280px] items-center justify-center  sm:min-h-[320px] lg:min-h-0">
            <div className="relative h-full w-full max-w-lg lg:max-w-none lg:absolute lg:inset-0">
              <Image
                src="/images/HomePageImages/2.webp"
                alt=""
                fill
                className="object-contain object-center lg:object-right"
                sizes="(max-width: 1024px) 90vw, 50vw"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
