
import CodingActivity from './components/CodingActivity'
import ContactSection from './components/Contact'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import Skills from './components/Skills'
import Blogs from './components/Blogs'
import BlogNotice from './components/BlogNotice'
import ThemeToggle from "./components/ThemeToggle";
function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content app-bg">
        <ThemeToggle />
      <div className="max-w-4xl mx-auto px-6">
        <BlogNotice />
        <HeroSection />
        <AboutMe />
        <MyProjects />
        <Skills />
        <Blogs />
        <CodingActivity />
        <ContactSection />
      </div>
    </div>
  );
}

export default App
