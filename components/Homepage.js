import React from 'react'
import HomePageContentSec from './HomePageContent/HomePageContentSec'
import LeftSideHomePageContent from './HomePageContent/LeftSideHomePageContent'
import RightSideHomePageContent from './HomePageContent/RightSideHomePageContent'


export default function Homepage() {
  return (
    <>
      <div className='w-full h-[90%] text-white container mx-auto Home__Section__Style'>
        <div className='w-full h-full'>
          <LeftSideHomePageContent />
        </div>
        <div className='text text-white flex flex-col justify-center items-center h-full w-[100%]'>
          <HomePageContentSec />
        </div>
        <div className='w-full h-full flex justify-end'>
          <RightSideHomePageContent />
        </div>
      </div>
    </>
  )
}
