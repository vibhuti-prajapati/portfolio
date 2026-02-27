import React from 'react'
import { FaMedium } from 'react-icons/fa'

const Blogs = () => {
  const blogs = [
    {
      title: 'what i learnt building a mern app',
      date: 'Feb 26, 2026',
      link: 'https://medium.com/@VibhutiSavaldekar/what-i-leant-building-a-mern-app-9fbb4f93cea6'
    },
    {
      title: 'what happens when you execute a JS file in nodeJs?',
      date: 'Dec 27, 2026',
      link: 'https://medium.com/@VibhutiSavaldekar/what-actually-happens-when-you-run-a-js-file-in-node-js-5c383eee3f89'
    },
    {
      title: 'Java Collections Deep Dive',
      date: 'Dec 10, 2026',
      link: 'https://medium.com/@yourusername/java-collections'
    }
  ]
  return (
    <section className='px-6 md:px-20 pt-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold flex items-center  gap-3 font-mono mb-12'>
          {' '}
          <FaMedium />writings
        </h2>

        <div className='max-w-4xl space-y-1'>
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target='_blank'
              rel='noopener noreferrer'
              className='group grid grid-cols-[140px_1fr] gap-8 py-4'
            >
              <span className='text-gray-800 font-mono text-sm'>
                {blog.date}
              </span>

              <span className='font-mono text-gray-800 group-hover:underline'>
                {blog.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs
