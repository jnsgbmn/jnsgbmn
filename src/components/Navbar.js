import React from "react";
import github from "../images/bxl-github.svg";
import twitter from "../images/bxl-twitter.svg";
import linkedin from "../images/bxl-linkedin-square.svg";
import bg from "../images/Group 10.png";
import { Link } from "react-scroll";
import me from "../images/me.png";

const Navbar = () => {
  return (
    <div className="  text-white grid-cols-3 flex">
      <div className=" max-w-[900px] w-full h-screen mx-auto text-center flex flex-col ">
        <div className=" justify-start">
          <div className="w-[40px]">
            <a href="https://github.com/jjsgumban" target="blank">
              <img
                alt=""
                className=" w-[30px] cursor-pointer mb-2 "
                src={github}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joan-gumban-71275919b/"
              target="blank"
            >
              <img
                alt=""
                className=" w-[30px] cursor-pointer mb-2 "
                src={linkedin}
              />
            </a>
            <a href="https://twitter.com/jnsgumban" target="blank">
              <img
                alt=""
                className=" w-[30px] cursor-pointer mb-2 "
                src={twitter}
              />
            </a>
          </div>
        </div>

        <div className="  pt-[200px] text-black text-[25px]">
          <div className="   mx-auto text-center  justify-center  max-w-sm ">
            <p className=" text-start    font-h1">
              {" "}
              <img alt="" className="  ml-10 w-[200px]" src={me} />
              Hi{" "}
            </p>
            <p className=" font-h1 text-start    "> My Name is Joan</p>
            <p className="  font-p text-sm  md:text-base sm:text-base     ">
              I Am 20 Years Old{" "}
              <span className=" text-teal-400 ">Front-End developer</span> from
              ph, my purpose is Bring{" "}
              <span className="text-teal-400  "> Great Ideas</span> to life with
              awesome people and i love learning new stuff
            </p>
          </div>
          <div className=" pl-auto text-center   "></div>
        </div>
      </div>
      <div className=" hidden md:flex sm:flex  max-w-[530px] w-full h-screen mx-auto text-center  flex-col ">
        <div>
          <img
            className=" shadow-2xl rounded-[30px]  absolute w-[590px] h-[880px]"
            src={bg}
            alt=""
          />
        </div>
        <div className="mt-[250px] ml-20">
          <ul>
            <li className="mt-6">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={1500}
                className="cursor-pointer text-[25px] relative font-h1    text-black"
              >
                PROJECT
              </Link>
            </li>
            <li className="mt-6">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
                className="cursor-pointer text-[25px] relative font-h1   text-black"
              >
                ABOUT
              </Link>
            </li>
            <li className=" m-6 ">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
                className="cursor-pointer text-[25px] relative font-h1   text-black"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
