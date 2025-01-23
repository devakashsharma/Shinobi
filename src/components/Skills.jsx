import React, { useState, useEffect, useRef } from "react";
import { skills } from "../constants/data";

const Skills = () => {
  const [bgColor, setBgColor] = useState("#dfdff0");
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const sectionTop = skillsRef.current.getBoundingClientRect().top;
        const sectionHeight = skillsRef.current.offsetHeight;

        // Calculate when the user has scrolled 30% into the Skills section
        const threshold = sectionHeight * 0.9;

        if (sectionTop < window.innerHeight - threshold) {
          setBgColor("#ffee32"); 
        } else {
          setBgColor("#dfdff0");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="skills"
      ref={skillsRef}
      className="min-h-screen w-full py-20"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-general text-center mb-12">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
