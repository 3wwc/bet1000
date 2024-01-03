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
            title: "Slide 1",
            content: "This is the first slide",
            img: Slide1
        },
        {
            id: 2,
            title: "Slide 2",
            content: "This is the second slide",
            img: Slide2
        },
        {
            id: 3,
            title: "Slide 3",
            content: "This is the third slide",
            img: Slide3
        }
    ];

    return (
        <>
            <Swiper
                className='home-swiper'
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                        <img src={slide.img} alt={`Slide`} className='w-full h-64' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}