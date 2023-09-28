import React from 'react'
import NavigationPenel from '../Navigation/NavigationPenel'
import HeroSection from './HeroSection'

export default function HomePage() {
  return (
    <div className='w-full h-screen bg-black-200 flex flex-col'>
      <NavigationPenel />
      {/* <HeroSection /> */}
    </div>
  )
}
