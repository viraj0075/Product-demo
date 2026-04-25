import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaChartLine, FaRobot, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Collaboration() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      tl.from(".collab-title", { y: 20, opacity: 0, duration: 0.6 })
        .from(".collab-card", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      icon: FaChartLine,
      title: "Lead Generation",
      desc: "Identify and convert high-quality leads with precision targeting and advanced analytics."
    },
    {
      icon: FaRobot,
      title: "Smart Automations",
      desc: "Automate repetitive tasks to free up resources and enhance operational agility."
    },
    {
      icon: FaShieldAlt,
      title: "Risk Management",
      desc: "Proactively detect and mitigate potential threats with robust security frameworks."
    },
    {
      icon: FaLightbulb,
      title: "Predictive Analytics",
      desc: "Forecast trends and behaviors to make informed, data-backed strategic decisions."
    }
  ];

  return (
    <section ref={containerRef} className="layout-container py-24">
      <div className="text-center mb-16 collab-title">
        <span className="text-brand-primary text-sm font-bold tracking-wider uppercase mb-4 block">Collaboration Area</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          In Collaboration with<br />Industry Leaders
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="collab-card group border border-white/10 rounded-2xl p-8 hover:border-brand-primary/40 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 shrink-0 rounded-full bg-brand-surface flex items-center justify-center border border-white/10 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-colors">
                <item.icon className="text-xl text-gray-300 group-hover:text-brand-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                <a href="#" className="text-brand-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
