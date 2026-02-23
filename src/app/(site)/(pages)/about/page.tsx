import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Daily Object",
  description: "Learn about Daily Object — curated everyday essentials and our story.",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main >
  );
};

export default AboutPage;
