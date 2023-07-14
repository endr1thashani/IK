import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import hero from '../assets/hero.png'
import Items from './Items'
import isa from '../assets/isahero.png'
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTelegram
} from 'react-icons/fa';
const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='flex flex-col w-full items-center justify-center bg-[#40394A] h-screen relative' id='home'>
      <img className='w-full h-full object-cover relative' src={hero} alt='hero'/>
      <div className='flex w-full absolute'>
        <div className='w-full max-w-[1240px] flex flex-col md:flex-row  mx-auto items-center justify-evenly'>
        <div className='mt-[30px] sm:mt-0' data-aos="fade-down" data-aos-duration="1200">
          <h2 className='text-white text-4xl md:text-[40px]'>👋 Hi I Am</h2>
          <h1 className='text-6xl font-bold bg-clip-text bg-gradient-to-r from-[#0035FF] to-[#7D17FF] text-transparent md:text-[80px]'>Isa Kadriu</h1>
          <p className='text-white font-semibold mt-[20px] text-[20px]'>A Detail-obsessed UX / UI Designer</p>
        </div>
        <div className='flex  mr-[20px] mt-[40px] mb-[40px]  md:mt-0 items-center justify-center md:mr-0 md:mb-0' data-aos="fade-up" data-aos-duration="1200">
          <img  src={isa} alt='isa'/>
        <div className='flex flex-col justify-between mb-[20px] w-full sm:max-w-[280px]'>
            <FaFacebook className='h-[20px] w-[20px] text-white hover:text-[#FDAD00]'/>
            <FaLinkedin className='h-[20px] w-[20px] text-white hover:text-[#FDAD00] my-[50px]' />
            <FaInstagram className='h-[20px] w-[20px] text-white hover:text-[#FDAD00]' />
            <FaTelegram className='h-[20px] w-[20px] text-white hover:text-[#FDAD00] mt-[50px]' />
        </div>
        </div>
        </div>
      </div>
      <div className='flex relative w-full '>
          <Items/>
      </div>
    </div>
  )
}

export default Hero
