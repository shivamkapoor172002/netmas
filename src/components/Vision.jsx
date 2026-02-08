import { useState , useEffect } from "react";
import SliderComp2 from "./SliderComp2";

const Vision = () => {
    
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#61c2d0] to-[#008BD2] pb-12 md:pb-8">
            <div className="flex flex-col items-center pt-16 md:pt-9" style={{ transform: `translateY(-${scrollPosition * 0.08}px)` }}>
                <div className=" text-center text-[47px] md:text-[23px] lg:text-[36px] py-3 text-[#0D1929] font-extrabold font-roboto">
                    <span>Our Vision, Misson &Beliefs</span>
                </div>
            </div>
            <div className="flex gap-36 px-56 justify-between md:flex-col md:px-20 md:gap-10 md:mt-2 lg:px-40 lg:flex-col lg:gap-20">
                <div className="flex flex-col w-[480px] md:w-[300px] lg:w-[450px] ml-10 md:ml-[-80px] lg:ml-0">
                    <SliderComp2 />
                </div>
                <div className="flex flex-col gap-7 ml-[-60px] md:gap-5 md:ml-[-30px]">
                    <div className="flex flex-col gap-3 md:gap-2">
                        <div>
                            <span className="text-white bg-[#1A1919] font-roboto py-1 px-1 md:py-0.5 md:px-0.5 text-sm md:text-[10px] font-medium tracking-wider">Our Vision</span>
                        </div>
                        <div className="text-xs md:text-[9px] font-normal leading-5 tracking-wide font-roboto text-justify">
                            <span>
                                Our vision is to be recognized globally as the premier
                                provider of audio accessories setting the standard for
                                quality, innovation, and customer satisfaction in the audio
                                industry. We strive to innovate continuously, providing
                                cutting-edge solutions that elevate the audio experience and
                                inspire creativity.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-2">
                        <div>
                            <span className="text-white bg-[#1A1919] font-roboto py-1 px-1 md:py-0.5 md:px-0.5 text-sm md:text-[10px] font-medium tracking-wider">Our Mission</span>
                        </div>
                        <div className="text-xs md:text-[9px] font-normal leading-5 tracking-wide font-roboto text-justify">
                            <span>
                                Our mission is to empower every audio enthusiast and
                                professional with superior quality audio accessories,
                                meticulously crafted to enhance sound clarity, reliability,
                                and performance.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-2">
                        <div>
                            <span className="text-white bg-[#1A1919] font-roboto py-1 px-1 md:py-0.5 md:px-0.5 text-sm md:text-[10px] font-medium tracking-wider">What We Believe</span>
                        </div>
                        <div className="text-xs md:text-[9px] font-normal leading-5 tracking-wide font-roboto text-justify">
                            <span>
                                Delivering exceptional value through competitive pricing,
                                superior product performance, and comprehensive warranties,
                                ensuring that customers receive maximum benefit from their
                                investment in our cables.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
};
export default Vision;