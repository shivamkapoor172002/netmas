import EMAIL_PNG from "../assets/icons/mail-line.png";
import ARROW_RIGHT from "../assets/icons/arrow-right-line.png";
import INTRO_VIDEO from "../assets/videos/intro1.mp4";
import "../index.css"; // Assuming you have a CSS file named intro.css for styles
import { Link } from "react-router-dom";

const Intro = () => {
    return (
        <div className="relative flex flex-col justify-center items-start w-full bg-black">
            <div className="overlay"></div> {/* Adding the overlay */}
            <div className="relative z-10 flex flex-col mt-32 mb-72 max-w-full w-full md:mb-5 md:pb-8 md:mt-10">
                <div className="pl-24 md:pl-4 lg:pl-12 flex flex-col font-roboto pt-11"> {/* Adjusted font size to 5rem */}
                    <span className="text-[#61C2D0] md:text-[1.563rem] lg:text-[47px] text-[4.5rem]"> {/* Adjusted font size to 5rem */}
                        Enhancing
                        <span className="text-sky-600 px-7 md:px-3 md:pr-2">Every</span>
                        Connection,
                    </span>
                    <span className="text-[4.5rem] md:text-[1.563rem] lg:text-[47px]"> {/* Adjusted font size to 5rem */}
                        <span className="text-[#61C2D0]">Amplifying</span>
                        <span className="text-sky-600 px-[22px] pr-7 md:px-[9px] md:pr-2">Every</span>
                        <span className="text-[#61C2D0]">Note.</span>
                    </span>
                </div>
                <div className="flex flex-wrap text-neutral-200 pl-24 lg:pl-12 md:pl-5 pt-5 md:pt-3 font-roboto text-sm md:text-[9px] pb-10 md:pb-5">
                    Power Up Your Connections: Where Quality Cables Meet Your Needs
                </div>
                <Link to={"/contact"} className="no-underline">
                <button className="flex flex-wrap justify-between md:items-center self-start ml-24 px-5 pt-3 pb-2 mt-2 lg:mt-1 md:ml-4 lg:ml-12 md:px-[6px] md:pt-[6px] md:pb-[4px] md:mt-[0px] text-center bg-sky-600 border-2 border-solid rounded-full cursor-pointer
                hover:text-white hover:shadow-[inset_17rem_0_0_0] hover:shadow-slate-600 duration-[400ms,700ms] transition-shadow">
                    <div className="flex md:items-center gap-3 md: bg-sky300">
                        <div className="text-white">
                            <img className="h-[20px] md:h-[10px] md:pl-1" src={EMAIL_PNG} alt="" />
                        </div>
                        <div className="text-base font-medium text-white font-hannari md:text-[10px] md:pb-[1px]">
                            Learn more
                        </div>
                    </div>
                    <div className="text-white">
                        <img className="h-[19px] pl-4 md:pl-2 md:h-[10px]" src={ARROW_RIGHT} alt="" />
                    </div>
                </button>
                </Link>
            </div>
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full md:w-[400px] lg:w-[780px] md:h-[280px] lg:h-[730px] object-cover">
                    <source src={INTRO_VIDEO} className="" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Intro;
