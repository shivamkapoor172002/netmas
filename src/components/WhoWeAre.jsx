import { Link } from "react-router-dom";
import bgVideo from "../assets/videos/bgw1.mp4";

const WhoWeAre = () => {
    return (
        <div className="font-roboto relative">
            <div className="overlay"></div>
            {/* Content with Background */}
            <div className="flex flex-col items-center pt-16 px-60 font-roboto z-10 relative bg-[#E9E9E9] md:px-11 md:pt-6 lg:pt-8 lg:px-28">
                {/* Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video autoPlay loop muted className="w-screen h-auto object-cover md:w-[500px] md:h-[400px] lg:w-[770px] lg:h-[500px]" style={{ zIndex: "-1" }}>
                        <source src={bgVideo} type="video/mp4" />
                        {/* Fallback image if video fails to load */}
                        <div className="bg-[#E9E9E9] w-full h-full" />
                    </video>
                </div>
                {/* Content */}
                <div className="z-10 relative flex flex-col items-center justify-center text-center"> {/* Ensure content is above the background and centered */}
                    <div className="text-[#FFFFFF]">
                        <span className="flex items-center font-bold text-32xl-2 md:text-[22px] lg:text-[28px] font-roboto">Who we are?</span>
                    </div>
                    <div className="text-[#FFFFFF] text-lg md:text-[9px] lg:text-[12px] pt-7 md:pt-2 lg:pt-4 leading-8 md:leading-4 lg:leading-5 flex flex-col gap-5 md:gap-2 items-center justify-center text-center">
                        <span>
                            Netmas stands as a beacon of precision and reliability in the realm of audio accessories. 
                            Our Product line includes Speaker cables, Microphone cables, CAT6 UTP cables, RG6U coaxial cables, 
                            DMX cables, XLR male/female connectors, EP connectors, TRS connectors, Speakon connectors, Floor Boxes 
                            & Racks. Each product undergoes rigorous testing and quality assurance measures, ensuring unparalleled 
                            performance, durability, and longevity.
                        </span>
                        <span>
                            What sets Netmas apart is our unwavering commitment to innovation. We continuously push the boundaries 
                            of audio accessories design, exploring new materials, configurations, and manufacturing techniques to 
                            stay at the forefront of the industry.
                        </span>
                    </div>

                    <div className="flex flex-col py-16 md:py-3 md:px-3 lg:py-7">
                        <div className="flex self-start px-3 py-1 md:px-2 md:py-1 leading-7 md:leading-4 text-[30px] lg:text-[15px] md:text-[10px] font-roboto font-semibold md:font-normal text-white bg-sky-950">
                            <span>About NETMAS</span>
                        </div>
                        <div className="flex pt-6 text-sm md:text-[6px] lg:text-[10px] justify-between md:pt-2">
                            <div className="flex items-start w-3/5 md:font-light leading-relaxed text-left">
                                <span className="text-[#FFFFFF]">
                                    Netmas fosters a culture of collaboration and partnership. We work
                                    closely with audio professionals, engineers, and enthusiasts to
                                    understand their unique requirements and tailor-made solutions that
                                    exceed expectations. With a steadfast commitment to quality,
                                    innovation, and sustainability
                                </span>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-[#FFFFFF] flex gap-1 text-base md:text-[8px] lg:text-[12px]">
                                    <span>Want to</span> 
                                    <span className="font-bold">collaborate?</span>
                                </div>
                                <Link to={"/contact"} className="no-underline">
                                <button className="mt-2 px-4 py-2 md:px-2 md:py-1 lg:py-1.5 lg:px-3 bg-[#008BD2] tracking-wide text-white border-[1px] border-white text-[9px] md:text-[5px] lg:text-[7px] cursor-pointer">
                                    <span className="font-bold">CONTACT US</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
