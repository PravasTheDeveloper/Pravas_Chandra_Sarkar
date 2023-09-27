import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

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
                            <div className='Contact_ME_Section px-6 py-2 rounded-md font-semibold text-yellow-color'>
                                Contact Me
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
                    <div className='w-[300px] h-10 bg-red-100 absolute bottom-10'>
                        hello
                    </div>
                </div>
            </div>
        </>
    )
}
