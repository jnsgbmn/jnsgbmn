import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/AnimateCounter.css"; // Ensure this path is correct

function animateCounter(onComplete) {
  const counterElement = document.querySelector(".counter p");

  if (!counterElement) {
    console.error("Counter element not found");
    return;
  }

  const endValue = 100; // Desired end value
  const maxDuration = 2000; // Duration of the animation in milliseconds

  // Animate the counter value smoothly using GSAP
  gsap.to(counterElement, {
    innerHTML: endValue,
    duration: maxDuration / 1000, //
    ease: "power3.out",
    snap: { innerHTML: 4 }, // Snap to whole numbers
    onUpdate: () => {
      // Force re-render for the updated value
      counterElement.innerHTML = Math.round(counterElement.innerHTML);
    },
    onComplete: () => {
      // Animate the full page transition (without moving up)
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 1, // No "y" value for upward movement
        ease: "power3.out", // Ease-out for smooth transition
        onComplete: () => {
          if (typeof onComplete === "function") onComplete();
        },
      });
    },
  });
}

const AnimateCounter = ({ onComplete }) => {
  useEffect(() => {
    gsap.fromTo(
      ".counter p",
      { opacity: 0 }, // Remove y to avoid upward movement
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        delay: 1,
        onComplete: () => {
          animateCounter(onComplete);
        },
      }
    );
  }, [onComplete]);

  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-white  z-50">
      <div className="text-center">
        <div className="counter">
          <div className="counter">
            <p className="text-sm md:text-sm text-black font-bold font-screensaver px-2">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimateCounter;
