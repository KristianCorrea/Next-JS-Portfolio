
import React from 'react'
import journeyImg from '../public/assets/projects/journey.webp'
import reactCalculator from '../public/assets/projects/react-calculator.png'

import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-4' >
      <div className='max-w-[900px] mx-auto px-2 py-16 bg-[#FFFFFF] shadow-md rounded-xl'>
        <p className='py-4 text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <div className='grid md:grid-col-2 gap-8'>

          <ProjectItem title="React Calculator" projectImg={reactCalculator} tech="ReactJS" projectUrl={journeyImg}/>
          <ProjectItem title="BackEnd" projectImg={journeyImg} tech="NodeJS" projectUrl={journeyImg}/>

        </div>
      </div>
    </div>
  )
}

export default Projects

