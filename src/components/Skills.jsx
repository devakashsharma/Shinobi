import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [bgColor, setBgColor] = useState("#f8fafc");
  const skillsRef = useRef(null);
  const skillItemRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const sectionTop = skillsRef.current.getBoundingClientRect().top;
        const sectionHeight = skillsRef.current.offsetHeight;
        const threshold = sectionHeight * 0.7;

        if (sectionTop < window.innerHeight - threshold) {
          setBgColor("#e2e8f0");
        } else {
          setBgColor("#f8fafc");
        }
      }
    };

    // GSAP Animations for heading
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: -50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // GSAP Animations for skill items
    const skillElements = skillItemRefs.current;

    gsap.fromTo(
      skillElements,
      {
        opacity: 0,
        scale: 0.5,
        y: 80,
        rotationY: 90,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
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
      className="min-h-screen w-full py-24 relative overflow-hidden"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Animated background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${bgColor === "#e2e8f0" ? "#64748b" : "#94a3b8"} 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          animation: 'drift 20s linear infinite',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold font-general mb-4 tracking-tight text-black"
            style={{
              background: "linear-gradient(135deg, #1e293b, #475569, #64748b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Skills
          </h1>
          {/* <div 
            className="w-24 h-1 mx-auto rounded-full"
            style={{
              background: "linear-gradient(90deg, #475569, #64748b, #94a3b8)",
            }}
          /> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillItemRefs.current[index] = el)}
              className={`group relative p-6 rounded-2xl transition-all duration-500 ease-out 
                         transform hover:scale-110 hover:-translate-y-2 cursor-pointer
                         ${bgColor === "#e2e8f0" 
                           ? "bg-white shadow-xl hover:shadow-2xl border border-slate-200" 
                           : "bg-slate-50 shadow-lg hover:shadow-xl border border-slate-100"
                         }`}
              style={{
                backdropFilter: "blur(10px)",
                boxShadow: bgColor === "#e2e8f0" 
                  ? "0 10px 40px rgba(71, 85, 105, 0.15), 0 0 0 1px rgba(148, 163, 184, 0.1)"
                  : "0 10px 40px rgba(71, 85, 105, 0.1), 0 0 0 1px rgba(148, 163, 184, 0.08)",
              }}
            >
              {/* Animated gradient overlay */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))"
                }}
              />
              
              {/* Skill icon */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-full h-full object-contain transition-all duration-500 
                               group-hover:scale-125 group-hover:rotate-12 filter 
                               group-hover:drop-shadow-lg"
                  />
                </div>
                
                {/* Skill name */}
                <span
                  className="text-sm font-medium text-center transition-all duration-300 
                             opacity-0 group-hover:opacity-100 transform translate-y-2 
                             group-hover:translate-y-0 text-slate-700"
                >
                  {skill.name}
                </span>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 
                               transition-all duration-1000 bg-indigo-400"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                      animationDelay: `${i * 0.2}s`,
                      animation: 'float 2s ease-in-out infinite',
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes drift {
          0% { transform: translateX(-50px) translateY(-50px); }
          100% { transform: translateX(50px) translateY(50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default Skills;