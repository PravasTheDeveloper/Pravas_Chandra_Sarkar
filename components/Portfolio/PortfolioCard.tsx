import Image from 'next/image'
import React from 'react'

interface PortfiolioDataProps{
    image:string,
    title:string,
    des:string
}

function PortfolioCard({ image, title, des }:PortfiolioDataProps) {
    return (
        <div className='w-[400px] h-[300px] bg-slate-700 rounded m-10 relative'>
            <div className='bg-red-500 w-full h-[80%] rounded-lg overflow-hidden'>
                <Image width={400} height={400} className='w-full' src={`/Portfolio/${image}`} alt={title} />
            </div>
            <div className='w-full h-[40%] Skill_Section_Bg rounded-lg absolute bottom-0 p-5'>
                <div className='text-white'>
                    {title}
                </div>
                <div className='text-white text-sm h-[60px] overflow-hidden mt-2'>
                    {des}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard

// uXBQJBCmM6tlJPYR

// 