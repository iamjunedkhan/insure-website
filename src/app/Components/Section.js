import React from 'react'
import mainimg from './images/image-intro-desktop.jpg'
import img1 from './images/bg-pattern-intro-right-desktop.svg'
import img2 from './images/bg-pattern-intro-left-desktop.svg'

const Section = () => {
    return (
        <div className='flex md:flex-row flex-col-reverse darkViolet veryLightGray'>
            {/* svg 1 top right  */}
            <div className="left md:w-1/2 flex relative md:static md:pl-28 p-12  mt-20 flex-col ">
        <img src={img1.src}  className='absolute top-0 z-10 right-0 hidden md:block' />
        <img src={img2.src}  className='hidden md:block absolute -bottom-72 z-10 left-0 ' />
                <div className='h-1 bg-black w-32 mb-16 veryLightGrayBG dmSerif'></div>
                <h1 className=' text-5xl md:text-7xl font-bold'>Humanizing <br />your insurance.</h1>
                <p className='text-xl my-4'>Get your life insurance coverage easier and faster. We blend our expertise<br />and technology to help you find the plan that's right for you. Ensure you<br />and your loved ones are procted.</p>
                <div className='mt-8'>
                    <button className='border-2 rounded-none px-3 py-2 relative z-20 md:mx-0 mx-auto block hover:bg-white hover:text-black'>VIEW PLANS</button>
                </div>
            </div>

            <div className="right  md:w-1/2 flex justify-start md:top-20 relative ">
                <img src={mainimg.src} />
            </div>
        </div>
    )
}

export default Section