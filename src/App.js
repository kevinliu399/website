import React, { useState, useEffect, useRef } from "react";
import './App.css'; 
import Welcome from './welcome.js';
import About from './about.js';
import Projects from './projects.js';
import Contact from './contact.js';
import { Link, animateScroll as scroll } from "react-scroll";


function App() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainContentRef = useRef(null);

  const handleScroll = () => {
    const totalScroll = mainContentRef.current.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    // Update isScrolled
    setIsScrolled(currentScroll > 0);

    // Update scrollProgress
    const progress = (currentScroll / totalScroll) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once to set initial value

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
  <div className="bg-mainC font-source-code-pro">
      <nav className={`sticky top-0 w-full z-50 ${isScrolled ? 'bg-window-opacity' : 'bg-window'}`}>
        <div className="flex justify-between items-center px-4 h-20">
          <div className="KevinLiu w-40 h-7 text-black text-2xl font-normal ml-16 cursor-pointer" onClick={scrollToTop}>Kevin Liu</div>
          <div className="flex">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="AboutMe nav-item w-32 h-7 text-black text-xl font-normal cursor-pointer">
              <span className="px-4 py-2 hover:bg-zinc-300 hover:text-black hover:border-zinc-300 hover:rounded-lg">about</span>
            </div>
          </Link>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="Projects nav-item w-32 h-7 text-black text-xl font-normal mr-4 cursor-pointer">
              <span className="px-4 py-2 hover:bg-zinc-300 hover:text-black hover:border-zinc-300 hover:rounded-lg">projects</span>
            </div>
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="Contact nav-item w-32 h-7 text-black text-xl mr-4 font-normal cursor-pointer">
              <span className="px-4 py-2 hover:bg-zinc-300 hover:text-black hover:border-zinc-300 hover:rounded-lg">contact</span>
            </div>
          </Link>
          </div>
        </div>
        <div className="w-full" style={{ height: '3px', backgroundColor: 'black', width: `${scrollProgress}%` }}></div>
      </nav>
      

      <main ref={mainContentRef}>
        <Welcome />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
    </div>
  );
}


export default App;
