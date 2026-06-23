import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Wishlist | Daily Object",
  "Your wishlist at Daily Object."
);

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
