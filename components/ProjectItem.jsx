"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, description, projectImg, tech, projectUrl, startOpen=false}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(startOpen)
  var expandClass = isOpen ? 'py-5 max-h-[1000px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-0'
  var svgRotateAngle = isOpen ? 'rotate-180' : ''
  var hoverScale = isHovered ? 'scale-[0.99] ' : '';
  var rootDiv = isOpen ? 'shadow-md rounded-xl ' : '' // Give root container shadow instead if open.
  var mainDiv = isOpen ? 'rounded-t-xl' : 'rounded-xl shadow-md'
  return (
    <div className={`${rootDiv} ${hoverScale} transform transition duration-200`}>
      <div className={`py-3 px-3 relative h-auto w-full group cursor-pointer hover:bg-gray-100 bg-[#FFFFFF] ${mainDiv} text-black hover:text-blue-500`}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        onClick={()=>setIsOpen(!isOpen)}
      >
        <div className='flex items-center'>
          <div className="h-20 w-20 flex items-center" >
            <Image className=' rounded-xl object-cover' src={projectImg} alt='/' layout='responsive'/>
          </div>
          <div className='ml-4'>
            <div className='font-bold'>{title}</div>
            <div>{description}</div>
          </div>
          <div className='ml-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`h-6 w-6 transition-transform duration-500 ${svgRotateAngle}`}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          
        </div>
      </div>
        {/* conditional rendering if isOpen is true */}
      <div className={` ${expandClass} border-t border-gray-200 transition-all duration-200 transform`}>
        <div className='px-4'>
          <span>Description</span>
          <div>
            Tech Stacks
          </div>
        </div>
      </div>
      
      
      
    </div>
  )
}

export default ProjectItem