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

import PatternArt from "./assets/gallery/pattern-art.png"
import PeraheraArt from "./assets/gallery/perahera-art.png"

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


      <section className="flex items-center justify-center w-full mt-30 -z-10">
        <Places />
      </section>

      {/*dancer art*/}
      {/* <div
        className="absolute right-5 top-325 ">
        <img src={DancerArt} alt=""
          className="w-105 z-0" />
      </div> */}

      <section className="relative my-30 bg-primary p-10 z-0">
        <NewsSection />

        {/*pattern art*/}
        <img src={PatternArt} alt=""
          className="absolute w-105 right-0 top-0 h-full object-cover z-10 opacity-30" />
      </section>

      <section className="mt-15">
        <Gallery />
      </section>

      {/* footer */}
      <section className="">
        <div>
          <img src={FooterTopImage} />
        </div>

        {/* footer body */}
        <section
          className="bg-primary relative z-10">
          <div
            className="absolute h-11/12 py-5 right-0 opacity-7">
            <img src={PeraheraArt} alt="" className="h-full" />
          </div>

          <Footer />
        </section>
      </section>
      <Toaster position="top-right" />

    </>
  );
};

export default App;
