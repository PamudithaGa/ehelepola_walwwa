import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const bannerImages: string[] = [
  new URL("../../assets/prisonarcade/examples (1).png", import.meta.url).href,
  new URL("../../assets/prisonarcade/examples (2).png", import.meta.url).href,
  new URL("../../assets/prisonarcade/examples (3).png", import.meta.url).href,
];

const Banner: React.FC = () => {
  return (
    <div className="lg:w-5/6 hidden lg:block w-11/12 h-60 rounded-2xl overflow-hidden mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        effect="fade"
        speed={800}
        slidesPerView={1}
        className="w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
