"use client"

import React from 'react';
 

const Working = () => {

  return (
    <div className='mt-10'>
      <h1 className='text-[25px] text-[#38b6ff] text-center grayscale hover:grayscale-0'>How It Works</h1>
      <div className='mt-5 flex flex-col gap-5 items-center'>
        <div className='grayscale hover:grayscale-0'>
          <h1 className='text-center grayscale hover:grayscale-0'>The device’s advanced smart camera captures an image of your surroundings and articulates the visual information out loud and in real-time.</h1>
        </div>

        <div className='grayscale hover:grayscale-0'>
          <video width="500" height="360" controls>
            <source src='/video/OCR.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Working;
