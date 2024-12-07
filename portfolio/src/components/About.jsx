import React from 'react'

const About = React.forwardRef((props, ref) => (
    <div ref={ref} className="h-screen bg-black flex items-center justify-center">
        <span className="absolute right-56 w-56 h-56 bg-red-500 rounded-full  blur-300"></span>
        <div className='ml-96 mr-96'>
        <h1 className="text-white text-4xl font-dancing">A highly <span className='text-teal-400'> motivated </span> and recent graduate with a Bachelor's degree in <span className='text-red-400'>Software Engineering</span>. Seeking an entry-level <span className='text-teal-400'>Web
        Developer,</span> Mobile Application Development position to apply my programming skills, <span className='text-red-400'>problem-solving abilities,</span> and
passion for technology to contribute to innovative projects.</h1>
        </div>
    </div>
));

export default About