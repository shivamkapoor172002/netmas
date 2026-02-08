import RIGHT_ARROW from "../assets/icons/arrow-right-s-line.png"
import DOWN_ARROW from "../assets/icons/arrow-down-s-fill1.png"
import { Link } from "react-router-dom";

const DropDownProducts = () => {

    return (
        <div className="flex md:flex-col items-center justify-center py-8 font-roboto w-screen md:w-4/5 bg-white pr-10 rounded-sm">
            <div className="border-solid border-0 border-r-[1px] pr-20 md:pr-10 md:pl-5 md:border-b-[1px] md:border-r-0">
                <div className="leading-10 flex items-center gap-2 transform transition duration-500 hover:scale-105">
                    <Link to={"/cables"} className="no-underline transform">
                        <span className="text-lg md:text-[12px] font-normal text-black">Cables</span>
                    </Link>
                    <img src={DOWN_ARROW} className="w-5 h-5" alt="" />
                </div>
                <div className="flex gap-10 pl-8 lg:py-12">
                    <div>
                        <ul className="list-none text-md font-light text-[#3D3D3D] md:text-[10px] leading-8 md:leading-4">
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/microphone-cable"} className="section-link no-underline"><span className="text-black no-underline">Microphone Cable</span></Link>
                                
                            </li>                            
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/speaker-cable"} className="text-black no-underline section-link">Speaker Cable</Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/utp-cable"} className="no-underline section-link"><span className="text-black">CAT6 UTP Cable</span></Link>
                                
                            </li>

                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/rg-cable"} className="no-underline section-link"><span className="text-black">RG-6/U Cable</span></Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/snake-cable"} className="no-underline section-link"><span className="text-black">Snake Cable</span></Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 md:w-3 md:h-3" alt="" />
                                <Link to={"/dmx-cable"} className="no-underline section-link"><span className="text-black">DMX Cable</span></Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pl-8 border-solid border-0 border-r-[1px] py-8 pr-20 md:pr-12 md:pl-5 md:border-b-[1px] md:border-r-0 lg:py-12">
                <div className="leading-10 flex items-center gap-2 transform transition duration-500 hover:scale-105 mt-[-32px]">
                    <Link to={"/connectors"} className="no-underline">
                        <span className="text-lg font-normal text-black md:text-[12px]">Connectors</span>
                    </Link>
                    
                    <img src={DOWN_ARROW} className="w-5 h-5" alt="" />
                </div>
                <div className="flex gap-6 pl-8">
                    <div>
                        <ul className="list-none text-md font-light text-[#3D3D3D] leading-8 md:text-[12px] md:leading-4 md:pb-2">
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-16 md:w-3 md:h-3" alt="" />
                                <Link to={"/sj-connector"} className="no-underline section-link"><span className="text-black">Stereo Jack Connector</span></Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-16 md:w-3 md:h-3" alt="" />
                                <Link to={"/mj-connector"} className="no-underline section-link"><span className="text-black">Mono Jack Connector</span></Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/speakon-connector"} className="no-underline section-link"><span className="text-black">SpeakOn Connector</span></Link>
                                </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/xlr-connector"} className="text-black no-underline section-link">XLR Connector</Link> 
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/ep-connector"} className="text-black no-underline section-link">EP Connector</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pl-10 border-solid border-0 border-r-[1px] pr-20 py-1 md:pr-12 md:pl-5 md:border-b-[1px] md:border-r-0 lg:py-[-8px]">
                <div className="leading-10 flex items-center gap-2 transform transition duration-500 hover:scale-105 mt-[-4px]">
                    <Link to={"/product-projector-screen"} className="no-underline transform">
                        <span className="text-lg md:text-[12px] font-normal text-black">Projector Screens</span>
                    </Link>
                    <img src={DOWN_ARROW} className="w-5 h-5" alt="" />
                </div>
                <div className="flex gap-10 pl-8">
                    <div>
                        <ul className="list-none text-md font-light text-[#3D3D3D] md:text-[10px] leading-8 md:leading-4">
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/portable-screen"} className="section-link no-underline"><span className="text-black no-underline">Portable Screen</span></Link>
                                
                            </li>                            
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/folding-screen"} className="text-black no-underline section-link">Folding Screen</Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/manual-screen"} className="no-underline section-link"><span className="text-black">Manual Screen</span></Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/fixed-screen"} className="no-underline section-link"><span className="text-black">Fixed Screen</span></Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-16 md:w-3 md:h-3" alt="" />
                                <Link to={"/format-screen"} className="no-underline section-link"><span className="text-black">21:9 Format Screen</span></Link>
                                
                            </li>
                            <li className="flex items-center">
                                <img src={RIGHT_ARROW} className="h-4 w-4 md:mb-4 lg:mb-7 md:w-3 md:h-3" alt="" />
                                <Link to={"/motorized-screen"} className="no-underline section-link"><span className="text-black">Motorized Screen</span></Link>
                                
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col gap-9 text-md pl-10 md:text-[18px] md:gap-5">
                <div className="transform transition duration-500 hover:scale-110">
                    <Link to={"/product-floor-box"} className="no-underline">
                        <span className="text-black">Floor Boxes</span>
                    </Link>                    
                </div>
                <div className="transform transition duration-500 hover:scale-110">
                    <Link to={"/product-amp-rack"} className="no-underline">
                        <span className="text-black">Racks</span>
                    </Link>
                </div>
                <div className="transform transition duration-500 hover:scale-110">
                    <Link to={"/product-cable-manager"} className="no-underline">
                        <span className="text-black">Cable Managers</span>
                    </Link>
                </div>
            </div>
        </div>
       
    )
};

export default DropDownProducts;