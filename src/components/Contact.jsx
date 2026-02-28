import mail from '../assets/mail.png'
export default function ContactSection () {
  return (
    <section className='px-6 md:px-20 mt-55 pb-4'>
      <div className='max-w-7xl mx-auto text-center'>
        <div className='flex flex-col items-center gap-3'>
          <svg
            width='800px'
            height='800px'
            viewBox='0 -4 32 32'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            xmlns:sketch='http://www.bohemiancoding.com/sketch/ns'
            className='w-10 h-10 object-contain'
          >
            <g
              id='Page-1'
              stroke='none'
              stroke-width='1'
              fill='none'
              fill-rule='evenodd'
              sketch:type='MSPage'
            >
              <g
                id='Icon-Set'
                sketch:type='MSLayerGroup'
                transform='translate(-412.000000, -259.000000)'
               fill='currentColor'
              >
                <path
                  d='M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z'
                  id='mail'
                  sketch:type='MSShapeGroup'
                ></path>
              </g>
            </g>
          </svg>
          <h2 className='text-3xl md:text-4xl font-bold'>Contact</h2>
        </div>

        <p className='mt-6 text-gray-700 max-w-xl mx-auto'>
          Interested in working together or discussing opportunities? Feel free
          to reach out.
        </p>

        {/* Contact Links */}
        <div className='mt-10 flex flex-col md:flex-row justify-center gap-6'>
          <a
            href='mailto:vibhutiprajapati784@gmail.com'
            className='px-6 py-3 border-2 border-black rounded-full hover:-translate-y-1 transition'
          >
            Email
          </a>

          <a
            href='https://github.com/vibhuti-prajapati'
            target='_blank'
            className='px-6 py-3 border-2 border-black rounded-full hover:-translate-y-1 transition'
          >
            GitHub
          </a>

          <a
            href='https://linkedin.com/in/vibhuti-savaldekar'
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
