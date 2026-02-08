import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import IDEA from "../assets/images/idea.png";
import CUSTOMIZE from "../assets/images/customize.png";
import ASSURANCE from "../assets/images/quality.png";
import CUST_SAT from "../assets/images/rate.png";
import SUSTAIN from "../assets/images/save.png";
import IND_EXP from "../assets/images/medal.png";


const Others = () => {

    useEffect(() =>{
        Aos.init({duration:2000});
      },[])

    return (
        <div className="flex flex-col font-roboto lg:pl-44 bg-[#E9E9E9] p-20 px-52 lg:px-0 gap-8 pt-32 lg:pt-12 md:px-12 md:pt-10 md:gap-2">
            <div className="flex md:flex-wrap lg:flex-col justify-evenly gap-24 md:gap-3 lg:gap-5 pb-6"  data-aos = 'fade-right'>
                <div className="flex flex-col items-center w-2/6 md:w-5/6 lg:w-4/6 md:border-b-[1px] md:pb-5 md:border-solid border-0">
                    <div>
                        <img src={IDEA} className="h-12 md:h-7" alt="" />
                    </div>
                    <div className="pb-3 pt-2 md:pt-[2px]">
                        <span className="text-center text-[20px] md:text-[13px] font-semibold tracking-wide text-[#227BAF]">Innovation</span>
                    </div>
                    <div className="text-[12px] font-light text-justify md:text-[9px]">
                        <span className="centered-text">
                            Commitment to continuous research and development to stay at the
                            forefront of technological advancements, offering innovative
                            solutions that meet evolving industry needs.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-2/6 md:w-5/6 lg:w-4/6 md:border-b-[1px] md:pb-5 md:border-solid border-0">
                    <div>
                        <img src={CUSTOMIZE} className="h-12 md:h-6" alt="" />
                    </div>
                    <div className="pb-3 pt-2 md:pt-[2px]">
                        <span className="text-center text-[20px] md:text-[13px] font-semibold tracking-wide text-[#227BAF]">Customization</span>
                    </div>
                    <div className="text-[12px] font-light text-justify md:text-[9px]">
                        <span className="centered-text">
                            Offering customizable solutions tailored to individual customer
                            requirements, providing flexibility and versatility to accommodate
                            diverse preferences.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-2/6 md:w-5/6 lg:w-4/6 md:border-b-[1px] md:pb-5 md:border-solid border-0">
                    <div>
                        <img src={ASSURANCE} className="h-12 md:h-6" alt="" />
                    </div>
                    <div className="pb-3 pt-2 md:pt-[2px]">
                        <span className="text-center text-[20px] md:text-[13px] font-semibold tracking-wide text-[#227BAF]">Assurance</span>
                    </div>
                    <div className="text-[12px] font-light text-justify md:text-[9px]">
                        <span className="centered-text">
                            Guaranteeing that every audio accessories produced meets the
                            highest standards of quality and reliability, ensuring consistent
                            performance and durability.
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex lg:flex-col md:flex-wrap justify-evenly gap-24 pb-7 md:gap-3 lg:gap-5 md:pb-0"  data-aos = 'fade-right'>
                <div className="flex flex-col items-center w-2/6 md:w-5/6 lg:w-4/6 md:border-b-[1px] md:pb-5 md:border-solid border-0">
                    <div>
                        <img src={CUST_SAT} className="h-12 md:h-6" alt="" />
                    </div>
                    <div className="text-center text-[20px] md:text-[13px] font-semibold tracking-wide text-[#227BAF] space-x-2 pb-3 pt-2">
                        <span>Customer</span>
                        <span>Satisfaction</span>
                    </div>
                    <div className="text-[12px] font-light text-justify md:text-[9px]">
                        <span className="centered-text">
                            Prioritizing customer needs and feedback, providing exceptional
                            service and support throughout the purchasing process and beyond.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-2/6 md:w-5/6 lg:w-4/6 md:border-b-[1px] md:pb-5 md:border-solid border-0">
                    <div>
                        <img src={SUSTAIN} className="h-12 md:h-6" alt="" />
                    </div>
                    <div className="text-center text-[20px] md:text-[13px] font-semibold tracking-wide text-[#227BAF] pb-3 pt-2">
                        <span>Sustainability</span>
                    </div>
                    <div className="text-[12px] font-light text-justify md:text-[9px]">
                        <span className="centered-text">
                            Operating with a focus on sustainability, minimizing environmental
                            impact through responsible sourcing of materials, efficient
                            manufacturing processes.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-2/6 md:w-5/6 lg:w-4/6 md:border-b-[1px] md:pb-5 md:border-solid border-0">
                    <div>
                        <img src={IND_EXP} className="h-12 md:h-6" alt="" />
                    </div>
                    <div className="text-center text-[20px] md:text-[13px] font-semibold tracking-wide text-[#227BAF] space-x-2 pb-3 pt-2">
                        <span>Industry</span>
                        <span>Experience</span>
                    </div>
                    <div className="text-[12px] font-light text-justify md:text-[9px]">
                        <span className="centered-text">
                            Leveraging deep expertise and experience in audio technology and
                            cable manufacturing, serving as a trusted advisor to customers .
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Others;