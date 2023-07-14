import React, { useEffect,useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import AOS from "aos";
import "aos/dist/aos.css";
import Dots from '../assets/dots.png';

const Testimonial = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  const slides = [
    {
      text: "Isa not only was able to create an aesthetically pleasing design but was also able to understand how users will interact with that design. As an Account Manager, he has definitely made it easier for my clients to use the platform, which in turn helped me to upsell them.",
      person: "Visar Hadri",
      pos: "- Key Account Manager IBC"
    },
    {
      text: "Isa not only was able to create an aesthetically pleasing design but was also able to understand how users will interact with that design. As an Account Manager, he has definitely made it easier for my clients to use the platform, which in turn helped me to upsell them.",
      person: "Dren Hadri",
      pos: "- Key Account Manager IBC"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[896px] h-[396px] w-full mt-[100px] m-auto md:mt-[315px] px-4 relative group' data-aos="zoom-in" data-aos-duration="1200">
      <div className='w-full h-full bg-[#F1F1F1] mt-[100px] '>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : 'hidden'}`}
          >
            <div className='relative flex flex-col h-[200px] max-w-[654px] mx-auto mt-[100px]'>
            <div className='text-[#40394A] text-[16px] px-[35px] md:text-[22px] md:px-0 font-semibold mt-[100px]'> {slide.text}</div>
            <div className='flex px-[35px] mt-[45px] md:px-0'>
                <div className='text-[#7D17FF] text-[14px] md:text-[18px] font-semibold'>{slide.person}</div>
                <div className='text-[#40394A] text-[14px] md:text-[18px] font-semibold'>{slide.pos}</div>
            </div>
          </div>
          </div>
        ))}
      </div>
      <img className='absolute top-[-15px] left-[43px]' src={Dots} alt='dots' />
      <div className='block absolute top-[49.5%] -translate-x-0 translate-y-[-50%] right-0 text-2xl p-2 text-white cursor-pointer bg-[#A259FF]'>
        <BsChevronCompactLeft onClick={prevSlide} size={32} />
      </div>
      <div className='absolute top-[55.6%]  right-[1.5px] text-2xl p-2 text-black cursor-pointer bg-white'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'active' : ''}`}
          >
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
