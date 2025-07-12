import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";

//Components
import Hero from "../components/contactus/Hero";
import ContactForm from "../components/contactus/ContactForm";
import Map from "../components/contactus/Map";

const ContactUs: React.FC = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <Map />
      </section>
    </>
  );
};

export default ContactUs;
