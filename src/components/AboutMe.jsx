import React from 'react'
import HandDrawnCard from './HanddrawnCard'
import girl from '../assets/girl.svg'
const AboutMe = () => {
  return (
    <section className='px-6 md:px-20 mt-10'>
      <div className='max-w-7xl  gap-12 items-start'>
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
        

        {/* RIGHT — Journey Cards */}
        <ul className='pt-16 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
          <li>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:text-end'>
              <time className='font-mono'>2024-25</time>
              <h3 className='font-semibold'>Java & Spring Training</h3>
              <p className='text-gray-600 mt-2'>
                Focused on backend fundamentals and enterprise Java development.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end md:mb-10'>
              <time className='font-mono'>2025</time>
              <h3 className='font-semibold'>Trainee Experience</h3>
              <p className='text-gray-600 mt-2'>
                Worked at NJ India Finlogic building backend modules using
                Spring.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-start mb-10 md:text-end'>
              <time className='font-mono '>2026</time>
              <h3 className='font-semibold'>Node.js Transition</h3>
              <p className='text-gray-600 mt-2'>
                Building APIs and full-stack projects while preparing for
                backend roles.
              </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </section>
  )
}

export default AboutMe
