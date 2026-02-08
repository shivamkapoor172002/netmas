import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BHUJANG from "../assets/images/bhujang-cable.png";
import SPEAKER from "../assets/images/speaker.jpg";
import MICROPHONE from "../assets/images/microphone.jpg";
import UTP from "../assets/images/cat6.jpg";
import SNAKE from "../assets/images/snake.jpg";
import RG6 from "../assets/images/rg6.jpg";
import DMX from "../assets/images/dm.jpg";
import DOWNLOAD from "../assets/icons/file-download.png";

const ProductImageWithHover = ({ imageUrl, productName }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="h-24 w-28 md:h-[70px] md:w-[80px] bg-[#D9D9D9] cursor-pointer relative overflow-hidden rounded-md p-1"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={imageUrl} className="w-full h-full object-cover" alt="" />
            <div
                className={`absolute inset-0 bg-gray-100 bg-opacity-50 transition-transform ${hovered ? "translate-y-0 delay-100" : "translate-y-full delay-200"
                    } flex justify-center items-center`}
            >
                <span className="text-white md:text-[11px] text-center gap-1">{productName}</span>
            </div>
        </div>
    );
};

const Bhujang8CH6SQMM = () => {

    useEffect(() => {
        const images = document.querySelectorAll(".product-image");
        let delay = 900;
        let duration = 2000;

        images.forEach((image, index) => {
            image.style.animation = `fadeIn ${duration / 1000}s ease ${delay * index / 1000}s forwards`;
        });
    }, []);

    return (
        <div className="w-full py-10 font-roboto border-solid border-l-0 border-r-0 border-b-0 border-t-2 border-[#D9D9D9]">
            {/* Breadcrumb */}
            <div className="text-lg flex gap-2 pl-16 pb-10 md:text-[15px] md:pl-8">
                <Link to={"/products"} className="text-black no-underline">
                    <span>Products</span>
                </Link>
                <span>{">"}</span>
                <Link to={"/cables"} className="text-black no-underline">
                    <span>Cables</span>
                </Link>
                <span>{">"}</span>
                <span className="text-[#0092D1]">Bhujang 8CH6SQMM</span>
            </div>

            {/* Main Content */}
            <div className="flex justify-center px-10 gap-16 md:flex-col md:items-center md:gap-10 lg:flex-col lg:items-center lg:px-5 lg:gap-10">
                {/* Product Image */}
                <div className="product-image">
                    <img src={BHUJANG} className="w-80 lg:w-72 md:w-60 rounded-lg shadow-lg" alt="Bhujang 8CH6SQMM Cable" />
                </div>

                {/* Product Info */}
                <div className="flex flex-col w-[600px] lg:w-5/6 md:w-full md:px-6 product-image">
                    <div className="text-[28px] md:text-[22px] font-bold pb-4 text-[#0092D1]">
                        Premium Armored Speaker Cable – Bhujang 8CH6SQMM
                    </div>
                    <div className="text-sm font-normal tracking-wide leading-6 md:text-[12px] text-[#424242] pb-6">
                        High-performance armored multi-core speaker cable engineered for professional AV,
                        defense installations, auditoriums, and long-distance high-power transmission.
                        Designed with XLPE M9 insulation, stainless steel strip armoring, and 10 AWG
                        high-strand copper conductors.
                    </div>

                    {/* Technical Specifications */}
                    <div className="bg-gray-50 p-5 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 text-[#333]">Technical Specifications</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
                            <div><span className="font-semibold">Conductor Config:</span> 8 × 10 AWG + 1 × Ground</div>
                            <div><span className="font-semibold">Conductor Material:</span> High-strand tin copper</div>
                            <div><span className="font-semibold">Insulation Type:</span> XLPE, Grade M9</div>
                            <div><span className="font-semibold">Inner Jacket:</span> High-density Aluminum</div>
                            <div><span className="font-semibold">Armor Type:</span> SS strip armoring</div>
                            <div><span className="font-semibold">Outer Sheath:</span> UV-stabilized black PVC</div>
                        </div>
                    </div>

                    {/* Electrical Characteristics */}
                    <div className="bg-blue-50 p-5 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 text-[#333]">Electrical Characteristics</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
                            <div><span className="font-semibold">Rated Voltage:</span> 1000 V</div>
                            <div><span className="font-semibold">DC Resistance:</span> ≤ 0.26 Ω/km</div>
                            <div><span className="font-semibold">Insulation Resistance:</span> ≥ 10 GΩ/km @ 80°C</div>
                            <div><span className="font-semibold">Capacitance:</span> Optimized for long-distance</div>
                        </div>
                    </div>

                    {/* Mechanical Performance */}
                    <div className="bg-green-50 p-5 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 text-[#333]">Mechanical & Environmental</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
                            <div><span className="font-semibold">Temp Range:</span> –30°C to +100°C</div>
                            <div><span className="font-semibold">Install Temp:</span> –20°C to +90°C</div>
                            <div><span className="font-semibold">Crush Resistance:</span> &gt;1500 N</div>
                            <div><span className="font-semibold">Outdoor:</span> Sunlight, moisture resistant</div>
                        </div>
                    </div>

                    {/* Dimensions */}
                    <div className="bg-yellow-50 p-5 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 text-[#333]">Dimensions & Packaging</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
                            <div><span className="font-semibold">Outer Diameter:</span> 29MM</div>
                            <div><span className="font-semibold">Reel Length:</span> 1000 m / 1500 m</div>
                            <div className="col-span-2 md:col-span-1"><span className="font-semibold">Markings:</span> Sequential meter marking on outer jacket</div>
                        </div>
                    </div>

                    {/* Compliance */}
                    <div className="bg-purple-50 p-5 rounded-lg mb-6">
                        <h3 className="text-lg font-bold mb-4 text-[#333]">Compliance & Standards</h3>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="bg-purple-200 px-3 py-1 rounded-full">XLPE M9</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">IEC 60332-3</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">CE</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">ERDA Type-Tested</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">CPRI Certified</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">UL 1277 / UL 44</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">RoHS 2</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">ISO 9001</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">ISO 45001</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">ISO 20000</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">ISO 27001</span>
                            <span className="bg-purple-200 px-3 py-1 rounded-full">GMP Compliant</span>
                        </div>
                    </div>
                </div>

                {/* Other Products */}
                <div className="flex flex-col gap-5 product-image md:gap-3 md:pr-7 lg:mb-4 lg:gap-7">
                    <div>
                        <span className="text-sm md:text-[12px] md:ml-[-12px] lg:ml-[-35px]">Other Products</span>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/bhujang-4ch6sqmm"} className="no-underline">
                            <ProductImageWithHover imageUrl={BHUJANG} productName={"Bhujang 4CH"} />
                        </Link>
                        <Link to={"/speaker-cable"} className="no-underline">
                            <ProductImageWithHover imageUrl={SPEAKER} productName={"Speaker Cable"} />
                        </Link>
                        <Link to={"/microphone-cable"} className="no-underline">
                            <ProductImageWithHover imageUrl={MICROPHONE} productName={"Microphone"} />
                        </Link>
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-10">
                        <Link to={"/snake-cable"} className="no-underline">
                            <ProductImageWithHover imageUrl={SNAKE} productName={"Snake Cable"} />
                        </Link>
                        <Link to={"/rg-cable"} className="no-underline">
                            <ProductImageWithHover imageUrl={RG6} productName={"RG6 Cable"} />
                        </Link>
                        <Link to={"/dmx-cable"} className="no-underline">
                            <ProductImageWithHover imageUrl={DMX} productName={"DMX Cable"} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-end mb-[-40px] md:mb-[-40px] mt-9 product-image bg-[#D9D9D9]">
                <a href="/Bhujang 8CH6SQMM.pdf" download className="bg-[#0092D1] no-underline flex items-center py-2 px-4 gap-2 md:gap-1">
                    <img src={DOWNLOAD} className="w-4" alt="file-download-icon" />
                    <span className="text-[#FFFFFF] font-light md:text-[10px]">Download Data Sheet</span>
                </a>
            </div>
        </div>
    )
};

export default Bhujang8CH6SQMM;
