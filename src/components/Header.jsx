import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import LOGO from "../assets/images/logo2.png";
import ARROW_DOWN from "../assets/icons/arrow-down-s-fill.png";
import DropDownProducts from "./DropDownProducts";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Event handlers for mouse enter and leave (only for large screens)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsDropdownOpen(true);
      // Clear any existing timeout when hovering over
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // Set a timeout to close the dropdown after a delay
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200); // Adjust the delay time (300 milliseconds in this example)
    }
  };

  const handleDropdownMouseEnter = () => {
    if (!isMobile) {
      // Clear the timeout when hovering over the dropdown
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (!isMobile) {
      // Set a timeout to close the dropdown after a delay when leaving the dropdown area
      timeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 200); // Adjust the delay time (300 milliseconds in this example)
    }
  };

  

  return (
    <div className="relative z-50">
      <div className="header flex flex-row justify-between w-full items-center bg-[#FFFFFF] pb-1">
        <div className="flex w-full px-10 lg:px-5 md:px-1 justify-between items-center pt-2 md:pt-2 font-roboto md:gap-4">
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <motion.img loading="lazy" src={LOGO} className="shrink-0 mix-blend-multiply w-[12.5rem] md:w-[8rem] mb-[-1.125rem] md:mb-[-0.8rem]" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center md:mt-3 mt-7 font-roboto font-normal text-[1rem] md:text-[10px] md:pr-0">
          {isMobile ? (
              // Render MobileNav for mobile screens
              <MobileNav />
            ) : (
              // Render navigation links for non-mobile screens
              <>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} className="text-center text-slate-700 cursor-pointer mr-16 lg:mr-10 md:mr-1">
              <Link to="/" className="text-slate-700 p-1  animate no-underline">
                Home
              </Link>
            </motion.div>
            <Link to="/products" className="text-slate-700 text-[0.938rem] md:text-[0.625rem] cursor-pointer no-underline">
            <div
              className="flex items-center justify-center text-center text-slate-700 cursor-pointer mr-11 md:mr-1 animate lg:mr-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              //onClick={handleProductsClick} // Add click event handler here
            >
              
              <motion.div
                className="border-0 p-1 bg-transparent md:flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              >
                <span>Products</span>
                <motion.img
                  src={ARROW_DOWN}
                  className={`w-[1.375rem] md:w-[0.688rem] md:hidden opacity-40 pl-2 md:pl-1 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  style={{ originX: 0.7, originY: 0.5 }}
                  alt="Dropdown Arrow"
                  animate={{opacity: 1, y: 0, transition: { duration: 1 }, rotate: isDropdownOpen ? 180 : 0 }}
                />
              </motion.div>
              
            </div>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              className="flex gap-5 justify-between text-center text-slate-700 cursor-pointer mr-16 md:mr-1 lg:mr-10"
            >
              <Link to="/about" className="text-slate-700 p-1 animate no-underline">
                About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              className="flex gap-5 mr-16 md:mr-1 justify-between text-center text-slate-700 cursor-pointer lg:mr-10"
            >
              <Link to="/contact" className="text-slate-700 p-1 animate no-underline">
                Contact Us
              </Link>
            </motion.div>
            </>
            )}
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 md:left-10 z-50" onMouseEnter={handleDropdownMouseEnter} onMouseLeave={handleDropdownMouseLeave}>
          <DropDownProducts />
        </div>
      )}
    </div>
  );
};

export default Header;
