import React from 'react'

function AboutSection() {
    return (
        <>
            <div className='blue-bg py-[200px] text-white'>
                <div className="container mx-auto">
                    <div className='text-4xl font-semibold mb-5'>
                        About Me <span className='text-yellow-color'>.</span>
                    </div>
                    <div className='w-full h-auto flex'>
                        <div className='w-[200px] rounded-full h-[3px] bg-yellow-color mt-2 mr-2'>

                        </div>
                        <div className='flex-1'>
                            I'm Pravas Chandra Sarkar, a devoted <span className='text-yellow-color font-semibold text-lg'>MERN Developer</span>, passionate about crafting sleek and high-performing web applications. Armed with <span className='text-yellow-color font-semibold text-lg'>MongoDB, Express.js, React, and Node.js,</span> I excel at solving intricate challenges, from optimizing databases to designing user-friendly interfaces.
                            My love for staying at the forefront of technology ensures that my work is always innovative and up-to-date. I thrive in collaborative environments and am eager to connect with fellow enthusiasts .<span className='text-yellow-color font-semibold text-lg'>Let's build the future of the web together!</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection