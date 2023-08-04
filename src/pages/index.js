import React from "react"
import Homepage from "../../components/Homepage"
import Navbar from "../../components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <div className='w-full h-screen home__screen__style'>
        <Head>
          <title>Pravas Chandra Sarkar</title>
          <link rel="icon" href="/icon.png" sizes="any" />
        </Head>
        <Navbar />
        <Homepage />
      </div>
    </>
  )
}
