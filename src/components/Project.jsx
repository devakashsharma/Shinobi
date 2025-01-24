import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants/data";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    // Animate each project card from bottom to top
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Dynamic Background Animation
    gsap.to("#project", {
      background: "linear-gradient(135deg, #ffffff, #1a1a1a)",
      scrollTrigger: {
        trigger: "#project",
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      id="project"
      className="min-h-screen bg-[#ffffff] py-16 px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-16 text-gray-800 font-general mt-6">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 poppins gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-white shadow-md rounded-xl overflow-hidden 
                         transform transition-transform duration-300 
                         hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transition-transform 
                           duration-500 hover:scale-110"
              />

              <div className="p-6 relative">
                <h3
                  className="text-2xl font-semibold mb-3 text-gray-800 
                             hover:animate-pulse"
                >
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 text-gray-800 
                                 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-general bg-gray-800 border-2 border-gray-800 text-white 
                             px-4 py-2 rounded-lg hover:bg-transparent hover:text-gray-800 
                             transition-all duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
