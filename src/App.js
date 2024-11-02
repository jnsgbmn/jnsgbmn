import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import AnimateCounter from "./components/AnimateCounter";
import { ModalProvider } from "./components/ui/animated-modal";
import "./App.css";

function App() {
  const [isCounterVisible, setCounterVisible] = useState(true);

  const handleCounterComplete = () => {
    setCounterVisible(false);
  };

  return (
    <ModalProvider>
      <div>
        {isCounterVisible ? (
          <AnimateCounter onComplete={handleCounterComplete} />
        ) : (
          <>
            <HeroSection />
            <ProjectSection />
            <ContactSection />
          </>
        )}
      </div>
    </ModalProvider>
  );
}

export default App;
