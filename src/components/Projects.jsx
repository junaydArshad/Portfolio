import React from "react";

const Projects = React.forwardRef((props, ref) => (
  <div ref={ref} className="bg-black flex items-center justify-center">
    <div className="flex flex-col items-center justify-center gap-y-10 w-full p-4">
      <h1 className="text-white text-5xl text-center">Projects I've Worked On.</h1>

      <div className="flex flex-col items-center justify-center w-full gap-y-10">
        
        
        <div className="flex flex-col sm:flex-row bg-white text-black w-11/12 sm:w-10/12 md:w-1/2 h-auto rounded-3xl p-5">
          <img 
            className="h-44 w-44 rounded-xl hover:scale-105 transition ease-in-out duration-300 mx-auto sm:mx-10"
            src="https://i.pinimg.com/736x/fd/90/55/fd905511133a4cd27d1ce30d666b89e4.jpg" 
            alt="Project 1"
          />
          <div className="flex flex-col text-center sm:text-left mt-5 sm:mt-0">
            <h1 className="text-xl text-teal-400 font-semibold">
              End-to-End Encrypted Email System
            </h1>
            <p className="mt-2 text-lg">
              Developed an end-to-end <span className="text-red-400">encrypted</span> email system as a final year university project, implementing the latest <span className="text-red-400">security standards</span> to ensure data privacy and integrity.
            </p>
          </div>
        </div>
        
        
        <div className="flex flex-col sm:flex-row bg-white text-black w-11/12 sm:w-10/12 md:w-1/2 h-auto rounded-3xl p-5">
          <img 
            className="h-44 w-44 rounded-xl hover:scale-105 transition ease-in-out duration-300 mx-auto sm:mx-10"
            src="https://i.pinimg.com/736x/46/d8/97/46d897c7ea4f0fef0e671390a678d734.jpg" 
            alt="Project 2"
          />
          <div className="flex flex-col text-center sm:text-left mt-5 sm:mt-0">
            <h1 className="text-xl text-teal-400 font-semibold">
              Falcon 9 and Falcon Heavy Launch Prediction
            </h1>
            <p className="mt-2 text-lg">
              Applied <span className="text-red-400">machine learning</span> algorithms to predict the success rates of Falcon 9 and Falcon Heavy launches, leveraging data-driven insights to enhance predictive accuracy. Developed and trained models to analyze historical launch data, showcasing the potential for <span className="text-red-400">increased reliability</span> in space mission planning.
            </p>
          </div>
        </div>

        <span className="absolute right-1 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full blur-300"></span>
        <div className="flex flex-col sm:flex-row bg-white text-black w-11/12 sm:w-10/12 md:w-1/2 h-auto rounded-3xl p-5">
          <img 
            className="h-44 w-44 rounded-xl hover:scale-105 transition ease-in-out duration-300 mx-auto sm:mx-10"
            src="https://i.pinimg.com/736x/61/ba/51/61ba51dffd8a691262a031076767555f.jpg" 
            alt="Project 3"
          />
          <div className="flex flex-col text-center sm:text-left mt-5 sm:mt-0">
            <h1 className="text-xl text-teal-400 font-semibold">
              Blood Bank Management System
            </h1>
            <p className="mt-2 text-lg">
              Developed a <span className="text-red-400">Blood Bank</span> Management System using HTML, CSS, JavaScript, PHP, and SQL to streamline blood donor and recipient matching. Built an intuitive user interface and optimized backend processes for secure <span className="text-red-400">data management</span>, enhancing the efficiency of blood bank operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default Projects;
