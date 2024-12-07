import React from "react";

function Header({ onNavigate }) {
  return (
    <header className="fixed bg-black w-full h-16">
      <div className="flex flex-row h-16 ">
        <div className="flex items-center ml-16">
          <h1 className="text-3xl text-white font-Dancing">
            <button>Junayd</button>
          </h1>
        </div>
        <div className="flex items-center justify-center w-full">
          <ul className="flex flex-row gap-x-10">
            <li className="text-white text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => onNavigate("home")}
              >
                Home
              </button>
            </li>
            <li className="text-white text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => onNavigate("projects")}
              >
                Projects
              </button>
            </li>
            <li className="text-white text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => onNavigate("about")}
              >
                About
              </button>
            </li>
            <li className="text-white text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => onNavigate("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center mr-16">
          <button className="text-white bg-red-400 roun whitespace-nowrap  p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500  w-full">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
