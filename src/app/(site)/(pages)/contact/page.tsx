import Contact from "@/components/Contact";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "Contact | Daily Object",
  "Get in touch with Daily Object at info@daily-object.com."
);

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
