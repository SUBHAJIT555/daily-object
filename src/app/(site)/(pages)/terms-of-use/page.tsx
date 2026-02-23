import TermsOfUse from "@/components/TermsOfUse";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use | Daily Object",
  description: "Terms of Use for Daily Object.",
  // other metadata
};

const TermsOfUsePage = () => {
  return (
    <main>
      <TermsOfUse />
    </main>
  );
};

export default TermsOfUsePage;
