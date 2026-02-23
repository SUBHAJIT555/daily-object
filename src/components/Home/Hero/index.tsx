import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";

const Hero = () => {
  return (
    <>
      {/* Full-bleed hero: no boxed container, edge-to-edge */}
      <section className="relative w-full overflow-hidden bg-[var(--color-dark)] pt-44 sm:pt-48 md:pt-52 lg:pt-56">
        <HeroCarousel />
      </section>
      <HeroFeature />
    </>
  );
};

export default Hero;
