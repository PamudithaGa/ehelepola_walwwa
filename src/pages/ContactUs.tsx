import React, { useEffect } from "react";

import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";

//Components
import Hero from "../components/contactus/Hero";
import ContactForm from "../components/contactus/ContactForm";
import Map from "../components/contactus/Map";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import FooterTopImage from "../assets/footer-image.png";

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

      <section>
        <Hero />
      </section>

      <section>
        <ContactForm />
      </section>

      <section>
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

export default ContactUs;
