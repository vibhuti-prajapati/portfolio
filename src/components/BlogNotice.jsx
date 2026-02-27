import { useState, useEffect } from 'react'

export default function BlogNotice () {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 2500) // 2.5 seconds delay

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className='fixed top-6 right-6 z-50'>
      <div className='bg-white border-2 border-black rounded-xl px-6 py-4 shadow-sm max-w-sm font-mono text-sm relative animate-[fadeIn_0.4s_ease]'>
        <button
          onClick={() => setVisible(false)}
          className='absolute top-3 right-3 text-gray-500 hover:text-black transition'
        >
          ✕
        </button>

        <div className='space-y-2'>
          <p className='font-semibold'>New</p>
          <p className='text-gray-700'>
            I’ve started writing technical blogs. You can explore them{' '}
            <a
              href='https://medium.com/@VibhutiSavaldekar'
              className='underline underline-offset-4 hover:text-black'
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
