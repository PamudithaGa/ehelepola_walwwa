import React, { useState } from 'react';
import { Link } from 'react-router';

interface NavProps {
  page: string;
}
const NavBar: React.FC<NavProps> = ({ page }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const linkClass = (name:string) =>
    `${page === name
      ? 'bg-black text-white px-3 py-2 rounded-md'
      : 'hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md'
    } transition`;

  return (
    <div className="flex justify-center items-center w-full p-10">
      <nav className="absolute rounded-2xl w-full mx-auto md:w-3/5 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
        <div className="w-full px-4 py-3 flex justify-end items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white font-regular justify-center w-full">
            <li><Link to="/" onClick={closeMenu} className={linkClass('home')}>Home</Link></li>
            <li><Link to="/" onClick={closeMenu} className={linkClass('about')}>About</Link></li>
            <li><Link to="/PrisonArcade" onClick={closeMenu} className={linkClass('PrisonArcade')}>Shopping</Link></li>
            <li><Link to="/services" onClick={closeMenu} className={linkClass('services')}>Dining</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu} className={linkClass('portfolio')}>Emtertainment</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className={linkClass('contact')}>Wax Museum</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className={linkClass('contact')}>Contact</Link></li>
          </ul>

          {/* Hamburger Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="w-full md:hidden px-4 pb-4 pt-2 backdrop-blur-md bg-white/10 text-white">
            <ul className="flex flex-col gap-4 font-medium items-center">
                <li><Link to="/" onClick={closeMenu} className={linkClass('home')}>Home</Link></li>
                <li><Link to="/" onClick={closeMenu} className={linkClass('about')}>About</Link></li>
                <li><Link to="/about" onClick={closeMenu} className={linkClass('about')}>Shopping</Link></li>
                <li><Link to="/services" onClick={closeMenu} className={linkClass('services')}>Dining</Link></li>
                <li><Link to="/portfolio" onClick={closeMenu} className={linkClass('portfolio')}>Emtertainment</Link></li>
                <li><Link to="/contact" onClick={closeMenu} className={linkClass('contact')}>Wax Museum</Link></li>
                <li><Link to="/contact" onClick={closeMenu} className={linkClass('contact')}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;