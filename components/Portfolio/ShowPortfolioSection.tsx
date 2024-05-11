import Image from 'next/image'
import React, { useState } from 'react'
import NavigationPenel from '../Navigation/NavigationPenel';
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function ShowPortfolioSection({ data }: any) {
  interface ImageData {
    images: string[];
  }

  const [imageNumber, setimageNumber] = useState(0)
  return (
    <>

      <div className='bg-black-200 w-full min-h-screen'>
        <NavigationPenel />
        <div className='w-full h-full container mx-auto pt-10'>
          <h1 className='text-xl font-semibold text-yellow-color'>
            Portfolio Number : <span className='text-3xl'>{data.number}</span>
          </h1>
          <h1 className='text-xl font-semibold text-yellow-color mt-4'>
            Portfolio Number : <span className='text-white'>{data.title}</span>
          </h1>
          <h1 className='text-yellow-color my-10'>
            <span className='text-white'>{data.des}</span>
          </h1>
          <h1 className='text-xl font-semibold text-yellow-color my-10'>
            Links :
          </h1>
          <div className='flex'>
            <FaGithub className='text-2xl text-white' /><a href={data.links[0]} className='text-white underline ml-4' target='_'>{data.links[0]}</a>
          </div>
          <div className='flex mt-5'>
            <TbWorld className='text-2xl text-white' />
            <a href={data.links[1]} className='text-white underline ml-4' target='_'>
              {data.links[1] == "" ? "No Link" : data.links[1]}
            </a>
          </div>
          <h1 className='text-xl font-semibold text-yellow-color mt-10'>
            Images :
          </h1>
          <div className='py-5'>
            <Image src={`/Portfolio/${data.images[imageNumber]}`} width={1920} height={1080} alt="hello" />
          </div>

          <div className='w-full h-14 flex flex-wrap'>
            {data.images.map((data: ImageData, index: number) => {
              return (
                <Image src={`/Portfolio/${data}`} onClick={() => setimageNumber(index)} className={`h-full w-auto mr-5 rounded cursor-pointer duration-100 ${imageNumber === index ? "border p-1" : null}`} width={1920} height={1080} alt='hello' />
              )
            })}
          </div>
          <h1 className='text-xl font-semibold text-yellow-color mt-20'>
            Video :
          </h1>
          <iframe className='w-full h-[500px] md:h-[700px] xl:h-[1080px]' src={data.youtubeLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  )
}
