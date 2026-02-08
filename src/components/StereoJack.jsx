import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SJ from "../assets/images/stereojackc.jpg";
import MJ from "../assets/images/monojack.jpg";
import XLR from "../assets/images/xlr.jpg";
import EP from "../assets/images/ep.png";
import SPKON from "../assets/images/speakeron.jpg";
import RG6 from "../assets/images/rg6.jpg";
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


const StereoJack = () => {

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
            <div className="text-lg flex gap-2 pl-16 pb-10 md:text-[15px]">
                <Link to={"/products"} className="text-black no-underline">
                    <span>Products</span>
                </Link>                
                <span>{">"}</span>
                <Link to={"/products"} className="text-black no-underline">
                    <span>Connectors</span>
                </Link>
                <span>{">"}</span>
                <span className="text-[#0092D1]">Stereo Jack Connector</span>
            </div>
            <div className="flex justify-center px-20 gap-28 md:flex-col md:items-center md:gap-10 lg:flex-col lg:items-center lg:px-5 lg:gap-10">
                <div className="product-image">
                    <img src={SJ} className="w-72 lg:w-64 md:w-52 md:pr-3 md:ml-1" alt="speaker-cable" />
                </div>
                <div className="flex flex-col w-96 lg:w-4/6 product-image">
                    <div className="flex flex-col text-[32px] md:text-[20px] font-bold pb-6 md:gap-2 md:pl-20 md:flex-row lg:gap-2 lg:flex-row lg:pl-20">
                        <span>Stereo Jack</span>
                        <span>Connector</span>
                    </div>
                    <div className="text-smi font-normal tracking-wide leading-6 md:px-5 md:pl-9 md:text-[11px]">
                        <span className="text-[#424242]">
                            Introducing our StereoJack connector – the essential link for superior
                            audio connectivity. Crafted for reliability and performance, this
                            connector ensures seamless transmission of stereo signals with
                            crystal-clear clarity. Compact yet robust, it's perfect for a wide range
                            of applications, from headphones to audio interfaces. Upgrade your audio
                            setup with our StereoJack connector today.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-5 product-image md:gap-3 md:pr-7 lg:mb-4 lg:gap-7">
                    <div>
                        <span className="text-sm md:text-[12px] md:ml-[-12px] lg:ml-[-35px]">Other Product Images</span>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/mj-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={MJ} productName={"Mono Jack"} />
                        </Link>
                        <Link to={"/xlr-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={XLR} productName={"XLR Connector"} />
                        </Link>
                        <Link to={"/ep-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={EP} productName={"EP Connector"} />
                        </Link>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/speakon-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={SPKON} productName={"SpeakOn"} />
                        </Link>
                        <Link to={"/rg-cable"} className="no-underline">
                        <ProductImageWithHover imageUrl={RG6} productName={"RG6 Cable"} />
                        </Link>
                        <Link to={"/product-floor-box"} className="no-underline">
                        <ProductImageWithHover imageUrl={FLOOR_BOX} productName={"Floor Box"} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mb-[-58.2px] md:mb-[-58px] mt-9 product-image bg-[#D9D9D9]">
              <a href="" download className="bg-[#0092D1] no-underline flex items-center py-2 px-2 gap-2 md:gap-1">
                  <img src={DOWNLOAD} className="w-4" alt="fil-download-icon" />
                  <span className=" text-[#FFFFFF] font-light md:text-[10px]">Download Data Sheet</span>
              </a>
            </div>
        </div>
    )
};

export default StereoJack;