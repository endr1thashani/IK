import React, { useEffect } from 'react'
import Figma from '../assets/figma.svg'
import Sketch from '../assets/sketch.svg'
import Adobe from '../assets/adobe.svg'
import Photoshop from '../assets/photoshop.svg'
import Illustrator from '../assets/ill.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Tools = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='flex flex-col mt-[120px] items-center justify-center mx-auto w-full max-w-[1240px] md:flex-row md:justify-around' data-aos="fade-in" data-aos-duration="1500">
      <div className='flex flex-col items-center justify-center'>
        <img src={Figma} alt='figma'/>
        <p className='text-[#40394A] mt-[41px] font-[400] text-[18px]'>Figma</p>
      </div>
      <div className='flex flex-col items-center justify-cente mt-[40px] md:mt-0'>
        <img src={Sketch} alt='Sketch'/>
        <p className='text-[#40394A] mt-[15px] font-[400] text-[18px] md:mt-[41px]'>Sketch</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-[40px] md:mt-0'>
        <img src={Adobe} alt='Adobe Xd'/>
        <p className='text-[#40394A] mt-[15px] font-[400] text-[18px] md:mt-[41px]'>Adobe Xd</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-[40px] md:mt-0'>
        <img src={Photoshop} alt='Photoshop'/>
        <p className='text-[#40394A] mt-[15px] font-[400] text-[18px] md:mt-[41px]'>Photoshop</p>
      </div>
      <div className='flex flex-col items-center justify-center mt-[40px] md:mt-0'>
        <img src={Illustrator} alt='Illustrator'/>
        <p className='text-[#40394A] mt-[15px] font-[400] text-[18px] md:mt-[41px]'>Illustrator</p>
      </div>
    </div>
  )
}

export default Tools
