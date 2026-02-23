import React from "react";
import SingleItem from "./SingleItem";
import Link from "next/link";
import { Product } from "@/types/product";

interface BestSellerProps {
  products: Product[];
}

const BestSeller = ({ products }: BestSellerProps) => {
  return (
    <section className="overflow-hidden border-t border-gray-3/80 bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="mb-10">
          <span className="mb-2 block h-0.5 w-12 bg-[var(--color-primary)]" />
          <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
            Best sellers
          </h2>
          <p className="mt-1 text-sm text-dark-4">This month’s top picks</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-block text-sm font-medium text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-primary-dark)]"
          >
            View all →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
