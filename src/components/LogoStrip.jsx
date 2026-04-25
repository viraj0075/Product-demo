import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaStripe,
  FaSlack,
  FaHubspot,
  FaApple,
  FaGithub,
  FaDropbox,
  FaDocker,
  FaSpotify,
} from "react-icons/fa";

export default function LogoStrip() {
  const stripRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const el = stripRef.current;

    // Horizontal infinite scroll
    animationRef.current = gsap.to(el, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const logos = [
    { icon: FaAws, name: "AWS" },
    { icon: FaGoogle, name: "Google Cloud" },
    { icon: FaMicrosoft, name: "Microsoft Azure" },
    { icon: FaStripe, name: "Stripe" },
    { icon: FaSlack, name: "Slack" },
    { icon: FaHubspot, name: "HubSpot" },
    { icon: FaApple, name: "Apple" },
    { icon: FaGithub, name: "GitHub" },
    { icon: FaDropbox, name: "Dropbox" },
    { icon: FaDocker, name: "Docker" },
    { icon: FaSpotify, name: "Spotify" },
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <section className="relative overflow-hidden py-8 lg:py-14">
      <div className="layout-container">

        {/* Heading */}
        <p className="text-center text-gray-400 text-xl mb-10 uppercase tracking-widest">
          Trusted by modern companies
        </p>

        {/* Hover area */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => animationRef.current?.pause()}
          onMouseLeave={() => animationRef.current?.play()}
        >
          <div
            ref={stripRef}
            className="flex w-max items-center gap-16 md:gap-24"
          >
            {loopLogos.map((Logo, idx) => (
              <div
                key={idx}
                className="logo-item flex items-center gap-3 text-white opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
              >
                <Logo.icon className="text-3xl md:text-4xl" />
                <span className="hidden md:block text-xl font-medium tracking-tight">
                  {Logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}