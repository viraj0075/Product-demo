import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { features } from '../constants/FeaturesData';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true
        }
      });

      tl.from(".features-title", { y: 20, opacity: 0, duration: 0.6 })
        .from(".feature-card", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);



  return (
    <section ref={containerRef} className="py-24 bg-brand-surface/20">
      <div className="layout-container">
        <div className="text-center mb-16 features-title">
          <span className="text-brand-primary text-sm font-bold tracking-wider uppercase mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            Revolutionize Your Business with Our AI-Powered Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card group bg-brand-surface border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:border-brand-primary/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.05)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all duration-300">
                <feature.icon className="text-brand-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
