import Home from "@/components/Home";
import { getSiteNumber } from "@/lib/siteConfig";
import { selectProducts } from "@/lib/productSelector";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Daily Object | Curated Everyday Essentials — Electronics, Books, Stationery & More",
  "Daily Object brings you thoughtfully chosen everyday essentials: electronics, books, stationery, and garments. Simple, honest pricing and reliable delivery."
);

export default function HomePage() {
  const siteNumber = getSiteNumber();
  const products = selectProducts(siteNumber);

  return (
    <>
      <Home products={products} />
    </>
  );
}
