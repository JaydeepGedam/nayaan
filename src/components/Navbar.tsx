"use client"

import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from '../assets/logo.png'
const Navbar = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }
  return (
    <div className='flex justify-between h-[10%] items-center px-5'>
      <img className='h-[50px] ' src={logo.src} alt="logo" />
      {/* <ul className='hidden gap-8'> */}
      <ul className={`text-[16px] sm:flex transition-all ${isOpen ? 'flex rounded-t-none flex-col absolute right-0 ease-linear duration-500 delay-1000 bg-yellow-500 top-[10%] px-10 py-2' : 'hidden right-[-100px]'} gap-8`}>
        <li className='grayscale hover:grayscale-0 text-[#38b6ff] font-bold'>Home</li>
        <li className='grayscale hover:grayscale-0 text-[#38b6ff] font-bold'>Contacts</li>
        <li className='grayscale hover:grayscale-0 text-[#38b6ff] font-bold'>About</li>
        <li className='grayscale hover:grayscale-0 text-[#38b6ff] font-bold'>Gallery</li>
        <li className='grayscale hover:grayscale-0 text-[#38b6ff] font-bold'>Timeline</li>
      </ul>
      <div className="flex gap-6 items-center sm:hidden">
        <div className="sm:hidden cursor-pointer">
          {isOpen?(
            <IoMdClose onClick={toggleNavbar} size={27}/>
            ):(
            <HiOutlineMenuAlt3 onClick={toggleNavbar} size={27}/>
            )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
