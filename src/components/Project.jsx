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
          { y: 50, opacity: 0 }, // Initial state (bottom and invisible)
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 80%", // Start animation when 80% of the viewport
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div id="project" className="min-h-screen bg-[#dfdff0] py-16 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-16 text-gray-800 font-general mt-6">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 poppins gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-white shadow-lg rounded-xl overflow-hidden 
                         transform transition-all duration-300 
                         hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 
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
                  className="inline-block font-general bg-blue-600 border-2 border-blue-600 text-white 
                             px-4 py-2 rounded-lg hover:bg-transparent hover:text-blue-600 
                             transition duration-300"
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
