import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [bgColor, setBgColor] = useState("#dfdff0");
  const skillsRef = useRef(null);
  const skillItemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const sectionTop = skillsRef.current.getBoundingClientRect().top;
        const sectionHeight = skillsRef.current.offsetHeight;
        const threshold = sectionHeight * 0.7;

        if (sectionTop < window.innerHeight - threshold) {
          setBgColor("#ffee32"); 
        } else {
          setBgColor("#dfdff0");
        }
      }
    };

    // GSAP Animations
    const skillElements = skillItemRefs.current;
    
    gsap.fromTo(
      skillElements,
      { 
        opacity: 0, 
        scale: 0.7,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="skills"
      ref={skillsRef}
      className="min-h-screen w-full py-20"
      style={{ backgroundColor: bgColor, transition: "background-color 0.5s ease" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-general text-center mb-12">
          My Skills
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={el => skillItemRefs.current[index] = el}
              className="bg-white p-4 rounded-xl shadow-lg flex items-center justify-center 
                         hover:shadow-2xl transition-all duration-300 ease-in-out 
                         transform hover:scale-110 hover:rotate-6 cursor-pointer 
                         group relative overflow-hidden"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain transition-transform duration-300 
                           group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 
                              transition-opacity duration-300 rounded-xl"></div>
              <span className="absolute bottom-0 left-0 right-0 text-center text-xs 
                               bg-gray-100 opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300 py-1">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;