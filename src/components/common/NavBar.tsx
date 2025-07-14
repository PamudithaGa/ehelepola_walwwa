import React from "react";
import { Link } from "react-router";

import Logo from "../../assets/logos/ehelepola-walauwwe-logo-black.png";

interface NavbarProps {
  page:
    | "home"
    | "about"
    | "shopping"
    | "dining"
    | "entertainment"
    | "wax"
    | "contact";
}

const Navbar: React.FC<NavbarProps> = ({ page }) => {
  return (
    <nav className="sticky top-0 z-50 mt-2 w-3/4 mx-auto">
      <div className="flex justify-center items-center py-4 relative z-20">
        {/* Left Column */}
        <div
          className="w-2/5 py-4 flex justify-end items-center h-12 gap-6 bg-gradient-to-l from-white via-white/85 to-transparent
pr-8"
        >
          <Link
            to="/"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "home"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="#"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "about"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/PrisonArcade"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "shopping"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Shopping
          </Link>
          <Link
            to="/kingscourt"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "dining"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Dining
          </Link>
        </div>

        {/* Center Column */}
        <div className="relative w-1/5 flex justify-center p-5 rounded-2xl h-30 w-30 bg-white">
          <img src={Logo} alt="Logo" className="absolute h-20 object-contain" />
        </div>

        {/* Right Column */}
        <div className="w-2/5 py-4 flex justify-start items-center gap-6 h-12 bg-gradient-to-r from-white via-white/90 to-transparent pl-8">
          <Link
            to="/courtyard"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "entertainment" ? "bg-primary text-secondary py-2 px-5 rounded-xl" : ""
            }`}
          >
            Entertainment
          </Link>
          <Link
            to="/WaxMuseum"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "wax"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Wax Museum
          </Link>
          <Link
            to="/ContactUsTwo"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "contact"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
