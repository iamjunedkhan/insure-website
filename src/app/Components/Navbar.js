"use client"; // This is a client component 👈🏽

import React, { useState } from 'react'
import logo from './images/logo.svg'
import hamburger from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'
import patternMobile from './images/bg-pattern-mobile-nav.svg'

const Navbar = () => {
    console.log('the logo is :', logo.src)
    const [navbaropen, setNavbaropen] = useState(false);
    const toggleNavbar = ()=>{
            setNavbaropen(!navbaropen)
    }
    return (
        <div className='flex z-20 bg-white relative justify-between px-4 md:px-28 items-center h-24 karla400'>
            <div className='absolute top-1/2 -translate-y-1/2 right-6 md:hidden'>   
               {navbaropen?<img src={close.src} onClick={toggleNavbar} />: <img src={hamburger.src} onClick={toggleNavbar} />}
                 
            </div>
            <div>
                <img src={logo.src} />
            </div>
            <div className='  space-x-10 items-center text-sm font-bold  text-gray-500 hidden md:flex'>
                <ul className='flex  space-x-10 items-center'>
                    <li className='hover:text-black'>HOW WE WORK</li>
                    <li className='hover:text-black'>BLOG</li>
                    <li className='hover:text-black'>ACCOUNT</li>
                </ul>
                <button className='text-sm border-2 px-3 py-2 rounded-none veryDarkVioletBorder veryDarkViolet'>VIEW PLANS</button>
            </div>
            <div className={`darkViolet fixed top-24  h-full  w-full  z-50  text-sm transition-all duration-150 ${navbaropen?'left-0':'left-full'}  font-bold  text-gray-500 flex flex-col items-center `}>
                <ul className='flex flex-col items-center text-white'>
                    <li className='hover:text-black mt-10'>HOW WE WORK</li>
                    <li className='hover:text-black mt-8'>BLOG</li>
                    <li className='hover:text-black mt-8'>ACCOUNT</li>
                </ul>
                <div>

                </div>
                <button className='text-sm    text-white border-2  py-3  mt-8 w-4/5 '>VIEW PLANS</button>
                <img src={patternMobile.src} className='absolute bottom-20 w-full' />
            </div>

        </div>
    )
}

export default Navbar