import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const heroImages: string[] = [
  new URL("../../assets/gallery/arcade-with-logo.jpg", import.meta.url).href,
  new URL("../../assets/prisonarcade/AdSquare.png", import.meta.url).href,
  new URL("../../assets/prisonarcade/AdSquare2.png", import.meta.url).href,
  // new URL("../../assets/prisonarcade/dilmateaBanner.png", import.meta.url).href,
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentIndex];

  return (
    <section className="bg-black w-full flex items-baseline-last  justify-center lg:h-[95dvh] h-auto">
      <div className=" w-5/6 h-full lg:h-4/5 flex flex-col lg:flex-row justify-center items-center">
        {/* Heading & Para */}
        <div className=" lg:w-1/2 lg:h-full lg:mt-10 mt-20  pt-10 ">
          <h1 className="font-bold text-[56px] lg:text-[80px]  leading-tight flex flex-wrap gap-x-2">
            {"The Prison Arcade".split(" ").map((word, i) => (
              <span
                key={i}
                className="bg-gradient-to-t from-white to-transparent bg-clip-text text-transparent"
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-[15px] text-white/30 mt-5 mb-10 text-justify lg:pr-10">
            Step into Sri Lanka's most extraordinary shopping destination, where forty meticulously restored heritage cells have been transformed into boutique stores. Here, history meets retail therapy as you browse through luxury brands including Maliban, PG Martin, Unanduwa, Silani, and Telak. Each cell tells its own story while housing premium products, creating an unparalleled shopping experience where colonial architecture frames modern commerce.
          </p>

          <p className="text-white">Open 9.00 AM to 6:00 PM</p>
          <p className="text-sm text-white/20 mt-2 lg:mb-0 mb-6">
            Open Daily (Monday - Sunday)
          </p>
        </div>

        {/* Image */}
        <div className="lg:hidden block relative lg:w-1/2 bg-black h-[90%] my-5 lg:pl-20 rounded-2xl overflow-hidden">
          <img
            src={currentImage}
            alt={`Slide ${currentIndex + 1}`}
            className="rounded-2xl w-full  h-full object-cover transition-all duration-1000 ease-in-out"
          />
        </div>
        <div className="hidden lg:block relative lg:w-1/2 bg-black h-[90%] lg:my-5 lg:pl-20 rounded-2xl overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            speed={800}
            slidesPerView={1}
            className="w-full h-full rounded-2xl"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
