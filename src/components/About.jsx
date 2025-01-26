import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for complex animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%",
      },
    });

    // Animate entire section
    tl.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    )
      // Stagger image and text animations
      .fromTo(
        imageRef.current,
        { scale: 0.7, opacity: 0, rotate: -15 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        0.3 // Slight delay
      )
      .fromTo(
        textRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0.5 // More delay for staggered effect
      )
      .fromTo(
        buttonsRef.current.children,
        {
          opacity: 0,
          y: 20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "back.out(1.5)",
        }
      );
  }, []);

  return (
    <div id="about" className="min-h-screen">
      <div
        ref={aboutRef}
        className="min-h-screen mt-10 w-full flex flex-col justify-center items-center"
      >
        <div className="mt-5">
          <h1 className="font-general font-bold text-4xl md:text-6xl mb-14">
            About
          </h1>
        </div>
        <div className="w-full bg-blue-600 py-16 shadow-lg">
          <div className="flex flex-col md:flex-row justify-around items-center gap-10 w-full rounded-lg">
            {/* Image Container */}
            <div
              ref={imageRef}
              className="flex justify-center items-center w-full md:w-[40%] mb-8 md:mb-0"
            >
              <div className="relative group">
                <img
                  src="/img/Shinobi.jpg"
                  alt="About Me"
                  className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-black 
                             transition-transform duration-300 group-hover:scale-110"
                />
                {/* Decorative Circle with Enhanced Animation */}
                <div
                  className="absolute top-0 left-0 w-80 h-80 rounded-full 
                                border-2 border-dashed border-black 
                                animate-spin-slow -z-10 
                                group-hover:border-white 
                                transition-colors duration-500"
                ></div>
              </div>
            </div>

            {/* Text Container */}
            <div
              ref={textRef}
              className="flex flex-col justify-center text-amber-100 items-start w-full px-10 md:px-0 md:w-[50%] font-circular-web space-y-6"
            >
              <h1 className="text-4xl font-extrabold tracking-wide font-circular-web">
                Hey There!
              </h1>
              <p className="text-xl text-amber-100 font-light tracking-wide leading-relaxed">
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

              <div ref={buttonsRef} className="flex flex-col gap-3">
                <p className="font-circular-web text-xl text-amber-100">Know more about me.</p>
                <div className="flex flex-row gap-3">
                  <a href="https://drive.google.com/file/d/1YFx8Jk97ovAQDQTaQ6eSnlJazqSLxeiA/view?usp=sharing" target="_blank">
                    <button
                      className="bg-[#DFDFF0] text-blue-600 rounded-lg font-general font-bold py-2 px-4 
                      hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out 
                      transform hover:-translate-y-1"
                    >
                      Resume
                    </button>
                  </a>
                  <a href="#contact">
                    <button
                      className="bg-[#DFDFF0] text-blue-600 rounded-lg font-general font-bold py-2 px-4 
                      hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out 
                      transform hover:-translate-y-1"
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
