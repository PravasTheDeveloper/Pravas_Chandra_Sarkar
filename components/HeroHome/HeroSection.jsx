import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"

export default function HeroSection() {
    return (
        <>
            <div className='w-full flex-1 container mx-auto flex'>
                <div className='w-1/2 text-white'>
                    <div className='w-[600px] h-full  flex flex-col justify-center items-center'>
                        <div className='w-full h-auto text-4xl'>
                            I'M <span className='text-yellow-color text-6xl font-bold Hero_Name_Section'>Pravas</span>
                        </div>
                        <div className='w-full h-auto text-4xl my-14 '>
                            A <span className='text-yellow-color'>
                                <Typewriter
                                    words={['MERN', 'FULL-STACK', 'MOBILE APP', 'SOFTWARE']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={200}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span>
                            DEVELOPER
                        </div>
                        <div className='w-full h-auto flex'>
                            <div className='Contact_ME_Section px-6 py-2 rounded-md font-semibold text-yellow-color cursor-pointer'>
                                Contact Me
                            </div>
                        </div>
                        <div className='w-full h-10 text-white text-2xl mt-10'>
                            <div className='w-[300px] h-full flex items-center'>
                                <div className='flex'>
                                    <div className='mr-10 Icon_hover duration-200 cursor-pointer'>
                                        <a href="https://www.facebook.com/profile.php?id=100034474604538" target='_blank'>
                                            <BsFacebook />
                                        </a>
                                    </div>
                                    <div className='mr-10 Icon_hover duration-200 cursor-pointer'>
                                        <a href="https://github.com/PravasTheDeveloper" target='_blank'>
                                            <BsGithub />
                                        </a>
                                    </div>
                                    <div className='mr-10 Icon_hover duration-200 cursor-pointer'>
                                        <a href="https://www.linkedin.com/in/pravaschandrasarkar/" target='_blank'>
                                            <BsLinkedin />
                                        </a>
                                    </div>
                                </div>
                                <div className='flex-1 h-[4px] rounded-full bg-yellow-color'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2  flex justify-end items-center relative'>
                    <div className='w-[500px] h-[500px] p-5 rounded-full overflow-hidden Hero_Section_Image'>
                        <div className='w-full h-full bg-slate-600 rounded-full'>
                            <img src="/image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}