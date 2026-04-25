import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheckCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".cta-box", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="layout-container py-20">
      <div className="cta-box bg-gradient-to-br from-[#2a143f] to-brand-primary/20 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-brand-primary/30 relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/30 rounded-full blur-[80px]"></div>

        <div className="flex-1 z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Experience the Future of<br />Business Analytics
          </h2>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-white">
              <FaCheckCircle className="text-brand-primary" />
              <span>Real-time insights and predictive modeling</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <FaCheckCircle className="text-brand-primary" />
              <span>Seamless integration with your existing stack</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <FaCheckCircle className="text-brand-primary" />
              <span>Dedicated support from our experts</span>
            </div>
          </div>

          <button className="bg-white text-[#2a143f] hover:bg-brand-primary hover:text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
        </div>

        <div className="flex-1 relative z-10 w-full max-w-md hidden md:block">
          <div className="aspect-video bg-black/40 rounded-2xl border border-white/20 p-2 shadow-2xl backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
             <div className="w-full h-full bg-gradient-to-tr from-brand-surface to-purple-900/50 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 to-transparent"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
