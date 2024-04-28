import React from 'react'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
    <div>
      <div className='text-center py-20 text-xl tracking-widest uppercase text-[#5651e5]'>Experience</div>
      <div className='max-w-[900px] mx-auto'>
        <ExperienceItem 
          jobTitle={"CS Programming Tutor"} 
          company={"MDC: School of Engineering & Technology"}
          time={"Feb 2023 - Present"}
          desc={"Tutored 400+ students. Teaching programming concepts and helping them with their assignments."}
          skills={["Python", "Java", "C++"]}
        />
        <ExperienceItem 
          jobTitle={"CS Programming Tutor"} 
          company={"MDC: School of Engineering & Technology"}
          time={"Feb 2023 - Present"}
          desc={"Tutored 400+ students. Teaching programming concepts and helping them with their assignments."}
          skills={["Python", "Java", "C++"]}
        />
      </div>
    </div>
  )
}

export default Experience