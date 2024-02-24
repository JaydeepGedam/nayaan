import React from 'react'
import nayaan from '../assets/nayaan.png'

const Hero = () => {
  return (
    <div className='md:flex'>
      <div className='pt-8 flex justify-center md:w-[50%]'>
        <img className='s:h-[55vmax] sm:h-[50vmax] md:h-[48vmax] lg:h-[40vmax] xl:h-[37vmax]' src={nayaan.src} alt="nayaan" />
      </div>
      <div className='mt-10 flex flex-col gap-6 justify-center items-center md:w-[50%]'>
        <h1 className='text-[2.5vmax] text-center sm:text-[2.3vmax] lg:text-[2vmax] xl:text-[1.7vmax] grayscale hover:grayscale-0'>A device for <span className='text-[#38b6ff] font-semibold'>smart navigation</span> and <span className='text-[#38b6ff] font-semibold'>reading</span> for visually impared and blind people.</h1>
        <button className='bg-transparent border-2 border-white rounded-lg px-5 py-2 font-semibold'>Explore</button>
      </div>
    </div>
  )
}

export default Hero
