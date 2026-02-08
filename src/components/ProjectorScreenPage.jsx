import FIXED_SCREEN from "../assets/images/fixed-screen.jpg";
import MOTORISED_SCREEN from "../assets/images/projector-screen.jpg";
import MANUAL_SCREEN from "../assets/images/manual-screen.png";
import PORTABLE_SCREEN from "../assets/images/portable-screen.png";
import SMALL_SCREEN from "../assets/images/format-screen.png";
import FOLDING_SCREEN from "../assets/images/folding-screen.png";
import { Link } from "react-router-dom";

const ProjectorScreenPage = () => {
    return (
        <div className="px-48 py-20 flex flex-col justify-center gap-9 md:py-10 md:px-20 border-solid border-l-0 border-r-0 border-b-0 border-t-2 border-[#D9D9D9]">
            <div className="text-[22px] flex gap-2 pl-16 pb-5 md:text-[15px] md:pl-8">
                <Link to={"/products"} className="text-black no-underline">
                    <span>Products</span>
                </Link>
            <span>{">"}</span>
            <span className="text-[#0092D1]">Projector Screens</span>
            </div>
            <div className="flex flex-col items-center gap-10 md:gap-3">
                <div className="flex gap-10 md:gap-2">

                    <Link to={"/motorized-screen"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-52 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={MOTORISED_SCREEN} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-1 lg:pl-3 md:text-[7px] lg:text-[14px]">Motorized Screen</span>
                    </div>
                    </Link>

                    <Link to={"/fixed-screen"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-52 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={FIXED_SCREEN} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 lg:pl-3 md:text-[7px] lg:text-[14px]">Fixed Screen</span>
                    </div>
                    </Link>

                    <Link to={"/manual-screen"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-52 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={MANUAL_SCREEN} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 lg:pl-3 md:text-[7px] lg:text-[14px]">Manual Projector Screen</span>
                    </div>
                    </Link>
                </div>

                <div className="flex gap-10 md:gap-2">

                    <Link to={"/portable-screen"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-52 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={PORTABLE_SCREEN} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-1 lg:pl-3 md:text-[7px] lg:text-[14px]">Portable Projector Screen</span>
                    </div>
                    </Link>

                    <Link to={"/format-screen"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-52 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={SMALL_SCREEN} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 lg:pl-3 md:text-[7px] lg:text-[14px]">21:9 Format Screen</span>
                    </div>
                    </Link>

                    <Link to={"/folding-screen"} className="text-black no-underline">
                    <div className="w-60 h-64 lg:w-44 lg:h-52 bg-[#F2F2F2] md:w-24 md:h-28">
                        <img src={FOLDING_SCREEN} className="w-60 h-52 lg:w-44 lg:h-40 md:w-24 md:h-20 px-2 py-2 md:py-1 md:px-1" alt="" />
                        <span className="pl-5 md:pl-2 lg:pl-3 md:text-[7px] lg:text-[14px]">Folding Projector Screen</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ProjectorScreenPage;