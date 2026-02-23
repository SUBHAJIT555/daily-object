import React from "react";
import Link from "next/link";
import ProductItem from "@/components/Common/ProductItem";
import { Product } from "@/types/product";

interface NewArrivalProps {
  products: Product[];
}

const NewArrival = ({ products }: NewArrivalProps) => {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-2 block h-0.5 w-12 bg-[var(--color-primary)]" />
            <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
              New arrivals
            </h2>
            <p className="mt-1 text-sm text-dark-4">This week’s picks</p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-primary-dark)]"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((item, key) => (
            <ProductItem item={item} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
