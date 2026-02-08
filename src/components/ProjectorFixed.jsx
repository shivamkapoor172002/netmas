import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AMP_RACKS from "../assets/images/AmpRack-2X.jpg";
import MICROPHONE from "../assets/images/microphone.jpg";
import SPEAKER from "../assets/images/speaker.jpg";
import FIXED_SCREEN from "../assets/images/fixed-screen.jpg";
import MOTORISED_SCREEN from "../assets/images/projector-screen.jpg";
import XLR from "../assets/images/xlr.jpg";
import EP from "../assets/images/ep.png";
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

const ProjectorFixed = () => {

    useEffect(() => {
        const images = document.querySelectorAll(".product-image");
        let delay = 900; // Initial delay in milliseconds
        let duration = 2000; // Duration of the fade-in animation in milliseconds
      
        images.forEach((image, index) => {
          image.style.animation = `fadeIn ${duration / 1000}s ease ${delay * index / 1000}s forwards`;
        });
      }, []); 

    return (
        <div className="w-full py-10 pb-16 font-roboto border-solid border-l-0 border-r-0 border-b-0 border-t-2 border-[#D9D9D9]">
        <div className="text-lg flex gap-2 pl-16 pb-10 md:text-[12px] md:pl-6">
            <Link to={"/products"} className="text-black no-underline">
                <span>Products</span>
            </Link>
                <span>{">"}</span>
            <Link to={"/product-projector-screen"} className="text-black no-underline">
                <span>Projector Screens</span>
            </Link>
                <span>{">"}</span>
                <span className="text-[#0092D1]">Projector Screen (Fixed)</span>
      </div>
        <div className="flex justify-center px-20 gap-28 md:flex-col md:items-center md:gap-10 lg:flex-col lg:items-center lg:px-5 lg:gap-10">
            <div className="product-image">
                <img src={FIXED_SCREEN} className="w-72 lg:w-64 md:w-52 md:pr-1 md:mr-3 lg:mr-5" alt="speaker-cable"/>
            </div>
            <div className="flex flex-col w-96 lg:w-9/12 product-image">
                <div className="flex flex-col text-[32px] md:text-[18px] font-bold pb-6 md:gap-2 md:pl-20 md:flex-row lg:gap-2 lg:flex-row lg:pl-24">
                    <div className="flex gap-3">
                        <span>Projector</span>
                        <span>Screen</span>
                    </div>
                    
                    <div>
                        <span>(Fixed)</span>
                    </div>
                </div>
                <div className="text-smi font-normal tracking-wide leading-6 md:px-7 md:pl-9 md:text-[11px]">
                    <span className="text-[#424242]">
                        Introducing our Fixed Projector Screen, the ideal solution for
                        creating a dedicated home theater or professional presentation
                        space. Crafted with precision and durability, this sleek
                        screen offers a permanent fixture for immersive viewing
                        experiences. Enjoy vibrant colors and crisp images with
                        seamless installation, ensuring every movie night or business
                        pitch is a captivating success. Elevate your visual
                        entertainment with our Fixed Projector Screen today.
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-5 product-image md:gap-3 md:pr-3 lg:mb-4 lg:gap-7">
                    <div>
                        <span className="text-sm md:text-[12px] md:ml-[-9px] lg:ml-[-35px]">Other Product Images</span>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/microphone-cable"} className="no-underline">
                        <ProductImageWithHover imageUrl={MICROPHONE} productName={"Microphone Cable"} />
                        </Link>
                        <Link to={"/speaker-cable"} className="no-underline">
                        <ProductImageWithHover imageUrl={SPEAKER} productName={"Speaker Cable"} />
                        </Link>
                        <Link to={"/motorized-screen"} className="no-underline">
                        <ProductImageWithHover imageUrl={MOTORISED_SCREEN} productName={"Motorized Screen"} />
                        </Link>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/product-amp-rack"} className="no-underline">
                        <ProductImageWithHover imageUrl={AMP_RACKS} productName={"Server Racks"} />
                        </Link>
                        <Link to={"/xlr-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={XLR} productName={"XLR Connector"} />
                        </Link>
                        <Link to={"/ep-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={EP} productName={"EP Connector"} />
                        </Link>
                    </div>
                </div>
        </div>

        <div className="flex justify-end mb-[-63.8px] mt-9 product-image bg-[#D9D9D9]">
            <a href="" download className="bg-[#0092D1] no-underline flex items-center py-2 px-2 gap-2 md:gap-1">
                <img src={DOWNLOAD} className="w-4" alt="fil-download-icon" />
                <span className=" text-[#FFFFFF] font-light md:text-[10px]">Download Data Sheet</span>
            </a>
        </div>
    </div>
    )
};

export default ProjectorFixed;