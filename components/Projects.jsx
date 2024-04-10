
import React from 'react'
import journeyImg from '../public/assets/projects/journey.webp'

import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-col-2 gap-8'>

          <ProjectItem title="Journey" projectImg={journeyImg} tech="ReactJS" projectUrl={journeyImg}/>
          <ProjectItem title="BackEnd" projectImg={journeyImg} tech="NodeJS" projectUrl={journeyImg}/>

        </div>
      </div>
    </div>
  )
}

export default Projects