import React from 'react'
import SkillGroup from './SkillGroup'
const Skills = () => {
  return (
<section className='px-6 md:px-20 py-24'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12'>Skills</h2>

          <div className='grid md:grid-cols-3 gap-12'>
            <SkillGroup
              title='Backend'
              skills={[
                'Java',
                'Spring',
                'Spring Boot',
                'Hibernate',
                'Node.js',
                'Express.js',
                'REST APIs'
              ]}
            />

            <SkillGroup title='Databases' skills={['MongoDB', 'MySQL']} />

            <SkillGroup title='Tools' skills={['Git', 'Postman']} />
          </div>
        </div>
      </section>
  )
}

export default Skills