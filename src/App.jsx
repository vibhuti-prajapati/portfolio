import { useState } from 'react'

import HandDrawnCard from './components/HanddrawnCard'

import CodingActivity from './components/CodingActivity'
import ContactSection from './components/Contact'
import { useRef, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import Skills from './components/Skills'
import Blogs from './components/Blogs'
function App() {
  return (
    <div
      className="min-h-screen text-black"
      style={{
        backgroundImage: 'radial-gradient(#d4d4d8 1.5px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <HeroSection />
        <AboutMe />
        <MyProjects />
        <Skills />
        <Blogs />
        <CodingActivity />
        <ContactSection />
      </div>
    </div>
  )
}

export default App
