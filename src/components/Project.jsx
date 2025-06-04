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
              start: "top 100%",
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
    <div id="project" className="py-20 bg-[#ffffff] px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gray-800 font-general mt-6">
          Feature Projects
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
                className="w-full max-h-[200px] object-cover transition-transform 
                   duration-500 hover:scale-110"
              />

              <div className="p-6 relative">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {project.name}
                </h3>

                {/* Updated description with quote styling */}
                <div className="relative mb-4 pl-4 border-l-4 border-black bg-gray-200 py-3 px-4 rounded-r-lg">
                  <p className="text-gray-600 text-sm font-robert-regular line-clamp-3 italic">
                    {project.description}
                  </p>
                </div>

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
                  className="inline-flex items-center justify-center gap-2 text-sm font-general bg-gray-800 border-2 border-gray-800 text-white 
             px-4 py-2 rounded-lg hover:bg-transparent hover:text-gray-800 
             transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="flex-shrink-0"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Visit GitHub
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
