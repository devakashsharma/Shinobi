// import React from 'react'
import { useState, useEffect } from "react";
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import CursorFollower from './components/Cursor'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const LoadingScreen = ({ onLoadingComplete }) => {
    const [dynamicText, setDynamicText] = useState("Welcome to my page");
    const textArray = [
      "Welcome to my page",
      "Enjoy the experience",
      "Crafting Innovations",
      "Loading...",
    ];
  
    useEffect(() => {
      let textIndex = 0;
      const textInterval = setInterval(() => {
        textIndex++;
        if (textIndex < textArray.length) {
          setDynamicText(textArray[textIndex]);
        } else {
          clearInterval(textInterval);
        }
      }, 1500); // 1.5 seconds per text
  
      // Simulate video loading duration
      const videoLoadTimeout = setTimeout(() => {
        onLoadingComplete();
      }, 6000); // Total duration: 6 seconds
  
      return () => {
        clearInterval(textInterval);
        clearTimeout(videoLoadTimeout);
      };
    }, [onLoadingComplete]);
  
    return (
      <div className="fixed inset-0 bg-black flex flex-col justify-center items-center text-white z-[9999]">
        <p className="text-5xl font-circular-web font-bold mb-4">{dynamicText}</p>
        {dynamicText === "Loading..." && (
          <div className="w-[90%] h-1 bg-gray-700 mt-4 overflow-hidden">
            <div className="h-full bg-white animate-pulse"></div>
          </div>
        )}
      </div>
    );
  };
  
  
const App = () => {

    const [loadingComplete, setLoadingComplete] = useState(false);

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <CursorFollower />
            <Navbar />
            {!loadingComplete && (
        <LoadingScreen onLoadingComplete={() => setLoadingComplete(true)} />
      )}
      {loadingComplete && <Hero />}
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}

export default App
