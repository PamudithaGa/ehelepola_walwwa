import React, { useEffect } from "react";

import NavBar from "../components/common/NavBar";
import HeroSection from "../components/aboutus/HeroSection";
import Footer from "../components/common/Footer";
import Places from "../components/aboutus/Places";
import History from "../components/aboutus/History";
import MuseumLife from "../components/aboutus/MuseumLife";

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="about" />
      </section>

      <section className="-z-1">
        <HeroSection />
      </section>

      <section className="-z-1 mt-20 lg:mt-30">
        <History />
      </section>

      <section className="mt-20 lg:mt-30">
        <MuseumLife />
      </section>

      <section className="relative bg-black mt-30 py-10 h-auto z-1">
        <Places />
      </section>

      {/* footer top */}
      <section className="">
        <div>
          <img
            src="https://assets.ehelepolawalawwa.lk/assets/assets/footer-image.webp"
            className="hidden md:block "
          />
          <img
            src="https://assets.ehelepolawalawwa.lk/assets/assets/footer-image-mobile.webp"
            className="md:hidden block"
          />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10">
          <div className="absolute h-11/12 py-5 right-0 opacity-5 scale-x-[-1]">
            <img
              src="https://assets.ehelepolawalawwa.lk/assets/assets/assets/gallery/perahera-art.webp"
              alt=""
              className="h-full w-full hidden lg:block"
            />
            <img
              src="https://assets.ehelepolawalawwa.lk/assets/assets/logos/ehelepola-walauwwe-logo-white.webp"
              alt=""
              className="h-140 w-200 hidden"
            />
          </div>

          <Footer />
        </section>
      </section>
    </>
  );
};

export default AboutUs;
