  import React, { useEffect, useRef } from 'react';
  import { BiChart } from 'react-icons/bi';
  import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  export default function Footer() {
    const containerRef = useRef(null);

    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.from(".footer-col", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true
          },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out"
        });

        gsap.from(".footer-bottom", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true
          },
          opacity: 0,
          duration: 1,
          delay: 0.5,
        });
      }, containerRef);

      return () => ctx.revert();
    }, []);

    return (
      <footer ref={containerRef} className="relative py-12 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 max-w-7xl h-[400px] bg-brand-primary/10 blur-[80px] rounded-full"></div>
        </div>

        <div className="layout-container relative z-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 shadow-[0_20px_80px_rgba(0,0,0,0.4)]
                          text-center lg:text-left">

            <div className="flex justify-between py-6">

              {/* Brand */}
              <div className="footer-col space-y-5 max-w-[260px] flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2">
                  <BiChart className="text-brand-primary text-2xl" />
                  <span className="text-white text-2xl font-bold">DataWise</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering businesses with intelligent, data-driven solutions for a smarter future.
                </p>

                <div className="flex gap-4 pt-2 justify-center lg:justify-start">
                  {[FaTwitter, FaGithub, FaLinkedin].map((Icon, i) => (
                    <div key={i} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-primary/20 hover:scale-110 transition-all cursor-pointer">
                      <Icon className="text-gray-300 text-sm" />
                    </div>
                  ))}
                </div>
              </div>

              <div className='flex justify-center gap-10 '>

                {/* Company */}
                <div className="footer-col space-y-4 flex flex-col items-center lg:items-start">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                    Company
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-brand-primary transition">About</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition">Careers</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition">Newsroom</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition">Contact</a></li>
                  </ul>
                </div>

                {/* Product */}
                <div className="footer-col space-y-4 flex flex-col items-center lg:items-start">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                    Product
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-brand-primary transition">Use Cases</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition">Pricing</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition">Integrations</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition">API</a></li>
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-col space-y-4 flex flex-col items-center lg:items-start max-w-xs">
                  <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
                    Stay Updated
                  </h4>

                  <p className="text-gray-400 text-sm">
                    Get product updates and insights directly in your inbox.
                  </p>

                  <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden w-full max-w-xs">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-transparent px-4 py-2 text-sm text-white outline-none w-full text-center lg:text-left"
                    />
                    <button className="bg-brand-primary-dark px-4 py-2 text-sm text-white hover:bg-purple-600 transition">
                      Join
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom border-t border-white/10 pt-6 flex flex-col md:flex-row
                            justify-center lg:justify-between items-center gap-4 text-center">

              <p className="text-gray-500 text-xs">
                © 2026 DataWise Inc. All rights reserved.
              </p>

              <div className="flex gap-6 text-xs text-gray-500">
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="hover:text-white transition">Terms</a>
                <a href="#" className="hover:text-white transition">Cookies</a>
              </div>

            </div>

          </div>
        </div>
      </footer>
    );
  }