import React from "react";
import image from '../assets/Luffy.png'
const Projects = React.forwardRef((props, ref) => (
  <div ref={ref} className="h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-y-10 w-full">
      <h1 className="text-white text-5xl">Things I've Worked On.</h1>
    
    <div className="flex flex-col items-center justify-center w-full gap-y-10">
      <div className="flex bg-white text-black w-1/2 h-64 rounded-3xl">
          <img className="h-44 w-44 mt-10 ml-10 rounded-xl hover:scale-105 transition ease-in-out duration-300" src="https://i.pinimg.com/736x/fd/90/55/fd905511133a4cd27d1ce30d666b89e4.jpg"/>
          <div className="flex flex-col">
          <h1 className="mt-10 ml-10 text-xl text-teal-400">
            End-to-End Encrypted Email System.
          </h1><br/>
          <h2 className="mr-10 ml-10 text-xl">
          Developed an end-to-end <span className="text-red-400">encrypted</span> email system as a final year university project, implementing the latest <span className="text-red-400">security standards</span> to ensure data privacy and integrity. 
          </h2>
          </div>
      </div>
      <div className="flex bg-white text-black w-1/2 h-64 rounded-3xl">
          <img className="h-44 w-44 mt-10 ml-10 rounded-xl hover:scale-105 transition ease-in-out duration-300" src="https://i.pinimg.com/736x/46/d8/97/46d897c7ea4f0fef0e671390a678d734.jpg"/>
          <div className="flex flex-col">
          <h1 className="mt-10 ml-10 text-xl text-teal-400">
          Falcon 9 and Falcon Heavy Launch Prediction
          </h1><br/>
          <h2 className="-mt-4 mr-10 ml-10 text-xl">
          Applied <span className="text-red-400">machine learning</span> algorithms to predict the success rates of Falcon 9 and Falcon Heavy launches, leveraging data-driven insights to enhance predictive accuracy. Developed and trained models to analyze historical launch data, showcasing the potential for <span className="text-red-400">increased reliability</span> in space mission planning.. 
          </h2>
          </div>
      </div>
      <div className="flex bg-white text-black w-1/2 h-64 rounded-3xl">
          <img className="h-44 w-44 mt-10 ml-10 rounded-xl hover:scale-105 transition ease-in-out duration-300" src="https://i.pinimg.com/736x/61/ba/51/61ba51dffd8a691262a031076767555f.jpg"/>
          <div className="flex flex-col">
          <h1 className="mt-10 ml-10 text-xl text-teal-400">
          Blood Bank Management System
          </h1><br/>
          <h2 className="mr-10 ml-10 text-xl">
          Developed a <span className="text-red-400">Blood Bank</span> Management System using HTML, CSS, JavaScript, PHP, and SQL to streamline blood donor and recipient matching. Built an intuitive user interface and optimized backend processes for secure <span className="text-red-400">data management,</span> enhancing the efficiency of blood bank operations.
          </h2>
          </div>
      </div>
     
    </div>
      

    </div>
    
  </div>
  
));

export default Projects;
