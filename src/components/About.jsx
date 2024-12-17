import React from "react";

const About = React.forwardRef((props, ref) => (
  <div
    ref={ref} className="min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center p-4"
  >
    
   

    
    <div className="lg:ml-96 lg:mr-96 text-center lg:text-left px-4">
      
      <h1 className="text-red-400 text-5xl lg:text-7xl font-Dancing">
        A Bit About Me
      </h1>

     
      <h1 className="text-white text-lg sm:text-2xl lg:text-4xl font-mono mt-6 lg:mt-10 leading-relaxed">
        A highly motivated and recent graduate with a Bachelor's degree in{" "}
        <span className="text-teal-400">Software Engineering.</span> Seeking an
        entry-level Web Developer, Mobile Application Development position to
        apply my{" "}
        <span className="text-teal-400">programming skills,</span>{" "}
        problem-solving abilities, and passion for technology to contribute to
        innovative projects.
      </h1>
    </div>
  </div>
));

export default About;
