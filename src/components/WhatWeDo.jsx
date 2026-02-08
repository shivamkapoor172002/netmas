import { Link } from 'react-router-dom';
import SliderComponent from './SliderComponent';
import EMAIL_ICON from "../assets/icons/email.png";
import ARROW_RIGHT from "../assets/icons/arrow-right-line1.png";

const WhatWeDo = () => {
    return (
        <section className="relative flex md:flex-col justify-evenly items-center pr-10 pb-8 pl-16 bg-white font-roboto mt-20 md:mt-8 mb-9 md:mb-4 md:pl-12">
      
        <div className="flex flex-col w-2/5 md:w-4/5">
          <div className="flex flex-col text-black">
            <span className="text-[35px] md:text-[26px] md:pl-[40px]">
              WHAT WE DO
            </span>
            <p className="leading-7 text-base mt-5 mb-10 w-full md:text-[11px] md:leading-5 md:mb-5 md:text-center md:pr-1 md:pl-3">
              Precision, reliability, and innovation in audio accessories. From
              cables to connectors, we deliver unparalleled quality and
              sustainability. Elevate your audio experience with Netmas
            </p>
            <Link to={"/about"} className='no-underline'>
              <button className="flex flex-wrap md:items-center md:ml-16 justify-around self-start px-3 py-2 md:px-[3px] md:py-[3px] text-center bg-sky-200 rounded-full cursor-pointer
                hover:shadow-[inset_11rem_0_0_0] hover:shadow-sky-300 duration-[400ms,900ms] transition-shadow hover:text-white">
                    <div className="flex gap-3 bg-sky300">
                        <div className="text-sm text-slate-500 pl-2 md:pl-1">
                            <img className="h-[14px] flex items-center md:h-[11px]" src={EMAIL_ICON} alt="" />
                        </div>
                        <div className="text-smi text-neutral-800 font-roboto md:text-[10px]">
                          <span>Know more</span>                           
                        </div>
                    </div>
                    <div className="text-sm text-slate-500 pr-4 md:pr-1">
                        <img className="h-[12px] pl-4 md:pl-3 md:h-[9px] md:mt-1" src={ARROW_RIGHT} alt="" />
                    </div>
              </button>
            </Link> 
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex w-[28rem] md:w-[19rem] lg:w-[22rem] md:h-[15rem] lg:h-[17rem] md:ml-[-8px] h-[25rem] lg:ml-[-10px] ml-[-200px] md:mt-2">
            <SliderComponent/>
          </div>
        </div>
    </section>
    )
};

export default WhatWeDo;