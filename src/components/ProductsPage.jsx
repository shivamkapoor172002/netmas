import XLR from "../assets/images/xlr.jpg";
import AMP_RACK from "../assets/images/racks.jpg";
import MICRO_CABLE from "../assets/images/microphone.jpg";
import FLOOR_BOX from "../assets/images/floorbox1.png";
import PROJECTOR from "../assets/images/projector-screen.jpg";
import CABLE_MANAGER from "../assets/images/cable-manager.jpg"
import { Link } from "react-router-dom";

const ProductsPage = () => {
    return (
        <div className="px-48 py-20 flex flex-col justify-center gap-9 md:py-10 md:px-24 border-solid border-l-0 border-r-0 border-b-0 border-t-2 border-[#D9D9D9]">
            <div className="text-[30px] md:text-[18px] text-center">
                <span>Products</span>
            </div>
            <div className="flex flex-col items-center gap-10 md:gap-3">
                <div className="flex gap-10 md:gap-3">

                    <Link to={"/connectors"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-48 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={XLR} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 md:text-[9px]">Connectors</span>
                    </div>
                    </Link>

                    <Link to={"/product-amp-rack"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-48 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={AMP_RACK} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 md:text-[9px]">Server Racks</span>
                    </div>
                    </Link>

                    <Link to={"/product-projector-screen"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-48 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={PROJECTOR} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 md:text-[9px]">Projector Screens</span>
                    </div>
                    </Link>
                </div>
                <div className="flex gap-10 md:gap-3">
                    <Link to={"/cables"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-48 bg-[#F2F2F2] md:w-24 md:h-28"> 
                        <img src={MICRO_CABLE} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 md:text-[9px]">Cables</span>
                    </div>
                    </Link>

                    <Link to={"/product-floor-box"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-48 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={FLOOR_BOX} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 md:text-[9px]">Floor Boxes</span>
                    </div>
                    </Link>

                    <Link to={"/product-cable-manager"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-48 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={CABLE_MANAGER} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 md:text-[9px]">Cable Managers</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ProductsPage;