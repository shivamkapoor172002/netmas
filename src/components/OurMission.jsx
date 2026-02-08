import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";
import ARROW_CIRCLE_RIGHT from "../assets/icons/arrow-right-circle-fill.png";
import ICON_1 from "../assets/icons/img_aboutus_number.png";
import ICON_2 from "../assets/icons/img_aboutus_business.png";
import ICON_3 from "../assets/icons/img_aboutus_discover.png";
import ICON_4 from "../assets/icons/img_aboutus_vision.png";

const OurMission = () => {

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

  useEffect(() =>{
    Aos.init({duration:2000});
  },[])

    return (
      <div className="flex flex-col justify-center items-center pt-20 lg:pt-16 w-35 h-auto md:pt-4 lg:pr-5 font-roboto bg-gradient-to-r from-[#61c2d0] to-[#0092D1] bg-opacity-35">
          <div className="text-7xl font-medium text-black pt-10" style={{ transform: `translateY(-${scrollPosition * 0.08}px)` }}>
            <span className="text-[38px] md:text-[24px] lg:text-[32px]">OUR MISSION</span>
          </div>

          <div className="leading-8 text-center text-gray-700 text-mid font-normal w-2/4 pt-3 lg:pt-1 md:text-[9px] md:w-4/5 lg:w-3/5 md:leading-5">
            Our mission is to empower every audio enthusiast and professional
            with superior quality audio accessories, meticulously crafted to
            enhance sound clarity, reliability, and performance.
          </div>


          <div className="mb-16 mt-10 md:mb-12">
            <div className="flex gap-11 md:gap-4" data-aos = 'fade-right'>
              <div className="flex items-center justify-center w-32 h-32 md:w-[68px] md:h-[68px] lg:w-28 lg:h-28 relative transform transition duration-500 hover:scale-110">
                <div className="flex h-full items-center rounded-full w-full font-black bg-white border-[#B4DEF1] md:border-4 circular-container">
                  <img
                    loading="lazy"
                    src={ICON_1}
                    className="h-[49px] md:h-[32px] md:pl-4 lg:pl-7 pl-8 object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-transparent border-none cursor-pointer opacity-60">
                  <img src={ARROW_CIRCLE_RIGHT} alt="" className="w-7 md:w-4" />
                </button>  
              </div>
              <div className="flex items-center w-32 h-32 md:w-[68px] md:h-[68px] lg:w-28 lg:h-28 relative transform transition duration-500 hover:scale-110">
                <div className="flex h-full items-center rounded-full w-full font-black bg-white border-[#B4DEF1] md:border-4 circular-container">
                  <img
                    loading="lazy"
                    src={ICON_2}
                    className="h-[47px] md:h-[32px] md:pl-4 lg:pl-6 pl-8 object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-transparent border-none cursor-pointer opacity-60">
                  <img src={ARROW_CIRCLE_RIGHT} alt="" className="w-7 md:w-5" />
                </button>
              </div>
              <div className="flex items-center w-32 h-32 md:w-[68px] md:h-[68px] lg:w-28 lg:h-28 relative transform transition duration-500 hover:scale-110">
                <div className="flex h-full items-center rounded-full w-full font-black bg-white border-[#B4DEF1] md:border-4 circular-container">
                  <img
                    loading="lazy"
                    src={ICON_3}
                   className="h-[64px] md:h-[45px] md:pl-4 lg:pl-6 pl-8 pb-2 object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-transparent border-none cursor-pointer opacity-60">
                  <img src={ARROW_CIRCLE_RIGHT} alt="" className="w-7 text-white md:w-5" />
                </button>
              </div>
              <div className="flex items-center w-32 h-32 md:w-[68px] md:h-[68px] lg:w-28 lg:h-28 relative transform transition duration-500 hover:scale-110">
                <div className="flex h-full items-center rounded-full w-full bg-white border-[#B4DEF1] md:border-4 circular-container">
                  <img
                    loading="lazy"
                    src={ICON_4}
                    className="h-12 md:h-7 md:pl-4 lg:pl-6 pl-8 object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-transparent border-none cursor-pointer opacity-60">
                  <img src={ARROW_CIRCLE_RIGHT} alt="" className="w-7 md:w-5" />
                </button>
              </div>
            </div>
          </div>
      </div>

    )
};

export default OurMission;