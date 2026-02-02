import mail from '../assets/mail.png'
export default function ContactSection () {
  return (
    <section className='px-6 md:px-20 py-24'>
      <div className='max-w-7xl mx-auto text-center'>
    <div className="flex flex-col items-center gap-3">
          <img
            src={mail}
            alt='mail icon'
            className='w-10 h-10 object-contain'
          />
          <h2 className='text-3xl md:text-4xl font-bold'>Contact</h2>
        </div>

        <p className='mt-6 text-gray-700 max-w-xl mx-auto'>
          Interested in working together or discussing opportunities? Feel free
          to reach out.
        </p>

        {/* Contact Links */}
        <div className='mt-10 flex flex-col md:flex-row justify-center gap-6'>
          <a
            href='mailto:yourmail@example.com'
            className='px-6 py-3 border-2 border-black rounded-full hover:-translate-y-1 transition'
          >
            Email
          </a>

          <a
            href='https://github.com/yourusername'
            target='_blank'
            className='px-6 py-3 border-2 border-black rounded-full hover:-translate-y-1 transition'
          >
            GitHub
          </a>

          <a
            href='https://linkedin.com/in/yourprofile'
            target='_blank'
            className='px-6 py-3 border-2 border-black rounded-full hover:-translate-y-1 transition'
          >
            LinkedIn
          </a>
        </div>

        {/* Doodle line */}
        <p className='mt-12 text-gray-600 italic'>
          Let’s build something cool.
        </p>
      </div>
    </section>
  )
}
