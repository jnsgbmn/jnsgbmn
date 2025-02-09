import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FadeInSection from "./Fadesection";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="px-5 mx-auto md:px-12 lg:px-16 max-w-7xl relative">
        <div className="pt-12 container">
          <div className="w-full bg-e grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
            <AboutInfo />
            <WorkExperience />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutInfo = () => {
  const mapuaRef = useRef(null);
  const fullstackRef = useRef(null);

  useEffect(() => {
    const animateUnderline = (element) => {
      const underline = element.querySelector(".underline-animation");
      if (underline) {
        gsap.set(underline, { scaleX: 0 });

        element.addEventListener("mouseenter", () => {
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.3,
            transformOrigin: "left center",
            ease: "power1.out",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.3,
            transformOrigin: "left center",
            ease: "power1.out",
          });
        });
      }
    };

    if (mapuaRef.current) {
      animateUnderline(mapuaRef.current);
    }

    if (fullstackRef.current) {
      animateUnderline(fullstackRef.current);
    }
  }, []);

  return (
    <div className="lg:order-2">
      <div className="max-w-xl lg:text-left">
        <h3 className="text-primary about font-body text-4xl mb-6 relative inline">
          About
          <span className="absolute bottom-1/2 ml-2 font-display left-full text-base">
            2001
          </span>
        </h3>
        <div className="ptag mt-5">
          <FadeInSection>
            <p className="mb-5">
              I'm&nbsp;
              <a
                ref={fullstackRef}
                href="https://roadmap.sh/frontend/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary no-underline relative inline-block"
              >
                <span
                  className="underline-animation absolute bottom-0 left-0 w-full"
                  style={{ height: "1px", backgroundColor: "black" }}
                ></span>
                Full Stack Developer
              </a>{" "}
              from the Philippines and currently work at Mazer LTD, a UK private
              company that provides government services. It's like an agency
              company that offers software solutions.
            </p>
            <p className="mb-5">
              I graduated from{" "}
              <a
                ref={mapuaRef}
                href="https://mcm.edu.ph/programs/college/college-of-computer-science-and-information/computer-science/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary no-underline relative inline-block"
              >
                Mapúa Malayan
                <span
                  className="underline-animation absolute bottom-0 left-0 w-full"
                  style={{ height: "1px", backgroundColor: "black" }}
                ></span>
              </a>
              , where I have learned tons of things related to the internet,
              from web development to data science, data analysis, and machine
              learning algorithms.
            </p>
            <p className="mb-5">
              I am most interested in creating and building things, whether on
              digital platforms or in real life. I have a great interest in
              artificial intelligence, human-computer interactions, Web3, and
              everything in between.
            </p>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const mazarRef = useRef(null);
  const infinitRef = useRef(null);

  useEffect(() => {
    const animateUnderline = (element) => {
      const underline = element.querySelector(".underline-animation");
      if (underline) {
        gsap.set(underline, { scaleX: 0 });

        element.addEventListener("mouseenter", () => {
          gsap.to(underline, {
            scaleX: 1,
            duration: 0.3,
            transformOrigin: "left center",
            ease: "power1.out",
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(underline, {
            scaleX: 0,
            duration: 0.3,
            transformOrigin: "left center",
            ease: "power1.out",
          });
        });
      }
    };

    if (mazarRef.current) {
      animateUnderline(mazarRef.current);
    }

    if (infinitRef.current) {
      animateUnderline(infinitRef.current);
    }
  }, []);

  return (
    <div className="max-w-xl lg:text-left">
      <h3 className="text-primary font-body about text-4xl mb-6 relative inline">
        Work &amp; Experiences
        <span className="absolute bottom-1/2 ml-2 left-full font-display text-base">
          www
        </span>
      </h3>
      <ul className="mt-6">
        <FadeInSection>
          <li>
            <div className="flex flex-col md:flex-row md:items-center font-body text-base">
              <h4 className="inline-block mr-1 font-display text-xl">
                <a
                  ref={mazarRef}
                  href="https://find-and-update.company-information.service.gov.uk/company/04107032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block no-underline"
                >
                  Mazer Ltd
                  <span
                    className="underline-animation absolute bottom-0 left-0 w-full"
                    style={{ height: "1px", backgroundColor: "black" }}
                  ></span>
                </a>
              </h4>
              <p className="text-sm">— Current, United Kingdom, UK</p>
            </div>
            <div className="mt-2">
              <p>As Full-Stack Developer</p>
              <p>Working on React, Zustand, and Node.js</p>
            </div>
          </li>
        </FadeInSection>
        <FadeInSection>
          <li className="mt-6">
            <div className="flex flex-col md:flex-row md:items-center font-body text-base">
              <h4 className="inline-block mr-1 font-display text-xl">
                <a
                  ref={infinitRef}
                  href="https://infinitwebsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block no-underline"
                >
                  Infinit Solutions
                  <span
                    className="underline-animation absolute bottom-0 left-0 w-full"
                    style={{ height: "1px", backgroundColor: "black" }}
                  ></span>
                </a>
              </h4>
              <p className="text-sm">— 2023, Philippines, PH</p>
            </div>
            <div className="mt-2">
              <p>Full Stack Developer</p>
              <p>Used PHP for the back-end and Laravel for the front-end</p>
            </div>
          </li>
        </FadeInSection>
      </ul>
    </div>
  );
};

export default About;
