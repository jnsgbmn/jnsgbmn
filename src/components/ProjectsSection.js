import React from "react";
import ProjectComponent from "./ui/project";
import projects from "./content/pages.json";

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectComponent key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
