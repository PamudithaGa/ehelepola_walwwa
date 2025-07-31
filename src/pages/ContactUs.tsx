import React, { useEffect } from "react";


//Components
import Hero from "../components/contactus/Hero";
import Map from "../components/contactus/Map";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import FooterTopImage from "../assets/footer-image.png";
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";

const ContactUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="contact" />
      </section>

      <section className="-z-1">
        <Hero />
      </section>

      <section>
        <Map />
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
  );
};

export default ContactUs;
