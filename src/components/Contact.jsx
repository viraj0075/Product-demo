import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate header text
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate form fields
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="layout-container py-16 lg:py-24" id="contact">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="contact-header text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Send us a message
          </h2>
          <p className="contact-header text-gray-400 text-sm md:text-base leading-relaxed px-4 max-w-lg mx-auto">
            Have a question, suggestion, or just want to learn more about our innovative AI-powered analytics solutions? Get in touch!
          </p>
        </div>

        {/* Form */}
        <form 
          className="contact-form flex flex-col gap-6" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-field flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-400 text-sm font-medium ml-1">Email Address:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="example@email.com" 
              className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all duration-300"
            />
          </div>

          <div className="form-field flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-400 text-sm font-medium ml-1">Name:</label>
            <input 
              type="text" 
              id="name" 
              placeholder="John doe" 
              className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all duration-300"
            />
          </div>

          <div className="form-field flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-400 text-sm font-medium ml-1">Message:</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Your message..." 
              className="w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button className="form-field mt-4 w-full py-4 bg-brand-primary text-white font-semibold text-lg rounded-2xl hover:bg-purple-600 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-pointer">
            Submit
          </button>
        </form>

      </div>
    </section>
  );
}
