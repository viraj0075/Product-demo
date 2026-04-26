import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCases } from '../constants/UseCases';

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // General fade up for header
      gsap.from('.animate-up', {
        scrollTrigger: {
          trigger: '.animate-up',
          start: "top 85%",
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Staggered cards
      const grids = gsap.utils.toArray('.stagger-grid');
      grids.forEach(grid => {
        gsap.from(grid.querySelectorAll('.stagger-card'), {
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            once: true

          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="layout-container py-8 lg:py-14">
      <div className="text-center mb-8 md:mb-12  animate-up">
        <span className="text-brand-primary text-base lg:text-xl font-bold tracking-wider uppercase mb-4 block">Real-World Applications</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Tailored for Every Industry
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Discover how modern teams use DataWise to eliminate guesswork, automate reporting, and turn raw metrics into predictable growth.
        </p>
      </div>

      <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {useCases.map((useCase, idx) => (
          <div key={idx} className="stagger-card h-full cursor-pointer">
            <div className="group h-full bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 hover:border-brand-primary/40 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] flex flex-col relative">
              <div className="w-full h-48 sm:h-56 overflow-hidden relative border-b border-white/5">
                <img src={useCase.img} alt={useCase.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-start relative z-10">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-3 group-hover:text-brand-primary transition-colors duration-300">{useCase.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{useCase.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
