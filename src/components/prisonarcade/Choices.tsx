import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";
import { MdOutlineArrowOutward } from "react-icons/md";

// import { Link } from "react-router";
import StoreModal from "./StoreModal";

//Logos of choices
import Ayurweda from "../../assets/logos/ayurveda.webp";
import Brassware from "../../assets/logos/brassware.webp";
import cosmetics from "../../assets/logos/cosmetics.webp";
import Gems from "../../assets/logos/gems.webp";
import Handloom from "../../assets/logos/handloom.webp";
import jewellery from "../../assets/logos/jewellery.webp";
import Laksha from "../../assets/logos/laksha.webp";
import Mask from "../../assets/logos/mask.webp";
import Spices from "../../assets/logos/spices.webp";
import Tea from "../../assets/logos/tea.webp";
import Woodcarving from "../../assets/logos/wood-carving.webp";
import Photography from "../../assets/logos/photography.webp";
import Batik from "../../assets/logos/batik.webp";
import Leather from "../../assets/logos/leather.webp";

// import clay from "../../assets/logos/clay.webp";
// import Silver from "../../assets/logos/silver.webp";
// import Stoneware from "../../assets/logos/stoneware.webp";
// import Paintings from "../../assets/logos/paintings.webp";
// import Paper from "../../assets/logos/paper.webp";
// import Porcelain from "../../assets/logos/porcelain.webp";

//Logos of companies
import DelmahLogo from "../../assets/prisonarcade/DilmahLogoColour.jpg";
import PintannaLogo from "../../assets/prisonarcade/pintannaLogo.jpg";
import PGMartinLogo from "../../assets/prisonarcade/PGMartinLogo.jpg";
import MalibanLogo from "../../assets/prisonarcade/MalibanLogo.png";
import CycleIncenseLogo from "../../assets/prisonarcade/CycleIncenseLogo.jpg";
import SunshineLogo from "../../assets/prisonarcade/SunshileLogo.jpg";
import FreelanLogon from "../../assets/prisonarcade/FreelanLogo.jpg";
import EarthboundCreationsLogo from "../../assets/prisonarcade/EarthboundCreationsLogo.png";
import CeylonCinnamonLegendsLogo from "../../assets/prisonarcade/CeylonCinnamonLegendsLogo.jpg";
import ApeBatikLogo from "../../assets/prisonarcade/ApeBatikLogo.jpg";
import RoyalTouchLogo from "../../assets/prisonarcade/RoyalTouchLogo.jpg";
import APicLogo from "../../assets/prisonarcade/A-picturesLogo.jpg";
import indigoByKaramaLogo from "../../assets/prisonarcade/indigoByKaramaLogo.jpg";
import SiddhalepaLogo from "../../assets/prisonarcade/suiddalepaLogo.jpg";

//Promo Banners
import AdBanner from "../../assets/prisonarcade/AdHorizontal.png";
import AdBanner2 from "../../assets/prisonarcade/AdHorizontal2.png";


const promoImages = [AdBanner,AdBanner2];

type Card = {
  id: number;
  title: string;
  name: string;
  image: string;
  shellnumber: string;
  description: string;
  backImage: string;
  moreDetails: string; //back side description
  popup: string; //popup
  address: string; //description
  number: string;
  email: string;
};

const cardsData: Card[] = [
  //1 Pintanna
  {
    id: 1,
    address: "35, Galhena road, Gangodawila, Nugegoda, Colombo, Sri Lanka",
    number: "0117 054 054",
    email: "info.plantations@pintanna.lk",
    title: "Agricultural Service",
    name: "Pintanna Plantations Pvt Ltd",
    image: Ayurweda,
    shellnumber: "001 & 002",
    description: "Worn by guards of the royal royal prison arcade.",
    backImage: PintannaLogo,

    moreDetails: "A Harvest That Secures Your Future!",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //2 P.G.Martin
  {
    id: 2,
    title: "Shopping & retail",
    name: "P. G. Martin",
    address: "Galle Road,, Colombo, Sri Lanka",
    number: "072 768 4522",
    email: "info@pgmartin.lk",
    image: Leather,
    shellnumber: "003",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: PGMartinLogo,
    moreDetails:
      "Premium Leather Bags, Wallets, Belts, Handbags & Luggage 🇱🇰 | Since 1948 👜",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //3 Delmah
  {
    id: 3,
    address: "111 Negombo Road, Peliyagoda, Colombo, Sri Lanka",
    number: "0114 822 000",
    email: "info@dilmahtea.com",
    title: "Tea",
    name: "Dilmah Tea",
    image: Tea,
    shellnumber: "004 & 005",
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: DelmahLogo,
    moreDetails:
      "We're a family tea company spreading love for Ceylon tea, and infusing the world with kindness.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //4 No info for Siddhalepa
  {
    id: 4,
    title: "Ayurweda",
    name: "Siddhalepa",
    address: "33/3, Sri Dharmarama Road, Ratmalana, Sri Lanka",
    number: "0112 736 910",
    email: "info@siddhalepa.com",
    image: Ayurweda,
    shellnumber: "006",
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: SiddhalepaLogo,
    moreDetails:
      "This is the first Ayurvedic Manufacturing Company in East Asia to have been awarded the prestigious ISO 9001 Quality Standards Certification.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //5 Maliban
  {
    id: 5,
    title: "Food Services",
    address: "P.O.Box - 389,Galle Road, Ratmalana, Sri Lanka",
    number: "+94 71 914 5555",
    email: "cic@malibanbiscuit.com",
    name: "Maliban Biscuits ",
    image: Spices,
    shellnumber: "007",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: MalibanLogo,
    moreDetails:
      "The classic biscuits and cookie range that you know and love 70 years of inspiring goodness.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //6 Cycle Pure Incense
  {
    id: 6,
    title: "Pure Incense",
    name: "Cycle Pure Incense",
    image: Handloom,
    address: "No. 692, Rice Mill Road, Katunayake, Sri Lanka",
    number: "076 967 8678",
    email: "info@suwanda.lk",
    shellnumber: "008",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: CycleIncenseLogo,
    moreDetails:
      "Zero Carbon Certified Cycle Pure Incense Sticks are a 100% Sri Lankan product!",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Indigo by karma
  {
    id: 7,
    title: "Linan",
    image: Handloom,
    address: "NO 07, Ward Street, Galle Bazaar,, Galle, Sri Lanka",
    number: "071 285 3114",
    email: "admin@indigobykarma.com",
    name: "Indigo by karma",
    shellnumber: "009 &010",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: indigoByKaramaLogo,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info for elegance consortium lanka
  {
    id: 8,
    title: "Laksha",
    image: Laksha,
    name: "Elegance consortium lanka",
    address: "Address 1, Address 2",
    number: "0112369871",
    email: "info@gmail.com",
    shellnumber: "011",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info for Linan Sales
  {
    id: 9,
    title: "Mask",
    name: "Spa Ceylon",
    address: "Address 1, Address 2",
    number: "0112369871",
    email: "info@gmail.com",
    image: Mask,
    shellnumber: "012",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  // P.G.Martin
  {
    id: 10,
    title: "Shopping & retail",
    name: "P. G. Martin",
    address: "Galle Road,, Colombo, Sri Lanka",
    number: "072 768 4522",
    email: "info@pgmartin.lk",
    image: Leather,
    shellnumber: "013",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: PGMartinLogo,
    moreDetails:
      "Premium Leather Bags, Wallets, Belts, Handbags & Luggage 🇱🇰 | Since 1948 👜",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info for Biso jewellers
  {
    id: 11,
    title: "Jewellery",
    name: "Biso jewellers",
    image: jewellery,
    shellnumber: "014",
    address: "Address 1, Address 2",
    number: "0112369871",
    email: "info@gmail.com",
    description: "Inspired by candle-lit hhfgfhj corridors of the past.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info
  {
    id: 12,
    title: "Spices",
    name: "Spa Ceylon",
    image: Spices,
    shellnumber: "015",
    address: "Address 1, Address 2",
    number: "0112369871",
    email: "info@gmail.com",

    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  // Sunshine Tea
  {
    id: 13,
    title: "Tea",
    address: "754/5, Kandy Road, Wedamulla, Kelaniya , Colombo, Sri Lanka",
    number: "077 340 3866",
    email: "sunshinetea@sunshinetea.lk",
    name: "Sunshine Tea Pvt Ltd",
    image: Tea,
    shellnumber: "016 & 017",
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: SunshineLogo,
    moreDetails:
      "Sunshine Tea is a leading solution provider for all tea needs around the world.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Freaalan
  {
    id: 14,
    title: "Spices",
    name: "Matara Freelan ",
    address: "No. 38, Gunawardana Mawatha,Navimana South, Matara, Sri Lanka",
    number: "077 231 4205",
    email: "info@freelanmatara.com",
    shellnumber: "018",
    image: Spices,
    description: "Symbol of historic access to secret chambers.",
    backImage: FreelanLogon,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Earthbound Creations
  {
    id: 15,
    title: "Arts & Crafts Store",
    name: "Earthbound Creations",
    image: Woodcarving,
    address: "27/98, Augustawatta, Udaperadeniya, (20404) Sri Lanka.",
    number: "071 020 5556",
    email: "ranga@ebcsl.com",
    shellnumber: "019 & 020",
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: EarthboundCreationsLogo,
    moreDetails:
      "#earthboundlk reflecting the beauty of nature through eco-friendly, recycled, handmade crafts.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Ceylon Cinnamon Legends
  {
    id: 16,
    title: "Conmetics",
    address: "ONE GALLE FACE MALL COLOMBO LEVEL 4, Colombo, Sri Lanka",
    number: "0112 703 000",
    email: "info@ceyloncinnamonlegends.com",
    shellnumber: "021",

    name: "Ceylon Cinnamon Legends ",
    image: cosmetics,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: CeylonCinnamonLegendsLogo,
    moreDetails: "Cinnamon Value Added Products",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Ape Bathik
  {
    id: 17,
    title: "Batik",
    name: "Apé Batik",
    image: Batik,
    address: "Colombo, Sri Lanka",
    number: "077 595 8148",
    email: "apebatikstore@gmail.com",
    shellnumber: "022",
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: ApeBatikLogo,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info for Eligance consortium Lanka
  {
    id: 18,
    title: "Photography",
    name: "Spa Ceylon",
    address: "Address 1, Address 2",
    number: "0112369871",
    email: "info@gmail.com",
    image: Photography,
    shellnumber: "023",

    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: Brassware,
    moreDetails: "Luxury accessories once safeguarded in the vaults.",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //A-pictures
  {
    id: 19,
    title: "Photography",
    name: "A-pictures ",
    image: Photography,
    address: "No L1-12,Kandy City Centre,Kandy, Kandy, Sri Lanka",
    number: "070 440 0400",
    email: "apictureskcc@gmail.com",
    shellnumber: "024",
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: APicLogo,
    moreDetails:
      "",
    popup:
      "A Pictures, We are Specialized in Cameras & High-End Electronics! We offer branded cameras, accessories, telescopes, microscopes, binoculars, spotting scopes, cash counting machines, mobile & computer accessories all under one roof!",
  },

  //Royal Touch Ceylon Tea
  {
    id: 20,
    title: "Tea",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "025",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Tea,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info for ද ක්රාෆ්ට් මේමියම් ජුවලර්ස්
  {
    id: 21,
    title: "Tea",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "026",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Tea,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info for mas tropical food
  {
    id: 22,
    title: "Tea",
    name: "Mas Tropical Food Production",
    shellnumber: "027 & 028",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Tea,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info Nadeesha jewelers
  {
    id: 23,
    title: "Tea",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "029",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Tea,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info wasdas lanka
  {
    id: 24,
    title: "Tea",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "030",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Tea,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info eco vibe center
  {
    id: 25,
    title: "Tea",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "031",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Tea,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info thilakawardhana gems
  {
    id: 26,
    title: "Gems",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "032",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Gems,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info A.W.W.D.Silva Jewelers
  {
    id: 27,
    title: "Jewellery",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "033",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: jewellery,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //No info Tropidayas Bthik
  {
    id: 28,
    title: "Bathik",
    name: "Royal Touch Ceylon Tea",
    shellnumber: "034",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Batik,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Centauria Resort

  {
    id: 29,
    title: "Resort",
    name: "Centauria Resort",
    shellnumber: "035",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Photography,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Lankathilaka Gems

  {
    id: 30,
    title: "Gems",
    name: "Centauria Resort",
    shellnumber: "036",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: Gems,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Safayar jewelers Pvt LTD

  {
    id: 31,
    title: "Jewellery",
    name: "Safayar jewelers Pvt LTD",
    shellnumber: "036",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: jewellery,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },

  //Sohara Pvt LTD

  {
    id: 32,
    title: "Jewellery",
    name: "Safayar jewelers Pvt LTD",
    shellnumber: "036",
    address: "38/8,Rajapihilla mawatha , Kandy, Sri Lanka",
    number: "076 853 9889",
    email: "info@royaltouchceylontea.com",
    image: jewellery,
    description: "Luxury accessories once safeguarded in the vaults.",
    backImage: RoyalTouchLogo,
    moreDetails: "Refreshing your life",
    popup:
      "Luxury accessories once safeguarded in the vaults. Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.Luxury accessories once safeguarded in the vaults.",
  },
];

const CARDS_PER_PAGE = 9;

const Choices: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = Math.ceil(cardsData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentCards = cardsData.slice(startIndex, startIndex + CARDS_PER_PAGE);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mobileGroups = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    mobileGroups.push(cardsData.slice(i, i + 4));
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleOpenModal = (card: Card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };
  return (
    <section className="text-white px-4 lg:min-h-screen overflow-x-auto ">
      <div
        className="max-w-7xl mx-auto space-y-10 
      "
      >
        {/* Cards */}
        {!isMobile ? (
          // Desktop Grid
          <div className="flex gap-2 ">
            <div className="w-1/4  rounded-2xl overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                speed={800}
                slidesPerView={1}
                className="rounded-2xl"
              >
                {promoImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Promo ${index + 1}`}
                      className="w-full h-auto rounded-2xl object-contain pr-1"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="w-3/4 grid grid-cols-1 lg:grid-cols-3  lg:gap-3">
              {currentCards.map((card) => (
                <CardItem
                  key={card.id}
                  card={card}
                  onVisitStore={() => handleOpenModal(card)}
                />
              ))}
              <StoreModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                card={selectedCard}
              />
            </div>
          </div>
        ) : (
          <div
            className=" flex snap-x snap-mandatory overflow-x-auto w-full "
            style={{ scrollPaddingLeft: 16, scrollPaddingRight: 16 }}
          >
            {mobileGroups.map((group, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start flex flex-col gap-4 overflow-x-auto"
              >
                {group.map((card) => (
                  <CardItem
                    key={card.id}
                    card={card}
                    onVisitStore={() => handleOpenModal(card)}
                  />
                ))}
              </div>
            ))}
            <div>
              <div className="w-1/4  rounded-2xl overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop
                  speed={800}
                  slidesPerView={1}
                  className="rounded-2xl"
                >
                  {promoImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`Promo ${index + 1}`}
                        className="w-full h-auto rounded-2xl object-contain pr-1"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        )}

        {/* Pagination (only for desktop) */}
        {!isMobile && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border bg-primary border-white/20 rounded hover:bg-primary hover:cursor-pointer disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 text-sm border text-ternary border-ternary rounded hover:bg-ternary hover:cursor-pointer hover:text-white ${
                  currentPage === i + 1 ? "text-white bg-black" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border bg-primary border-white/20 rounded hover:bg-primary hover:cursor-pointer disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
      <StoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        card={selectedCard}
      />
    </section>
  );
};
interface CardItemProps {
  card: Card;
  onVisitStore: () => void;
}
const CardItem: React.FC<CardItemProps> = ({ card, onVisitStore }) => {
  return (
    <>
      <div className="flip-card-container w-[90%] lg:w-[100%]">
        <div className="flip-card">
          {/* Front Side */}
          <div className="flip-card-front bg-gradient-to-tr from-black via-[#0c0c0c] to-black lg:py-8 py-6 px-8 rounded-lg overflow-x-auto shadow-md">
            <div className="h-3/6">
              <div className="w-15 h-15 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div className="h-1/6 pt-2 lg:pt-1">
              <p className="text-white/70 text-base">{card.title}</p>
            </div>
            <div className="h-2/6 pt-3 lg:pt-1">
              <p className="text-white/30 text-sm">{card.description}</p>
            </div>
          </div>

          {/* Back Side */}

          <div className="flip-card-back bg-gradient-to-tr from-[#1a1a1a] via-[#111] to-[#000] lg:py-8 py-6 px-8 rounded-lg overflow-x-auto shadow-md text-white">
            <div className="flex items-center justify-between">
              <div className="w-15 h-15 rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-center">
                <img
                  src={card.backImage}
                  alt={card.title}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={onVisitStore}
                  className="flex px-3 py-2 bg-white rounded-xl text-black text-xs cursor-pointer hover:bg-white/90 shadow-2xl shadow-white/30"
                >
                  Visit Store <MdOutlineArrowOutward className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>

            <div className="h-1/6 pt-2 lg:pt-1">
              <p className="text-white/70 text-base">{card.name}</p>
            </div>
            <div className="h-2/6 pt-3 lg:pt-1">
              <p className="text-white/30 text-sm">{card.moreDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Choices;
