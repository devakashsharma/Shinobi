import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState({
    status: null,
    message: ""
  });
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const formElements = inputRefs.current;
    const textElement = textRef.current;

    gsap.fromTo(
      formElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      textElement,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    emailjs.send(
      'service_bdv36ak', 
      'template_4j04jz7', 
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }, 
      'SDhhAOkaBnNh97eIU'
    )
    .then((response) => {
      setSubmitStatus({
        status: 'success',
        message: 'Message sent successfully!'
      });
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      setSubmitStatus({
        status: 'error',
        message: 'Failed to send message. Please try again.'
      });
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <div id="contact" className="min-h-screen bg-[#dfdff0] flex items-center justify-center p-6">
      <div className="flex flex-row justify-evenly items-center w-full max-w-5xl">
        <div 
          ref={textRef}
          className="w-1/2 pr-12"
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have a project in mind? I'd love to hear about it. 
            Send me a message, and let's create something amazing.
          </p>
        </div>

        <div
          ref={formRef}
          className="w-1/2 bg-white shadow-2xl rounded-2xl p-10 border-t-4 border-blue-500"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            Contact Form
          </h3>

          {submitStatus.status && (
            <div 
              className={`mb-4 p-3 rounded-lg text-center ${
                submitStatus.status === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {[
              { 
                label: "Name", 
                type: "text", 
                name: "name", 
                ref: (el) => (inputRefs.current[0] = el) 
              },
              { 
                label: "Email", 
                type: "email", 
                name: "email", 
                ref: (el) => (inputRefs.current[1] = el) 
              }
            ].map((field, index) => (
              <div 
                key={field.name} 
                ref={field.ref} 
                className="mb-4"
              >
                <label 
                  htmlFor={field.name} 
                  className="block text-gray-700 mb-2 font-medium"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 
                             rounded-lg focus:outline-none 
                             focus:border-blue-500 transition duration-300"
                />
              </div>
            ))}

            <div 
              ref={(el) => (inputRefs.current[2] = el)} 
              className="mb-6"
            >
              <label 
                htmlFor="message" 
                className="block text-gray-700 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 
                           rounded-lg focus:outline-none 
                           focus:border-blue-500 transition duration-300"
              />
            </div>

            <div 
              ref={(el) => (inputRefs.current[3] = el)} 
              className="text-center"
            >
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 
                           rounded-lg hover:bg-blue-600 
                           transition duration-300 ease-in-out 
                           transform hover:scale-105 font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;