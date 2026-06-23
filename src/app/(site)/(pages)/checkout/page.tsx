import React from "react";
import Checkout from "@/components/Checkout";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Checkout | Daily Object",
  "Complete your order at Daily Object."
);

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
