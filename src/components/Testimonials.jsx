import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      tl.from(".testim-header", { y: 20, opacity: 0, duration: 0.6 })
        .from(".testim-card", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out"
        }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 border-t border-white/5 bg-brand-surface/20">
      <div className="layout-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 testim-header gap-6">
          <div>
            <span className="text-brand-primary text-sm font-bold tracking-wider uppercase mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Hear from Our Clients</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
              ←
            </button>
            <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testim-card group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[450px]">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" alt="Client" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="font-bold text-white mb-2">Automating for Efficiency</div>
              <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-4">
                "DataWise has transformed the way we manage our operations. The automated processes have saved us countless hours and significantly reduced errors."
              </p>
              <div className="flex items-center justify-between">
                 <span className="text-brand-primary text-sm font-semibold hover:underline cursor-pointer">Read full story →</span>
              </div>
            </div>
          </div>

          <div className="testim-card group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[450px]">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" alt="Client" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="font-bold text-white mb-2">Data-Driven Growth</div>
              <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-4">
                "The insights we've gained from DataWise's analytics platform have been instrumental in driving our strategic decisions and accelerating growth."
              </p>
              <div className="flex items-center justify-between">
                 <span className="text-brand-primary text-sm font-semibold hover:underline cursor-pointer">Read full story →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
