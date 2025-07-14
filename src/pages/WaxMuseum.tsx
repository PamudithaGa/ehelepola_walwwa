import React,{useEffect} from 'react'

//Components
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import PageHero from '../components/waxmuseum/PageHero'
import FooterTopImage from '../assets/footer-image.png'

const WaxMuseum:React.FC = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
      {/* header */}
      <section
        className={`absolute w-full z-50 transition-all duration-2000 ease-in-out`}
      >
        <NavBar page="wax" />
      </section>

      <section className="lg:h-[80dvh]">
        <PageHero />
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
  )
}

export default WaxMuseum
