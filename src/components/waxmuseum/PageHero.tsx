import React from "react";
import HeroSlide from "./HeroSlide";

const PageHero: React.FC = () => {
  return (
    <>
      <section className="bg-black w-full flex items-baseline-last justify-center ">
        <HeroSlide />
      </section>
    </>
  );
};

export default PageHero;
