import React from "react";
import {
  ModalBody,
  ModalFooter,
  useModal,
} from "../../components/ui/animated-modal";
import FadeInSection from "../Fadesection";

const Proj4 = () => {
  const { open, closeModal } = useModal("proj4");

  return (
    <div id="proj4" className="w-full h-full bg-white pb-10 mb:pb-0">
      <section className="h-full flex items-center w-full bg-white py-10">
        <div className="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
            {/* Project Image */}
            <div className="relative flex items-center justify-center lg:order-first">
              <div className="flex flex-col justify-center h-full">
                {/* Project Title */}

                {/* Project Description */}
                <div className="mb-4">
                  <h1 className="inline-block  font-display text-xl text-black">
                    Market Tracker
                  </h1>
                </div>
                <FadeInSection>
                  <div className="font-body">
                    Conducting market analysis, or staying updated on the latest
                    industry developments, this web application aims to be an
                    indispensable tool in navigating the dynamic world of
                    cryptocurrencies.
                  </div>
                  <p className="mt-4">This project is still in development.</p>
                  <div className="flex gap-3 h-[90px] mt-4">
                    <FadeInSection>
                      <div className="md:rounded-[10px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-black bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px] hover:bg-opacity-60">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                          <img
                            className="mx-auto relative items-center pt-4 w-[30px] md:w-[30px]"
                            src={"/assets/github.svg"}
                            alt="GitHub"
                          />
                        </a>
                      </div>
                    </FadeInSection>
                    <FadeInSection>
                      <div className="md:rounded-[10px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
                        <img
                          className="mx-auto relative items-center pt-4 w-[30px] md:w-[30px]"
                          src={"/assets/framer.png"}
                          alt="Framer"
                        />
                      </div>
                    </FadeInSection>
                    <FadeInSection>
                      <div className="md:rounded-[10px] md:w-[60px] md:h-[60px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
                        <img
                          className="mx-auto relative items-center pt-4 w-[30px] md:w-[30px]"
                          src={"/assets/logo-react.svg"}
                          alt="React"
                        />
                      </div>
                    </FadeInSection>
                  </div>
                </FadeInSection>

                {/* Modal */}
                {open && (
                  <ModalBody className="relative z-50 max-w-3xl max-h-[90vh] overflow-y-auto mx-4 my-auto">
                    <img
                      src={"/assets/modal-content.png"}
                      alt="Modal Content"
                      className="w-full h-auto"
                    />
                    <ModalFooter>
                      <button onClick={closeModal} className="btn-close">
                        Close
                      </button>
                    </ModalFooter>
                  </ModalBody>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative flex items-center order-first w-full aspect-square lg:mt-0">
              <img
                className="pb-[0px] md:pb-[180px] lg:mt-0 mx-auto w-100 md:w-auto"
                src={"/assets/chart.png"}
                alt="Market Tracker"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proj4;
