import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CursorFollower from "./components/Cursor";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LoadingScreen = ({ onLoadingComplete }) => {
  const [dynamicText, setDynamicText] = useState("Passion");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoadingBarVisible, setIsLoadingBarVisible] = useState(false);

  const textArray = [
    "Passion",
    "User Experience",
    "Crafting Innovations",
    "Welcome to a New Realm...",
  ];

  useEffect(() => {
    let textIndex = 0;
    const textInterval = setInterval(() => {
      textIndex++;
      if (textIndex < textArray.length) {
        setDynamicText(textArray[textIndex]);
        setIsDarkMode((prev) => !prev);
      } else {
        clearInterval(textInterval);
        setIsLoadingBarVisible(true);
      }
    }, 1500);

    const loadingTimeout = setTimeout(() => {
      onLoadingComplete(); // Notify parent when loading is complete
    }, 8000);

    return () => {
      clearInterval(textInterval);
      clearTimeout(loadingTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center z-[9999] transition-colors duration-1000 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <p
        className={`text-3xl md:text-5xl text-center font-general font-bold mb-4 transition-colors duration-1000 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {dynamicText}
      </p>
      {isLoadingBarVisible && (
        <div className="w-[90%] h-1 bg-gray-700 mt-4 overflow-hidden">
          <div className="h-full bg-white animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (loadingComplete) {
      // Refresh ScrollTrigger after loading
      gsap.delayedCall(0.5, () => ScrollTrigger.refresh());
    }
  }, [loadingComplete]);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      {!loadingComplete && (
        <LoadingScreen onLoadingComplete={() => setLoadingComplete(true)} />
      )}
      {loadingComplete && (
        <>
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
