import React from 'react'
import ProjectCard from './ProjectCard'
import bulb from '../assets/bulb.svg'
const MyProjects = () => {
  return (
    <section className='px-6 md:px-20 py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center gap-3  mb-12'> 
          <img
            src={bulb}
            alt='bulb icon'
            className='w-10 h-10 object-contain'
          />
          <h2 className='text-3xl md:text-4xl font-bold'>Projects</h2>
        </div>
      {/* Project 1 */}
      <div className="mb-16">
        <h3 className="text-xl font-bold mb-2">
          Real-Time GPS Fleet Tracking & Trip Analytics
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          Java · Spring Boot · MySQL · Hibernate · REST
        </p>

        <p className="text-gray-700 leading-relaxed mb-3">
          Backend system to ingest and process live GPS telemetry for vehicles.
        </p>

        <ul className="space-y-2 text-gray-700">
          <li>
            Designed REST APIs for vehicle registration and coordinate updates.
          </li>
          <li>
            Implemented concurrent processing and optimized database indexing.
          </li>
          <li>
            Improved performance using batch inserts and query tuning.
          </li>
        </ul>

        <div className="mt-4 space-x-6 text-sm">
          <a
            href="https://github.com/vibhuti-prajapati/gps-ping-processing-"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            → GitHub
          </a>
          {/* <a
            href="#"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            → API Docs
          </a> */}
        </div>
      </div>

      {/* Project 2 */}
      <div>
        <h3 className="text-xl font-bold mb-2">
          Developer Networking Platform
        </h3>

        <p className="text-sm text-gray-500 mb-4">
          Node.js · Express · MongoDB · JWT · React
        </p>

        <p className="text-gray-700 leading-relaxed mb-3">
          Backend-driven networking platform enabling developers to connect and
          collaborate.
        </p>

        <ul className="space-y-2 text-gray-700">
          <li>
            Designed modular MVC architecture with middleware validation and
            centralized error handling.
          </li>
          <li>
            Implemented secure stateless JWT authentication using HTTP-only cookies.
          </li>
          <li>
            Built connection lifecycle management and filtered paginated feed API.
          </li>
        </ul>

        <div className="mt-4 space-x-6 text-sm">
          <a
            href="https://github.com/vibhuti-prajapati/skill-circle"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            → GitHub
          </a>
          {/* <a
            href="#"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            → Live Demo
          </a> */}
        </div>
      </div>
      </div>
    </section>
  )
}

export default MyProjects
