import React from "react";
import {
  ModalBody,
  ModalTrigger,
  useModal,
} from "../../components/ui/animated-modal";
import FadeInSection from "../Fadesection";

const Proj3 = () => {
  const modalId = "proj3-modal";
  const { open, openModal } = useModal(modalId);

  const projectTitle =
    "Skin Disease Identification through Image Classification and Segmentation using Deep Learning Technique";
  const projectDescription = `
    A cross-platform application that utilizes machine learning techniques to detect viral skin lesion diseases. The aim of this project is to reduce the cases of skin lesion diseases. For the model processing, we studied and utilized a convolutional neural network named for detecting skin cancer diseases, which won first place in a hackathon.
  `;
  const modalImageSrc = "/assets/Group 15.png";
  const projectImageSrc = "/assets/mkfox.png";

  return (
    <div className="w-full h-full bg-white pb-10 mb:pb-0 project">
      <section className="section">
        <div className="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
            {/* Project Image */}
            <ModalTrigger id={modalId} onClick={openModal}>
              <div className="relative flex items-center justify-center lg:order-first cursor-pointer">
                <img
                  className="project-image cursor-pointer pb-[0px] md:pb-[140px] lg:mt-0 mx-auto w-100 md:w-auto"
                  src={projectImageSrc}
                  alt="Project"
                />
              </div>
            </ModalTrigger>

            {/* Project Details */}
            <div className="max-w-xl">
              <div className="flex flex-col justify-center h-full">
                {/* Project Title */}
                <div className="mb-4 ">
                  <h1 className="inline-block mr-1 font-display text-xl">
                    {projectTitle}
                  </h1>
                </div>
                <FadeInSection>
                  {/* Project Description */}
                  <FadeInSection>
                    <div className="font-body">
                      <p>{projectDescription}</p>
                    </div>
                  </FadeInSection>

                  {/* Technology Icons */}
                  <div className="flex gap-3 h-[90px]">
                    <FadeInSection>
                      <div className="project-icon cursor-pointer mt-4 md:rounded-[10px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-black bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px] hover:bg-opacity-60">
                        <a
                          href="https://github.com/jnsgbmn/-Skin-Disease-Identification-Skin-Disease-Identification-through-Image-Classification-and-Segmentat.git"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="mx-auto relative items-center pt-4 w-[30px] md:w-[30px]"
                            src={"/assets/github.svg"}
                            alt=""
                          />
                        </a>
                      </div>
                    </FadeInSection>
                    {[
                      "flask.svg",
                      "jupyter.png",
                      "vercel.png",
                      "tailwind.svg",
                    ].map((icon, index) => (
                      <FadeInSection key={index}>
                        <div className="project-icon mt-4 md:rounded-[10px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
                          <img
                            className="mx-auto relative items-center pt-4 w-[28px] md:w-[30px]"
                            src={`/assets/${icon}`}
                            alt=""
                          />
                        </div>
                      </FadeInSection>
                    ))}
                  </div>
                </FadeInSection>

                {/* Modal */}
                {open && (
                  <ModalBody
                    id={modalId}
                    className="relative z-50 max-w-3xl max-h-[90vh] overflow-y-auto mx-4 my-auto"
                  >
                    <img
                      src={modalImageSrc}
                      alt="Project Details"
                      className="w-full h-auto"
                    />
                  </ModalBody>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proj3;
