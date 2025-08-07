import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const bannerImages: string[] = [
    "https://assets.ehelepolawalawwa.lk/assets/assets/prisonarcade/AdVertical2.webp",
    "https://assets.ehelepolawalawwa.lk/assets/assets/prisonarcade/AdVertical3.webp",
];

const Banner: React.FC = () => {
  return (
    <div className="lg:w-5/6 hidden lg:block mt-10 mb-10 w-11/12 h-60 rounded-2xl overflow-hidden mx-auto">
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
