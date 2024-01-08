import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Slide1 from '/images/games/1301.png';
import Slide2 from '/images/games/Fortune.png';
import Slide3 from '/images/games/nft-aviatrix.png';
import Slide4 from '/images/games/pgs-slot-fortuneOx.png';
import Slide5 from '/images/games/spb-tb-aviator.png';
import Slide6 from '/images/games/vs20olympx.png';
import Slide7 from '/images/games/pgs-slot-prosperityfortuneT.png';

export default function SlideCasinoGames() {
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
        },
        {
            id: 4,
            img: Slide4
        },
        {
            id: 5,
            img: Slide5
        },
        {
            id: 6,
            img: Slide6
        },
        {
            id: 7,
            img: Slide7
        }
    ];

    return (
        <>
            <div className='py-2 px-4 bg-zinc-800 text-white rounded'>
                <p>Jogos mais populares</p>
            </div>
            <Swiper
                className='casino-home-swiper w-full'
                modules={[Autoplay]}
                spaceBetween={12}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                slidesPerView={2.2}
                loop={true}
                breakpoints={
                    {
                        768: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 5
                        },
                        1280: {
                            slidesPerView: 6
                        }
                    }
                }
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id} className="swiper-slide overflow-hidden rounded">
                        <img src={slide.img} alt={`Slide`} className='w-full h-48 object-cover' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}