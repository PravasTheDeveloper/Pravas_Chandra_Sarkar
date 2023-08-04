import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function HomePageContentSec() {
    return (
        <>
            <div className='w-full text-xl mb-10'>
                Hi , I am
            </div>
            <div className='w-full text-5xl font-bold mb-10'>
                Pravas Chandra Sarkar
            </div>
            <div className='w-full text-3xl font-bold mb-10 Coding__Font text-cyan-400'>
                <Typewriter
                    words={['Full-Stack Developer', 'MERN Developer', 'Tailwind CSS', 'Soket.IO', 'Framer Motion', 'React-Native']}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
                />

            </div>
            <div className='w-full mb-10'>
                As a full stack MERN developer with an impressive portfolio, I excel in building modern web applications. My expertise in MongoDB, Express.js,
                React, and Node.js enables me to create efficient and scalable solutions. I am committed to continuous learning to stay ahead in the ever-evolving field of web development.
            </div>
            <div className='w-full'>
                <button className='Button__Hover__Style w-full h-full rounded-lg hover:bg-white hover:text-slate-800 duration-200'>
                    Check My Projects
                </button>
            </div>
        </>
    )
}

export default HomePageContentSec