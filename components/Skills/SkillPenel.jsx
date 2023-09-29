import React from 'react'
import SkillCard from './SkillCard'
import SkillData from '../../SkillData'

export default function SkillPenel() {

    // SkillData

    return (
        <>
            <div className='blue-bg w-full h-auto'>
                <div className='w-full h-full container mx-auto'>
                    <div className='text-4xl font-semibold text-white'>
                        My Skills <span className='text-yellow-color'>.</span>
                    </div>
                    <div className='w-full h-auto mt-10 flex flex-wrap justify-center'>
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
