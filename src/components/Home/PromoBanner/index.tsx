import React from "react";
import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  return (
    <section className="home-promo-section overflow-hidden bg-gray-2 py-14 sm:py-18">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
        {/* Main promo: single full-width strip, dark bg */}
        <div className="relative mb-6 overflow-hidden rounded-2xl bg-[var(--color-dark)] py-12 pl-6 pr-6 sm:py-16 sm:pl-12 md:pr-[280px] lg:pr-[320px]">
          <div className="relative z-10 max-w-xl">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--color-primary-light-3)]">
              Limited offer
            </p>
            <h2 className="font-zodiak mb-4 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
              Up to 30% off — electronics, books, stationery & garments
            </h2>
            <p className="mb-6 text-sm text-gray-400 sm:text-base">
              Shop mobile accessories, smart gadgets, computer accessories, home electronics, books, stationery, and fashion. Quality products, delivered across India.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Shop now
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 top-0 hidden w-64 overflow-hidden md:block lg:w-80">
            <Image
              src="/images/HomePageImages/6.webp"
              alt=""
              width={274}
              height={350}
              className="h-full w-auto object-cover object-bottom"
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card 1: Books & Stationery */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-3 bg-white p-8 sm:p-10">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-dark-4">Books & stationery</p>
                <h3 className="font-zodiak mt-1 text-xl font-semibold text-dark sm:text-2xl">
                  Office essentials
                </h3>
                <p className="mt-2 text-sm font-medium text-[var(--color-primary)]">
                  Flat 20% off on select items
                </p>
                <Link
                  href="/shop"
                  className="mt-4 inline-block text-sm font-medium text-dark underline underline-offset-4 hover:text-[var(--color-primary)]"
                >
                  Shop now →
                </Link>
              </div>
              <div className="relative mt-6 h-40 w-40 shrink-0 sm:mt-0">
                <Image
                  src="/images/HomePageImages/7.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Garments */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-3 bg-white p-8 sm:p-10">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-dark-4">Men’s, women’s & kids</p>
                <h3 className="font-zodiak mt-1 text-xl font-semibold text-dark sm:text-2xl">
                  Up to <span className="text-[var(--color-primary)]">40%</span> off
                </h3>
                <p className="mt-2 max-w-[260px] text-sm text-dark-4">
                  Fresh styles in garments for the whole family.
                </p>
                <Link
                  href="/shop"
                  className="mt-4 inline-block text-sm font-medium text-dark underline underline-offset-4 hover:text-[var(--color-primary)]"
                >
                  Shop now →
                </Link>
              </div>
              <div className="relative mt-6 h-40 w-40 shrink-0 sm:mt-0">
                <Image
                  src="/images/HomePageImages/5.webp"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
