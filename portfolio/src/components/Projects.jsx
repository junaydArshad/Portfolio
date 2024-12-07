import React from "react";
import image from '../assets/Luffy.png'
const Projects = React.forwardRef((props, ref) => (
  <div ref={ref} className="h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-y-10">
      <h1 className="text-white text-5xl">Trusted by creators worldwide</h1>
      <h1 className="text-white text-3xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h1>
      
      <div className="flex flex-row gap-x-10">
        <div className="flex flex-col items-center justify-center bg-white h-80 w-60 rounded-2xl gap-y-5"><img className="h-40 w-32" src={image} /><h1 className="text-center">End-to-End Encrypted Email System</h1></div>
        <div className="flex flex-col items-center justify-center bg-white h-80 w-60 rounded-2xl gap-y-5"><img className="h-40 w-32" src={image} /><h1 className="text-center w-56">Falcon 9 and Falcon Heavy Launch Predictions using Machine Learning</h1></div>
        <div className="flex flex-col items-center justify-center bg-white h-80 w-60 rounded-2xl gap-y-5"><img className="h-40 w-32" src={image} /><h1 className="text-center w-56">Blood Bank Management System</h1></div>
        <div className="flex flex-col items-center justify-center bg-white h-80 w-60 rounded-2xl gap-y-5"><img className="h-40 w-32" src={image} /><h1 className="text-center">Todo App using Redux</h1></div>
        <span className="absolute left-1 w-96 h-96 bg-teal-500 rounded-full blur-300"></span>
      </div>
    </div>
    
  </div>
  
));

export default Projects;
