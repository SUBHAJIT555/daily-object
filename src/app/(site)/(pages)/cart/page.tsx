import React from "react";
import Cart from "@/components/Cart";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Cart | Daily Object",
  "Your shopping cart at Daily Object."
);

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
