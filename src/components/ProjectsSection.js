import React from "react";
import Proj1 from "../components/modaldetail/Proj1";
import Proj2 from "../components/modaldetail/Proj2";
import Proj3 from "../components/modaldetail/Proj3";
import Proj4 from "../components/modaldetail/Proj4";
import { ModalProvider } from "../components/ui/animated-modal"; // Adjust the import path if necessary

const Projects = () => {
  return (
    <div id="projects">
      <ModalProvider>
        <Proj1 />
        <Proj2 />
        <Proj3 />
        <Proj4 />
      </ModalProvider>
    </div>
  );
};

export default Projects;
