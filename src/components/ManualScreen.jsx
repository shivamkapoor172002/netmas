import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FLOOR_BOX from "../assets/images/floorbox.png";
import SPEAKER from "../assets/images/speaker.jpg";
import FIXED_SCREEN from "../assets/images/fixed-screen.jpg";
import MANUAL_SCREEN from "../assets/images/manual-screen.png";
import MOTORISED_SCREEN from "../assets/images/projector-screen.jpg";
import MJ from "../assets/images/monojack.jpg";
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

const ManualScreen = () => {

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
        <div className="text-lg flex gap-2 pl-16 pb-10 md:pb-5 md:text-[12px] md:pl-6">
            <Link to={"/products"} className="text-black no-underline">
                <span>Products</span>
            </Link>
                <span>{">"}</span>
            <Link to={"/product-projector-screen"} className="text-black no-underline">
                <span>Projector Screens</span>
            </Link>
            <span>{">"}</span>
            <span className="text-[#0092D1]">Manual Projector Screen</span>
      </div>
        <div className="flex justify-center px-20 gap-28 md:flex-col md:items-center md:gap-10 lg:flex-col lg:items-center lg:px-5 lg:gap-10">
            <div className="product-image">
                <img src={MANUAL_SCREEN} className="w-72 md:w-52 lg:w-64 md:pr-4 md:mr-3 lg:mr-5" alt="speaker-cable"/>
            </div>
            <div className="flex flex-col w-96 lg:w-4/6 product-image">
                <div className="flex flex-col text-[32px] md:text-[18px] font-bold pb-6 md:gap-2 md:pl-16 md:flex-row lg:gap-2 lg:flex-row lg:pl-16">
                    <div className="flex gap-3">
                        <span>Manual</span>
                    </div>
                    <div className="flex gap-2">
                        <span>Projector</span>
                        <span>Screen</span>
                    </div>
                </div>
                <div className="text-smi font-normal tracking-wide leading-6 md:px-7 md:pl-11 md:text-[11px]">
                    <span className="text-[#424242]">
                        Experience simplicity with our Manual Projector Screen:
                        Designed for straightforward operation, this screen delivers
                        reliable performance every time. With its manual pull-down
                        mechanism, you can effortlessly adjust the screen to your
                        desired height, allowing for seamless presentations or
                        immersive movie experiences. Durable construction ensures
                        longevity, making it a trusted companion for both professional
                        and leisure use.
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-5 product-image md:gap-3 md:pr-3 lg:mb-5 lg:gap-7">
                    <div>
                        <span className="text-sm md:text-[12px] md:ml-[-9px] lg:ml-[-35px]">Other Product Images</span>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/motorized-screen"} className="no-underline">
                        <ProductImageWithHover imageUrl={MOTORISED_SCREEN} productName={"Motorized Screen"} />
                        </Link>
                        <Link to={"/speaker-cable"} className="no-underline">
                        <ProductImageWithHover imageUrl={SPEAKER} productName={"Speaker Cable"} />
                        </Link>
                        <Link to={"/fixed-screen"} className="no-underline">
                        <ProductImageWithHover imageUrl={FIXED_SCREEN} productName={"Fixed Screen"} />
                        </Link>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/product-floor-box"} className="no-underline">
                        <ProductImageWithHover imageUrl={FLOOR_BOX} productName={"Floor Box"} />
                        </Link>
                        <Link to={"/mj-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={MJ} productName={"Mono Jack"} />
                        </Link>
                        <Link to={"/ep-connector"} className="no-underline">
                        <ProductImageWithHover imageUrl={EP} productName={"EP Connector"} />
                        </Link>
                    </div>
                </div>
        </div>

        <div className="flex justify-end mb-[-63.8px] md:mb-[-63.9px] mt-9 product-image bg-[#D9D9D9]">
            <a href="" download className="bg-[#0092D1] no-underline flex items-center py-2 px-2 gap-2 md:gap-1">
                <img src={DOWNLOAD} className="w-4" alt="fil-download-icon" />
                <span className=" text-[#FFFFFF] font-light md:text-[10px]">Download Data Sheet</span>
            </a>
        </div>
    </div>
    )
};

export default ManualScreen;