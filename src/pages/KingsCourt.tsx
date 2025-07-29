import React, { useEffect } from "react";

import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import PageHero from "../components/kingscourt/PageHero";
import Gallery from "../components/kingscourt/Gallery";
import KingsCourtVideo from "../assets/videos/Kings court.mp4";
import FooterTopImage from "../assets/footer-image.png";
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";
import LineArtBlack from "../assets/gallery/pattern-art.png";
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

      <section className="w-full h-[90dvh] relative bg-black flex mt-30 items-center overflow-hidden justify-center">

        {/* Pattern */}
         <div className="absolute right-0 z-10 h-full">
          <img src={LineArtBlack} alt="" className="opacity-20"/>
        </div>


        {/* content */}
        <section className="h-auto lg:h-[60dvh] z-30  overflow-hidden relative  flex w-5/6 mx-auto flex-col lg:flex-row items-center justify-center gap-10 px-4">
          {/* Video - 4/6 on large screens */}
          <div className="w-full lg:w-4/6 lg:pr-10">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto  rounded-2xl shadow-lg object-contain"
            >
              <source src={KingsCourtVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text - 2/6 on large screens */}
          <div className="w-full lg:w-2/6">
            <h2 className="text-secondary leading-15  lg:text-6xl text-[42px] font-bold">
              Dine Like Royalty
            </h2>
            <p className="text-gray-600 text-base leading-relaxed text-justify my-4">
              Step into a realm where time slows and elegance reigns. Nestled
              within majestic walls and grand architecture, this palace-like
              haven invites you to experience the opulence once reserved for
              kings. Every corner whispers stories of a regal past — from golden
              chandeliers to richly adorned halls echoing with heritage. Indulge
              in a dining experience like no other, where meals are crafted with
              royal precision, served in splendor, and seasoned with the essence
              of tradition. Here, you're not just a guest — you're royalty,
              savoring the legacy of ancient luxury
            </p>
          </div>
        </section>
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
