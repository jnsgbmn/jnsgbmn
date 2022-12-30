import React from "react";
import monstera from "../images/monstera1.png";
import monstera2 from "../images/monstera2.png";
import mkfox from "../images/mkfox.png";
import fmask from "../images/fsmask.png";

const Project = () => {
  return (
    <div id="project" className=" w-full h-full bg-white  px-4">
      <div className=" text-center mb-10 ">
        <p className=" font-h1 text-[40px] ">PROJECT</p>
      </div>
      <div className="max-w-[800px] mx-auto grid md:grid-cols-2">
        <img className=" pr-5 mx-auto my-4 w-[184px][" src={monstera} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl font-h1  py-2">
            Monstera Inspiration
          </h1>
          <p className=" font-p ">
            A plant shop cross platform based application where use can find buy
            Monstera plant indoor and outdoor for decoration. Aim to promote
            environmental awareness and influence to take care our planet by
            knowing to grow plants.
          </p>
          <p className=" font-p my-4  w-[40px]">
            Date.08/11/21 Skills. Technologies.ReactJs,RaypidAPI,Figma
          </p>
        </div>
      </div>
      <div className="  mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
        <div className=" fslex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl font-h1 py-2">
            Monstera UI/UX Inspiration
          </h1>
          <p className=" font-p ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <p className=" font-p my-4  w-[40px]">
            Date.08/11/21 Skills. Technologies.figma,AI
          </p>
        </div>
        <img className="  mx-auto my-4 w-[184px][" src={monstera2} alt="/" />
      </div>

      <div className="mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
        <img className=" pr-5  mx-auto my-4 w-[184px][" src={mkfox} alt="/" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl font-h1 py-2">
            Monkepox Detection System
          </h1>
          <p className=" font-p ">
            A cross platform based application that detect monkeypox skin
            lesions. With machine learning technique. The aim of this project to
            reduce cases monkeypox cases in our world.
          </p>
          <p className=" font-p my-4  w-[200px]">
            {" "}
            Date.08/08/22 Technologies.Flask Backend:Python Libraries,
            Pre-trained Models
          </p>
        </div>
      </div>

      <div className=" mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="  md:text-4xl sm:text-3xl font-h1 py-2">
            Face Mask Detection Attendance System
          </h1>
          <p className="  text-start font-p ">
            Wearing a face mask is must in our new environment. With the start
            on the pandemic2019, people are required to weak face mask when
            going out to public places.
          </p>
          <p className=" font-p my-4  w-[200px]">
            {" "}
            Date. 07/21/2020 Skills. Technologies.Pyqt5 Backed:Python Libraries,
            Pre-trained Models
          </p>
        </div>
        <img className="   mx-auto my-4 w-[184px][" src={fmask} alt="/" />
      </div>
      <div className=" mt-5 mb-[100px] max-w-[800px] mx-auto grid flex-col justify-center">
        <div className=" cursor-pointer justify center w-[250px] h-[40px] bg-white bg-opacity-100 backdrop-blur-md drop-shadow-lg rounded-[20px]">
          <p className=" mt-2 font-h1 text-black text-center">more project</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
