import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import LOGO from "../assets/images/logo3.png";
import MAP from "../assets/images/map.png";
import { Link } from "react-router-dom";

const AboutSection = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="flex md:flex-col md:items-center justify-center pl-48 lg:pl-32 md:pl-0 gap-36 md:gap-7 lg:gap-12 items-center bg-[#222222] py-6 pb-14 sm:flex-col font-roboto">
      <div className="flex flex-col ml-[-90px] md:ml-16" data-aos="fade-right">
        <div className="flex items-center text-[#227BAF]">
          <img loading="lazy" src={LOGO} className="w-12 h-12 md:w-10 md:h-10 lg:w-11 lg:h-11 md:ml-6" />
          <div className="flex justify-center px-2">
            <span className="text-[23px] md:text-[18px] lg:text-[20px] font-light">NETMAS</span>
          </div>
        </div>
        <div className="flex text-[#9CA5AF] pt-3">
          <div className="flex flex-wrap max-w-lg text-[14px] md:text-[12px] lg:text-[10px] font-light leading-6 lg:leading-5 w-4/5 lg:w-3/6 text-justify lg:text-centre">
            Netmas empowers every audio enthusiast and professional with
            superior quality audio accessories, meticulously crafted to enhance
            sound clarity, reliability, and performance.
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-[14px] ml-[-160px] lg:mt-[-20px] mr-8 md:ml-2">
        <div className="flex items-center text-[#227BAF]" data-aos="fade-right">
          <span className="text-[23px] md:text-[19px] lg:text-[21px] font-light md:ml-[70px]">MENU</span>
        </div>
        <div className="flex">
          <ul className="flex flex-col md:flex-row pt-6 gap-[7px] lg:leading-4 md:gap-3 text-[13px] md:text-[11px] lg:text-[10px] font-light text-[#9CA5AF] list-none" data-aos="fade-right">
            <li className="cursor-pointer"><Link to={"/"} className="text-[#9CA5AF] section-link no-underline">Home</Link></li>
            <li className="cursor-pointer"><Link className="text-[#9CA5AF] section-link no-underline">Products</Link></li>
            <li className="cursor-pointer"><Link to={"/about"} className="text-[#9CA5AF] section-link no-underline">About Us</Link></li>
            <li className="cursor-pointer"><Link to={"/contact"} className="text-[#9CA5AF] section-link no-underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center pt-12 pr-9 lg:pr-5 lg:pt-8 md:pt-7 md:pr-3" data-aos="fade-right">
        <div className="flex flex-wrap items-center relative text-[#227BAF] pb-20">
          <span className="text-[24px] md:text-[20px] flex gap-2 md:pr-[20px] lg:text-[21px] font-light">
            <span>LOCATE</span>
            <span>US</span>
          </span>
        </div>
        <div className="">
          <div className="flex flex-col flex-wrap items-center justify-center pb-16 bg-[#9CA5AF]">
            <img loading="lazy" src={MAP} className="absolute w-80 h-64 md:w-60 lg:w-60 lg:h-52 lg:mt-[-30px] object-cover" />
            <div className="absolute flex flex-wrap">
              <Link to={"/contact"} className="no-underline">
                <button className="flex flex-wrap justify-center text-[10px] md:text-[9px] lg:text-[9px] px-3 py-2 mt-1 lg:mt-[-30px] md:px-2 md:py-1.5 lg:py-[5px] lg:px-2.5 bg-sky-600 rounded-full border-none text-slate-300 cursor-pointer transform transition duration-500 hover:scale-110">LOCATE US</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 md:pl-[125px] lg:ml-0 lg:mt-[-10px]">
        <div className="flex items-center text-[#227BAF]" data-aos="fade-right">
            <div className="flex justify-center px-1">
              <span className="text-[23px] md:text-[18px] lg:text-[20px] font-light">CONTACT</span>
            </div>
          </div>
          <div className="flex text-[#9CA5AF] pt-6 ml-2 md:ml-[-10px]" data-aos="fade-right">
            <div className="flex flex-col flex-wrap max-w-lg text-[12px] md:text-[11px] lg:text-[10px] font-light leading-5 md:leading-4 lg:leading-5 w-4/6 md:w-5/6 lg:w-11/12 md:text-left text-left">
              <span className="w-2/3">
                Address:A-70-SECTOR 33,
                Noida,Uttar Pradesh,
                201301,India                
              </span>
              <span>Contact No:+918791302481</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutSection;
