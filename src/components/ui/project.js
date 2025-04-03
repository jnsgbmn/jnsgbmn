import React from "react";
import {
  ModalBody,
  ModalTrigger,
  ModalContent,
  ModalProvider,
} from "../../components/ui/animated-modal";
import FadeInSection from "../Fadesection";

const Project = ({ project, idx }) => {
  const modalId = `${project.id}-modal`;

  return (
    <ModalProvider>
      <div className="w-full h-full bg-white pb-10 mb:pb-0 project">
        <section className="section">
          <div className="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div className="pt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
              {project.id === "monstera" ||
              project.id === "wren" ||
              idx % 2 === 0 ? (
                <>
                  <ModalTrigger id={modalId} className="order-1 lg:order-1">
                    <div className="relative flex items-center justify-center cursor-pointer">
                      <img
                        className="project-image cursor-pointer pb-0 md:pb-[140px] lg:mt-0 mx-auto w-full h-auto object-cover"
                        src={project.imageSrc}
                        alt={project.title}
                      />
                    </div>
                  </ModalTrigger>
                  <div className="max-w-xl order-2 lg:order-2">
                    <div className="flex flex-col justify-center h-full">
                      <div className="mb-4">
                        <h1 className="inline-block mr-1 text-primary font-body text-xl">
                          {project.title}
                        </h1>
                      </div>
                      <FadeInSection>
                        <div className="font-body">
                          <p>
                            {project.description ||
                              "Description not available."}
                          </p>
                          {project.role && (
                            <p className="mt-4">
                              <strong>Role:</strong> {project.role}
                            </p>
                          )}
                          {project.status && (
                            <p className="mt-4">
                              <strong>Status:</strong> {project.status}
                            </p>
                          )}
                        </div>
                      </FadeInSection>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="max-w-xl order-2 lg:order-1">
                    <div className="flex flex-col justify-center h-full">
                      <div className="mb-4">
                        <h1 className="inline-block mr-1 text-primary font-body text-xl">
                          {project.title}
                        </h1>
                      </div>
                      <FadeInSection>
                        <div className="font-body">
                          <p>
                            {project.description ||
                              "Description not available."}
                          </p>
                          {project.role && (
                            <p className="mt-4">
                              <strong>Role:</strong> {project.role}
                            </p>
                          )}
                          {project.status && (
                            <p className="mt-4">
                              <strong>Status:</strong> {project.status}
                            </p>
                          )}
                        </div>
                      </FadeInSection>
                    </div>
                  </div>
                  <ModalTrigger id={modalId} className="order-1 lg:order-2">
                    <div className="relative flex items-center justify-center cursor-pointer">
                      <img
                        className={`project-image ${
                          project.modalImageSrc ? "cursor-pointer" : ""
                        } pb-0 md:pb-[140px] lg:mt-0 mx-auto w-full h-auto object-cover`}
                        src={project.imageSrc}
                        alt={project.title}
                      />
                    </div>
                  </ModalTrigger>
                </>
              )}
            </div>
          </div>
        </section>
        {project.modalImageSrc && (
          <ModalBody id={modalId} className="overflow-y-auto max-h-[90vh]">
            <ModalContent className="w-full h-full p-0">
              <img
                src={project.modalImageSrc}
                alt="Project Details"
                className="w-full h-auto object-cover"
              />
            </ModalContent>
          </ModalBody>
        )}
      </div>
    </ModalProvider>
  );
};

export default Project;
