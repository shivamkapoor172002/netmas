import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import CABLE from "../assets/images/cable.png";
import CONNECTOR from "../assets/images/connector.png";
import FLOOR_BOX from "../assets/images/floorbox1.png";
import RACKS from "../assets/images/racks.jpg";
import PROJECTOR from "../assets/images/projector-screen.jpg";
import CABLE_MANAGER from "../assets/images/cable-manager.jpg";
import { Link } from "react-router-dom";

const Products = () => {

  useEffect(() =>{
    Aos.init({duration:2000});
  },[])

  return (
    <div className="relative" data-aos = 'fade-right'>
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-new-bg bg-no-repeat bg-right-top bg-opacity-0 md:bg-cover lg:bg-cover md:ml-28 lg:ml-[160px] md:mt-12 lg:pt-16 md:w-[250px] lg:w-[600px] md:h-[250px]"></div>

      {/* Background color overlay */}
      <div className="absolute inset-0 z-0 bg-sky-50 bg-opacity-90"></div>

      {/* Content */}
      <div className="flex flex-col items-center relative z-10 pb-11 w-full font-roboto pt-8">
      <div className="flex flex-col items-center">
  <div className="text-center text-gray-800 py-3">
    <span className="text-[36px] font-medium md:text-[22px]">PRODUCTS</span>
  </div>
  <div className="text-[18px] md:text-[12px] leading-6 font-light text-center text-slate-900 w-2/3">
    We provide high-quality cables engineered for reliability and performance, ensuring
    seamless connectivity for your every need.
  </div>
  <div className="mt-12 pb-[0.5px] max-w-full flex gap-7">
  <div className="w-1/4 h-1.5/2 md:hidden bg-opacity-50 flex justify-center items-center fixed left-0 pl-5 bg-white animated-screen">
  <div className="w-full h-full flex flex-col justify-center items-center bg-white rounded-lg shadow-lg relative overflow-hidden">
    <img
      src={""}
      className="max-w-full max-h-full object-contain"
      alt=""
      id="largeImage"
      style={{ backgroundColor: "transparent" }}
    />
  </div>
</div>



    <div className="w-10/5 relative">
      <div className="grid grid-cols-3 gap-5">
        {/* First row */}
        <div className="flex flex-col cursor-pointer group">
          <Link to={"/cables"} className="no-underline">
            <div
              onMouseEnter={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src =CABLE;
                largeImg.alt = "A larger grayscale image of a cable";
                largeImg.classList.add('animated-image');
              }}
              onMouseLeave={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = "";
                largeImg.alt = "";
                largeImg.classList.remove('animated-image');
              }}
              className="flex flex-col w-56 h-56 md:w-24 md:h-24 px-1.5 pt-1.5 text-xl text-black bg-[#9FE7F5] hover:bg-[#09b6f5] transform md:hover:scale-110 transition duration-300"
            >
              <img
                loading="lazy"
                src={CABLE}
                className="w-full aspect-[1.22]"
                alt="A grayscale image of a cable"
              />
              <div className="mt-4 ml-3 md:mt-2 md:ml-1 text-sm md:text-[8px]">
                Cables
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col cursor-pointer group">
  <Link to={"/connectors"} className="no-underline">
    <div
      onMouseEnter={(e) => {
        const largeImg = document.getElementById("largeImage");
        largeImg.src = CONNECTOR;
        largeImg.alt = "A larger grayscale image of a connector";
        largeImg.classList.add('animated-image');
      }}
      onMouseLeave={(e) => {
        const largeImg = document.getElementById("largeImage");
        largeImg.src = "";
        largeImg.alt = "";
        largeImg.classList.remove('animated-image');
            }}
      className="flex flex-col w-56 h-56 md:w-24 md:h-24 px-1.5 pt-1.5 text-xl text-black bg-[#9FE7F5] hover:bg-[#09b6f5] transform md:hover:scale-110 transition duration-300 relative"
    >
      <img
        loading="lazy"
        src={CONNECTOR}
        className="w-full aspect-[1.22]"
        alt="A grayscale image of a connector"
      />
      
      <div className="mt-4 ml-3 md:mt-2 md:ml-1 text-sm md:text-[8px]">Connectors</div>
    </div>
  </Link>
</div>


        <div className="flex flex-col cursor-pointer group">
          <Link to={"/product-projector-screen"} className="no-underline">
            <div
              onMouseEnter={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = PROJECTOR;
                largeImg.alt = "A larger grayscale image of a projector screen";
                largeImg.classList.add('animated-image');
                
              }}
              onMouseLeave={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = "";
                largeImg.alt = "";
                largeImg.classList.remove('animated-image');
              }}
              className="flex flex-col w-56 h-56 md:w-24 md:h-24 px-1.5 pt-1.5 text-xl text-black bg-[#9FE7F5] hover:bg-[#09b6f5] transform md:hover:scale-110 transition duration-300"
            >
              <img
                loading="lazy"
                src={PROJECTOR}
                className="w-full aspect-[1.22]"
                alt="A grayscale image of a projector screen"
              />
              <div className="mt-4 ml-3 md:mt-2 md:ml-1 text-sm md:text-[8px]">
                Projector Screens
              </div>
            </div>
          </Link>
        </div>

        {/* Second row */}
        <div className="flex flex-col cursor-pointer group">
          <Link to={"/product-floor-box"} className="no-underline">
            <div
              onMouseEnter={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = FLOOR_BOX;
                largeImg.alt = "A larger grayscale image of a floor box";
                largeImg.classList.add('animated-image');
              }}
              onMouseLeave={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = "";
                largeImg.alt = "";
                largeImg.classList.remove('animated-image');
              }}
              className="flex flex-col w-56 h-56 md:w-24 md:h-24 px-1.5 pt-1.5 text-xl text-black bg-[#9FE7F5] hover:bg-[#09b6f5] transform md:hover:scale-110 transition duration-300"
            >
              <img
                loading="lazy"
                src={FLOOR_BOX}
                className="w-full aspect-[1.22]"
                alt="A grayscale image of a floor box"
              />
              <div className="mt-4 ml-3 md:mt-2 md:ml-1 text-sm md:text-[8px]">
                Floor Boxes
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col cursor-pointer group">
          <Link to={"/product-amp-rack"} className="no-underline">
            <div
              onMouseEnter={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = RACKS;
                largeImg.alt = "A larger grayscale image of a rack";
                largeImg.classList.add('animated-image');
              }}
              onMouseLeave={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = "";
                largeImg.alt = "";
                largeImg.classList.remove('animated-image');
              }}
              className="flex flex-col w-56 h-56 md:w-24 md:h-24 px-1.5 pt-1.5 text-xl text-black bg-[#9FE7F5] hover:bg-[#09b6f5] transform md:hover:scale-110 transition duration-300"
            >
              <img
                loading="lazy"
                src={RACKS}
                className="w-full aspect-[1.2]"
                alt="A grayscale image of a rack"
              />
              <div className="mt-4 ml-3 md:mt-2 md:ml-1 text-sm md:text-[8px]">
                Racks
              </div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col cursor-pointer group">
          <Link to={"/product-cable-manager"} className="no-underline">
            <div
              onMouseEnter={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = CABLE_MANAGER;
                largeImg.alt = "A larger grayscale image of a cable manager";
                largeImg.classList.add('animated-image');
              }}
              onMouseLeave={(e) => {
                const largeImg = document.getElementById("largeImage");
                largeImg.src = "";
                largeImg.alt = "";
                largeImg.classList.remove('animated-image');
              }}
              className="flex flex-col w-56 h-56 md:w-24 md:h-24 px-1.5 pt-1.5 text-xl text-black bg-[#9FE7F5] hover:bg-[#09b6f5] transform md:hover:scale-110 transition duration-300"
            >
              <img
                loading="lazy"
                src={CABLE_MANAGER}
                className="w-full aspect-[1.2]"
                alt="A grayscale image of a cable manager"
              />
              <div className="mt-4 ml-3 md:mt-2 md:ml-1 text-sm md:text-[8px]">
                Cable Managers
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Products;



{/*
*/}