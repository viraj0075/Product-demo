import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BiChart } from "react-icons/bi";
import { useLenis } from './SmoothScroll';


export default function Navbar() {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const lenis = useLenis();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('bg-brand-surface/80', 'shadow-xl', 'border-white/20');
        navRef.current.classList.remove('bg-brand-surface/30', 'border-white/10');
      } else {
        navRef.current.classList.remove('bg-brand-surface/80', 'shadow-xl', 'border-white/20');
        navRef.current.classList.add('bg-brand-surface/30', 'border-white/10');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (lenis) {
      lenis.scrollTo(targetId, {
        offset: -80, // Offset for fixed navbar
        duration: 1.5,
      });
    } else {
      // Fallback
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className="fixed top-3 left-0 w-full z-50">
        <div className="layout-container">
          <nav ref={navRef} className="w-full transition-all duration-300 bg-brand-surface/30 backdrop-blur-sm text-white border border-white/10 py-3 px-4 flex justify-between items-center rounded-2xl md:rounded-full">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => lenis?.scrollTo(0)}>
              <BiChart className="text-brand-primary text-xl group-hover:scale-110 transition-transform" />
              <span className="font-bold text-xl tracking-tight">DataWise</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
              <a href="#solutions" onClick={(e) => handleNavClick(e, '#solutions')} className="hover:text-brand-primary transition-colors">Solutions</a>
              <a href="#use-cases" onClick={(e) => handleNavClick(e, '#use-cases')} className="hover:text-brand-primary transition-colors">Use Cases</a>
              <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="hover:text-brand-primary transition-colors">Blog</a>
              <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-brand-primary transition-colors">About Us</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-brand-primary transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium hover:text-white text-gray-300 transition-colors">Log In</button>
              <button className="text-sm font-medium bg-brand-primary-dark hover:bg-purple-600 text-white px-5 py-2 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-2xl text-gray-300 hover:text-white transition-colors cursor-pointer relative w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
            >
              <div className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}>
                <FaBars />
              </div>
              <div className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
                <FaTimes />
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-sm flex flex-col items-center justify-start gap-6 pt-25 md:hidden transition-all duration-500 ease-out ${isMobileMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
      >
        <a href="#solutions" onClick={(e) => handleNavClick(e, '#solutions')} className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">Solutions</a>
        <a href="#use-cases" onClick={(e) => handleNavClick(e, '#use-cases')} className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">Use Cases</a>
        <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">Blog</a>
        <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">About Us</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-xl font-semibold text-gray-300 hover:text-white transition-colors">Contact</a>

        <div className="flex flex-col w-full max-w-[260px] gap-3 mt-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-full text-base font-medium text-white bg-brand-primary-dark py-3 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:bg-purple-600 transition-all hover:scale-105">
            Get Started
          </button>
          <button onClick={() => setIsMobileMenuOpen(false)} className="w-full text-base font-medium text-gray-300 hover:text-white py-3 border border-white/10 rounded-full hover:bg-white/5 transition-all">
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
