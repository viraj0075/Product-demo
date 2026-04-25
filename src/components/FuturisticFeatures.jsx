import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaRobot, FaBolt, FaProjectDiagram } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function FuturisticFeatures() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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

  return (
    <section ref={containerRef} className="layout-container py-8 lg:py-14">
      <div className="text-center mb-8 md:mb-12 animate-up">
        <span className="text-brand-primary text-base lg:text-xl font-bold tracking-wider uppercase mb-4 block">Capabilities</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Futuristic Features
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our advanced AI algorithms meticulously analyze historical data and identify emerging patterns, ensuring your business is always a step ahead.
        </p>
      </div>

      <div className="flex flex-col gap-20 lg:gap-32">
        {futuristicFeatures.map((feature, idx) => (
          <div key={idx} className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-12 lg:gap-16 animate-up`}>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary text-2xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                {feature.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {feature.title}
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-primary text-sm font-semibold tracking-wide">
                <span>✦</span> Embark on a journey of data-driven decision-making
              </div>
              <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl">
                {feature.desc}
              </p>
            </div>

            {/* Image & Floating Dashboard */}
            <div className="w-full lg:w-1/2 relative max-w-md lg:max-w-lg mx-auto">
              <div className="relative w-full aspect-video sm:aspect-4/3 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <img src={feature.img} alt={feature.title} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
