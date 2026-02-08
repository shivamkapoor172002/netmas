import Others from "./Others";
import Vision from "./Vision";
import WhoWeAre from "./WhoWeAre";

const AboutUsPage = () => {
    return (
        <div className="flex flex-col">
            <WhoWeAre />
            <Vision />
            <Others/>
        </div>
    )
};

export default AboutUsPage;