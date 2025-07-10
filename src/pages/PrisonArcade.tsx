import { useEffect, useState } from "react";

//Components
import Hero from "../components/prisonarcade/Hero";
import Choices from "../components/prisonarcade/Choices";
import Places from "../components/prisonarcade/Places";
import Gallery from "../components/prisonarcade/Gallery";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import HeroSection from "../components/home/HeroSection";

import FooterTopImage from "../assets/footer-image.png";
const PrisonArcade: React.FC = () => {
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

      <section className="lg:h-[100dvh]">
        <Hero />
      </section>

      <section className="lg:h-[100dvh] flex items-center justify-center">
        <Choices />
      </section>

      <section>
        <Places />
      </section>

      <section className="mt-20">
        <Gallery />
      </section>

      {/* footer */}
      <section className="mt-10 ">
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

export default PrisonArcade;
