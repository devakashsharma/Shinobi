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

const LoadingScreen = ({ onLoadingComplete, videoSrc }) => {
  const [dynamicText, setDynamicText] = useState("Passion");
  const [stage, setStage] = useState('text');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const textArray = [
    "Passion",
    "Code & Creativity", 
    "UX Innovator", 
    "Hey There!👋",
    "I'm Akash",
    "A Shinobi 🥷"
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
        setStage('loading');
      }
    }, 1500);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    if (stage === 'loading') {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.oncanplaythrough = () => {
        onLoadingComplete();
      };
      video.load();
    }
  }, [stage, videoSrc, onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 flex flex-col justify-center items-center z-[9999] transition-colors duration-1000 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <p 
        className={`text-3xl md:text-5xl text-center font-general font-bold transition-colors duration-1000 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {dynamicText}
      </p>
      {stage === 'loading' && (
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
      gsap.delayedCall(0.5, () => ScrollTrigger.refresh());
    }
  }, [loadingComplete]);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      {!loadingComplete && (
        <LoadingScreen 
          onLoadingComplete={() => setLoadingComplete(true)}
          videoSrc="/videos/video1.mp4"
        />
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