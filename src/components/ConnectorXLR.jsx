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

const ConnectorXLR = () => {

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
            <div className="text-lg flex gap-2 pl-16 pb-10 md:text-[15px] md:pl-7">
                <Link to={"/products"} className="text-black no-underline">
                    <span>Products</span>
                </Link>                
                <span>{">"}</span>
                <Link to={"/products"} className="text-black no-underline">
                    <span>Connectors</span>
                </Link>
                <span>{">"}</span>
                <span className="text-[#0092D1]">XLR Connector</span>
            </div>
            <div className="flex justify-center px-20 gap-28 md:flex-col md:items-center md:gap-10 lg:flex-col lg:items-center lg:px-5 lg:gap-10">
                <div className="product-image">
                    <img src={XLR} className="w-72 lg:w-64 md:w-52 md:pr-5 md:ml-1" alt="speaker-cable" />
                </div>
                <div className="flex flex-col w-96 lg:w-4/6 product-image">
                    <div className="flex flex-col text-[32px] md:text-[22px] font-bold pb-6 md:flex-row md:gap-2 md:pl-24 lg:gap-2 lg:flex-row lg:pl-32">
                        <span>XLR</span>
                        <span>Connector</span>
                    </div>
                    <div className="text-smi font-normal tracking-wide leading-6 md:px-4 md:pl-7 md:text-[11px]">
                        <span className="text-[#424242]">
                            Our XLR connectors are the industry standard for professional
                            audio and lighting applications. With their sturdy design and
                            secure locking mechanism, they ensure reliable connections for
                            microphones, speakers, and other audio equipment. Crafted with
                            precision and durability in mind, our XLR connectors guarantee
                            high-quality signal transmission for all your production needs.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-5 product-image md:gap-3 md:pr-5 lg:mb-4 lg:gap-7">
                    <div>
                        <span className="text-sm md:text-[12px] md:ml-[-9px] lg:ml-[-35px]">Other Product Images</span>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/mj-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={MJ} productName={"Mono Jack"} />
                        </Link>
                        <Link to={"/sj-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={SJ} productName={"Stereo Jack"} />
                        </Link>
                        <Link to={"/ep-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={EP} productName={"EP Connector"} />
                        </Link>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/speakon-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={SPKON} productName={"SpeakOn Connector"} />
                        </Link>
                        <Link to={"/rg-cable"}>
                        <ProductImageWithHover imageUrl={RG6} productName={"RG-6 Cable"} />
                        </Link>
                        <Link to={"/product-floor-box"} className="no-underline">
                        <ProductImageWithHover imageUrl={FLOOR_BOX} productName={"Floor Box"} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mb-[-59px] md:mb-[-58px] mt-9 product-image bg-[#D9D9D9]">
              <a href="" download className="bg-[#0092D1] no-underline flex items-center py-2 px-2 gap-2 md:gap-1">
                <img src={DOWNLOAD} className="w-4" alt="fil-download-icon" />
                <span className=" text-[#FFFFFF] font-light md:text-[10px]">Download Data Sheet</span>
              </a>
            </div>
        </div>
    )
};

export default ConnectorXLR;