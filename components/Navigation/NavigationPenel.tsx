import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { Link as RLink } from "react-scroll"

export default function NavigationPenel() {

    const [MobileViewNav, setMobileViewNav] = useState(false)

    return (
        <>
            <div className='w-full h-[70px] bg-black-200 container mx-auto flex justify-between items-center px-5'>
                {/* Logo Section */}
                <Link href={"/"} className='text-white text-4xl'>
                    <span className='md:text-4xl text-2xl text-yellow-color text-yellow-color font-semibold z-50'>P</span>.
                </Link>
                {/* Navigation */}
                <div className='hidden text-md font-semibold md:flex'>
                    <RLink to='HomeSection' className='ml-14 text-center text-white duration-200 cursor-pointer'>Home</RLink>
                    <RLink to="AboutSection" className='ml-14 text-two text-center duration-200 cursor-pointer'>About</RLink>
                    <RLink to='PorfolioSection' className='ml-14 text-two text-center duration-200 cursor-pointer'>Portfolio</RLink>
                    <RLink to="SkillPenel" className='ml-14 text-two text-center duration-200 cursor-pointer'>Skill</RLink>
                </div>
                <div className='text-xl text-white relative flex justify-center items-center md:hidden'>
                    <FaBars className={`${MobileViewNav === false ? "opacity-100" : "opacity-0 hidden"} duration-500`} onClick={() => { setMobileViewNav(true) }} />
                    <RxCross2 className={`text-rose-400 text-2xl font-bold ${MobileViewNav === true ? "opacity-100" : "opacity-0 hidden"} `} onClick={() => { setMobileViewNav(false) }} />
                </div>
                <div className={`text-md font-semibold absolute w-[85%] h-screen left-0 z-40 top-0 Mobile_View_Nav flex flex-col duration-200 md:hidden justify-center ${MobileViewNav === true ? "left-0" : "left-[-400px]"}`}>
                    <RLink to='HomeSection' className='ml-14 text-center text-white duration-200 cursor-pointer mb-10'>Home</RLink>
                    <RLink to="AboutSection" className='ml-14 text-two text-center duration-200 cursor-pointer mb-10'>About</RLink>
                    <RLink to='PorfolioSection' className='ml-14 text-two text-center duration-200 cursor-pointer mb-10'>Portfolio</RLink>
                    <RLink to="SkillPenel" className='ml-14 text-two text-center duration-200 cursor-pointer mb-10'>Skill</RLink>
                </div>
            </div>
        </>
    )
}
