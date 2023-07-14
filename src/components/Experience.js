import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='w-full h-screen mt-[120px] max-h-[500px] mx-auto flex flex-col items-center justify-center max-w-[1000px] md:flex-row md:justify-between' id='services'>
        <div className='w-full flex items-center justify-evenly' data-aos="fade-up" data-aos-duration="1200">
            <div className='flex flex-col'>
                <h1 className='text-[50px] font-bold text-[#40394A]'>3+</h1>
                <p className='w-[90px] text-[#B2AEAE] text-[20px]'>Years of experience</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[50px] font-bold mb-[20px] text-[#40394A]'>30+</h1>
                <p className='text-[#B2AEAE] text-[20px] mb-[20px]'>Projects</p>
            </div>
        </div>
        <div className='flex flex-col px-4 mt-[35px] justify-center w-full  max-w-[525px]' data-aos="fade-down" data-aos-duration="1200">
            <h1 className='text-[40px] font-bold text-[#40394A]'>Experience</h1>
            <p className='text-[#939393] mt-[15px]'>I have 3+ experience in UX/UI for different industries and I make sure to give 110% to deliver intuitive, captivating, and unique designs that will satisfy the user and the client. I am known for being a swift worker that doesn’t compromise quality. 
            <br/>
            <br/>
            Combining creativity and functionality and matching it with extensive work experience with different domains (SaaS, E-commerсe, HealthCare, FinTech, etc). Being naturally analytical on solving UX problems. Always searching for new challenges!</p>
        </div>
      </div>
  )
}

export default Experience
