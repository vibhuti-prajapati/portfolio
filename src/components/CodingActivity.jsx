import { GitHubCalendar } from 'react-github-calendar'
import { FaGithub } from 'react-icons/fa'
import { useRef, useEffect, useState } from 'react'
export default function CodingActivity () {
  const scrollRef = useRef(null)
  // const [scheme, setScheme] = useState('light')

  // useEffect(() => {
  //   const controller = document.querySelector(
  //     'input.theme-controller[value="dark"]'
  //   )

  //   if (!controller) return

  //   const updateScheme = () => {
  //     setScheme(controller.checked ? 'dark' : 'light')
  //   }

  //   updateScheme()

  //   controller.addEventListener('change', updateScheme)

  //   return () => controller.removeEventListener('change', updateScheme)
  // }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const scrollToRight = () => {
      const svg = container.querySelector('svg')
      if (!svg) return

      const scrollable = svg.parentElement
      if (!scrollable) return

      scrollable.scrollLeft = scrollable.scrollWidth
    }

    const timer = setTimeout(scrollToRight, 500)

    return () => clearTimeout(timer)
  }, [])
  return (
    <section className='px-6 md:px-20 pt-16'>
      <div className='max-w-7xl  mx-auto'>
        <h2 className='text-4xl font-bold flex items-center  gap-3 font-mono mb-12'>
          <FaGithub />
          Github Activity
        </h2>

        <div
          ref={scrollRef}
          className='relative p-8 border-2  border-b-base-content rounded-xl bg-base-100 overflow-x-auto no-scrollbar'
        >
          <GitHubCalendar
            username='vibhuti-prajapati'
            blockSize={15}
            blockMargin={5}
            fontSize={14}
           
            theme={{
              light: ['#e6e5e5', '#b1acac', '#918b8b', '#4a4848', '#000000'],
              dark: ['#2A323C', '#44505F', '#ABB6C4', '#E7EAEE', '#FFFFFF']
            }}
          />
        </div>
      </div>
    </section>
  )
}
