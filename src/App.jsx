import { useState } from 'react'

import HandDrawnCard from './components/HanddrawnCard'


import CodingActivity from './components/CodingActivity'
import ContactSection from './components/Contact'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useRef, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import Skills from './components/Skills'
function App () {
  
  return (
    <div
      className='min-h-screen text-black'
      style={{
        backgroundImage: 'radial-gradient(#d4d4d8 1.5px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <HeroSection />

      <AboutMe />

      <MyProjects />

      <Skills />

      <CodingActivity />

      <ContactSection />

<SpeedInsights/>
    </div>
  )
}

export default App
