import React, { useEffect } from "react";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import PageHero from "../components/kingscourt/PageHero";
import Gallery from "../components/kingscourt/Gallery";

import FooterTopImage from "../assets/footer-image.png";
import FootetrtTopImageMobile from '../assets/footer-image-mobile.png'
import FooterArt2 from '../assets/gallery/perahera-art.png'
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

      <section className="lg:mt-30 mt-15">
        <Gallery />
      </section>

      {/* footer top */}
      <section className="">
        <div>
          <img src={FooterTopImage} className='hidden md:block ' />
          <img src={FootetrtTopImageMobile} className='md:hidden block' />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10">
          <div className="absolute h-11/12 py-5 right-0 opacity-5 scale-x-[-1]">
            <img src={FooterArt2} alt="" className="h-full w-full hidden lg:block" />
            <img src={FooterArt} alt="" className="h-140 w-200 hidden" />
          </div>

          <Footer />
        </section>
      </section>
    </>
  );
};

export default KingsCourt;
