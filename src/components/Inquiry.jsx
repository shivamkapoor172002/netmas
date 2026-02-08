import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import EMAIL_PNG from "../assets/icons/email.png"
import ARROW_RIGHT from "../assets/icons/right-arrow.png"
import { Link } from "react-router-dom";

const Inquiry = () => {

  useEffect(() =>{
    Aos.init({duration:1000});
  },[])

  return (
    <div className="relative bg-gradient-to-r from-[#61c2d0] to-[#0092D1] py-10 md:py-3 lg:py-5" data-aos = 'fade-up'>
      {/* Content */}
      <div className="flex justify-center items-center px-16 pt-5 relative pb-12 font-roboto">
        <div className="flex items-center justify-center flex-col">
          <span className="text-[38px] md:text-[26px] lg:text-[30px] tracking-wider text-gray-800 mb-9 font-medium">
            INQUIRES
          </span>
          
          <Link to={"/contact"} className="no-underline">
          <button className="relative flex justify-center mt-3 md:mt-1 lg:mt-2 items-center gap-1 bg-white border-1 border-gray-600 border-solid rounded-[32px] w-64 md:w-36 lg:w-52 text-center pt-2 pb-2 md:py-1 cursor-pointer
          hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-slate-400 duration-[400ms,900ms] transition-shadow">
            <div className="text-lg text-slate-500">
              <img className="h-[14px] mt-1" src={EMAIL_PNG} alt="" />
            </div>
            <div className="text-[13px] md:text-[9px] tracking-wider font-medium text-slate-800">
              Contact form
            </div>
            
            <div className="absolute right-0 mr-4 md:mr-5 text-sm text-slate-500">
              <img className="h-[10px] md:h-[7px] pl-4" src={ARROW_RIGHT} alt="" />
            </div>
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
