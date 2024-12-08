import React from "react";

function Header({ onNavigate }) {
  return (
    <header className="fixed bg-black/95 w-full h-16">
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
                onClick={() => onNavigate("clients")}
              >
                Clients
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
          <button className="whitespace-nowrap mt-3 px-8 py-3 font-semibold border rounded-xl border-red-500 bg-transparent dark:border-red-500 dark:text-gray-100 hover:bg-red-400 hover:text-gray-950 transition ease-out duration-500">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
