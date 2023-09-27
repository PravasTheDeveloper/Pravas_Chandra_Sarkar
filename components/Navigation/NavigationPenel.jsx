import React from 'react'

export default function NavigationPenel() {
    return (
        <>
            <div className='w-full h-[70px] bg-black-200 container mx-auto flex justify-between items-center'>
                {/* Logo Section */}
                <div className='text-white text-4xl'>
                    <span className='text-4xl text-yellow-color text-yellow-color font-semibold'>P</span>.
                </div>
                {/* Navigation */}
                <div className='flex text-md font-semibold'>
                    <div className='ml-14 text-center text-white duration-200 cursor-pointer'>Home</div>
                    <div className='ml-14 text-two text-center duration-200 cursor-pointer'>About</div>
                    <div className='ml-14 text-two text-center duration-200 cursor-pointer'>Portfolio</div>
                    <div className='ml-14 text-two text-center duration-200 cursor-pointer'>Skill</div>
                    <div className='ml-14 text-two text-center duration-200 cursor-pointer'>Contact</div>
                </div>
            </div>
        </>
    )
}
