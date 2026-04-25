import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRobot, FaBolt, FaProjectDiagram } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function DataWiseConcept() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // General fade up for elements
      const animateElements = gsap.utils.toArray('.animate-up');
      animateElements.forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      // Staggered cards for Use Cases & Product Concept
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

      // Floating animation for mini dashboards
      gsap.to(".float-dashboard", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
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

  const futuristicFeatures = [
    {
      title: "AI Analytics & Predictive Intelligence",
      desc: "Instantly process millions of data points to uncover hidden trends. Leverage machine learning to forecast future revenue and customer behavior with pinpoint accuracy.",
      icon: <FaRobot />,
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      reverse: false
    },
    {
      title: "Real-Time Sync & Automated Reporting",
      desc: "Monitor your KPIs live with ultra-low latency updates. Schedule and generate boardroom-ready reports automatically, saving your team hours of manual work.",
      icon: <FaBolt />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      reverse: true
    },
    {
      title: "Deep Integrations & Smart Alerts",
      desc: "Connect seamlessly with CRM, Stripe, Google Analytics, and 50+ enterprise tools. Get notified of critical data anomalies instantly to take immediate action.",
      icon: <FaProjectDiagram />,
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      reverse: false
    }
  ];

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
    <div ref={containerRef} className="w-full bg-brand-dark overflow-hidden pt-12 pb-24 border-t border-white/5">
      
      {/* 1. PRODUCT CONCEPT (Hero-style + 3 Cards) */}
      <section className="layout-container mb-32">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-up">
          <span className="text-brand-primary text-sm font-bold tracking-wider uppercase mb-4 block">Product Concept</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-fuchsia-300">DataWise</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            DataWise is an advanced AI-powered platform that transforms raw, scattered business data into real-time, actionable insights. Make faster, smarter decisions through automation and intelligent analysis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-purple-600 hover:scale-105 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              See How It Works
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/10">
              View Live Demo
            </button>
          </div>
        </div>

        {/* 3-Card Grid (Like Image 3) */}
        <div className="stagger-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {conceptCards.map((card, idx) => (
            <div key={idx} className="stagger-card bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-primary/30 transition-colors group">
              <div className="w-full h-48 overflow-hidden relative">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 mix-blend-lighten" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10081c] to-transparent"></div>
              </div>
              <div className="p-8 pt-4">
                <h3 className="text-white font-bold text-xl mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. FUTURISTIC FEATURES (Zigzag Layout Like Image 1) */}
      <section className="layout-container mb-32">
        <div className="text-center mb-20 animate-up">
          <span className="text-brand-primary text-sm font-bold tracking-wider uppercase mb-4 block">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Futuristic Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our advanced AI algorithms meticulously analyze historical data and identify emerging patterns, ensuring your business is always a step ahead.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {futuristicFeatures.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 animate-up`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary text-2xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  {feature.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
                <div className="flex items-center gap-2 text-brand-primary text-sm font-semibold tracking-wide">
                  <span>✦</span> Embark on a journey of data-driven decision-making
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Image & Floating Dashboard */}
              <div className="flex-1 w-full relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
                </div>
                
                {/* Floating UI Element */}
                <div className={`absolute ${feature.reverse ? '-bottom-6 -right-6 lg:-bottom-10 lg:-right-10' : '-bottom-6 -left-6 lg:-bottom-10 lg:-left-10'} w-2/3 max-w-[280px] h-32 md:h-40 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col justify-between float-dashboard z-10`}>
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between h-16 gap-1.5">
                    {[40, 70, 45, 90, 60, 85, 50].map((h, i) => (
                      <div key={i} className="w-full bg-white/5 rounded-t-sm relative group">
                         <div className="absolute bottom-0 w-full bg-brand-primary rounded-t-sm transition-all duration-300 group-hover:brightness-125" style={{height: `${h}%`}}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. USE CASES (6-Card Grid Like Image 2) */}
      <section className="layout-container mb-16">
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

    </div>
  );
}
