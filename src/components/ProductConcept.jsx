import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductConcept() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // 🔹 Smooth fade + slight scale (more premium)
      gsap.utils.toArray('.animate-up').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power3.out"
        });
      });

      // 🔹 Cards animation (better stagger + slight rotation feel)
      gsap.utils.toArray('.stagger-grid').forEach((grid) => {
        gsap.from(grid.querySelectorAll('.stagger-card'), {
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const conceptCards = [
    {
      title: "The Problem",
      desc: "Businesses struggle with scattered data, slow insights, and manual reporting. Decision-makers are drowning in data but starving for true clarity.",
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Solution",
      desc: "DataWise centralizes all your scattered data into one hub, utilizes powerful AI to instantly generate insights, and automates your entire reporting workflow.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Outcome",
      desc: "Save hundreds of hours, radically improve decision-making accuracy, and scale your growth with absolute confidence.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section ref={containerRef} className="layout-container py-8 lg:py-14">

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-14 animate-up">
        <span className="text-brand-primary text-sm font-bold tracking-wider uppercase mb-4 block">
          Product Concept
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-fuchsia-300">
            DataWise
          </span>
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md lg:max-w-lg mx-auto mb-8">
          DataWise is an advanced AI-powered platform that transforms raw, scattered business data into real-time, actionable insights. Make faster, smarter decisions through automation and intelligent analysis.
        </p>

        {/* ✅ Smaller buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 items-center ">
          <button className="w-fit px-6 py-2.5 text-sm bg-brand-primary text-white font-medium rounded-full hover:bg-purple-600 hover:scale-105 transition-all shadow-[0_0_12px_rgba(168,85,247,0.35)]">
            See How It Works
          </button>

          <button className="w-fit px-6 py-2.5 text-sm bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all border border-white/10">
            View Live Demo
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="stagger-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {conceptCards.map((card, idx) => (
          <div
            key={idx}
            className="stagger-card bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-primary/30 transition-all duration-300 group hover:-translate-y-1"
          >
            <div className="w-full h-48 overflow-hidden relative">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10081c] to-transparent"></div>
            </div>

            <div className="p-6 pt-4">
              <h3 className="text-white font-semibold text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}