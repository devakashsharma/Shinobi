import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // State to track if the loading screen is visible
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Initialize GSAP animations after loading screen disappears
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 10%, 72% 8%, 95% 85%, 0% 100%)",
        borderRadius: "0 0 40% 10%",
      });

      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0 0 0 0",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.from(".text-greeting", {
        x: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".text-role", {
        x: "-100%",
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.from(".text-developer", {
        x: "-100%",
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power2.out",
      });

      // Refresh ScrollTrigger after animations are set up
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  // if (isLoading) {
  //   // Loading screen with dynamic text
  //   return (
  //     <div className="flex items-center justify-center h-screen w-screen bg-black">
  //       <div className="text-center text-white">
  //         <p className="text-2xl font-bold animate-fade">Welcome to my page</p>
  //         <p className="text-2xl font-bold animate-fade animation-delay-1">Enjoy the experience</p>
  //         <p className="text-2xl font-bold animate-fade animation-delay-2">Loading...</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/40 z-20"></div>

        <video
          src="videos/video1.mp4"
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <h1 className="hero-heading poppins-italic text-9xl poppins font-bold absolute bottom-8 right-5 z-40 text-blue-75">
          Akash
        </h1>

        <div className="absolute left-0 top-10 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <p className="text-greeting text-lg md:text-xl max-w-64 font-robert-regular space-x-2 text-white">
              Hey There!
              <br />
              I'm a
              <span className="text-role font-general italic font-bold text-xl md:text-2xl text-blue-300">
                Full Stack
              </span>
            </p>
            <h1 className="text-developer text-4xl poppins hero-heading poppins font-bold text-white">
              Developer
            </h1>
          </div>
        </div>
      </div>

      <h1 className="hero-heading poppins-italic absolute bottom-8 right-5 text-black">
        Akash
      </h1>
    </div>
  );
};

export default Hero;
