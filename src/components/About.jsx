import React, { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Simple scroll-based animations using Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.1),
              0 0 40px rgba(103, 58, 183, 0.05);
          }
          50% {
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.15),
              0 0 60px rgba(103, 58, 183, 0.08);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }

        .shimmer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 3s infinite;
        }
      `}</style>

      <div
        id="about"
        className="min-h-screen relative overflow-hidden py-10 mt-24"
      >
        {/* Light Purple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-400 to-blue-100 opacity-70"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Elegant Floating Orbs - Adjusted for light purple */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-violet-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl animate-float-delayed"></div>
        </div>

        {/* Subtle Light Rays - Adjusted for light purple */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-300/15 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-300/15 to-transparent"></div>
        </div>

        <div
          ref={aboutRef}
          className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 opacity-0 translate-y-20 transition-all duration-1000 ease-out"
        >
          {/* Sophisticated Title */}
          <div className="text-center mb-16">
            <h1 className="font-bold font-general text-5xl md:text-6xl mb-4 text-slate-800">
              About Me
            </h1>
            {/* <div className="w-24 h-px bg-purple-400 mx-auto animate-pulse-glow"></div> */}
          </div>

          {/* Premium Glassmorphism Card */}
          <div className="w-full max-w-7xl bg-white/60 backdrop-blur-xl rounded-3xl border border-purple-200/10 shadow-xl p-8 md:p-16 relative overflow-hidden">
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/5 via-transparent to-blue-400/5 p-px">
              <div className="rounded-3xl bg-white/50 w-full h-full"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              {/* Refined Image Section */}
              <div
                ref={imageRef}
                className="flex-shrink-0 opacity-0 scale-90 rotate-1 transition-all duration-1000 ease-out delay-300"
              >
                <div className="relative group cursor-pointer">
                  {/* Main Image with Elegant Effects */}
                  <div className="relative">
                    <img
                      src="/img/person.png"
                      alt="Akash Sharma"
                      className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-xl border border-purple-200/20
                                          transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1
                                          group-hover:shadow-purple-400/20 group-hover:border-purple-300/30"
                    />

                    {/* Sophisticated Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/10 via-blue-400/5 to-violet-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl -z-10"></div>
                  </div>

                  {/* Minimal Rotating Elements */}
                  <div className="absolute -inset-6 border border-dashed border-purple-200/10 rounded-full animate-spin-slow"></div>
                  <div
                    className="absolute -inset-12 border border-blue-300/10 rounded-full animate-spin-slow"
                    style={{
                      animationDirection: "reverse",
                      animationDuration: "25s",
                    }}
                  ></div>

                  {/* Elegant Accent */}
                  {/* bg-gradient-to-r from-white to-blue-400 */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-200 rounded-full shadow-md animate-float flex items-center justify-center text-white text-lg">
                    ⚡
                  </div>
                </div>
              </div>

              {/* Refined Text Content */}
              <div
                ref={textRef}
                className="flex-1 space-y-6 opacity-0 translate-x-20 transition-all duration-1000 ease-out delay-500"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                    Hey There!
                    <span className="inline-block ml-2 text-3xl">👋</span>
                  </h2>
                  <div className="w-16 h-px bg-purple-400 rounded-full"></div>
                </div>

                <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                  <p className="text-slate-600">
                    To all the{" "}
                    <span className="font-semibold text-purple-600">
                      Geeks 🧑‍💻
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-blue-600">
                      Shinobis 🥷
                    </span>{" "}
                    around the World! 🌍
                  </p>

                  <p className="text-slate-700">
                    I'm{" "}
                    <span className="text-3xl md:text-4xl font-semibold text-indigo-700">
                      Akash Sharma
                    </span>
                    <br />
                    <span className="text-emerald-500 font-medium">
                      Software Developer
                    </span>{" "}
                    with the Spirit of the{" "}
                    <span className="text-orange-500 font-semibold">
                      Nine-Tails 🦊
                    </span>
                  </p>

                  <p className="text-slate-500 text-base md:text-md italic">
                    Armed with the wisdom of the{" "}
                    <span className="text-green-500 font-medium">
                      Hidden Leaf Village 🌳
                    </span>
                    , skilled in{" "}
                    <span className="text-cyan-500 font-medium">front-end</span>
                    ,{" "}
                    <span className="text-purple-500 font-medium">
                      back-end development
                    </span>
                    , and{" "}
                    <span className="text-pink-500 font-medium">
                      machine learning applications
                    </span>
                    .
                  </p>
                </div>

                {/* Premium CTA */}
                <div
                  ref={buttonsRef}
                  className="flex flex-col sm:flex-row items-center gap-4 pt-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-700"
                >
                  <a href="#contact" className="group">
                    <button
                      className="relative overflow-hidden bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 text-white font-semibold py-3 px-6 rounded-xl text-lg
                      transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-blue-400/50
                      border border-blue-200/20 hover:border-blue-300/30
                      before:absolute before:inset-0 before:bg-blue-400 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Let's Connect
                        <span className="group-hover:translate-x-1 transition-transform duration-300 text-xl">
                          ⚡
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
