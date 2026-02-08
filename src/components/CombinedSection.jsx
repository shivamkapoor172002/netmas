import MakeInIndia from "./MakeInIndia";
import OurMission from "./OurMission";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const CombinedSection = () => {

    useEffect(() =>{
        Aos.init({duration:3000});
    },[])

    return (
        <div className="relative" data-aos = 'fade-up'>
            {/* Background image */}
            <div className="absolute inset-0 z-0 bg-custom-bg bg-cover bg-center opacity-30"></div>
            
            {/* Background color overlay */}
            <div className="absolute inset-0 bg-sky-300 opacity-40"></div>

            {/* Content */}
            <div className="relative z-10">
                <MakeInIndia />
                <OurMission />
            </div>
        </div>
    );
};

export default CombinedSection;
