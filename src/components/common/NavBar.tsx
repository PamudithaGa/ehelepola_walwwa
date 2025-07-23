import React, { useState } from "react";
import { Link } from "react-router";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import Logo from "../../assets/logos/ehelepola-walauwwe-logo-black.png";
import LogoWhite from "../../assets/logos/seondary-logo.png";
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
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  const openMenu = () => {
    setIsMenuToggle(!isMenuToggle);
  };

  return (
    <nav className="sticky top-0 z-50  w-11/12 lg:w-3/4 mx-auto">
      {/* Desktop Navbar */}
      <div className="absolute hidden  w-full lg:flex justify-center items-center py-4  z-20">
        {/* Left Column */}
        <div className="w-2/5 py-4 flex justify-end items-center h-12 gap-6 bg-gradient-to-l from-white via-white/85 to-transparent pr-8">
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
            to="/aboutUs"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "about"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            About
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
            to="/PrisonArcade"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "shopping"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Shopping
          </Link>
          
        </div>

        {/* Center Column */}
        <div className="relative w-1/5 flex justify-center p-5 rounded-2xl h-30 w-30 bg-white">
          <img src={Logo} alt="Logo" className="absolute h-20 object-contain" />
        </div>

        {/* Right Column */}
        <div className="w-2/5 py-4 flex justify-start items-center gap-6 h-12 bg-gradient-to-r from-white via-white/90 to-transparent pl-8">
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
          <Link
            to="/courtyard"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "entertainment"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Entertainment
          </Link>
          <Link
            to="#"
            className={`text-base text-black transition-all duration-500 hover:underline hover:cursor-pointer ${
              page === "blog"
                ? "bg-primary text-secondary py-2 px-5 rounded-xl"
                : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/ContactUs"
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

      {/* Mobile Top Bar */}
      {/* <div className="flex lg:hidden justify-between items-center py-3 px-4 bg-white rounded-xl shadow-md"> */}
      <div
        className="absolute  flex lg:hidden justify-between items-center py-3 w-full  rounded-xl ">
        <img src={LogoWhite} alt="Logo" className="h-16 object-contain" />
        <button onClick={openMenu}>
          {isMenuToggle ? (
            <RxCross2 className="w-7 h-7 text-primary hover:text-highlight" />
          ) : (
            <FiMenu className="w-8 h-8 text-secondary hover:text-hi" />
          )}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      {isMenuToggle && (
        <div className="lg:hidden fixed top-0 right-0 h-screen w-full bg-white shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-end p-4">
            <button onClick={openMenu}>
              <RxCross2 className="w-6 h-6 text-primary   hover:text-highlight" />
            </button>
          </div>

          <ul className="flex flex-col gap-2 px-4 py-2 text-lg">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "#" },
              { label: "Wax Museum", path: "#" },
              { label: "Shopping", path: "#" },
              { label: "Dining", path: "#" },
              { label: "Entertainment", path: "#" },
              { label: "Blogs", path: "#" },
              { label: "Contact", path: "/ContactUs" },
            ].map(({ label, path }) => (
              <li
                key={label}
                className={`py-2 px-4 rounded-2xl  hover:bg-neutral-100 ${
                  page.toLowerCase() === label.toLowerCase().replace(" ", "")
                    ? "text-secondary  bg-primary"
                    : ""
                }`}
              >
                <Link to={path} onClick={openMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
