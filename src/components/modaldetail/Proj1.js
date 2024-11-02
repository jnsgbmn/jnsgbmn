import React from "react";
import {
  ModalBody,
  ModalTrigger,
  useModal,
} from "../../components/ui/animated-modal";
import FadeInSection from "../Fadesection";

const Proj1 = () => {
  const modalId = "proj1-modal";
  const { open } = useModal(modalId);

  const projectTitle = "ECommerce Monstera Store Inspiration";
  const projectDescription =
    "My case study prototype project in Google where I learned about entry-level jobs in user experience (UX) design.";
  const figmaLink =
    "https://www.figma.com/file/EhmTQYoZYAn0xVrF1NWvlE/High-fidelity-Mockup-Prototype?type=design&node-id=0%3A1&mode=design&t=SZxBgm6ghRDcfPhL-1";
  const figmaLogo = "/assets/figma.svg";
  const monsteraImageSrc = "/assets/monstera1.png";
  const modalImageSrc = "/assets/Frame9.png";

  return (
    <div className="w-full h-full bg-white mb-0 project">
      <section className="section">
        <div className="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
            {/* Monstera Image */}
            <div className="relative flex items-center justify-center lg:order-first">
              <ModalTrigger id={modalId} className="cursor-pointer">
                <img
                  className="pb-0 md:pb-36 lg:mt-24 mt-12 mx-auto w-full md:w-auto"
                  src={monsteraImageSrc}
                  alt="Monstera"
                />
              </ModalTrigger>
            </div>

            {/* Project Details */}
            <div className="max-w-xl">
              <div className="flex flex-col justify-center h-full">
                {/* Project Title */}
                <div className="mb-4">
                  {" "}
                  {/* Assign ID */}
                  <h1 className=" text-black font-display text-xl">
                    {projectTitle}
                  </h1>
                </div>
                {/* Project Description */}
                <FadeInSection>
                  <div className="font-body">
                    <FadeInSection>
                      <p>{projectDescription}</p>
                    </FadeInSection>

                    <FadeInSection>
                      <div className="flex gap-3 h-[90px]">
                        <div className="mt-4 rounded-md w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={figmaLink}
                          >
                            <img
                              className="mx-auto pt-4 w-[30px]"
                              src={figmaLogo}
                              alt="Figma Logo"
                            />
                          </a>
                        </div>
                      </div>
                    </FadeInSection>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Proj1;
