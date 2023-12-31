import React from 'react'

function SkillCard({ image, title }) {
    return (
        <div className='w-[250px] h-[250px] Skill_Section_Bg rounded m-10'>
            <div className='w-full h-[200px] p-10'>
                <img src={`Skills/${image}`} alt="" className='' />
            </div>
            <div className='w-full h-[50px]'>
                <h5 className='text-lg font-bold text-white text-center'>{title}</h5>
            </div>
        </div>
    )
}

export default SkillCard