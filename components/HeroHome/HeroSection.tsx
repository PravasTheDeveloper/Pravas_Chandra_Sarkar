import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"
import Image from 'next/image'

export default function HeroSection() {
    return (
        <>
            <div className='w-full flex-1 container mx-auto flex'>
                <div className='md:w-1/2 w-full text-white'>
                    <div className='md:w-[600px] w-full h-full  flex flex-col justify-center items-center md:text-left text-center mt-[-100px] md:mt-0'>
                        <div className='w-full h-auto md:text-4xl text-2xl'>
                            I&aposM <span className='text-yellow-color md:text-6xl text-6xl font-bold Hero_Name_Section'>Pravas</span>
                        </div>
                        <div className='w-full h-auto md:text-4xl text-xl my-14 '>
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
                        <div className='w-full h-auto flex justify-center md:justify-start'>
                            <div className='Contact_ME_Section px-6 py-2 rounded-md font-semibold text-yellow-color cursor-pointer'>
                                Contact Me
                            </div>
                        </div>
                        <div className='w-full h-10 text-white text-2xl mt-10 absolute bottom-28'>
                            <div className='md:w-[300px] w-full h-full flex items-center justify-between '>
                                <div className='flex-1 h-[4px] rounded-full bg-yellow-color mr-10'>

                                </div>
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
                <div className='w-1/2 hidden md:flex justify-end items-center relative'>
                    <div className='2xl:w-[500px] 2xl:h-[500px] w-[400px] h-[400px] p-5 rounded-full overflow-hidden Hero_Section_Image'>
                        <div className='w-full h-full bg-slate-600 rounded-full'>
                            <Image src={"/image.png"} height={400} width={400} className='w-full h-full' alt='My Profile Picture' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
