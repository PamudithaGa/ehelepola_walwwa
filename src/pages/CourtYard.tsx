import React, { useEffect } from "react";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import PageHero from "../components/courtyard/PageHero";
import Gallery from "../components/courtyard/Gallery";
import FooterTopImage from "../assets/footer-image.png";

const CourtYard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="entertainment" />
      </section>

      <section className="lg:h-[95dvh] h-[100dvh]">
        <PageHero />
      </section>

      <section className="lg:mt-50 mt-15">
        <Gallery />
      </section>

      {/* footer */}
      <section className="mt-10 ">
        <div>
          <img src={FooterTopImage} />
        </div>
        <section className="bg-primary z-10">
          <Footer />
        </section>
      </section>
    </>
  );
};

export default CourtYard;
