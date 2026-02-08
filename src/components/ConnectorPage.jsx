import { Link } from "react-router-dom";
import ARROW from "../assets/icons/arrow-right-s-line.png";
import SJ from "../assets/images/stereojackc.jpg";
import MJ from "../assets/images/monojack.jpg";
import XLR from "../assets/images/xlr.jpg";
import EP from "../assets/images/ep.png";
import SPKON from "../assets/images/speakeron.jpg";

const ConnectorPage = () => {
    return (
        <div className="border-solid border-l-0 border-r-0 border-b-0 border-t-2 border-[#D9D9D9] font-roboto">
            <div className="py-28 px-56 lg:px-28 md:px-6 md:py-4">
                <div>
                    <div className="flex gap-3 text-5xl md:text-[15px]">
                        <Link to={"/products"} className="text-black no-underline">
                            <span>Products</span>
                        </Link>
                        <span>{">"}</span>
                        <span className="text-[#0092D1]">Connectors</span>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly pt-10 gap-5">
                    
                    <Link to={"/ep-connector"} className="no-underline">
                        <div className="py-1 px-4 md:px-1 lg:py-2 border-[1px] border-solid rounded-md flex justify-between items-center">
                            <img src={EP} className="h-24 md:h-8 lg:h-16 lg:pr-4" alt="" />
                            <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                                <span className="text-md font-semibold">EP Connector</span>
                                <span className="">
                                    Crystal-clear audio transmission and a snug fit for uninterrupted listening pleasure.
                                </span>
                            </div>
                            
                            <img src={ARROW} className="h-5 brightness-50 cursor-pointer ml-9" alt="arrow-icon" />
                        </div>
                    </Link>
                    
                    <Link to={"/xlr-connector"} className="no-underline">
                        <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                            <img src={XLR} className="h-24 md:h-10 lg:h-20 lg:pr-5" alt="" />
                            <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                                <span className="text-md font-semibold">XLR Connector</span>
                                <span className="">
                                Industry standard for professional audio and lighting applications.
                                </span>
                            </div>
                            
                            <img src={ARROW} className="h-5 brightness-50 cursor-pointer ml-28" alt="arrow-icon" />
                        </div>
                    </Link>

                    <Link to={"/sj-connector"}className="no-underline">
                        <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                            <img src={SJ} className="h-24 md:h-10 lg:h-20 lg:pr-5" alt="" />
                            <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                                <span className="text-md font-semibold">Stereo Jack Connector</span>
                                <span className="">
                                    Perfect for a wide range of applications, from headphones to audio interfaces.
                                </span>
                            </div>
                            
                            <img src={ARROW} className="h-5 brightness-50 cursor-pointer ml-9" alt="arrow-icon" />
                        </div>
                    </Link>
                
                    <Link to={"/mj-connector"} className="no-underline">
                        <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                            <img src={MJ} className="h-24 md:h-10 lg:h-20 lg:pr-5" alt="" />
                            <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                                <span className="text-md font-semibold">Mono Jack Connector</span>
                                <span className="">
                                Compact and sturdy, it's ideal for guitars, amplifiers, and more.
                                </span>
                            </div>
                            
                            <img src={ARROW} className="h-5 brightness-50 cursor-pointer ml-[135px]" alt="arrow-icon" />
                        </div>
                    </Link>

                    <Link to={"/speakon-connector"} className="no-underline">
                        <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                            <img src={SPKON} className="h-24 md:h-10 lg:h-20 lg:pr-5" alt="" />
                            <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                                <span className="text-md font-semibold">SpeakOn Connector</span>
                                <span className="">
                                    Ensures seamless transmission of high-quality audio signals.
                                </span>
                            </div>
                            
                            <img src={ARROW} className="h-5 brightness-50 cursor-pointer ml-[140px]" alt="arrow-icon" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ConnectorPage;