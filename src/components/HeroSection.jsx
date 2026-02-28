import React from 'react'
import cloudImg from '../assets/cloud0.svg'
import sunImg from '../assets/sun.png'
import {
  FaEnvelope,
  FaFolder,
  FaGithub,
  FaLinkedin,
  FaMedium
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
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
  }, [])
  return (
    <section className=' relative overflow-hidden pt-60 flex items-center px-6 md:px-20 mb-50'>
      {/* Floating Cloud
      <img
        src={cloudImg}
        alt=''
        className='absolute  top-10 w-30 md:w-40 opacity-100 pointer-events-none cloud-float z-0'
      /> */}
      <div className='max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center'>
        {/* LEFT — Text */}
        <div>
          <div className='space-y-8'>
            {/* Name */}
            <h1 className='text-5xl md:text-4xl font-semibold tracking-tight'>
             Hi! I'm Vibhuti
            </h1>

            <div className='space-y-6'>
              <p className='text-md font-semibold text-base-content/80'>
                Backend developer
              </p>

              <div className='space-y-1'>
                <p className='text-md text-base-content/60'>Java · JavaScript</p>

                <p className='text-md text-base-content/60'>
                  learning by building . improving daily.
                </p>
              </div>

              {/* Icons — same spacing as Backend title */}
              <div className='flex items-center gap-6 text-base-content/60'>
                <a
                  href='https://github.com/vibhuti-prajapati'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base-content transition-colors duration-200'
                >
                  <FaGithub size={30} />
                </a>

                <a
                  href='https://medium.com/@VibhutiSavaldekar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base-content transition-colors duration-200'
                >
                  <FaMedium size={30} />
                </a>

                <a
                  href='https://linkedin.com/in/vibhuti-savaldekar'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base-content transition-colors duration-200'
                >
                  <FaLinkedin size={30} />
                </a>

                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=vibhutiprajapati784@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-base-content transition-colors duration-200'
                >
                  <FaEnvelope size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — GIF DOODLE */}
        <div className='flex justify-center md:justify-end'>
          <div className='relative w-46 h-46 md:w-62 md:h-62 flex items-center justify-center'>
            {/* <img
              src={sunImg}
              alt='sun'
              className='absolute -top-24 -right-8 w-20 md:w-24 pointer-events-none sun-rotate'
            /> */}
            {/* Marker-style circle
              <div className="absolute w-full h-full rounded-full border-4 border-black border-dashed rotate-6"></div>
              <div className="absolute w-full h-full rounded-full border-2 border-black -rotate-6"></div> */}
            <img
              src={circleImg}
              alt='circle frame'
              className='absolute w-full h-full object-contain pointer-events-none'
            />
            {/* GIF container */}
            <div className='w-[75%] h-[75%] rounded-full overflow-hidden flex items-center justify-center bg-base-100 '>
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
