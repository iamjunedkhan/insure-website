import React from 'react'
import logo from './images/logo.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'
import img1 from './images/icon-instagram.svg'

const Footer = () => {
    return (
        <div className='px-28 '>
           
            <div className='flex justify-between flex-col md:flex-row ' >
                <div className='my-4'>
                    <img src={logo.src} className='mx-auto md:mx-0' />
                </div>
                <div className='flex justify-between my-4'>
                    <img  src={facebook.src} className='  mx-2' />
                    <img  src={twitter.src} className='   mx-2' />
                    <img  src={pinterest.src} className=' mx-2' />
                    <img  src={instagram.src} className=' mx-2' />
                </div>
            </div>
            <div className='border-2 my-12'></div>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/4 w-full flex items-center md:items-start flex-col my-4'>
                    <h1 className='text-xs text-gray-500 mb-8'>OUR COMPANY</h1>
                    <ul className='text-black text-sm text-center md:text-left'>
                        <li className='mb-2 text-xs'>HOW WE WORK</li>
                        <li className='mb-2 text-xs'>WHY INSURE?</li>
                        <li className='mb-2 text-xs'>VIEW PLANS</li>
                        <li className='mb-2 text-xs'>REVIEWS</li>
                    </ul>
                </div>
                <div className='md:w-1/4 w-full flex items-center md:items-start flex-col my-4'>
                <h1 className='text-xs text-gray-500 mb-8'>HELP ME</h1>
                    <ul className='text-black text-sm text-center md:text-left'>
                        <li className='mb-2 text-xs'>FAQ</li>
                        <li className='mb-2 text-xs'>TERMS OF USE</li>
                        <li className='mb-2 text-xs'>PRIVACY POLICY</li>
                        <li className='mb-2 text-xs'>COOKIES</li>
                    </ul>
                </div>
                <div className='md:w-1/4 w-full flex items-center md:items-start flex-col my-4'>
                <h1 className='text-xs text-gray-500 mb-8'>CONTACT</h1>
                    <ul className='text-black text-sm text-center md:text-left'>
                        <li className='mb-2 text-xs'>SALES</li>
                        <li className='mb-2 text-xs'>SUPPORT</li>
                        <li className='mb-2 text-xs'>LIVE CHAT</li>
                    </ul>
                </div>
                <div className='md:w-1/4 w-full flex items-center md:items-start flex-col my-4'>
                <h1 className='text-xs text-gray-500 mb-8'>OTHERS</h1>
                    <ul className='text-black text-sm text-center md:text-left'>
                        <li className='mb-2 text-xs'>CAREERS</li>
                        <li className='mb-2 text-xs'>PRESS</li>
                        <li className='mb-2 text-xs'>LICENSES</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer