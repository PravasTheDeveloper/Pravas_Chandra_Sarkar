import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';


function LeftSideHomePageContent() {
    return (
        <>
            <div className='w-[50%] h-full  flex flex-col items-center justify-end'>
                <div className='w-[30px] flex flex-col items-center'>
                    <div className='w-full'>
                        <a href='https://github.com/PravasTheDeveloper' target='_blank'>
                            <AiFillGithub className='w-full text-5xl mb-5 hover:text-cyan-400' />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/profile.php?id=1000344746045' target='_blank'>
                            <BsFacebook className='w-full text-5xl mb-5 hover:text-cyan-400' />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/pravaschandrasarkar/' target='_blank'>
                            <AiFillLinkedin className='w-full text-5xl mb-5 hover:text-cyan-400' />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.instagram.com/mith.un259/' target='_blank'>
                            <AiOutlineInstagram className='w-full text-5xl mb-5 hover:text-cyan-400' />
                        </a>
                    </div>
                    
                    <div className='w-[2px] h-[200px] bg-white rounded-full'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSideHomePageContent