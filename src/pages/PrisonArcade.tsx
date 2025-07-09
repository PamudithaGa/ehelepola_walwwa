import React from "react";

//Components
import Hero from "../components/prisonarcade/Hero";
import Choices from "../components/prisonarcade/Choices";
import Places from "../components/prisonarcade/Places";
import Gallery from "../components/prisonarcade/Gallery";
import Footer from "../components/common/Footer";

import FooterTopImage from '../assets/footer-image.png'
const PrisonArcade: React.FC = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section className="h-[100dvh] flex items-center bg-amber-300">
        <Choices />
      </section>

      <section>
        <Places />
      </section>

      <section className="mt-20">
        <Gallery />
      </section>

      {/* footer */}
      <section
        className="mt-10 ">
        <div>
          <img src={FooterTopImage} />
        </div>
        <section
          className="bg-primary z-10">
          <Footer />
        </section>
      </section>
    </>
  );
};

export default PrisonArcade;
