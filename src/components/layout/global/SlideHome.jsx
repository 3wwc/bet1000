import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Slide1 from '/images/slides/bem-vindo.png';
import Slide2 from '/images/slides/fortune.png';
import Slide3 from '/images/slides/penalty.png';

export default function SlideHome() {
    const slides = [
        {
            id: 1,
            img: Slide1
        },
        {
            id: 2,
            img: Slide2
        },
        {
            id: 3,
            img: Slide3
        }
    ];

    return (
        <>
            <Swiper
                className='home-swiper w-full'
                modules={[Autoplay]}
                spaceBetween={20}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                slidesPerView={1}
                loop={true}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                        <img src={slide.img} alt={`Slide`} className='w-full md:h-64' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}