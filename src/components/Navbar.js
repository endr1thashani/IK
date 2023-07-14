import React, {useState, useEffect} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [bg, setBg] = useState(false)
  
    useEffect(()=>{
      window.addEventListener('scroll' , ()=>{
        return window.scrollY > 50 ? setBg(true) : setBg(false)
      })
    })
    const handleNav = () => {
      setNav(!nav);
    };
  
    const closeNav = () => {
      setNav(false);
    };
  return (
        <header className={`${bg ? 'bg-[#40394A] py-4 lg:py-6' : 'bg-[#40394A]'} sticky px-4 md:px-[140px] justify-between m-auto top-0 z-50 flex items-center h-20`}>
            <ul className='hidden md:flex decoration-none text-white gap-x-10 text-base font-bold '>
            <a href='#services' className='hover:border-b-2 border-[#7D17FF] hover:text-[#7D17FF]'>Services</a>
            <a href='#works' className='hover:border-b-2 border-[#7D17FF] hover:text-[#7D17FF]'>Works</a>
            <a href='#about' className='hover:border-b-2 border-[#7D17FF] hover:text-[#7D17FF]'>About</a>
            </ul>
            <ul>
            <div className='flex items-center'>
            <div className='flex items-center justify-center rounded-full h-[9x] w-[9px] bg-[#00FF0A] mr-[9px] md:mr-[5px] '>
            <div class="absolute h-[9px] w-[9px] bg-green-400 rounded-full animation-pulse"></div>
            </div>
                <p className='text-white mr-[25px]'><span className='text-[#00FF0A]'>Available</span> for work now!</p>
                <button className='w-[153px] h-[50px] hidden md:flex items-center justify-center font-bold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-purple-800 text-center ml-2 mb-2'><a href='#contact'>Contact me</a></button>
            </div>
            </ul>
            <div onClick={handleNav} className='block md:hidden text-white'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full md:hidden bg-[#40394A] ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <ul className='p-4 mt-[40px] text-white font-bold'>
            <li className='p-4 my-[25px]'>
              <a href='#services' className='hover:border-b-2 border-[#7D17FF] hover:text-[#7D17FF]' onClick={closeNav}>
              Services
              </a>
            </li>
            <li className='p-4 my-[25px]'>
              <a href='#works' className='hover:border-b-2 border-[#7D17FF] hover:text-[#7D17FF]' onClick={closeNav}>
              Works
              </a>
            </li>
            <li className='p-4 my-[25px]'>
              <a href='#leading' className='hover:border-b-2 border-[#7D17FF] hover:text-[#7D17FF]' onClick={closeNav}>
              About
              </a>
            </li>
            <li className='p-4 my-[25px]'>
              <a href='#contact' onClick={closeNav}>
              <button className='w-[153px] h-[50px] font-bold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:outline-none  dark:focus:ring-purple-800 text-center mb-2'><a href='#contact'>Contact me</a></button>
              </a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Navbar