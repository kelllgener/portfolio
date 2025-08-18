import { useState, useEffect } from "react";
import Header from "./components/section/Header";
import Home from "./components/section/Home";
import AboutMe from "./components/section/AboutMe";
import Skills from "./components/section/Skills";
import Experience from "./components/section/Experience";
import Projects from "./components/section/Projects";
import ContactMe from "./components/section/ContactMe";
import LoadingScreen from "./components/LoadingScreen";
import MobileNavbar from "./components/MobileNavbar";
import Footer from "./components/section/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Close the menu automatically if viewport is wide
      if (width > 640 && menuOpen) {
        setMenuOpen(false);
      }
    };

    // Body scroll lock
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Run once on mount + whenever menuOpen changes
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      {/* Header */}
      <div className="container mx-auto">
        <Header menuOpen={menuOpen} setOpenMenu={setMenuOpen} />
        <MobileNavbar menuOpen={menuOpen} setOpenMenu={setMenuOpen} />
      </div>
      {/* Contents / Section */}
      <div
        id="main-content"
        className={`min-h-screen p-4 mt-12 container mx-auto flex flex-col gap-10 transition-all duration-500 ease-in-out
          ${
            menuOpen ? "pointer-events-none blur-lg" : "pointer-events-auto"
          }   `}
      >
        <Home />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
      <div className="border-t border-t-gray-300">
        <Footer />
      </div>
    </>
  );
}

export default App;
