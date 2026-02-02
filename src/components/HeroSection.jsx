import React from 'react'
import cloudImg from '../assets/cloud0.svg'
import sunImg from '../assets/sun.png'

import doodleVideo from '../assets/doodle.mp4'
import circleImg from '../assets/penCircle.png'
import { useRef, useEffect } from 'react'
const HeroSection = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play()
    }
  }, []);
  return (
      <section className=' relative overflow-hidden min-h-screen flex items-center px-6 md:px-20'>
        {/* Floating Cloud */}
        <img
          src={cloudImg}
          alt=''
          className='absolute  top-10 w-30 md:w-40 opacity-100 pointer-events-none cloud-float z-0'
        />
        <div className='max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center'>
          {/* LEFT — Text */}
          <div>
            <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
              Hi, I'm Vibhuti
            </h1>

            <p className='mt-6 text-lg text-gray-700 max-w-xl'>
              Backend developer building scalable APIs and full-stack
              applications using Java, Spring Boot and Node.js. Currently
              focused on building real-world backend systems.
            </p>

            <div className='mt-8 flex gap-4'>
              <button className='btn btn-outline rounded-full'>
                View Projects
              </button>

              <button className='btn btn-neutral rounded-full'>
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT — GIF DOODLE */}
          <div className='flex justify-center md:justify-end'>
            <div className='relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center'>
              <img
                src={sunImg}
                alt='sun'
                className='absolute -top-24 -right-8 w-20 md:w-24 pointer-events-none sun-rotate'
              />
              {/* Marker-style circle
              <div className="absolute w-full h-full rounded-full border-4 border-black border-dashed rotate-6"></div>
              <div className="absolute w-full h-full rounded-full border-2 border-black -rotate-6"></div> */}
              <img
                src={circleImg}
                alt='circle frame'
                className='absolute w-full h-full object-contain pointer-events-none'
              />
              {/* GIF container */}
              <div className='w-[85%] h-[85%] rounded-full overflow-hidden flex items-center justify-center bg-white'>
                {/* <img
                  src={doodleGif}
                  alt='Vibhuti doodle'
                  className='w-full h-full object-cover scale-130'
                /> */}

                <video
                  ref={videoRef}
                  src={doodleVideo}
                  muted
                  playsInline
                  loop
                  preload='auto'
                  className='w-full h-full object-cover scale-150'
                  onMouseEnter={() => {
                    const v = videoRef.current
                    v.currentTime = 0
                    v.play()
                  }}
                  onMouseLeave={() => {
                    const v = videoRef.current
                    v.pause()
                    v.currentTime = 0
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection