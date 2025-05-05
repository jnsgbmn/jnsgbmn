import React from "react";
import "../styles/Intro.css";

export function HeroSection() {
  return (
    <header className="sticky top-0 z-[-10] h-screen bg-white font-display  tracking-tighter intro">
      <div className="h-full flex flex-col justify-center">
        <h1 className="relative text-[8vw] leading-[0.9em] text-primary before:bg-primary before:w-[92vw] before:h-[1px] before:absolute before:top-1/2 before:left-0">
          <span className="relative ml-[29vw] bg-white inline-block h-2/3 px-4">
            Joan Gumban
          </span>
        </h1>
        <h2 className="text-[9vw] leading-[0.9em] text-primary ml-[15vw]">
          Front end Developer
        </h2>
      </div>
    </header>
  );
}

export default HeroSection;
