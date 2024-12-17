import React from 'react';

const Clients = React.forwardRef((props, ref) => (
  <div ref={ref} className="flex justify-center items-center bg-black h-screen w-full">
    <div className="flex flex-col items-center justify-center mt-96 w-full">
      <h1 className="text-5xl -mt-60 text-white text-center">
        What my Clients say about me.
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-10 gap-6 px-4">
        

    <span className="absolute right-1 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full blur-300"></span>

      <span className="absolute left-1 w-72 h-72 md:w-96 md:h-96 bg-red-500 rounded-full blur-300"></span>
        <div className="py-4 bg-black flex flex-col items-center justify-center w-full md:w-1/2 rounded-2xl">
          <h1 className="text-xl text-white text-center px-4">
            "Fantastic seller that delivered promptly and managed to work with a difficult asset"
          </h1>
          <h1 className="text-xl text-red-400 mt-2">stenqvist</h1>
        </div>

        
        <div className="py-4 bg-black flex flex-col items-center justify-center w-full md:w-1/2 rounded-2xl">
          <h1 className="text-xl text-white text-center px-4">
            "Good with communication and hard working."
          </h1>
          <h1 className="text-xl text-red-400 mt-2">WeMoDe_tech</h1>
        </div>

       
        
      </div>
    </div>
  </div>
));

export default Clients;
