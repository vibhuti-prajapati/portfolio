import React from 'react'
import HandDrawnCard from './HanddrawnCard'
import girl from '../assets/girl.svg'
const AboutMe = () => {
  return (
    <section className='px-6 md:px-20 py-24'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start'>
        {/* LEFT — Story */}
        <div>
          <div className='flex items-center gap-3'>
            <img
              src={girl}
              alt='Girl icon'
              className='w-10 h-10 object-contain'
            />
            <h2 className='text-3xl md:text-4xl font-bold'>About Me</h2>
          </div>
          <p className='mt-6 text-gray-700 leading-relaxed'>
            I began my career focusing on Java and Spring during my trainee
            period at NJ India Finlogic Technologies, where I worked on backend
            development and gained practical industry experience.
          </p>

          <p className='mt-4 text-gray-700 leading-relaxed'>
            After graduation, I faced challenges finding backend roles locally,
            which pushed me to expand my skill set. I transitioned into Node.js
            and started building full-stack projects to strengthen my backend
            engineering skills.
          </p>

          <p className='mt-4 text-gray-700 leading-relaxed'>
            Today, I focus on building production-style applications and
            continuously improving as a backend developer.
          </p>
        </div>

        {/* RIGHT — Journey Cards */}
        <div className='space-y-6'>
          <HandDrawnCard>
            <h3 className='font-bold'>Java & Spring Training</h3>
            <p className='text-gray-700 mt-2'>
              Focused on backend fundamentals and enterprise Java development.
            </p>
          </HandDrawnCard>

          <HandDrawnCard>
            <h3 className='font-bold'>Trainee Experience</h3>
            <p className='text-gray-700 mt-2'>
              Worked at NJ India Finlogic building backend modules using Spring.
            </p>
          </HandDrawnCard>

          <HandDrawnCard>
            <h3 className='font-bold'>Node.js Transition</h3>
            <p className='text-gray-700 mt-2'>
              Building APIs and full-stack projects while preparing for backend
              roles.
            </p>
          </HandDrawnCard>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
