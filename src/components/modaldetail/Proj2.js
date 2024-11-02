import React from "react";
import {
  ModalBody,
  ModalTrigger,
  useModal,
} from "../../components/ui/animated-modal";
import FadeInSection from "../Fadesection";

const Proj2 = () => {
  const modalId = "proj2-modal"; // Unique ID for the modal
  const { open } = useModal(modalId);

  const projectTitle = "MyPortfolio";
  const projectDescription =
    "I’ve held NFTs for quite some time now, enjoying and learning a lot from various campaigns. Currently, I’ve expanded my network through collaborations that involve NFTs.";
  const modalImageSrc = "/assets/portfolio.png";
  const nftImageSrc = "/assets/nft.png";

  return (
    <div className="w-full h-full bg-white pb-10 mb:pb-0 project">
      <section className="section">
        <div className="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
            {/* Project Title and Description */}
            <div className="relative flex  lg:order-first">
              <div className="flex flex-col justify-center h-full">
                <h1 className=" text-black font-display text-xl">
                  {projectTitle}
                </h1>
                <FadeInSection>
                  <div className="mb-4"></div>
                  <div className="font-body">
                    <FadeInSection>
                      <p>{projectDescription}</p>
                    </FadeInSection>
                    <FadeInSection>
                      <p className="mt-4">NFT Advocate</p>
                    </FadeInSection>
                    <FadeInSection>
                      <p className="mt-4">
                        This project is still in development.
                      </p>
                    </FadeInSection>
                  </div>
                </FadeInSection>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative flex items-center order-first w-full aspect-square lg:mt-0 cursor-pointer">
              <ModalTrigger id={modalId} className="cursor-pointer">
                <img
                  className="project-image"
                  src={modalImageSrc}
                  alt="Project"
                />
              </ModalTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <ModalBody
          id={modalId}
          className="relative z-50 max-w-3xl max-h-[90vh] overflow-y-auto mx-4 my-auto"
        >
          <img src={nftImageSrc} alt="NFT Details" className="w-full h-auto" />
        </ModalBody>
      )}
    </div>
  );
};

export default Proj2;
