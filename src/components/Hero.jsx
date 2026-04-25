import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaChartBar, FaRobot, FaStar } from "react-icons/fa";
import voiceGif from "../assets/Voice.gif";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-desc",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .from(
          ".hero-btns-wrapper",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-image-container",
          {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.4"
        );

      gsap.to(".float-card-1", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float-card-2", {
        y: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="layout-container pt-28 flex flex-col items-center text-center"
    >
      {/* TEXT CONTENT */}
      <div className="max-w-4xl space-y-6 z-10 mb-6 sm:mb-8 md:mb-16">
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          <span className="text-gray-300">Empower AI With </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-fuchsia-300">
            DataWise
          </span>
        </h1>

        <p className="hero-desc text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Introducing DataWise, our cutting-edge AI tool designed to transform your raw data into actionable, automated insights.
        </p>

        <div className="hero-btns-wrapper mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="w-fit mx-auto sm:mx-0 px-6 sm:px-8 py-3 sm:py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-purple-600 hover:scale-90 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] cursor-pointer">
            Explore Solutions
          </button>
          <button className="w-fit mx-auto sm:mx-0 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-pointer">
            Get Started
          </button>
        </div>
      </div>

      {/* BOTTOM VISUAL */}
      <div className="hero-image-container relative w-full max-w-7xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl md:rounded-4xl overflow-hidden border border-white/10 shadow-2xl bg-brand-surface/50">

        <img
          src={voiceGif}
          alt="Hero Animation"
          loading="lazy"
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 opacity-80 mix-blend-lighten pointer-events-none"
        />

        <div className="absolute inset-0 bg-linear-to-b from-brand-dark/10 via-transparent to-brand-dark/90 "></div>

        {/* Floating Card 1 */}
        <div className="float-card-1 absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-white/10 backdrop-blur-sm border border-white/20 p-4 md:p-5 rounded-2xl shadow-2xl hidden md:flex flex-col gap-4 w-44 sm:w-52 md:w-64">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaChartBar className="text-brand-primary text-sm" />
              <div className="h-2 w-12 md:w-16 bg-white/30 rounded-full"></div>
            </div>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full"></div>
          <div className="flex items-end justify-between h-14 md:h-20 pt-2 gap-1 md:gap-2">
            {[40, 70, 45, 90, 60, 85, 50, 75].map((height, i) => (
              <div key={i} className="w-full bg-white/10 rounded-t-sm relative">
                <div
                  className="absolute bottom-0 w-full bg-brand-primary rounded-t-sm"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Card 2 */}
        <div className="float-card-2 absolute top-4 right-4 md:top-10 md:right-10 bg-white/10 backdrop-blur-sm border border-white/20 p-2 md:p-4 rounded-full shadow-2xl flex items-center gap-2 md:gap-4">
          <div className="flex -space-x-2 md:-space-x-3">
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=32" className="w-full h-full object-cover" />
            </div>
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=47" className="w-full h-full object-cover" />
            </div>
            <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-brand-primary flex items-center justify-center">
              <FaStar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}