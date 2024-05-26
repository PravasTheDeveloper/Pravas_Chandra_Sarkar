import React from 'react'
import SkillCard from './SkillCard'
import SkillData from '../../SkillData'

export default function SkillPenel() {

    return (
        <>
            <div className='blue-bg w-full h-auto' id='SkillPenel'>
                <div className='w-full h-full container mx-auto'>
                    <div className='text-4xl font-semibold text-white px-10'>
                        My Skills <span className='text-yellow-color'>.</span>
                    </div>
                    <div className='w-full h-auto mt-10 gap-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                        {
                            SkillData.map((data, index) => {
                                return (
                                    <SkillCard key={index} image={data.image} title={data.title} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
