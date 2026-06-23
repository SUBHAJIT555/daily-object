import About from "@/components/About";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata(
  "About Us | Daily Object",
  "Learn about Daily Object — curated everyday essentials and our story."
);

const AboutPage = () => {
  return (
    <main>
      <About />
    </main >
  );
};

export default AboutPage;
