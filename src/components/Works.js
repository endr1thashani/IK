import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import Car from '../assets/car.png'
import Shadow from '../assets/shadow.png'
import {Tab , Tabs ,TabList, TabPanel } from 'react-tabs';
import './Works.css'
const Works = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='flex flex-col w-full h-screen mt-[100px] mb:mt-[340px]' data-aos="fade-down" data-aos-duration="1200" id='works'>
      <h1 className='text-[#40394A] text-xl mb-[35px] ml-[20px] font-bold md:text-[42px] md:ml-[180px] md:mt-[100px]'>The work i do, and business I help.</h1>
      <Tabs className="flex w-full h-screen flex-col cursor-pointer" >
      <TabList className='tablist relative flex h-[25px] items-start text-[#B2AEAE] font-medium ml-[20px] md:ml-[180px]'>
          <Tab className='outline-none focus:hidden hover:text-[#7D17FF] hover:border-b-2 border-[#7D17FF]' active>Mobile</Tab>
          <Tab className='outline-none focus:hidden mx-[50px] hover:text-[#7D17FF] hover:border-b-2 border-[#7D17FF]'>Web</Tab>
          <Tab className='outline-none focus:hidden mr-[50px] hover:text-[#7D17FF] hover:border-b-2 border-[#7D17FF]'>Apps</Tab>
          <Tab className='outline-none focus:hidden hover:text-[#7D17FF] hover:border-b-2 border-[#7D17FF]'>Smartwatch</Tab>
        </TabList>
        <TabPanel className='w-full'>
        <Swiper
        direction={'vertical'}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel,Pagination]}
        className="mySwiper relative w-full h-screen mt-[50px]"
      >
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
      </Swiper>
      </TabPanel>
      <TabPanel className='w-full'>
        <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative w-full h-screen mt-[50px]"
      >
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
      </Swiper>
      </TabPanel>
      <TabPanel className='w-full'>
        <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative w-full h-screen mt-[50px]"
      >
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
      </Swiper>
      </TabPanel>
      <TabPanel className='w-full'>
        <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative w-full h-screen mt-[50px]"
      >
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-screen flex absolute'>
        <img className='absolute w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Car} alt='car'/>
        <img className='relative w-full h-screen max-h-[400px] lg:max-h-[800px]' src={Shadow} alt='shadow'/>
        <div className='flex flex-col items-start justify-center relative ml-[30px] mt-[-180px] md:mt-[-240px] md:ml-[160px]'>
          <p className='text-[#FF9A00] text-[14px]'>Selected projects</p>
          <h1 className='text-white text-xl font-semibold md:text-[42px]'>
          Apple watch showcase
          </h1>
          <p className='max-w-[357px] mt-[8px] text-[#C1C1C1]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        </div>
        </SwiperSlide>
      </Swiper>
      </TabPanel>
    </Tabs>
    </div>
  )
}

export default Works
