import React from 'react'
import PortfolioCard from './PortfolioCard'
import PortfolioData from '../../PortfolioData'

interface SkillData{
    image:string,
    title:string
}

function PorfolioSection() {

    return (
        <>
            <div className='blue-bg w-full h-auto py-[200px]'>
                <div className='w-full h-full container mx-auto'>
                    <div className='text-4xl font-semibold text-white'>
                        Portfolio <span className='text-yellow-color'>.</span>
                    </div>
                    <div className='w-full h-auto mt-10 flex flex-wrap justify-center'>
                        {
                            PortfolioData.map((data, index) => {
                                return (
                                    <PortfolioCard key={index} image={data.image} title={data.title} des={data.des} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PorfolioSection