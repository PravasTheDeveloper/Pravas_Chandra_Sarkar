import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[10%]">
        <div className="w-full h-full container mx-auto flex justify-between items-center">
          <div className="text-white w-9 h-9 border-2 border-white rounded-full flex justify-center items-center text-2xl">M</div>
          <div className="flex items-center text-white">
            <motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.1}} className="mr-10"><Link href="/">Home</Link></motion.div>
            <motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.2}} className="mr-10"><Link href="/">About</Link></motion.div>
            <motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.3}} className="mr-10"><Link href="/">Experience</Link></motion.div>
            <motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.4}} className="mr-10"><Link href="/">Project</Link></motion.div>
            <motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.5}} className="mr-10"><Link href="/">Contract</Link></motion.div>
            <motion.div initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}} className="border border-white rounded px-4 py-2 flex justify-center items-center">Resume</motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
