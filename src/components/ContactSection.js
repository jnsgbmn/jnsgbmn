import React, { useEffect } from "react";
import { gsap } from "gsap";

const Contact = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".contact-link");

    links.forEach((link) => {
      const underline = link.querySelector(".underline");

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          scaleX: 1,
          duration: 0.3,
          transformOrigin: "left center",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, {
          scaleX: 0,
          duration: 0.3,
          transformOrigin: "left center",
        });
      });
    });
  }, []);

  return (
    <footer className="bg-primary flex justify-center bg-black text-secondary py-16 md:pl-4">
      <div className="w-full md:w-6/4 lg:w-5/3 xl:w-2/3 text-white w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <p className="font-body mb-8">Let's chat on:</p>
        <ul>
          <li className="font-display text-5xl md:text-7xl relative w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <a
              className="contact-link relative inline-block"
              rel="noopener noreferrer"
              href="/assets/Resume-Gumban.pdf"
              target="_blank"
            >
              Resume
              <span className="underline absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0"></span>
            </a>
          </li>
          <li className="font-display text-5xl md:text-7xl relative w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <a
              className="contact-link relative inline-block"
              rel="noopener noreferrer"
              href="/"
            >
              Instagram
              <span className="underline absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0"></span>
            </a>
          </li>
          <li className="font-display text-5xl md:text-7xl relative w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <a
              className="contact-link relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/joan-gumban-71275919b/"
            >
              Linkedin
              <span className="underline absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0"></span>
            </a>
          </li>
          <li className="font-display text-5xl md:text-7xl relative w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
            <a
              className="contact-link relative inline-block"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hello@jsgbn.com"
            >
              Email
              <span className="underline absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0"></span>
            </a>
          </li>
          <div
            className="mt-9 md:text-xl text-[0.1px] "
            style={{ fontSize: "10px" }}
          >
            <p>
              &copy; {new Date().getFullYear()} Built and designed by Joan
              Gumban. All rights reserved.
            </p>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
