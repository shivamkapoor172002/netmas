import { Link } from "react-router-dom";
import ARROW from "../assets/icons/arrow-right-s-line.png";
import MICROPHONE from "../assets/images/microphone.jpg"
import SPEAKER from "../assets/images/speaker.jpg"
import UTP from "../assets/images/cat6.jpg";
import SNAKE from "../assets/images/snake.jpg"
import RG6 from "../assets/images/rg6.jpg"
import DMX from "../assets/images/dm.jpg"

const CablesPage = () => {
    return (
        <div className="border-solid border-l-0 border-r-0 border-b-0 border-t-2 border-[#D9D9D9] font-roboto">
            <div className="py-28 px-56 lg:px-28 md:px-6 md:py-4">
                <div>
                    <div className="flex gap-3 text-5xl md:text-[15px]">
                        <Link to={"/products"} className="text-black no-underline"><span>Products</span></Link>                        
                        <span>{">"}</span>
                        <Link to={"/cables"} className="no-underline"><span className="text-[#0092D1]">Cables</span></Link>
                        
                    </div>
                </div>
                <div className="flex flex-col justify-evenly pt-10 gap-5">

                <Link to={"/speaker-cable"} className="no-underline">
                    <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                        <img src={SPEAKER} className="h-24 md:h-10 md:mr-[1px] lg:h-20 lg:pr-6" alt="" />
                        <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                            <span className="text-md font-semibold">Speaker Cable</span>
                            <span className="">
                                Engineered to elevate your audio experience to new heights.
                            </span>
                        </div>
                        
                        <img src={ARROW} className="h-5 brightness-50 cursor-pointer ml-28 lg:ml-12" alt="arrow-icon" />
                    </div>
                </Link>

                <Link to={"/microphone-cable"} className="no-underline">
                    <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                        <img src={MICROPHONE} className="h-24 md:h-10 md:mr-[-5px] lg:h-16 lg:pr-7" alt="" />
                        <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                            <span className="text-md font-semibold">Microphone Cable</span>
                            <span>
                                Ensures clear and reliable sound transmission in any environment.
                            </span>
                        </div>                        
                        <img src={ARROW} className="h-5 brightness-50 cursor-pointer ml-[90px] lg:ml-12" alt="arrow-icon" />
                    </div>
                </Link>

                <Link to={"/snake-cable"} className="no-underline">
                    <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                        <img src={SNAKE} className="h-24 md:h-11 md:pr-1 lg:h-20 lg:pr-9" alt="" />
                        <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                            <span className="text-md font-semibold">Snake Cable</span>
                            <span>
                                For professional audio setups demanding reliable signal transmission.
                            </span>
                        </div>                        
                        <img src={ARROW} className="h-5 brightness-50 cursor-pointer pl-[33px]" alt="arrow-icon" />
                    </div>
                </Link>

                <Link to={"/utp-cable"} className="no-underline">
                    <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                        <img src={UTP} className="h-24 md:h-10 lg:h-20 lg:pr-6" alt="" />
                        <div className="flex flex-col text-[14px] md:text-[9px] text-black md:pl-4">
                            <span className="text-md font-semibold">CAT6 UTP Cable</span>
                            <span>
                                Ensures smooth data transmission for all your online needs.
                            </span>
                        </div>                        
                        <img src={ARROW} className="h-5 brightness-50 cursor-pointer pl-[108px] lg:pl-12" alt="arrow-icon" />                        
                    </div>
                </Link>

                <Link to={"/rg-cable"} className="no-underline">
                    <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                        <img src={RG6} className="h-24 pr-[70px] md:pr-0 md:h-10 lg:h-20 lg:pr-6" alt="" />
                        <div className="flex flex-col text-[14px] md:text-[9px] pl-[122px] lg:pl-0 px-1 text-black md:pl-4 md:px-0">
                            <span className="text-md font-semibold">RG-6/U Cable</span>
                            <span>
                                Ensures crystal-clear audio and video signals for your home entertainment systems, satellite dishes, and TV.
                            </span>
                        </div>                        
                        <img src={ARROW} className="h-5 brightness-50 cursor-pointer" alt="arrow-icon" />
                    </div>
                </Link>

                <Link to={"/dmx-cable"} className="no-underline">
                    <div className="py-1 px-4 md:px-1 border-[1px] border-solid rounded-md flex justify-between items-center">
                        <img src={DMX} className="h-24 pr-[72px] md:pr-0 md:h-10 lg:h-20 lg:pr-5" alt="" />
                        <div className="flex flex-col text-[14px] md:text-[9px] pl-7 lg:pl-1 text-black md:pl-4">
                            <span className="text-md font-semibold">DMX Cable</span>
                            <span>
                                Minimize signal interference and deliver consistent performance in any lighting environment.
                            </span>
                        </div>                        
                        <img src={ARROW} className="h-5 brightness-50 cursor-pointer" alt="arrow-icon" />
                    </div>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default CablesPage;
