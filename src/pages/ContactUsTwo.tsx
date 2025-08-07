import React, { useEffect } from "react";
import { Link } from "react-router";

import ContactFormTwo from "../components/contactus/ContactFormTwo";
import Map from "../components/contactus/Map";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

import FooterTopImage from "../assets/footer-image.png";
import FootetrtTopImageMobile from '../assets/footer-image-mobile.png'
import FooterArt2 from '../assets/gallery/perahera-art.png'
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";
import { GoArrowRight } from "react-icons/go";

const ContactUsTwo: React.FC = () => {
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

      <section className="bg-primary pt-25">
        {/* reservation */}
        <div
        className="mb-45 lg:mt-20 lg:mb-40">
          {/* reservation for desktop*/}
          <section className="hidden bg-black lg:flex gap-40 justify-center h-40 pt-12 px-10  w-3/4 shadow-2xl rounded-2xl -mt-5 absolute left-1/2 transform -translate-x-1/2 mx-auto shadow-xl">
            <div className="w-auto">
              <h2 className="text-white text-2xl">
                School Student Reservation
              </h2>
              <p className="text-white/40 text-sm mt-2">
                Don't miss out on this exclusive opportunity. Slots fill up fast
                reserve your visit today!
              </p>
            </div>

            <Link to="/reservation">
              <div className="w-auto">
                <button className="backdrop-blur-md bg-white/10 rounded-lg border border-white/30 text-white px-5 py-5 rounded-2xl flex items-center gap-2 hover:cursor-pointer hover:bg-white/20 transition duration-300">
                  Click here to book reservation
                  <GoArrowRight />
                </button>
              </div>
            </Link>
          </section>


          {/* reservation for Mobile*/}
          <section className="block lg:hidden  bg-black rounded-2xl shadow-2xl absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-md px-6 py-8 space-y-6">
            <div
            className="text-center">
              <h2 className="text-white text-xl font-semibold">
                School Student Reservation
              </h2>
              <p className="text-white/60 text-sm mt-2">
                Don't miss out on this exclusive opportunity. Slots fill up fast
                reserve your visit today!
              </p>
            </div>

            <Link to="/reservation">
              <button className="w-full backdrop-blur-md bg-white/10 border border-white/30 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition duration-300">
                Click here to book reservation
                <GoArrowRight />
              </button>
            </Link>
          </section>
        </div>

        <ContactFormTwo />
      </section>

      <section className="lg:mt-30 mt-10 -mb-20 w-5/6 mx-auto">
        <Map />
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

export default ContactUsTwo;
