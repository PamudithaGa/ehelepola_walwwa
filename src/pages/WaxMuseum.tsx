import React,{useEffect} from 'react'

//Components
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import PageHero from '../components/waxmuseum/PageHero'
import FooterTopImage from '../assets/footer-image.png'
import Timeline from '../components/waxmuseum/Timeline'
import FooterArt from "../assets/logos/ehelepola-walauwwe-logo-white.png";
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

      <section className="lg:h-[95dvh] h-auto">
        <PageHero />
      </section>

       <section className=" h-auto">
        <Timeline />
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
    </>
  )
}

export default WaxMuseum
