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

// import React, { useEffect, useState } from "react";

// import { FaWhatsapp } from "react-icons/fa";
// import { RiMessengerLine } from "react-icons/ri";
// import { IoMailOutline } from "react-icons/io5";

// function ContactUs() {
//   //top mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   /* contact feature */
//   //via email
//   const companyEmail = "info@regencytravel.com";
//   const handleEmailClick = () => {
//     const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;
//     window.open(emailUrl, "_blank");
//   };

//   //via whatsapp
//   const companyWhatsApp = "94707945502";
//   const handleWhatsAppClick = () => {
//     const whatsappLink = `https://wa.me/${companyWhatsApp}`;
//     window.open(whatsappLink, "_blank");
//   };

//   //via messenger
//   const handleMessengerClick = () => {
//     const pageUsername = "regencytravel";
//     const messengerLink = `https://m.me/${pageUsername}`;
//     window.open(messengerLink, "_blank");
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   return (
//     <>

//         {/* map section */}

//     </>
//   );
// }

// export default ContactUs;
