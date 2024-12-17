import React, { useState } from "react";
import resume from "../assets/Resume.pdf";

function downloadFile() {
  const link = document.createElement('a');
  link.href = resume;
  link.download = 'Resume.pdf';
  link.click();
}

function Header({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed bg-black/95 w-full h-16 z-50">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl text-white font-Dancing">
            <button>Junayd</button>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center">
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
        </nav>

        {/* Download Resume Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={downloadFile}
            className="whitespace-nowrap px-6 py-3 font-semibold text-white bg-red-400 rounded-xl hover:bg-white hover:text-gray-950 transition ease-out duration-500"
          >
            Download Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-black/95 w-full text-white">
          <ul className="w-full flex flex-col gap-y-4 py-4 items-center">
            <li className="text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => {
                  onNavigate("home");
                  toggleMobileMenu();
                }}
              >
                Home
              </button>
            </li>
            <li className="text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => {
                  onNavigate("projects");
                  toggleMobileMenu();
                }}
              >
                Projects
              </button>
            </li>
            <li className="text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => {
                  onNavigate("clients");
                  toggleMobileMenu();
                }}
              >
                Clients
              </button>
            </li>
            <li className="text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => {
                  onNavigate("about");
                  toggleMobileMenu();
                }}
              >
                About
              </button>
            </li>
            <li className="text-xl">
              <button
                className="hover:text-teal-300"
                onClick={() => {
                  onNavigate("contact");
                  toggleMobileMenu();
                }}
              >
                Contact
              </button>
            </li>
            <li className="text-xl">
              <button
                onClick={() => {
                  downloadFile();
                  toggleMobileMenu();
                }}
                className="whitespace-nowrap px-6 py-3 font-semibold text-white bg-red-400 rounded-xl hover:bg-white hover:text-gray-950 transition ease-out duration-500"
              >
                Download Resume
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;