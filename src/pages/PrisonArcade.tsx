import { useEffect} from "react";

//Components
import Hero from "../components/prisonarcade/Hero";
import Choices from "../components/prisonarcade/Choices";
import Gallery from "../components/prisonarcade/Gallery";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import FooterTopImage from "../assets/footer-image.png";
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";
const PrisonArcade: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 

  return (
    <>
      {/* header */}
      <section
        className={`w-full z-50 transition-all duration-2000 ease-in-out `}
      >
        <NavBar page="shopping" />
      </section>

      <section className="lg:h-[95dvh] h-auto">
        <Hero />
      </section>

      <section className="flex items-center  lg:mt-20 mt-20 justify-center">
        <Choices />
      </section>

      <section className="">
        <Gallery />
      </section>

      {/* footer */}
      <section className="">
        <div>
          <img src={FooterTopImage} />
        </div>

        {/* footer body */}
        <section className="bg-primary relative z-10 overflow-hidden">
          <div className="absolute h-11/12 py-5 -right-78 top-105 w-170 opacity-5">
            <img src={FooterArt} alt="" className="h-140 w-200 lg:hidden" />
          </div>

          <Footer />
        </section>
      </section>
    </>
  );
};

export default PrisonArcade;
