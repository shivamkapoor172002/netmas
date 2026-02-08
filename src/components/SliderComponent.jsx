 import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import modules from 'swiper/core'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'; // Optional: Import Swiper's additional effects

import IMAGE_1 from "../assets/images/img1.png";
import IMAGE_2 from "../assets/images/img2.png";
import IMAGE_3 from "../assets/images/img3.png";

const IMAGES = [
    IMAGE_1,
    IMAGE_2,
    IMAGE_3
];

const SliderComponent = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Include modules directly in the Swiper component
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }} // Auto-play with a 2-second delay
            spaceBetween={70}
            loop
        >
            {IMAGES.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                    <img src={imageUrl} className='w-[28rem] md:w-[15rem] lg:w-[20rem] lg:h-64 md:h-44 h-96 object-cover pl-16 md:mt-5' alt={`Image ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderComponent;
