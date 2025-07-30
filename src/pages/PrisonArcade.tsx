import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

//Components
import Hero from "../components/prisonarcade/Hero";
import Choices from "../components/prisonarcade/Choices";
import Gallery from "../components/prisonarcade/Gallery";
import Banner from "../components/prisonarcade/Banner";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";

import FooterTopImage from "../assets/footer-image.png";
import FootetrtTopImageMobile from '../assets/footer-image-mobile.png'
import FooterArt2 from '../assets/gallery/perahera-art.png'
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";

//Promo Banners
import spacelonPromo from "../assets/prisonarcade/spa.png";
import EarthboundCreationsPromo from "../assets/prisonarcade/EarthboundCreations.jpg";

const promoImages = [spacelonPromo, EarthboundCreationsPromo];
const PrisonArcade: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //

  return (
    <>
      {/* header */}
      <section
        className={`w-full z-50 transition-all duration-2000 ease-in-out `}
      >
        <NavBar page="shopping" />
      </section>

      <section className="lg:h-[100dvh] h-auto">
        <Hero />
      </section>

      <section className="flex items-center  lg:mt-20 mt-20 justify-center">
        <Choices />
      </section>

      {/* Only mobile - Advertisement*/}
      <section className="lg:hidden block h-[40dvh] mt-[10%] ">
        <div className="w-full h-full rounded-2xl overflow-hidden p-5 ">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            speed={800}
            slidesPerView={1}
            className="rounded-2xl"
          >
            {promoImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Promo ${index + 1}`}
                  className="w-full h-full rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="lg:mt-10 mt-0">
        <Gallery />
      </section>

      <section className="w-full flex items-center justify-center lg:mt-20 lg:h-[45dvh] bg-black">
        <Banner />
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

export default PrisonArcade;
