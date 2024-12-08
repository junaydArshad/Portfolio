import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { useRef } from "react";
import Footer from "./components/Footer";
import Clients from "./components/Clients";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);
  const clientsRef = useRef(null);

  const handleNavigate = (section) => {
    if (section === "home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "clients") {
      clientsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header onNavigate={handleNavigate} />
      <Home ref={homeRef} navigate={handleNavigate} />
      <Projects ref={projectsRef} />
      <Clients ref={clientsRef}/>
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer/>
    </div>
  );
}

export default App;
