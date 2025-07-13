import React from 'react'

import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import PageHero from '../components/kingscourt/PageHero'
import Gallery from '../components/kingscourt/Gallery'
import FooterTopImage from '../assets/footer-image.png'

const KingsCourt: React.FC = () => {
  return (
    <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="dining" />
      </section>

      <section className="lg:h-[80dvh]">
        <PageHero />
      </section>

      <section className="mt-50">
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
}

export default KingsCourt