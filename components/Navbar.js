import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import AnimatedSVG from "./AnimatedSVG";

export default function Navbar() {

  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 }
    }
  }

  const pathVarients = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "none"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#fff",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <div className="w-full h-[10%] px-5 md:p-0">
        <div className="w-full h-full container mx-auto flex justify-between items-center">
          <div className="h-10"><Link href="/">
            <AnimatedSVG />
          </Link></div>
          <div className="md:flex items-center text-white hidden">
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Home</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">About</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Experience</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Project</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mr-10 hover:text-cyan-400 duration-150"><Link href="/">Contract</Link></motion.div>
            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }} className="border border-white rounded px-4 py-2 flex justify-center items-center cursor-pointer hover:bg-cyan-400 hover:text-slate-800 hover:border-slate-800 duration-200">Resume</motion.div>
          </div>
          <div className="text-white flex flex-col items-end group cursor-pointer w-[30px] md:hidden">
            <div className="bg-cyan-500 w-[20px] h-[2px] mb-2 group-hover:w-[30px] duration-200"></div>
            <div className="bg-cyan-500 w-[30px] h-[2px] mb-2 group-hover:w-[20px] duration-200"></div>
            <div className="bg-cyan-500 w-[20px] h-[2px] mb-2 group-hover:w-[30px] duration-200"></div>
          </div>
        </div>
      </div>
    </>
  );
}
