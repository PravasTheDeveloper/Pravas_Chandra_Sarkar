import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PortfiolioDataProps {
    number: number,
    images: string[],
    title: string,
    des: string,
    links: string[]
}

function PortfolioCard({ images, title, des, number, links }: PortfiolioDataProps) {
    return (
        <Link href={`/showportfolio/${number}`} className='w-[400px] h-[300px] bg-slate-700 rounded m-10 relative'>
            <div className='bg-red-500 w-full h-[80%] rounded-lg overflow-hidden'>
                <Image width={400} height={400} className='w-full' src={`/Portfolio/${images[0]}`} alt={title} />
            </div>
            <div className='w-full h-[40%] Skill_Section_Bg rounded-lg absolute bottom-0 p-5'>
                <div className='text-white'>
                    {title}
                </div>
                <div className='text-white text-sm h-[60px] overflow-hidden mt-2'>
                    {des}
                </div>
            </div>
        </Link>
    )
}

export default PortfolioCard