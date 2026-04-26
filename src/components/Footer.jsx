import React, { useEffect, useRef } from 'react';
import { BiChart } from 'react-icons/bi';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const idle = requestIdleCallback(() => {
      import('gsap').then(({ gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);

          const ctx = gsap.context(() => {
            gsap.from(".footer-col", {
              y: 30,
              opacity: 0,
              duration: 0.6,
              stagger: 0.1,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
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
    <footer ref={containerRef} className="relative py-16 sm:py-20 overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 max-w-6xl h-[300px] bg-purple-500/10 blur-[80px] rounded-full"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">

          {/* GRID (FIXED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">

            {/* Brand */}
            <div className="footer-col space-y-4 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2">
                <BiChart className="text-purple-400 text-2xl" />
                <span className="text-white text-xl font-bold">DataWise</span>
              </div>

              <p className="text-gray-400 text-sm max-w-xs">
                Empowering businesses with intelligent data solutions.
              </p>

              <div className="flex gap-3">
                {[FaTwitter, FaGithub, FaLinkedin].map((Icon, i) => (
                  <div key={i} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 transition">
                    <Icon className="text-gray-300 text-sm" />
                  </div>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="footer-col">
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Product */}
            <div className="footer-col">
              <h4 className="text-white text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-col space-y-4">
              <h4 className="text-white text-sm font-semibold">Stay Updated</h4>

              <p className="text-gray-400 text-sm">
                Get updates in your inbox.
              </p>

              {/* FIXED INPUT */}
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none"
                />
                <button className="px-4 py-2 rounded-lg bg-purple-500 text-white text-sm hover:bg-purple-600 transition">
                  Join
                </button>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-500 text-xs">
              © 2026 DataWise Inc.
            </p>

            <div className="flex gap-4 text-xs text-gray-500">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}