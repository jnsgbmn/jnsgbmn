import React from "react";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <>
      <Navbar />
      <Skill />
      <Project />
      <About />
      <Contact />
      </>
    </div>
  );
}

export default App;
