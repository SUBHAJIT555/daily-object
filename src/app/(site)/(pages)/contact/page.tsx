import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Daily Object",
  description: "Get in touch with Daily Object.",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
