import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import modules from 'swiper/core'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Optional: Import Swiper's additional effects


import IMAGE_1 from "../assets/images/image7.png";
import IMAGE_2 from "../assets/images/image8.png";
import IMAGE_3 from "../assets/images/image9.png";
import IMAGE_4 from "../assets/images/image10.png";

const VISION_IMAGES = [IMAGE_1, IMAGE_3];
const MISSION_IMAGES = [IMAGE_2, IMAGE_4];

const SliderComp2 = () => {
    return (
        <div className='object-cover w-full overflow-hidden gap-3'>
            <div className="slider-container pr-28 pb-4 md:pr-0 md:pb-3">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={10}
                    loop
                >
                    {VISION_IMAGES.map((imageUrl, index) => (
                        <SwiperSlide key={`vision_${index}`}>
                            <img src={imageUrl} className="h-[160px] md:w-[160px] lg:w-[240px] md:h-[80px] lg:h-[130px] md:ml-20" alt={`Vision Image ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="slider-container pl-48 md:pl-32">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={10}
                    loop
                >
                    {MISSION_IMAGES.map((imageUrl, index) => (
                        <SwiperSlide key={`mission_${index}`}>
                            <img src={imageUrl} className="h-[160px] md:h-[85px] lg:h-[130px] md:w-[170px] lg:w-[240px]" alt={`Mission Image ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SliderComp2;
