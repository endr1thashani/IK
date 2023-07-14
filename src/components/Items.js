import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';
import As from '../assets/as.png';
import Doodle from '../assets/doodle.png';
import Ucx from '../assets/ucx.png';
import Bon from '../assets/bonevet.png';
import T from '../assets/t.png';
import Frak from '../assets/frakton.png';

SwiperCore.use([Autoplay]);

const Items = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white flex mx-auto w-full max-w-[1240px] items-center justify-center'>
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
            freeMode: true,
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 3000 }}
        pagination={false}
        className="mySwiper w-full h-screen max-h-[80px]" data-aos="zoom-in" data-aos-duration="1200"
      >
        <SwiperSlide>
          <img className='h-[30px] mt-[25px] ml-[170px] sm:ml-[210px] md:ml-[30px] ' src={As} alt='as' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[30px] mt-[25px]  ml-[145px] sm:ml-[170px] md:ml-[-10px] ' src={Doodle} alt='Doodle' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[30px] mt-[25px] ml-[165px] sm:ml-[190px] md:ml-0'src={Ucx} alt='Ucx' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[30px] mt-[25px] ml-[120px] sm:ml-[160px] md:ml-0' src={Bon} alt='Bon' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[60px] mt-[10px] ml-[170px] sm:ml-[215px] md:ml-[15px]'  src={T} alt='T' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[30px] mt-[25px] ml-[110px] sm:ml-[150px] md:ml-[-50px]' src={Frak} alt='Frak' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Items;
