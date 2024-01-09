import React from "react";
import './App.css'; 
import Welcome from './welcome.js';
import Projects from './projects.js';
import TechStack from "./about.js";
import NavigationBar from './NavigationBar';


function App() {
  return (
    <div className="bg-mainC font-source-code-pro">
      <NavigationBar />
      <main>
        <Welcome id="welcome" />
        <TechStack id='techStack' />
        <Projects id="projects" />
      </main>
    </div>
  );
}

export default App;
