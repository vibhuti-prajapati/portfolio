import React from 'react'
import ProjectCard from './ProjectCard'
import bulb from '../assets/bulb.svg'
const MyProjects = () => {
  return (
    <section className='px-6 md:px-20 py-24'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center gap-3  mb-12'> 
          <img
            src={bulb}
            alt='bulb icon'
            className='w-10 h-10 object-contain'
          />
          <h2 className='text-3xl md:text-4xl font-bold'>Projects</h2>
        </div>
        <div className='grid md:grid-cols-2 gap-10'>
          <ProjectCard
            title='Community Spaces Backend'
            desc='Backend APIs for community and private spaces with invite systems and user management.'
            tech={['Node.js', 'MongoDB', 'Express']}
          />

          <ProjectCard
            title='Connection Platform'
            desc='Connection requests, feeds, and user interaction APIs similar to professional networks.'
            tech={['Spring Boot', 'MySQL']}
          />
        </div>
      </div>
    </section>
  )
}

export default MyProjects
