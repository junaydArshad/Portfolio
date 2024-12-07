import React from "react";
const Home = React.forwardRef(({navigate}, ref) => (
  <>
    <div ref={ref} className="h-screen flex flex-col bg-black justify-center">
      <span className="absolute w-96 h-96 bg-red-500 rounded-full  blur-300"></span>

      <div className="flex w-full items-center justify-center -mt-12 ">
        <div className="flex flex-col  gap-y-5">
          <h1 className="text-8xl font-Oleo text-teal-600">Hello I'm,</h1>
          <h1 className="text-6xl  text-white whitespace-nowrap ">
            Muhammad Junaid Arshad
          </h1>
          <h2 className="text-5xl text-red-500 px-1">
            A Software Engineer from Quetta, Pakistan.{" "}
          </h2>
          <div className="flex flex-row h-20 items-center justify-center gap-x-10 mt-10">
            <button
              
              className="bg-red-500 px-4 py-3 text-xl text-white rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white"
              onClick={() => navigate("contact")}
            >
              Contact Me
            </button>
            <button
              
              className="bg-red-500 px-4 py-3 text-xl text-white rounded-xl hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white"
              onClick={() => navigate("about")}
            >
              About Me
            </button>
          </div>
          <span className="absolute bottom-10 right-1 w-96 h-96 bg-teal-500 rounded-full blur-300"></span>
        </div>
      </div>
    </div>
  </>
));

export default Home;
