import React from "react";

function f() {
  return (
    <div
      id="contact"
      className="h-[400px] bg-black py-16 px-8 flex justify-end"
    >
      <div className=" md:w-1/2 w-full  ">
        <h1 className=" font-p text-white ">Let's chat on: </h1>
        <ul> _ </ul>
        <ul>
          <a href="https://twitter.com/jnsgumban " target="blank">
            <li className=" cursor-pointer  font-h1 text-white text-5xl md:text-7xl">
              Twitter
            </li>
          </a>
          <a href="https://www.instagram.com/joaquuuinnn/" target="blank">
            <li className=" cursor-pointer font-h1 text-white text-5xl md:text-7xl">
              Instagram
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/joan-gumban-71275919b/"
            target="blank"
          >
            <li className="cursor-pointer font-h1 text-white text-5xl md:text-7xl">
              Linkedir
            </li>
          </a>
          <a href="email:jnsgumban@gmail.com" target="blank">
            <li className="cursor-pointer font-h1 text-white text-5xl md:text-7xl">
              Email
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default f;
