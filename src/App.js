import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import { ModalProvider } from "./components/ui/animated-modal";
import "./App.css";

function App() {
  return (
    <ModalProvider>
      <div>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </ModalProvider>
  );
}

export default App;
