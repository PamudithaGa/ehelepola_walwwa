import React, { useEffect } from 'react'

import NavBar from '../components/common/NavBar';
import HeroSection from '../components/aboutus/HeroSection';
import Footer from "../components/common/Footer";
import Places from '../components/aboutus/Places';
import History from '../components/aboutus/History';


import FooterTopImage from "../assets/footer-image.png";
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";
import PatternArt from "../assets/gallery/pattern-art.png"


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

      <section className="relative -z-1 bg-black mt-30 py-10 h-auto">
        <Places />

        {/*pattern art*/}
        <img
          src={PatternArt}
          alt=""
          className=" hidden lg:absolute w-150 left-0 bottom-0 lg:top-0 lg:h-full object-cover -z-2 opacity-30 lg:rotate-0 rotate-180 h-1/2"
        />
      </section>


      {/* footer */}
      <section className="">
        <div>
          <img src={FooterTopImage} />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10 overflow-hidden">
          <div className="absolute h-11/12 py-5 -right-78 top-90 w-170 opacity-5">
            <img src={FooterArt} alt="" className="h-140 w-200 lg:hidden" />
          </div>

          <Footer />
        </section>
      </section>
    </>
  )
}

export default AboutUs
