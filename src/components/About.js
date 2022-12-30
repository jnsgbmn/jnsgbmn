import React from "react";
import bg from "../images/bg.png";

const about = () => {
  return (
    <div id="about" className=" w-full h-[500px] md:h-[800px] bg-white  px-4">
      <div className=" mb-10 text-center  ">
        <p className=" font-h1 text-[40px] ">About </p>
      </div>
      <div
        className="bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg  max-w-[800px]  grid rounded-[40px]  w-auto md:w-[800px] h-[350px] mx-auto md:h-[500px] "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="tracking-[1px]   flex flex-col justify-center">
          <h1 className="md:text-[15px] text-[11px]   px-14 font-p ">
            {" "}
            I am currently studying in Mapua a technological an academic
            excellence in Mindanao where i have learn tons of thing related to
            internet, from web-development, Data science,Machine learning.
            <p className="mt-4">
              I am most interested in creating and building things, whether on
              digital platforms or in real life.I always wanted to find a way to
              do something creative for a living.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default about;
