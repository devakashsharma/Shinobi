import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the About section
    gsap.fromTo(
      aboutRef.current,
      { x: "100%", y: "50%", opacity: 0 }, // Initial state
      {
        x: "0%",
        y: "0%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%", // Trigger when the top of the section reaches 70% of the viewport
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div id="about" className="min-h-screen">
      <div
        ref={aboutRef}
        className="min-h-screen mt-20 w-full flex flex-col justify-center items-center"
      >
        <div className="mt-20">
          <h1 className="font-general font-bold text-4xl md:text-6xl mb-14">
            About
          </h1>
        </div>
        <div className="w-full bg-blue-600 py-16 shadow-lg">
          <div className="flex flex-col md:flex-row justify-around items-center w-full rounded-lg">
            {/* Image Container */}
            <div className="flex justify-center items-center w-full md:w-[40%] mb-8 md:mb-0">
              <div className="relative">
                <img
                  src="/img/about.webp"
                  alt="About Me"
                  className="w-72 h-72 rounded-full shadow-xl border-4 border-black"
                />
                {/* Decorative Circle */}
                <div className="absolute top-0 left-0 w-80 h-80 rounded-full border-2 border-dashed border-black animate-spin-slow -z-10"></div>
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col justify-center items-start w-full px-10 md:px-0 md:w-[50%] text-gray-200 font-circular-web space-y-6">
              <h1 className="text-4xl font-extrabold tracking-wide font-circular-web">
                Hey There!
              </h1>
              <p className="text-xl leading-relaxed">
                To all the Geeks 🧑‍💻 and Shinobis 🥷 around the World! 🚀 I'm a{" "}
                <span className="font-semibold">🦊 Shinobi</span>, named Akash
                Sharma—a Software Developer with the Spirit of the Nine-Tails,
                armed with the wisdom of the Hidden Leaf Village 🌳. Skilled in{" "}
                <span className="font-medium">software development</span>,{" "}
                <span className="font-medium">web development</span>, and{" "}
                <span className="font-medium">
                  machine learning applications
                </span>
                .
              </p>

              <div className="flex flex-col gap-3">
                <p className="font-circular-web text-xl">
                  Know more about me.
                </p>
                <div className="flex flex-row gap-3">
                  <a href="#">
                    <button
                      className="bg-[#DFDFF0] text-blue-600 rounded-lg font-general font-bold py-2 px-4 
                      hover:bg-white transition-colors duration-300 ease-in-out"
                    >
                      Resume
                    </button>
                  </a>
                  <a href="#contact">
                    <button
                      className="bg-[#DFDFF0] text-blue-600 rounded-lg font-general font-bold py-2 px-4 
                      hover:bg-white transition-colors duration-300 ease-in-out"
                    >
                      Contact
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
