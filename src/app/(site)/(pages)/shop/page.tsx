import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";

import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Shop | Daily Object",
  "Shop everyday essentials at Daily Object."
);

const ShopWithSidebarPage = () => {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <main>
      <ShopWithSidebar products={products} />
    </main>
  );
};

export default ShopWithSidebarPage;
