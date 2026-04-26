import { useEffect, useRef } from 'react';
import { features } from '../constants/FeaturesData';

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const idle = requestIdleCallback(() => {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const ctx = gsap.context(() => {
            gsap.from(".features-title", {
              y: 20,
              opacity: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                once: true
              }
            });

            gsap.from(".feature-card", {
              y: 25,
              opacity: 0,
              duration: 0.4,
              stagger: 0.08, // lighter
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                once: true
              }
            });

          }, containerRef);

          return () => ctx.revert();
        });
      });
    });

    return () => cancelIdleCallback(idle);
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-24 bg-brand-surface/20">

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 features-title">
          <span className="text-brand-primary text-xs sm:text-sm font-bold uppercase mb-3 block">
            Features
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
            AI-Powered Features to Grow Your Business
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card group bg-white/5 backdrop-blur-lg border border-white/10 p-5 sm:p-6 rounded-2xl hover:-translate-y-1.5 hover:border-purple-500/30 hover:shadow-[0_10px_25px_rgba(168,85,247,0.08)] transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105">
                <feature.icon className="text-purple-400 text-xl" />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}