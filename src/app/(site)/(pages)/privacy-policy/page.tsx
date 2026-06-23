import PrivacyPolicy from "@/components/PrivacyPolicy";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Privacy Policy | Daily Object",
  "Privacy Policy for Daily Object."
);

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
};

export default PrivacyPolicyPage;
