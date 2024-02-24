import React from 'react'


const Features = () => {
  return (
    <div className='mt-10'>
      <h1 className='text-[25px] text-[#38b6ff] text-center grayscale hover:grayscale-0'>Features</h1>
      <div className='w-[100%] h-fit flex flex-wrap justify-evenly gap-5 mt-5'>
        <div className='grayscale hover:grayscale-0'>
            <video width="500" height="360" controls>
              <source src='/video/OCR.mp4' type="video/mp4" />
            </video>
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

export default Features
