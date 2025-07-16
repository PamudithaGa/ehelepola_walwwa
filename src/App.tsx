import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";

//Components
import Places from "./components/home/Places";
import Gallery from "./components/home/Gallery";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import HeroSection from "./components/home/HeroSection";
import FooterTopImage from "./assets/footer-image.png";
import NewsSection from "./components/home/NewsSection";

import PatternArt from "./assets/gallery/pattern-art.png";
import FooterArt from "./assets/logos/ehelepola-walauwwe-logo-white.png";

const App: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 2000); // Delay 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out ${
          showNav ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <NavBar page="home" />
      </section>

      <section className="w-full">
        <HeroSection />
      </section>

      <section className="flex items-center justify-center w-full mt-15 lg:mt-30 -z-10">
        <Places />
      </section>

      <section className="relative my-15 lg:my-30 bg-primary p-5 lg:p-10 z-0">
        <NewsSection />

        {/*pattern art*/}
        <img
          src={PatternArt}
          alt=""
          className="absolute w-105 right-0 bottom-0 lg:top-0 lg:h-full object-cover z-10 opacity-30 lg:rotate-0 rotate-180 h-1/2"
        />
      </section>

      <section className="lg:mt-15 ">
        <Gallery />
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
      <Toaster position="top-right" />
    </>
  );
};

export default App;
