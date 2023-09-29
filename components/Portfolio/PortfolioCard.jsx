import React from 'react'

function PortfolioCard({ image, title, des }) {
    return (
        <div className='w-[400px] h-[300px] bg-slate-700 rounded m-10 relative'>
            <div className='bg-red-500 w-full h-[80%] rounded-lg overflow-hidden'>
                <img src={`/Portfolio/${image}`} alt="" />
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