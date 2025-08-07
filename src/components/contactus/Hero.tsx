import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { PiPhoneCall } from "react-icons/pi";

const Hero = () => {
  /* contact feature */
  //via email
  const companyEmail = "info@ehelepolawalauwwa.lk";
  const handleEmailClick = () => {
    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;
    window.open(emailUrl, "_blank");
  };

  //via whatsapp
  const companyWhatsApp = "94777371464";
  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${companyWhatsApp}`;
    window.open(whatsappLink, "_blank");
  };

  //via phone
  const phoneNumber = "+947073714674";
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <section className="bg-black w-full flex items-baseline-last justify-center h-[95dvh] z-0">
        <div className=" w-5/6 mx-auto h-4/5 flex justify-center items-center">
          <div className=" w-1/2 h-full pt-20">
            <h1 className="font-bold text-[80px]  leading-tight flex flex-wrap gap-x-5">
              {"Contact Us".split(" ").map((word, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
                >
                  {word}
                </span>
              ))}
            </h1>
            <div className="bg-amber-400 lg:hidden block">
              <img src="https://assets.ehelepolawalawwa.lk/assets/assets/logos/walawwa-building.webp" alt="" className="lg:hidden block" />
            </div>
            <p className="text-[15px] text-white/30 mt-5 mb-10 text-justify pr-10">
              Let’s talk we’re always ready to welcome you into the legacy of
              Ehelepola Walawwa. Whether you're seeking stories of the past,
              planning your visit, or exploring collaboration, our doors and
              history are open to you.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 md:gap-5 mt-6 md:mt-9 text-sm print:hidden">
              <button
                onClick={handleEmailClick}
                className="group border backdrop-blur-md bg-white/10 rounded-lg border-white/30 text-white text-sm md:text-base w-12 h-12 md:w-15 md:h-15 flex items-center justify-center hover:bg-white transition hover:cursor-pointer"
              >
                <IoMailOutline className="text-2xl  group-hover:text-black" />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="group border backdrop-blur-md bg-white/10 rounded-lg border-white/30 text-white text-sm md:text-base w-12 h-12 md:w-15 md:h-15 flex items-center justify-center hover:bg-white transition hover:cursor-pointer"
              >
                <FaWhatsapp className="text-2xl group-hover:text-black" />
              </button>

              <button
                onClick={handleCallClick}
                className="group border backdrop-blur-md bg-white/10 rounded-lg border-white/30 text-white text-sm md:text-base w-12 h-12 md:w-15 md:h-15 flex items-center justify-center hover:bg-white transition hover:cursor-pointer"
              >
                <PiPhoneCall className="text-2xl group-hover:text-black" />
              </button>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Hero;
