import { useState } from "react";
import { Link } from "react-router-dom";
import CROSS from "../assets/icons/cross1.png";

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleMobileMenuToggle}
        className="ml-auto mr-4 bg-transparent border-0 text-gray-700 focus:outline-none"
      >
        {/* Hamburger icon */}
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className={`line line-1 ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`line line-2 ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`line line-3 ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>
      </button>
      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#FFFFFF] bg-opacity-80 overflow-hidden z-50 transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={closeMobileMenu}
            className="self-end focus:outline-none bg-transparent border-0 p-5"
          >
            {/* Close icon */}
            <img src={CROSS} className="h-8 w-8 lg:h-10 lg:w-10 lg:m-2 lg:mt-6" />
          </button>
          <nav className="mt-8 text-md lg:mt-3">
            <ul className="space-y-3 list-none px-1">
              <li className="border-t-[1px] pt-1 border-solid border-0">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-slate-500 no-underline"
                >
                  Home
                </Link>
              </li>
              <li className="border-t-[1px] pt-2 border-solid border-0">
                <Link
                  to="/products"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-slate-500 no-underline"
                >
                  Products
                </Link>
              </li>
              <li className="border-t-[1px] pt-2 border-solid border-0">
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-slate-500 no-underline"
                >
                  About Us
                </Link>
              </li>
              <li className="border-t-[1px] border-b-[1px] py-2 border-solid border-0">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="text-gray-300 hover:text-slate-500 no-underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
