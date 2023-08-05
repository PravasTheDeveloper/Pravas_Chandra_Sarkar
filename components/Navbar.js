import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedSVG from "./AnimatedSVG";
import { RxCross2 } from 'react-icons/rx';

export default function Navbar() {

  const [sideBar, setsideBar] = useState(false)

  return (
    <>
      <div className="w-full h-[10%] px-5 md:p-0">
        <div className="w-full h-full container mx-auto flex justify-between items-center">
          <div className="h-10"><Link href="/">
            <AnimatedSVG />
          </Link></div>
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className='text-white sm:hidden'>
            info.pravas.cs@gmail.com
          </motion.div>

          <div className={sideBar === false ? "text-white bg-black-lite w-full h-full top-0 absolute left-[-600px] z-50 duration-500 sm:hidden" : "text-white bg-black-lite w-full h-full top-0 absolute left-0 z-50 duration-500 sm:hidden" } >
            <div className="w-[90%] h-full bg-black-dark flex flex-col justify-center items-center ">
              <div className=" hover:text-cyan-400 duration-150 mb-8"><Link href="/">Home</Link></div>
              <div className=" hover:text-cyan-400 duration-150 mb-8"><Link href="/">About</Link></div>
              <div className=" hover:text-cyan-400 duration-150 mb-8"><Link href="/">Experience</Link></div>
              <div className=" hover:text-cyan-400 duration-150 mb-8"><Link href="/">Project</Link></div>
              <div className=" hover:text-cyan-400 duration-150"><Link href="/">Contract</Link></div>
              <motion.div className="mt-10 border border-white rounded px-4 py-2 cursor-pointer hover:bg-cyan-400 hover:text-slate-800 hover:border-slate-800 duration-200">Resume</motion.div>
              
              <div className="absolute top-10 right-10">
                <RxCross2 className="text-3xl text-rose-500" onClick={() => {setsideBar(false)}} />
              </div>
            </div>
          </div>

          <div className="md:flex items-center text-white hidden">
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Home</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">About</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Experience</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Project</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Contract</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="border border-white rounded px-4 py-2 flex justify-center items-center cursor-pointer hover:bg-cyan-400 hover:text-slate-800 hover:border-slate-800 duration-200">Resume</motion.div>
          </div>
          <div className="text-white flex flex-col items-end group cursor-pointer w-[30px] md:hidden" onClick={() => { setsideBar(true) }}>
            <div className="bg-cyan-500 w-[20px] h-[2px] mb-2 group-hover:w-[30px] duration-200"></div>
            <div className="bg-cyan-500 w-[30px] h-[2px] mb-2 group-hover:w-[20px] duration-200"></div>
            <div className="bg-cyan-500 w-[20px] h-[2px] mb-2 group-hover:w-[30px] duration-200"></div>
          </div>
        </div>
      </div>
    </>
  );
}
