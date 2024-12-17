import React from "react";

const Home = React.forwardRef(({ navigate }, ref) => (
  <>
    <div ref={ref} className="h-screen flex flex-col bg-black justify-center relative">
      
      <span className="absolute w-72 h-72 md:w-96 md:h-96 bg-red-500 rounded-full blur-300"></span>

      
      <div className="flex w-full items-center justify-center -mt-12 px-6">
        <div className="flex flex-col gap-y-5 text-center md:text-left">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-Dancing text-white">
            <span className="text-red-400">Hello</span> I'm,
          </h1>

         
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Muhammad <span className="text-teal-400">Junaid</span> Arshad
          </h1>

          
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-white px-1 leading-tight">
            A <span className="text-red-400">Software Engineer</span> and{" "}
            <span className="text-teal-400">Graphics Designer</span> from
            <br /> Quetta, Pakistan.
          </h2>

          
          <div className="flex flex-col md:flex-row h-20 items-center justify-center gap-x-10 gap-y-4 mt-10">
            <button
              className="whitespace-nowrap px-6 py-3 font-semibold text-white bg-red-400 rounded-xl hover:bg-white hover:text-gray-950 transition ease-out duration-500"
              onClick={() => navigate("contact")}
            >
              Contact Me
            </button>
            <button
              className="whitespace-nowrap px-6 py-3 font-semibold text-white bg-red-400 rounded-xl hover:bg-white hover:text-gray-950 transition ease-out duration-500"
              onClick={() => navigate("about")}
            >
              About Me
            </button>
          </div>
        </div>
      </div>

      
      <span className="absolute bottom-10 right-0 w-72 h-72 md:w-96 md:h-96 bg-teal-500 rounded-full blur-300"></span>
    </div>
  </>
));

export default Home;
