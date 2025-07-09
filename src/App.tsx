import { useState } from "react";
import "./App.css";

//Components
import Places from "./components/home/Places";
import Gallery from "./components/home/Gallery";
import Footer from "./components/common/Footer";

import FooterTopImage from './assets/footer-image.png'

function App() {
  return (
    <>
      <section className="flex items-center justify-center w-full ">
        <Places />
      </section>

      <section className="flex items-center justify-center w-full bg-primary">
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

    </>
  );
}

export default App;
