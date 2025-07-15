import { useEffect} from "react";

//Components
import Hero from "../components/prisonarcade/Hero";
import Choices from "../components/prisonarcade/Choices";
import Gallery from "../components/prisonarcade/Gallery";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import FooterTopImage from "../assets/footer-image.png";

const PrisonArcade: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 

  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out `}
      >
        <NavBar page="shopping" />
      </section>

      <section className="lg:h-[95dvh] h-[100dvh]">
        <Hero />
      </section>

      <section className="flex items-center justify-center lg:mt-50 mt-20">
        <Choices />
      </section>

      <section className="">
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
