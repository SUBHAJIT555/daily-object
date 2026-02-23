import Home from "@/components/Home";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Object | Curated Everyday Essentials — Electronics, Books, Stationery & More",
  description: "Daily Object brings you thoughtfully chosen everyday essentials: electronics, books, stationery, and garments. Simple, honest pricing and reliable delivery.",
  // other metadata
};

export default function HomePage() {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <>
      <Home products={products} />
    </>
  );
}
