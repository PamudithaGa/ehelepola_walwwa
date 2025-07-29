import React, { useEffect } from 'react'

import NavBar from '../components/common/NavBar';
import HeroSection from '../components/aboutus/HeroSection';
import Footer from "../components/common/Footer";
import Places from '../components/aboutus/Places';
import History from '../components/aboutus/History';


import FooterTopImage from "../assets/footer-image.png";
import PatternArt from "../assets/gallery/pattern-art.png"
import FooterArt2 from '../assets/gallery/perahera-art.png'
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";


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

      <section className="relative bg-black mt-30 py-10 h-auto z-1">
        <Places />

      </section>


      <section className="">
        <div>
          <img src={FooterTopImage} />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10">
          <div className="absolute h-11/12 py-5 right-0 opacity-5 scale-x-[-1]">
            <img src={FooterArt2} alt="" className="h-full w-full hidden lg:block" />
            <img src={FooterArt} alt="" className="h-140 w-200 lg:hidden" />
          </div>

          <Footer />
        </section>
      </section>
    </>
  )
}

export default AboutUs
