import CookiePolicy from "@/components/CookiePolicy";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Cookie Policy | Daily Object",
  "Cookie Policy for Daily Object — how we use cookies and similar technologies."
);

const CookiePolicyPage = () => {
  return (
    <main>
      <CookiePolicy />
    </main>
  );
};

export default CookiePolicyPage;
