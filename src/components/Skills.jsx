import React from 'react'
import SkillGroup from './SkillGroup'
import { FaBolt, FaBookOpen } from 'react-icons/fa'
const Skills = () => {
  return (
    <section className='px-6 md:px-20 py-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold flex items-center  gap-3 font-mono mb-12'>
          <FaBolt /> Skills
        </h2>

        <div className='grid md:grid-cols-3 gap-16 font-mono text-sm'>
          <SkillGroup title='Backend' skills={['Java', 'JavaScript','Node.js', 'Express.js','Spring', 'Spring Boot',]} />
          <SkillGroup
            title='Security'
            skills={['Spring Security', 'JWT', 'OAuth 2.0']}
          />
          <SkillGroup title='Data & Persistance' skills={['MongoDB', 'MySQL','Mongoose', 'Hibernate']} />

          <SkillGroup
            title='Tools'
            skills={['Git', 'Postman, Insomnia', 'VScode, Intellij', 'K6']}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
