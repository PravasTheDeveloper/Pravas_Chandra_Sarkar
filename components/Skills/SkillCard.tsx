import Image from 'next/image'
import React from 'react'

interface SkillData{
    image:string,
    title:string
}

function SkillCard({ image, title }:SkillData) {
    return (
        <div className='w-full h-full Skill_Section_Bg rounded'>
            <div className='w-full h-[200px] p-10 flex flex-col items-center'>
                <Image src={`/Skills/${image}`} width={300} height={300} alt={title} className='w-[150px] h-auto' />
            </div>
            <div className='w-full h-full'>
                <h5 className='text-lg font-bold text-white text-center'>{title}</h5>
            </div>
        </div>
    )
}

export default SkillCard