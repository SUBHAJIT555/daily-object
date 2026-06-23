import TermsOfUse from "@/components/TermsOfUse";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Terms of Use | Daily Object",
  "Terms of Use for Daily Object."
);

const TermsOfUsePage = () => {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
};

export default TermsOfUsePage;
