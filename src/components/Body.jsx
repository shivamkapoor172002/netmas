import Inquiry from "./Inquiry";
import Intro from "./Intro";
import MakeInIndia from "./MakeInIndia";
import OurMission from "./OurMission";
import Products from "./Products";
import WhatWeDo from "./WhatWeDo";

const Body = () => {
    return (
        <div>
            <Intro />
            <OurMission/>
            <WhatWeDo />
            <MakeInIndia/>
            <Products />
            <Inquiry />
        </div>
    )
};

export default Body;
