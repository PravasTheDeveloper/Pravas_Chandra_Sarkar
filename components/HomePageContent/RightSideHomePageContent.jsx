import { motion } from 'framer-motion'
import React from 'react'

function RightSideHomePageContent() {
    return (
        <>
            <motion.div initial={{y:1000}} animate={{y:0}} transition={{duration:0.5}} className='w-[50%] h-full flex flex-col justify-end items-center'>
                <motion.div initial={{y:200}} animate={{y:0}} transition={{duration:0.5}} className='mb-16 flex justify-end'>
                    <div  className='rotate-90'>
                        info.pravas.cs@gmail.com
                    </div>
                </motion.div>

                <div className='w-[2px] h-[200px] bg-white rounded-full mt-10'>

                </div>
            </motion.div>
        </>
    )
}

export default RightSideHomePageContent