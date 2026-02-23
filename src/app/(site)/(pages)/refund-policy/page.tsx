import RefundPolicy from "@/components/RefundPolicy";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Refund Policy | Daily Object",
  description: "Refund Policy for Daily Object.",
  // other metadata
};

const RefundPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefundPolicyPage;
