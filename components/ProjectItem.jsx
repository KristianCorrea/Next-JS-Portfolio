import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, projectImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group'>
      <div className="h-40 w-40">
        <Image className='rounded-xl object-cover' src={projectImg} alt='/' layout='responsive'/>
      </div>
      <div>

      </div>
    </div>
  )
}

export default ProjectItem