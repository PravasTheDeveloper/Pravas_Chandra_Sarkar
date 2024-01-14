'use client'
import axios from 'axios'
import React, { useState } from 'react'

export default function AddSkill() {

    const [title, settitle] = useState("")
    const [image, setimage] = useState("")

    const handlesubmit = async() => {
        const adddata = await axios.post("https://pravas-chandra-sarkar.vercel.app/api/skilldata/skilldata",{title,image})

        console.log(adddata)
    }



    return (
        <div>
            <input className='border border-slate-600' onChange={(e) => { settitle(e.target.value) }} type="text" />
            <input className='border border-slate-600' onChange={(e) => { setimage(e.target.value) }} type="text" />
            <button className='border border-slate-600' onClick={handlesubmit}>Add Skill</button>
        </div>
    )
}
