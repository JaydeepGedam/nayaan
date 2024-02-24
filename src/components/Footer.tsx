import React from 'react'
import logo from '../assets/logo.png'
import downloadapp1 from '../assets/downloadapp1.png'
import fb from '../assets/fb.webp'
import twitter from '../assets/twitter.png'
import insta from '../assets/insta.webp'
import linkedin from '../assets/linkedin.webp'

const Footer = () => {
  return (
    <div className='mt-10 flex flex-wrap justify-evenly gap-5'>
      <div className='flex flex-wrap justify-evenly gap-5 items-center'>
        <img className='h-[50px] grayscale hover:grayscale-0' src={logo.src} alt="logo" />
        <img className='h-[40px] grayscale hover:grayscale-0' src={downloadapp1.src} alt="downloadapp1" />
      </div>
      <div>
        <h1 className='text-[#38b6ff] mb-2 grayscale hover:grayscale-0'>Company</h1>
        <h1 className='text-[13px]'>About Us</h1>
        <h1 className='text-[13px]'>Our Services</h1>
        <h1 className='text-[13px]'>Privacy Policy</h1>
      </div>
      <div>
        <h1 className='text-[#38b6ff] mb-2 grayscale hover:grayscale-0'>Get Help</h1>
        <h1 className='text-[13px]'>FAQ</h1>
        <h1 className='text-[13px]'>Shipping</h1>
        <h1 className='text-[13px]'>Returns</h1>
        <h1 className='text-[13px]'>Order Status</h1>
        <h1 className='text-[13px]'>Payment Options</h1>
      </div>
      <div>
        <h1 className='text-[#38b6ff] mb-2 text-center grayscale hover:grayscale-0'>Follow Us</h1>
        <div className='flex gap-4'>
            <img className='h-[25px] grayscale hover:grayscale-0' src={fb.src} alt="fb" />
            <img className='h-[25px] grayscale hover:grayscale-0' src={twitter.src} alt="twitter" />
            <img className='h-[25px] grayscale hover:grayscale-0' src={insta.src} alt="insta" />
            <img className='h-[25px] grayscale hover:grayscale-0' src={linkedin.src} alt="linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Footer
