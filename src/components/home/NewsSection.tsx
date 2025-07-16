import Slider from "react-slick";
import NewsCard from "./NewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageTest from "../../assets/gallery/arcade.jpg"

const updates = [
  {
    title: "Ehelepola Walawwa Receives National Recognition",
    description: "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
    image: ImageTest,
    date: "22",
    month: "July"
  },
  {
    title: "Ehelepola Walawwa Receives National Recognition",
    description: "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
    image: ImageTest,
    date: "22",
    month: "July"
  },
  {
    title: "Ehelepola Walawwa Receives National Recognition",
    description: "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
    image: ImageTest,
    date: "22",
    month: "July"
  },
  {
    title: "Ehelepola Walawwa Receives National Recognition",
    description: "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
    image: ImageTest,
    date: "22",
    month: "July"
  },
  {
    title: "Ehelepola Walawwa Receives National Recognition",
    description: "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
    image: ImageTest,
    date: "22",
    month: "July"
  },
  {
    title: "Ehelepola Walawwa Receives National Recognition",
    description: "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
    image: ImageTest,
    date: "22",
    month: "July"
  },
  {
    title: "Ehelepola Walawwa Receives National Recognition",
    description: "The iconic building is now listed as a protected heritage site, preserving its cultural significance for future generations. This designation not only safeguards its architectural integrity but also highlights its vital role in the region’s historical narrative. ",
    image: ImageTest,
    date: "22",
    month: "July"
  },
];

const NewsSection: React.FC = () => {
  const settings = {
    rtl: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="p-6 w-11/12 mx-auto">
      <div className="mt-5 mb-10">
        <h1 className="text-secondary leading-15  lg:text-6xl text-[42px] font-bold ">Recents News</h1>
        <p className="text-gray-600 text-base leading-relaxed mt-2 w-5/6 pr-30">
          Stay updated with the latest announcements, stories, and happenings from Ehelepola Walawwe where heritage meets today. Explore event highlights, restoration updates, and cultural moments that honor its historic legacy.
        </p>
      </div>
      <Slider {...settings} className="z-50">
        {updates.map((item, index) => (
          <div key={index} className="px-5">
            <NewsCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NewsSection;
