import { motion } from 'framer-motion'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';

function HomePageContentSec() {
    return (
        <>
            <motion.div initial={{ y: 400 }} animate={{ y: 0 }} transition={{ delay: .5, duration: .6 }} className='w-full text-xl mb-10 text-center sm:text-left'>
                Hi , I am
            </motion.div>
            <motion.div initial={{ y: 300 }} animate={{ y: 0 }} transition={{ delay: .5, duration: .6 }} className='w-full text-3xl md:text-5xl font-bold mb-10 text-center sm:text-left'>
                Pravas Chandra Sarkar
            </motion.div>
            <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ delay: .5, duration: .6 }} className='w-full sm:text-xl text-2xl md:text-3xl font-bold mb-10 Coding__Font text-cyan-400 text-center sm:text-left'>
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

            </motion.div>
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: .6, duration: .5 }} className='w-full mb-10 md:text-base text-sm text-center sm:text-left'>
                As a full stack MERN developer with an impressive portfolio, I excel in building modern web applications. My expertise in MongoDB, Express.js,
                React, and Node.js enables me to create efficient and scalable solutions. I am committed to continuous learning to stay ahead in the ever-evolving field of web development.
            </motion.div>
            <div className='w-full text-center sm:text-left'>
                <button className='Button__Hover__Style w-full h-full rounded-lg hover:bg-white hover:text-slate-800 duration-200 '>
                    Check My Projects
                </button>
            </div>
            <div className='bg-slate-800 w-full h-12 absolute bottom-0 left-0 overflow-hidden sm:hidden'>
                <div className='w-[100%] h-full flex'>
                    <motion.div initial={{ y: 1000 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='w-[100%] flex justify-around items-center'>
                        <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                            <a href='https://github.com/PravasTheDeveloper' target='_blank'>
                                <AiFillGithub className='text-[35px] hover:text-cyan-400' />
                            </a>
                        </motion.div>
                        <motion.div initial={{ y: 140 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                            <a href='https://www.facebook.com/profile.php?id=1000344746045' target='_blank'>
                                <BsFacebook className='text-[30px]  hover:text-cyan-400' />
                            </a>
                        </motion.div>
                        <motion.div initial={{ y: 90 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                            <a href='https://www.linkedin.com/in/pravaschandrasarkar/' target='_blank'>
                                <AiFillLinkedin className='text-[35px] hover:text-cyan-400' />
                            </a>
                        </motion.div>
                        <motion.div>
                            <a href='https://www.instagram.com/mith.un259/' target='_blank'>
                                <AiOutlineInstagram className='text-[35px] hover:text-cyan-400' />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default HomePageContentSec