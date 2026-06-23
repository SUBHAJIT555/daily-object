import React from "react";
import MailSuccess from "@/components/MailSuccess";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Message Sent | Daily Object",
  "Your message was sent successfully."
);

const MailSuccessPage = () => {
  return (
    <main>
      <MailSuccess />
    </main>
  );
};

export default MailSuccessPage;
