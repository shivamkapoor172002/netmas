import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AMP_RACKS from "../assets/images/racks.jpg";
import UTP from "../assets/images/cat6.jpg";
import SNAKE from "../assets/images/snake.jpg";
import RG6 from "../assets/images/rg6.jpg";
import XLR from "../assets/images/xlr.jpg";
import SPKON from "../assets/images/speakeron.jpg";
import FLOOR_BOX from "../assets/images/floorbox1.png";
import DOWNLOAD from "../assets/icons/file-download.png";

const ProductImageWithHover = ({ imageUrl, productName }) => {
    const [hovered, setHovered] = useState(false);
  
    return (
      <div
        className="h-24 w-28 md:h-[70px] md:w-[80px] bg-[#D9D9D9] cursor-pointer relative overflow-hidden rounded-md p-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={imageUrl} className="w-full h-full" alt="" />
        <div
          className={`absolute inset-0 bg-gray-100 bg-opacity-50 transition-transform ${
            hovered ? "translate-y-0 delay-100" : "translate-y-full delay-200"
          } flex justify-center items-center`}
        >
          <span className="text-white md:text-[11px] text-center gap-1">{productName}</span>
        </div>
      </div>
    );
  };
  

const AmpRack = () => {
    
    useEffect(() => {
        const images = document.querySelectorAll(".product-image");
        let delay = 900; // Initial delay in milliseconds
        let duration = 2000; // Duration of the fade-in animation in milliseconds
      
        images.forEach((image, index) => {
          image.style.animation = `fadeIn ${duration / 1000}s ease ${delay * index / 1000}s forwards`;
        });
      }, []);    

    return (
        <div className="w-full py-10 font-roboto border-solid border-l-0 border-r-0 border-b-0 border-t-2 border-[#D9D9D9]">
            <div className="text-lg flex gap-2 pl-16 pb-10 md:text-[15px] md:pl-8">
                <Link to={"/products"} className="text-black no-underline">
                    <span>Products</span>
                </Link>
                <span>{">"}</span>                
                <span className="text-[#0092D1]">Server Racks</span>
            </div>
            <div className="flex justify-center px-20 gap-28 md:flex-col md:items-center md:gap-10 lg:flex-col lg:items-center lg:px-5 lg:gap-10">
                <div className="product-image">
                    <img src={AMP_RACKS} className="w-72 lg:w-64 md:w-52 md:mr-3 lg:mr-8" alt="speaker-cable"/>
                </div>
                <div className="flex flex-col w-96 lg:w-4/6 product-image">
                    <div className="flex flex-col text-[32px] md:text-[22px] font-bold pb-6 md:gap-2 md:pl-24 md:flex-row lg:gap-2 lg:flex-row lg:pl-16">
                        <span>Server</span>
                        <span>Racks</span>
                    </div>
                    <div className="text-smi font-normal tracking-wide leading-6 md:px-7 md:text-[11px]">
                        <span className="text-[#424242]">
                        A server rack is a specialized enclosure for organizing and housing 
                        computer servers and networking equipment. Made of sturdy metal, 
                        these racks come in various sizes and feature standardized dimensions
                        for compatibility with industry-standard server equipment. They include
                        mounting rails or shelves to hold hardware securely and often have features
                        like cable management, ventilation, and security locks. Server racks optimize
                        space, improve organization, and streamline maintenance in data centers 
                        and businesses by centralizing IT equipment.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-5 product-image md:gap-3 md:pr-5 lg:mb-7 lg:gap-7">
                    <div>
                        <span className="text-sm md:text-[12px] md:ml-[-10px] lg:ml-[-35px]">Other Product Images</span>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/utp-cable"} className="no-underline">
                        <ProductImageWithHover imageUrl={UTP} productName={"UTP Cable"} />
                        </Link>
                        <Link to={"/snake-cable"} className="no-underline">
                        <ProductImageWithHover imageUrl={SNAKE} productName={"Snake Cable"} />
                        </Link>
                        <Link to={"/rg-cable"} className="no-underline">
                        <ProductImageWithHover imageUrl={RG6} productName={"RG6 Cable"} />
                        </Link>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/xlr-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={XLR} productName={"XLR Connector"} />
                        </Link>
                        <Link to={"/speakon-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={SPKON} productName={"SpeakOn Connector"} />
                        </Link>
                        <Link to={"/product-floor-box"} className="no-underline">
                        <ProductImageWithHover imageUrl={FLOOR_BOX} productName={"Floor Box"} />                        
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mb-[-40px] mt-9 product-image bg-[#D9D9D9]">
              <a href="" download className="bg-[#0092D1] no-underline flex items-center py-2 px-2 gap-2 md:gap-1">
                <img src={DOWNLOAD} className="w-4" alt="fil-download-icon" />
                <span className=" text-[#FFFFFF] font-light md:text-[10px]">Download Data Sheet</span>
              </a>
            </div>
        </div>
    )
};

export default AmpRack;