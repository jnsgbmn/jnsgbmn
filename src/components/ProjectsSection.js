import React from "react";
import ProjectComponent from "./ui/project";
import projectsData from "./content/pages.json";
// import FadeInLeftRightSection from "./FadeInLeftRightSection";

const Projects = () => {
  return (
    <div className="w-full  h-full bg-white project">
      {projectsData.sections.map((section, idx) => (
        <div key={idx} className="project-section">
          {/* Section title */}
          <div className="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="  grid grid-cols-1 pt-8 lg:grid-cols-2 lg:gap-24">
              <h1 className="items-baseline relative text-4xl font-body text-start flex justify-start">
                {section.sectionTitle}
              </h1>
            </div>
          </div>

          {/* Projects */}
          <div className="grid gap-8 px-3 md:px-5 max-w-7xl mx-auto pt-10 pb-10">
            {section.projects.map((project) => (
              <div className="bg-white shadow-2xl rounded-3xl  p-2 pt-5  ">
                <ProjectComponent project={project} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
