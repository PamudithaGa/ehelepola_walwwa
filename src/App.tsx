import { useEffect, useState } from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";

//Components
import Places from "./components/home/Places";
import Gallery from "./components/home/Gallery";
import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import HeroSection from "./components/home/HeroSection";

import FooterTopImage from './assets/footer-image.png'

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
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
      >
        <NavBar page="home" />
      </section>

      <section>
        <HeroSection />
      </section>

      <section className="flex items-center justify-center w-full mt-20">
        <Places />
      </section>

      <section className="flex items-center justify-center w-full bg-primary mt-20">
        <Gallery />
      </section>


      {/* footer */}
      <section
        className="mt-10 ">
        <div>
          <img src={FooterTopImage} />
        </div>
        <section
          className="bg-primary z-10">
          <Footer />
        </section>
      </section>
       <Toaster position="top-right" />

    </>
  );
}

export default App;
