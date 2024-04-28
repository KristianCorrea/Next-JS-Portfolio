import React from 'react'

const ExperienceItem = ({jobTitle, company, desc, time, skills}) => {
  return (
    <div className='grid md:grid-cols-2 py-3 px-5'>
        <div className=' tracking-widest uppercase'>{time}</div>
        <div className='font-bold'>{jobTitle}</div>
        <div className='italic'>{company}</div>
        
        <div>{desc}</div>
        {/* conditional rendering if skills is true */}
        <div className={skills ? 'py-3': ''}>
          {
          skills ?
            skills.map((skill, index) => {
              return (
                <span key={index} className='bg-[#5651e5] text-white rounded-full px-2 py-1 mr-2'>{skill}</span>
              )
            })
          : 
            ''
          }
        </div>
        
    </div>
  )
}

export default ExperienceItem