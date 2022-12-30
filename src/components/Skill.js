import React from "react";
import sql from "../images/sql.svg";
import figma from "../images/figma.svg";
import react from "../images/react.svg";
import python from "../images/python.svg";
import css from "../images/bxl-css3.svg";

const skill = () => {
  return (
    <div className="  id=skill">
      <div className="   gap-2 justify-center max-w-[800px] h-[200px] mx-auto  flex md:grid-cols-2 ">
        <div className=" mt-[50px] md:rounded-[20px] md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
          <img
            className="mx-auto mt-4 w-[30px] md:w-[40px]"
            src={react}
            alt=""
          />
        </div>
        <div className=" mt-[50px] md:rounded-[20px] md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
          <img
            className="mx-auto mt-4 w-[30px] md:w-[40px]"
            src={figma}
            alt=""
          />
        </div>

        <div className=" mt-[50px] md:rounded-[20px] md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
          <img className="mx-auto mt-4 w-[30px] md:w-[40px]" src={sql} alt="" />
        </div>
        <div className=" mt-[50px] md:rounded-[20px] md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
          <img
            className="mx-auto mt-4 w-[30px] md:w-[40px]"
            src={python}
            alt=""
          />
        </div>
        <div className="mt-[50px] md:rounded-[20px] md:w-[75px] md:h-[75px] w-[60px] h-[60px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[10px]">
          <img className="mx-auto mt-4 w-[30px] md:w-[40px]" src={css} alt="" />
        </div>
      </div>
    </div>
  );
};

export default skill;
