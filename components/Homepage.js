import React from 'react'
import HomePageContentSec from './HomePageContent/HomePageContentSec'
import LeftSideHomePageContent from './HomePageContent/LeftSideHomePageContent'
import RightSideHomePageContent from './HomePageContent/RightSideHomePageContent'
import { motion } from 'framer-motion'


export default function Homepage() {
  return (
    <>
      <div className='w-full h-[90%] text-white lg:bg-red-700 md:bg-blue-900 sm:bg-slate-800lg:container mx-auto Home__Section__Style overflow-hidden'>
        <div className='w-full h-full hidden sm:block'>
          <LeftSideHomePageContent />
        </div>
        <motion.div initial={{y:1000}} animate={{y:100}} transition={{duration:.6  , delay:.4}} className='text text-white flex flex-col justify-center items-center h-full w-[100%] px-5 sm:px-0'>
          <HomePageContentSec />
        </motion.div>
        <div className='w-full h-full justify-end hidden sm:flex'>
          <RightSideHomePageContent />
        </div>
      </div>
    </>
  )
}
