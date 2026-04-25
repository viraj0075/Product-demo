import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  const useCases = [
    {
      title: "E-commerce Optimization",
      desc: "Predict buying patterns, reduce cart abandonment, and optimize stock levels dynamically with intelligent forecasting.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Startup Growth Acceleration",
      desc: "Leverage an automated, all-in-one growth dashboard to analyze scattered user metrics despite limited resources.",
      img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Marketing Campaign ROI",
      desc: "Unify ad spend data across all platforms to pinpoint highest-converting campaigns and maximize marketing ROI.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Enterprise Data Hub",
      desc: "Break down silos across global departments and centralize petabytes of data into a single, unified source of truth.",
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Financial Forecasting",
      desc: "Automate financial reporting, detect anomalies instantly, and streamline your entire month-end reconciliation process.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Healthcare Data Analysis",
      desc: "Safely process patient data trends to optimize hospital resource allocation and improve overall patient care outcomes.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section ref={containerRef} className="layout-container py-24 border-t border-white/5">
      <div className="text-center mb-16 animate-up">
        <span className="text-brand-primary text-sm font-bold tracking-wider uppercase mb-4 block">Integration</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Seamless Integration with Your <br className="hidden md:block"/> Existing Tech Ecosystem
        </h2>
      </div>

      <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {useCases.map((useCase, idx) => (
          <div key={idx} className="stagger-card bg-brand-surface/40 border border-white/5 rounded-3xl overflow-hidden hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-full h-48 overflow-hidden relative">
              <img src={useCase.img} alt={useCase.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 mix-blend-lighten" />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
            </div>
            <div className="p-8">
              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-brand-primary transition-colors">{useCase.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{useCase.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
