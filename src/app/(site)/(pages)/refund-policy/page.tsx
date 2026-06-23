import RefundPolicy from "@/components/RefundPolicy";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Refund Policy | Daily Object",
  "Refund Policy for Daily Object."
);

const RefundPolicyPage = () => {
  return (
    <main>
      <RefundPolicy />
    </main>
  );
};

export default RefundPolicyPage;
