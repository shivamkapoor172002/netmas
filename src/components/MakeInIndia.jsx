import { useRef, useEffect, useState } from "react";
import MAKE_IN_INDIA from "../assets/images/make-in-india.png";
import CABLE_PHOTO from "../assets/images/cable-photo.png";
import INDIA_MAP from "../assets/images/india-map.png";

const MakeInIndia = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  
  // Number of repetitions
  const repetitions = 100;

  // Ref for the slider container
  const sliderRef = useRef(null);

  // Animation function for sliding text
  useEffect(() => {
    const slider = sliderRef.current;
    const textWidth = slider.children[0].offsetWidth; // Width of a single text element
    const gap = 10; // Adjust gap between iterations as needed
    let position = 0;
    const animation = setInterval(() => {
      position -= 1;
      slider.style.transform = `translateX(${position}px)`;

      // Reset position when text reaches the end
      if (position <= -textWidth - gap) {
        position = 0;
      }
    }, 50);

    return () => clearInterval(animation);
  }, []);

  // Create an array with a length of repetitions
  const repeatedText = Array.from(
    { length: repetitions },
    (_, i) => (
      <span key={i} style={{ marginRight: i === repetitions - 1 ? 0 : 12 }} className="font-orbitron">
        BASED IN INDIA
      </span>
    )
  );

  return (
    <div className="relative flex flex-col items-center font-roboto pb-10 py-12 bg-india-bg md:pb-4 md:py-8" style={{ overflow: 'hidden' }}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#61c2d0] to-[#0092D1] bg-opacity-35 z-0"></div>
  
      {/* India Map */}
      <img
        src={INDIA_MAP}
        alt="India Map"
        className="absolute inset-0 h-5/6 object-cover z-0 opacity-10 left-[830px] md:left-[210px] lg:left-[410px]"
        style={{
          filter: "brightness(50%)",
          top: "45%",
          transform: "translate(-50%, -50%)",
        }}
      />
  
      {/* Text Content */}
      <div className="text-white mt-[-20px] flex flex-col items-center relative z-10 font-medium gap-0 md:mr-5 lg:mr-12">
        <span className="text-[29px] lg:text-[25px] md:text-[20px]">CHOOSE INDIAN</span>
        <span className="text-[29px] lg:text-[25px] md:text-[20px]">PRODUCTS</span>
      </div>
  
      <div className="leading-6 text-center text-[#E1E1E1] text-[13px] lg:text-[12px] md:text-[10px] md:leading-4 md:w-3/5 font-light w-2/6 pt-3 relative z-10 gap-x-2 md:mr-5 lg:mr-12">
        Crafted with pride in India, our cables embody quality and innovation,
        connecting the world with excellence.
      </div>
  
      {/* Make in India Logo */}
      <img
        loading="lazy"
        src={MAKE_IN_INDIA}
        alt="Make in India Logo"
        className="mt-40 w-[320px] z-10 brightness-125 pr-2 md:w-[230px] lg:w-[300px] lg:mt-36 md:mt-28 md:mr-6 lg:mr-12"
        style={{ transform: `translateY(-${scrollPosition * 0.08}px)` }}
      />
  
      {/* Cable Photo at Bottom-Left Corner */}
      <img
        loading="lazy"
        src={CABLE_PHOTO}
        alt="Cable Photo"
        className="absolute bottom-0 left-0 h-[280px] w-[450px] md:w-[125px] md:h-[125px] lg:w-[280px] lg:h-[230px] md:mb-4 opacity-20 z-0 transform scale-x-[-1] pt-4 mb-[-18px] lg:mb-0"
      />
  
      {/* Cable Photo at Bottom-Right Corner */}
      <img
        loading="lazy"
        src={CABLE_PHOTO}
        alt="Cable Photo"
        className="absolute bottom-[-3px] right-0 h-[280px] w-[450px] md:w-[125px] md:h-[125px] lg:w-[280px] lg:h-[230px] md:mb-4 opacity-20 z-0 mb-[-18px] lg:mb-0"
      />
  
      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="absolute bottom-0 left-0 bg-[#9FE7F5] px-2 py-2 text-[#0092D1]"
        style={{
          whiteSpace: "nowrap",
          overflowX: "hidden",
          display: "flex",
        }}
      >
        {/* Display the repeated text */}
        <span className="font-orbitron md:text-[12px]">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MakeInIndia;
