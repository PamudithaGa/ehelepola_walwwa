import React from "react";
import { Link } from "react-router";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import FooterLogo from "../../assets/logos/footer-logo-white.webp";
import ShadeLogo from "../../assets/logos/loading-logo-white.png";


const Footer: React.FC = () => {
  return (
    <>
      <footer className="relative overflow-hidden text-[#7d7d7d] lg:w-5/6 mx-auto py-6 z-20">
        {/* line art */}
       

        <div className="absolute block lg:hidden  w-200 h-150 top-100 overflow-hidden md:top-90  left-5">
          <img src={ShadeLogo} alt="" className="opacity-5 w-full h-full" />
        </div>

        {/* Main Footer Content */}
        <div className="w-full mx-auto px-4 py-12 flex-col flex lg:flex-row gap-10">
          {/* Logo + Description */}
          <div className="w-full lg md:w-2/5 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <img
              src={FooterLogo}
              className="w-50 lg:w-60 h-auto mb-8"
              alt="Ehelepola walawwe"
            />
            <p className="text-[16px] leading-7 text-justify lg:pr-10">
              Discover the timeless legacy of a historic 19th-century manor in
              the heart of Kandy. Once the ancestral home of Ehelepola Nilame
              and later repurposed as a colonial prison, today it stands
              restored as a cultural heritage site—celebrating Sri Lanka's rich
              history and architecture.
            </p>
          </div>

          {/* Feature Place Links */}
          <div className="w-full md:w-1/3 lg:w-1/5 lg:mt-8 flex flex-col">
            <h3 className="text-white text-[18px] font-semibold mb-4">
              Important Links
            </h3>
            <ul className="flex flex-col gap-2 text-[16px]">
              <li>
                <Link
                  to="/WaxMuseum"
                  className="hover:text-white transition-colors duration-300"
                >
                  Wax Museum
                </Link>
              </li>
              <li>
                <Link
                  to="/PrisonArcade"
                  className="hover:text-white transition-colors duration-300"
                >
                  Prison Arcade
                </Link>
              </li>
              <li>
                <Link
                  to="/kingscourt"
                  className="hover:text-white transition-colors duration-300"
                >
                  Kings Court
                </Link>
              </li>
              <li>
                <Link
                  to="/courtyard"
                  className="hover:text-white transition-colors duration-300"
                >
                  Court Yard
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Our Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 lg:w-1/5 lg:mt-8 flex flex-col">
            <h3 className="text-white text-[18px] font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-[16px]">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/PrisonArcade"
                  className="hover:text-white transition-colors duration-300"
                >
                  Shopping
                </Link>
              </li>
              <li>
                <Link
                  to="/kingscourt"
                  className="hover:text-white transition-colors duration-300"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  to="/courtyard"
                  className="hover:text-white transition-colors duration-300"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  to="//ContactUs"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 lg:w-1/5 lg:mt-8">
            <h3 className="text-white text-[18px] font-semibold mb-4">
              Contact Info
            </h3>
            <p className="text-[16px] mb-2">
              Ehelepola Walawwa, Raja Veediya, Senkadagala, Mahanuwara
            </p>
            <p className="text-[16px] mb-2 hover:text-white transition-colors duration-300">
              info@ehelepolawalawwa.com{" "}
            </p>
            <p className="text-[16px] mb-2 hover:text-white transition-colors duration-300">
              +94 777 371 464
            </p>
            <p className="text-[16px] mb-2 hover:text-white transition-colors duration-300">
              +94 707 371 464
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="py-4 w-full px-4 text-highlight bg-[#131313]">
        <div className="w-5/6 mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-[12px] text-center lg:text-justify">
            Powered by All In One IT Solutions © 2025 All Rights Reserved.
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-[#7d7d7d]">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebookSquare className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaWhatsappSquare className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagramSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
