import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutUs from '../assets/About/About-us.gif';

gsap.registerPlugin(ScrollTrigger);

export default function Empowering() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      tl.from(".empower-tag", { y: 20, opacity: 0, duration: 0.5 })
        .from(".empower-title", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".empower-text", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".empower-stat", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".empower-link", { opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".empower-image", { y: 40, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.8");

      // Number counter animation
      const statElements = gsap.utils.toArray('.stat-num');
      statElements.forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'));
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';

        let counter = { val: 0 };
        gsap.to(counter, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          val: target,
          duration: 2.5,
          ease: "power2.out",
          onUpdate: function () {
            el.innerText = prefix + Math.ceil(counter.val) + suffix;
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="layout-container text-center lg:text-left py-8 lg:py-14" id="about">
      <div className="flex flex-col lg:flex-row lg:items-center items-center justify-center lg:justify-between gap-8 lg:gap-12">
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <span className="empower-tag text-brand-primary text-base lg:text-xl font-bold tracking-wider uppercase mb-4 block">About Us</span>
          <h2 className="empower-title text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            AI Innovation
          </h2>
          <p className="empower-text text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
           We help businesses unlock growth through advanced AI solutions. Since 2021, our team of expert data scientists and engineers has been building innovative, scalable technologies that turn complex data into real, actionable insights. We focus on improving efficiency, accelerating decision-making, and helping companies stay competitive in a rapidly evolving digital landscape.
          </p>

          <div className="flex flex-wrap gap-5 mb-10 justify-center lg:justify-normal">
            <div className="empower-stat">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 stat-num" data-target="32" data-suffix="+">0+</div>
              <div className="text-gray-400 text-sm">Years of Innovation</div>
            </div>
            <div className="empower-stat">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 stat-num" data-target="20">0</div>
              <div className="text-gray-400 text-sm">Global Countries</div>
            </div>
            <div className="empower-stat">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 stat-num" data-target="4000" data-suffix="+">0+</div>
              <div className="text-gray-400 text-sm">Project Community<br />Implement</div>
            </div>
          </div>

          {/* <a href="#about" className="empower-link text-brand-primary font-semibold hover:text-purple-400 flex items-center gap-2 transition-colors">
            Read more <span className="text-xl">→</span>
          </a> */}
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-lg mx-auto empower-image h-full">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
            <img
              src={AboutUs}
              alt="AI Voice Animation"
              className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
