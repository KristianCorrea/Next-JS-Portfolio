import React from 'react'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Main = () => {
  return (
    <div id='home 'className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#5651e5]'>Kristian</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full-Stack Web Developer
                </h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    I'm a Full-Stack Web Developer. blah blah blah blah
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full bg-[#FFFFFF] shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full bg-[#FFFFFF] shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full bg-[#FFFFFF] shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full bg-[#FFFFFF] shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main