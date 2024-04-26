
import React from 'react'
import journeyImg from '../public/assets/projects/journey.webp'
import reactCalculator from '../public/assets/projects/react-calculator.png'

import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-4 pb-4' >
      <p className='text-center py-4 text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
      <div className='max-w-[900px] mx-auto '>
        
        <div className='grid md:grid-col-2 gap-5'>

          <ProjectItem 
            title="React Calculator"
            description="A simple calculator built with ReactJS"
            projectImg={reactCalculator}
            tech="ReactJS"
            projectUrl={journeyImg} 
          />
          <ProjectItem 
            title="Journey"
            description="An iternary generator."
            projectImg={journeyImg}
            tech="ReactJS"
            projectUrl={journeyImg}
            startOpen={true}
          />
          <ProjectItem 
            title="Journey"
            description="An iternary generator."
            projectImg={journeyImg}
            tech="ReactJS"
            projectUrl={journeyImg}
          />

        </div>
        <div className='py-4 ml-2' >
          <span>View All Projects</span>
        </div>
      </div>
    </div>
  )
}

export default Projects

