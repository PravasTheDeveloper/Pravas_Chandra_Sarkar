import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSVG = () => {
    return (
        <motion.svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.34 52.34" className="w-full h-full">
            <motion.path fill={"none"} stroke={"#fff"} stroke-miterlimit={10} stroke-width={"2px"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{
                    type: "tween",
                    duration: 2,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatDelay:3
                }}
                d="M18.89,15.05l7.27,18.15,7.27-18.15h3.8v22.24h-2.93v-8.66l.27-9.35-7.3,18.01h-2.25l-7.29-17.96,.29,9.3v8.66h-2.93V15.05h3.79Z" />
            <motion.path fill={"none"} stroke={"#fff"} stroke-miterlimit={30} stroke-width={"3px"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{
                    type: "tween",
                    duration: 5,
                    ease: "easeOut",
                    repeat: Infinity
                    
                }}
                d="M26.17,1C12.27,1,1,12.27,1,26.17s11.27,25.17,25.17,25.17,25.17-11.27,25.17-25.17S40.07,1,26.17,1Zm0,46.21c-11.62,0-21.05-9.42-21.05-21.05S14.54,5.12,26.17,5.12s21.05,9.42,21.05,21.05-9.42,21.05-21.05,21.05Z" />
        </motion.svg>
    );
};

export default AnimatedSVG;
