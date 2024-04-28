"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import SignatureIcon from './svgs/SignatureIcon'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=>{
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[]);

  return (
    <div className={shadow ? 'h-20 fixed w-full shadow-xl z-[100]' : 'h-20 fixed w-full z-[100]'}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href="/#home">
                <SignatureIcon size={20} />
            </Link>
            
            <div>
                <ul className='hidden md:flex'>
                    <Link href="/#home">
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>
                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    <Link href="/#projects">
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link>
                    <Link href="/">
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
                </ul>
                <div className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25}  onClick={handleNav}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ' '}>
            <div className={
                nav 
                    ? 'fixed left-0 top-0 w-[75%] md:w-[45%] h-screen bg-backgroundColor p-10 ease-in duration-200'
                    : 'fixed left-[-100%] top-0 w-[75%] md:w-[45%] h-screen bg-backgroundColor p-10 ease-in duration-200'
                }
            >
                <div>3
                    <div className='flex w-full items-center justify-between'>
                        <Link onClick={() => setNav(false)} href="/#home">
                            <SignatureIcon size={20} />
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-grey-400 border p-3 cursor-pointer'>
                            <AiOutlineClose className="fill-red-500"/>
                        </div>
                    </div>
                    <div className='border-b border-foreground my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/#home'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='mt-[40%]'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar