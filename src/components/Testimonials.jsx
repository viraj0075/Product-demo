import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null); // 🔥 store animation

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
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.3");

      // 🔥 Infinite loop animation
      const totalWidth = sliderRef.current.scrollWidth / 2;

      animationRef.current = gsap.to(sliderRef.current, {
        x: `-=${totalWidth}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      title: "Automating for Efficiency",
      desc: "DataWise has transformed the way we manage our operations."
    },
    {
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      title: "Data-Driven Growth",
      desc: "The insights we've gained helped us scale faster."
    },
    {
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      title: "Team Productivity",
      desc: "Our team productivity increased significantly."
    },
    {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
      title: "Better Insights",
      desc: "We finally understand why we get those results."
    }
  ];

  const handleNext = () => {
    gsap.to(sliderRef.current, {
      x: "-=300",
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const handlePrev = () => {
    gsap.to(sliderRef.current, {
      x: "+=300",
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section
      ref={containerRef}
      className="py-8 lg:py-14 overflow-hidden"
    >
      <div className="layout-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center lg:text-left mb-16 testim-header gap-6">
          <div className='flex flex-col items-center justify-center'>
            <span className="text-brand-primary text-base lg:text-xl font-bold tracking-wider uppercase mb-4 block">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Hear from Our Clients
            </h2>
          </div>

          {/* <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
              →
            </button>
          </div> */}
        </div>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => animationRef.current.pause()}
          onMouseLeave={() => animationRef.current.play()}
        >
          <div
            ref={sliderRef}
            className="flex gap-6"
          >
            {[...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                className="testim-card group relative rounded-3xl w-[280px] md:w-[320px] h-[400px] shrink-0 cursor-pointer overflow-hidden isolate"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt="Client"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="font-bold text-white mb-2">
                    {item.title}
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                    {item.desc}
                  </p>

                  <span className="text-brand-primary text-sm font-semibold hover:underline cursor-pointer">
                    Read full story →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}