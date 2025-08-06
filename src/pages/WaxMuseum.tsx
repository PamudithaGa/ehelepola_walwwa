import React, { useEffect } from "react";

//Components
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import PageHero from "../components/waxmuseum/PageHero";
import Timeline from "../components/waxmuseum/Timeline";

const WaxMuseum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="Wax_Museum" />
      </section>

      <section className="lg:h-[95dvh] h-auto">
        <PageHero />
      </section>

      <section className=" h-auto">
        <Timeline />
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

export default WaxMuseum;
