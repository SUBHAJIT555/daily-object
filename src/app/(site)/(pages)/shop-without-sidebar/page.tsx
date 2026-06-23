import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";

import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Shop | Daily Object",
  "Shop everyday essentials at Daily Object."
);

const ShopWithoutSidebarPage = () => {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <main>
      <ShopWithoutSidebar products={products} />
    </main>
  );
};

export default ShopWithoutSidebarPage;
