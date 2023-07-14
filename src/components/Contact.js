import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaTelegram
  } from 'react-icons/fa';
const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const handleSubmit = (e) =>{
    e.preventDefault();
    e.target.reset();
    alert("Thank You!")
  }
  return (
    <div className='flex flex-col w-full h-screen items-center mt-[100px] justify-evenly bg-[#DEDEDE] opacity-90 md:flex-row md:mt-[293px] ' id='contact'>
      <div className='flex flex-col max-w-[390px] mb-[50px]' data-aos="fade-up" data-aos-duration="1200">
        <h1 className=" text-[#40394A] font-bold leading-[81px] text-4xl  md:text-[60px] lg:text-[90px]">Let’s Connect</h1>
        <p className='text-[#B2AEAE] font-normal mt-[39px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare facilisis ut felis vel. Netus mollis tellus vitae sed mauris, pharetra.</p>
        <div className='flex items-center mt-[39px]'>
            <FaFacebook className='h-[20px] w-[20px] text-[#A259FF] hover:text-[#FDAD00]'/>
            <FaLinkedin className='h-[20px] w-[20px] text-[#A259FF] hover:text-[#FDAD00] mx-[20px]' />
            <FaInstagram className='h-[20px] w-[20px] text-[#A259FF] hover:text-[#FDAD00]' />
            <FaTelegram className='h-[20px] w-[20px] text-[#A259FF] hover:text-[#FDAD00] mx-[20px]' />
        </div>
      </div>
      <form onSubmit={handleSubmit} data-aos="fade-down" data-aos-duration="1200">
        <div class="relative z-0 w-full mb-6 group">
            <label for="floating_name" class="font-bold absolute text-[#40394A] text-[22px] duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name:</label>
            <input type="text" name="floating_name" id="floating_name" class="py-[5px] text-sm  text-gray-900 bg-transparent  border-b-2 border-[#B2AEAE] appearance-none  focus:outline-none focus:ring-0 focus:border-[#A259FF] w-[350px]" placeholder=" " required />
        </div>
        <div class="relative z-0 w-full mb-6 mt-[75px] group">
            <label for="floating_email" class="font-bold absolute text-[#40394A] text-[22px] duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email:</label>
            <input type="email" name="floating_email" id="floating_email" class="py-[5px] text-sm  text-gray-900 bg-transparent  border-b-2 border-[#B2AEAE] appearance-none  focus:outline-none focus:ring-0 focus:border-[#A259FF] w-[350px]" placeholder=" " required />
        </div>
        <div class="relative z-0 w-full mb-6 group mt-[75px]">
            <label for="floating_text" class="font-bold absolute text-[#40394A] text-[22px] duration-300 transform -translate-y-10 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tell me about the project:</label>
            <input type="text" name="floating_text" id="floating_text" class="py-[5px] text-sm  text-gray-900 bg-transparent  border-b-2 border-[#B2AEAE] appearance-none  focus:outline-none focus:ring-0 focus:border-[#A259FF] w-[350px]" placeholder=" " required />
        </div>
        <button type='submit' className='w-[153px] h-[50px] font-medium text-white bg-gradient-to-r from-[#7D17FF]  to-[#0035FF] hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-purple-800 text-center mb-2'>Send the email</button>
      </form>
    </div>
  )
}

export default Contact
