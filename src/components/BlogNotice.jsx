import { useState, useEffect } from 'react'

export default function BlogNotice () {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className='fixed top-6 right-6 z-50'>
      <div className='bg-base-100 border border-base-300 rounded-xl px-6 py-4 shadow-lg max-w-sm font-mono text-sm relative transition-all duration-300'>
        <button
          onClick={() => setVisible(false)}
          className='absolute top-3 right-3 text-base-content/60 hover:text-base-content transition'
        >
          ✕
        </button>

        <div className='space-y-2'>
          <p className='font-semibold text-base-content'>New</p>

          <p className='text-base-content/70'>
            I’ve started writing technical blogs. You can explore them{' '}
            <a
              href=''
              className='underline underline-offset-4 hover:text-primary transition'
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
