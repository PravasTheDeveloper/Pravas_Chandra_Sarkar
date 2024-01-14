import Image from 'next/image'
import React from 'react'

interface SkillData{
    image:string,
    title:string
}

function SkillCard({ image, title }:SkillData) {
    return (
        <div className='w-[250px] h-[250px] Skill_Section_Bg rounded m-10'>
            <div className='w-full h-[200px] p-10'>
                <Image src={`/Skills/${image}`} width={300} height={300} alt={title} className='w-full' />
            </div>
            <div className='w-full h-[50px]'>
                <h5 className='text-lg font-bold text-white text-center'>{title}</h5>
            </div>
        </div>
    )
}

export default SkillCard