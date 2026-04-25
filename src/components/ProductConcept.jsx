import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Product1 from "../assets/Product/p-1.gif"
import Product2 from "../assets/Product/p-2.gif"
import Product3 from "../assets/Product/p-3.gif"

gsap.registerPlugin(ScrollTrigger);

export default function ProductConcept() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {

      // Header animation
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

      // Updated stagger animation
      gsap.utils.toArray('.stagger-grid').forEach((grid) => {
        gsap.from(grid.querySelectorAll('.stagger-card'), {
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
          },
          y: 70,
          opacity: 0,
          scale: 0.92,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const conceptCards = [
    {
      title: "The Problem",
      desc: "Businesses struggle with scattered data, slow insights, and manual reporting. Decision-makers are drowning in data but starving for true clarity.",
      img: Product1
    },
    {
      title: "The Solution",
      desc: "DataWise centralizes all your scattered data into one hub, utilizes powerful AI to instantly generate insights, and automates your entire reporting workflow.",
      img: Product2
    },
    {
      title: "The Outcome",
      desc: "Save hundreds of hours, radically improve decision-making accuracy, and scale your growth with absolute confidence.",
      img: Product3
    }
  ];

  return (
    <section ref={containerRef} className="layout-container py-8 lg:py-14">

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 animate-up">
        <span className="text-brand-primary text-base lg:text-xl font-bold tracking-wider uppercase mb-4 block">
          Product Concept
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          What problem does <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-fuchsia-300">
            DataWise
          </span>{" "}
          solve ?
        </h2>

        {/* <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md lg:max-w-lg mx-auto mb-8">
          DataWise is an advanced AI-powered platform that transforms raw, scattered business data into real-time, actionable insights. Make faster, smarter decisions through automation and intelligent analysis.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 items-center">
          <button className="w-fit px-6 py-2.5 text-sm bg-brand-primary text-white font-medium rounded-full hover:bg-purple-600 hover:scale-105 transition-all shadow-[0_0_12px_rgba(168,85,247,0.35)]">
            See How It Works
          </button>

          <button className="w-fit px-6 py-2.5 text-sm bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all border border-white/10">
            View Live Demo
          </button>
        </div> */}
      </div>

      {/* Cards (Redesigned) */}
      <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {conceptCards.map((card, idx) => (
          <div key={idx} className={`stagger-card h-full cursor-pointer overflow-hidden ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <div className="group h-full rounded-2xl md:rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-500 hover:border-brand-primary/30 hover:shadow-[0_20px_50px_rgba(0,255,150,0.08)]">
              {/* Image */}
              <div className="relative w-full h-72 overflow-hidden rounded-t-4xl">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div> */}

                {/* Glow */}
                {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.25),transparent_70%)]"></div> */}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-brand-primary text-lg lg:text-xl font-semibold  mb-2 leading-snug">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {card.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}