import React from 'react'
import s1 from './images/icon-snappy-process.svg'
import s2 from './images/icon-affordable-prices.svg'
import s3 from './images/icon-people-first.svg'

const Service = () => {
  return (
    <div className='  bg-white relative  md:px-28 px-12  mt-56'>
        <div className='h-1 bg-black  w-32 mb-12 mx-auto md:mx-0 ' ></div>
        <div>
            <h1 className='md:text-6xl text-5xl' >We're different</h1>
        </div>
        <div className='flex md:flex-row flex-col justify-between my-16'>
            <div className=' md:w-1/3 m-5'>
                <img src={s1.src} className="md:mx-0 mx-auto" />
                <h1 className='text-2xl font-bold mb-4 mt-6 text-center md:text-left '>Snappy Process</h1>
                <p className='text-md text-gray-500'>
                    Our applicaton process can be completed in miutes, not hours. Don't get stuck filling in tedious forms.
                </p>
            </div>
            <div className=' md:w-1/3 m-5'>
                <img src={s2.src} className="md:mx-0 mx-auto" />
                <h1 className='text-2xl font-bold mb-4 mt-6 text-center md:text-left'>Affordable Prices </h1>
                <p className='text-md text-gray-500'>
                    We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
                </p>
            </div>
            <div className='md:w-1/3 m-5'>
                <img src={s3.src} className="md:mx-0 mx-auto" />
                <h1 className='text-2xl font-bold mb-4 mt-6 text-center md:text-left '>People First</h1>
                <p className='text-md text-gray-500'>
                    Our plans aren't full of conditions and clauses to prevent payouts. we make sure you're covered when you need it.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service