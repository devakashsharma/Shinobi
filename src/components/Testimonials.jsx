import React from "react";
import { myTestimonials } from "../constants/data";
import { FaQuoteLeft, FaLinkedin } from "react-icons/fa";

const Testimonials = ({ testimonials = myTestimonials }) => {
  return (
    <section className="min-h-screen w-full bg-blue-50 py-20 font-circular-web relative overflow-hidden">
      {/* Decorative background blobs - Switched to Blue/Cyan theme */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply animate-blob" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mt-10 mb-16">
          {/* <p className="font-general text-xs uppercase tracking-widest text-blue-500 mb-2">
            Community
          </p> */}
          <h2 className="font-bold font-general text-5xl md:text-6xl mb-4 text-slate-800">
            What People <span className="text-blue-500">Say</span>
          </h2>
          <p className="mt-6 font-robert-regular text-lg text-blue-200/60 max-w-xl mx-auto">
            Short testimonials from folks who’ve worked with me. Real stories,
            unfiltered and authentic.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="group relative flex flex-col justify-between bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote Icon Background (Watermark) */}
              <span className="absolute top-6 right-8 text-9xl text-blue-50 opacity-50 font-zentry select-none -z-0 group-hover:text-blue-500/10 transition-colors duration-300">
                "
              </span>

              <div className="relative z-10">
                {/* Message */}
                <div className="mb-6">
                  {/* Icon changed from yellow to blue-500 */}
                  <FaQuoteLeft className="text-blue-500 text-2xl mb-4 opacity-80" />
                  <p className="font-robert-medium text-blue-200/80 text-base leading-relaxed">
                    {t.message}
                  </p>
                </div>
              </div>

              {/* User Info */}
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-blue-50 mt-auto">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={`${t.name} avatar`}
                    // Hover ring changed to blue-500
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md group-hover:ring-blue-500 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://i.pravatar.cc/150?img=1";
                    }}
                  />
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Hover text changed to blue-500
                      className="absolute -bottom-1 -right-1 bg-white text-blue-300 hover:text-blue-500 rounded-full p-1 shadow-sm transition-colors"
                    >
                      <FaLinkedin size={12} />
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="font-general text-sm font-bold uppercase text-blue-200 tracking-wide">
                    {t.name}
                  </h3>
                  {t.role && (
                    <p className="font-robert-regular text-xs text-blue-200/50">
                      {t.role}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            // Button bg changed to blue-500
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-full font-general text-sm uppercase tracking-widest overflow-hidden hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">
              Share your experience
            </span>
            <span className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
