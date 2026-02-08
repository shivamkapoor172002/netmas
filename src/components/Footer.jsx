import AboutSection from "./AboutSection";

const Footer = () => {
    return (
      <div className="flex flex-col">
          <div>
              <AboutSection/>
          </div>
          <div className="flex justify-between gap-20 md:gap-6 items-center text-[10px] py-5 md:py-2 pb-4 md text-[#777575] font-roboto bg-[#171717]">
            <div className="flex gap-5 pl-32 lg:pl-10 md:pl-0 md:ml-2">
              <ul className="flex gap-9 md:gap-3 self-start list-none md:text-[6px]">
                <li className="cursor-pointer">PRIVACY POLICY</li>
                <li className="cursor-pointer">TERMS & CONDITIONS</li>
                <li className="cursor-pointer">DISCLAIMER</li>
                <li className="cursor-pointer">COOKIE POLICY</li>
              </ul>
            </div>
            <div className="flex pr-52 lg:pr-14 gap-x-1 md:text-[6px] md:pr-0 md:mr-6">
              <span className="cursor-pointer">©NETMAS</span>
              <span className="cursor-pointer">CABLES</span>
            </div>
          </div>
      </div>
      
    )
};

export default Footer;