import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router";

//Components
import Places from "./components/home/Places";
import Gallery from "./components/home/Gallery";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import HeroSection from "./components/home/HeroSection";
import NewsSection from "./components/home/NewsSection";

import { GoArrowRight } from "react-icons/go";

const App: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* header */}
      <section
        className={`hidden lg:block absolute w-full z-50 transition-all duration-2000 ease-in-out ${
          showNav
            ? "hidden lg:block translate-y-0 opacity-100"
            : "hidden lg:block -translate-y-10 opacity-0"
        }`}
      >
        <NavBar page="home" />
      </section>

      {/* header mobile */}
      <section
        className={`absolute block lg:hidden w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="home" />
      </section>

      <section className="w-full -z-1">
        <HeroSection />

        {/* reservation for desktop*/}
        <section className="hidden bg-black lg:flex gap-40 justify-center h-40 pt-15 px-10  w-3/4 shadow-2xl rounded-2xl -mt-5 absolute left-1/2 transform -translate-x-1/2 mx-auto">
          <div className="w-auto">
            <h2 className="text-white text-2xl">School Student Reservation</h2>
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
        <section className="  lg:hidden mt-10 bg-black rounded-2xl shadow-2xl absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-md px-6 py-8 space-y-6">
          <div>
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
      </section>

      <section className="z-[-1] flex items-center justify-center w-full mt-75 lg:mt-60 ">
        <Places />
      </section>

      <section className="-z-1 relative my-15 lg:my-30 bg-primary p-5 lg:p-10">
        <NewsSection />

        {/*pattern art*/}
        <img
          src="https://assets.ehelepolawalawwa.lk/assets/assets/gallery/pattern-art.webp"
          alt=""
          className="absolute w-105 right-0 bottom-0 lg:top-0 lg:h-full object-cover z-10 opacity-30 lg:rotate-0 rotate-180 h-1/2"
        />
      </section>

      <section className="-z-1 lg:mt-15 ">
        <Gallery />
      </section>

      {/* footer top */}
      <section className="">
        <div>
          <img src="https://assets.ehelepolawalawwa.lk/assets/assets/footer-image.webp" className="hidden md:block " />
          <img src="https://assets.ehelepolawalawwa.lk/assets/assets/footer-image-mobile.webp" className="md:hidden block" />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10">
          <div className="absolute h-11/12 py-5 right-0 opacity-5 scale-x-[-1]">
            <img
              src="https://assets.ehelepolawalawwa.lk/assets/assets/assets/gallery/perahera-art.webp"
              alt=""
              className="h-full w-full hidden lg:block"
            />
            <img src="https://assets.ehelepolawalawwa.lk/assets/assets/logos/ehelepola-walauwwe-logo-white.webp" alt="" className="h-140 w-200 hidden" />
          </div>

          <Footer />
        </section>
      </section>
      <Toaster position="top-right" />
    </>
  );
};

export default App;
