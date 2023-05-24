import React from 'react'
import img1 from './images/bg-pattern-how-we-work-desktop.svg'
import img2 from './images/bg-pattern-how-we-work-mobile.svg'
const AboutMore = () => {
  return (
    <div className='mx-12 md:mx-28 darkViolet veryLightGray my-28  p-8 md:p-16 flex flex-col font-bold items-center justify-between relative overflow-hidden'>
      <img src={img1.src} className='absolute right-0 top-0 z-10 hidden md:block ' />
      <img src={img2.src} className='absolute right-0 top-0 z-10  ' />
      <div>
        <h1 className='text-4xl text-center md:text-6xl z-20 relative'>Find our more<br/>about how we work</h1>
      </div>
      <div className='z-20'>
        <button className=' border-none px-3 py-2 my-4 btn hover:bg-white hover:text-black z-20'>HOW WE WORK</button>
      </div>
    </div>
  )
}

export default AboutMore