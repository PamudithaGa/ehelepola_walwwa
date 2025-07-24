import React, { useEffect } from "react";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import PageHero from "../components/kingscourt/PageHero";
import Gallery from "../components/kingscourt/Gallery";
import FooterTopImage from "../assets/footer-image.png";
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";
const KingsCourt: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="dining" />
      </section>

      <section className="lg:h-[95dvh] h-auto">
        <PageHero />
      </section>

      <section className="lg:mt-50 mt-15">
        <Gallery />
      </section>

      {/* footer */}
      <section className="">
        <div>
          <img src={FooterTopImage} />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10 overflow-hidden">
          <div className="absolute h-11/12 py-5 -right-78 top-105 w-170 opacity-5">
            <img src={FooterArt} alt="" className="h-140 w-200 lg:hidden" />
          </div>

          <Footer />
        </section>
      </section>
    </>
  );
};

export default KingsCourt;
