import React,{ useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Back from '../assets/back.png'
import ISA from '../assets/isa2.png'
const Again = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='flex flex-col w-full items-center max-w-[1240px] mt-[30px] mx-auto md:mt-[440px] md:flex-row' id='about'>
        <div className='flex items-center justify-center' data-aos="fade-up" data-aos-duration="1200">
            <img className='absolute h-[400px] md:max-h-[456px]' src={Back} alt='back'/>
            <img className='relative h-[400px] md:max-h-[456px]' src={ISA} alt='ISA'/>
        </div>
        <div className='mt-[90px] md:mt-0 md:ml-[50px]' data-aos="fade-down" data-aos-duration="1200">
            <h1 className='text-[#40394A] text-xl font-bold md:text-[42px]'>Hi again</h1>
            <p className='max-w-[436px] mt-[15px] font-normal text-[#B2AEAE]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
            <h2 className='text-[#40394A] font-bold mt-[50px]'>Education</h2>
            <h3 className='text-[#40394A] font-semibold text-[18px] mt-[10px]'>UBT - Computer Science and Engineering</h3>
            <p className='text-[#B2AEAE] font-normal'>Bachelor degree</p>
            <h1 className='text-[#40394A] text-[22px] mt-[40px] font-bold'>Work Experience</h1>
            <div className='flex flex-row justify-between max-w-[280px] mt-[14px]'>
                <div>
                    <h1 className='text-[#40394A] text-[18px]'>Frakton</h1>
                    <p className='text-[#B2AEAE] text-[14px]'>UX/UI Designer</p>
                    <h1 className='text-[#40394A] text-[18px] mt-[10px]'>TechLabs</h1>
                    <p className='text-[#B2AEAE] text-[14px]'>UX/UI Designer</p>
                </div>
                <div>
                    <h1 className='text-[#40394A] text-[18px]'>UCX</h1>
                    <p className='text-[#B2AEAE] text-[14px]'>UX/UI Designer</p>
                    <h1 className='text-[#40394A] text-[18px] mt-[10px]'>Morina&Co</h1>
                    <p className='text-[#B2AEAE] text-[14px]'>UX/UI Designer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Again
