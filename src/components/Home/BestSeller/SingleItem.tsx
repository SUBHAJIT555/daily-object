"use client";
import React from "react";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist, removeItemFromWishlist } from "@/redux/features/wishlist-slice";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Product }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useSelector((state: RootState) => state.wishlistReducer.items);
  const isInWishlist = wishlistItems.some((w) => w.id === item.id);

  const handleQuickViewUpdate = () => {
    dispatch(updateQuickView({ ...item }));
  };
  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...item, quantity: 1 }));
  };
  const handleWishlistToggle = () => {
    if (isInWishlist) dispatch(removeItemFromWishlist(item.id));
    else dispatch(addItemToWishlist({ ...item, status: "available", quantity: 1 }));
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-3 bg-white transition-shadow hover:shadow-lg">
      <div className="relative flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-dark-4">({item.reviews} reviews)</span>
          <div className="flex gap-1">
            <button
              onClick={() => { handleQuickViewUpdate(); openModal(); }}
              aria-label="Quick view"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-3 text-dark hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 5.5C6.62 5.5 5.5 6.62 5.5 8C5.5 9.38 6.62 10.5 8 10.5C9.38 10.5 10.5 9.38 10.5 8C10.5 6.62 9.38 5.5 8 5.5Z" />
                <path d="M8 2.17C4.99 2.17 2.96 3.97 1.79 5.5L1.77 5.53C1.5 5.87 1.25 6.19 1.09 6.57C0.91 6.97 0.83 7.41 0.83 8C0.83 8.59 0.91 9.03 1.09 9.43C1.25 9.81 1.5 10.13 1.77 10.47C2.96 12.03 4.99 13.83 8 13.83C11.01 13.83 13.04 12.03 14.21 10.5C14.5 10.13 14.75 9.81 14.91 9.43C15.09 9.03 15.17 8.59 15.17 8C15.17 7.41 15.09 6.97 14.91 6.57C14.75 6.19 14.5 5.87 14.21 5.53C13.04 3.97 11.01 2.17 8 2.17Z" />
              </svg>
            </button>
            <button
              onClick={handleWishlistToggle}
              aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${isInWishlist ? "border-red text-red" : "border-gray-3 text-dark hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill={isInWishlist ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                <path d="M8 13.5C8 13.5 2 9 2 5.5C2 3.5 3.5 2 5.5 2C6.5 2 7.5 2.5 8 3.5C8.5 2.5 9.5 2 10.5 2C12.5 2 14 3.5 14 5.5C14 9 8 13.5 8 13.5Z" />
              </svg>
            </button>
          </div>
        </div>

        <Link href={`/shop?productId=${item.id}`} className="relative mx-auto mb-4 block aspect-square w-full max-w-[220px]">
          <Image src={item.img} alt={item.title} fill className="object-contain" sizes="220px" />
        </Link>

        <h3 className="mb-2 font-semibold text-dark hover:text-[var(--color-primary)]">
          <Link href={`/shop?productId=${item.id}`}>{item.title}</Link>
        </h3>
        <div className="mb-4 flex items-center gap-2">
          <span className="font-semibold text-dark">₹{item.discountedPrice.toLocaleString("en-IN")}</span>
          <span className="text-sm text-dark-4 line-through">₹{item.price.toLocaleString("en-IN")}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-auto w-full rounded-full border-2 border-[var(--color-primary)] bg-transparent py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default SingleItem;
