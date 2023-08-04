import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


export default function Homepage() {
  return (
    <>
      <div className='w-full h-[90%] text-white flex justify-center container mx-auto'>
        <div className='text text-white flex flex-col justify-center items-center h-full w-[50%] bg-whit'>
          <div className='w-full text-xl mb-10'>
            Hi , I am
          </div>
          <div className='w-full text-5xl font-bold mb-10'>
            Pravas Chandra Sarkar
          </div>
          <div className='w-full text-3xl font-bold mb-10 Coding__Font text-cyan-400'>
            <Typewriter
              words={['Full-Stack Developer', 'MERN Developer', 'Tailwind CSS', 'Soket.IO' , 'Framer Motion' , 'React-Native']}
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
            <button className='border border-white px-7 py-3 rounded-md text-white hover:bg-white delay-750 hover:text-slate-900'>
              Check My Projects
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
