import React from "react";
const Home = React.forwardRef(({navigate}, ref) => (
  <>
    <div ref={ref} className="h-screen flex flex-col bg-black justify-center">
      <span className="absolute w-96 h-96 bg-red-500 rounded-full  blur-300"></span>

      <div className="flex w-full items-center justify-center -mt-12 ">
        <div className="flex flex-col  gap-y-5">
          <h1 className="text-8xl font-Dancing text-white"><span className="text-red-400">Hello</span> I'm,</h1>
          <h1 className="text-6xl  text-white whitespace-nowrap ">
            Muhammad <span className="text-teal-400">Junaid</span> Arshad
          </h1>
          <h2 className="text-5xl text-white px-1">
            A <span className="text-red-400">Software Engineer</span> and <span className="text-teal-400">Graphics Designer</span> from<br/> Quetta, Pakistan.{" "}
          </h2>
          <div className="flex flex-row h-20 items-center justify-center gap-x-10 mt-10">
            <button
              
              className="whitespace-nowrap mt-3 px-8 py-3 font-semibold border rounded-xl border-red-500 bg-transparent dark:border-red-500 dark:text-gray-100 hover:bg-red-400 hover:text-gray-950 transition ease-out duration-500"
              onClick={() => navigate("contact")}
            >
              Contact Me
            </button>
            <button
              
              className="whitespace-nowrap mt-3 px-8 py-3 font-semibold border rounded-xl border-red-500 bg-transparent dark:border-red-500 dark:text-gray-100 hover:bg-red-400 hover:text-gray-950 transition ease-out duration-500"
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
