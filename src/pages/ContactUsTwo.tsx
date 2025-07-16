import React from "react";


import ContactFormTwo from "../components/contactus/ContactFormTwo";
import Map from "../components/contactus/Map";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import FooterTopImage from "../assets/footer-image.png";

const ContactUsTwo: React.FC = () => {
  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="contact" />
      </section>

      <section className="bg-primary pt-25">
        <ContactFormTwo />
      </section>

      <section className="lg:mt-30 mt-10 -mb-20 w-5/6 mx-auto">
        <Map />
      </section>

      {/* footer */}
      <section className="">
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

export default ContactUsTwo;
