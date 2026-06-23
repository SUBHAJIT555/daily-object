import FAQs from "@/components/FAQs";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "FAQs | Daily Object",
  "Frequently asked questions about Daily Object."
);

const FAQsPage = () => {
  return (
    <main>
      <FAQs />
    </main>
  );
};

export default FAQsPage;
