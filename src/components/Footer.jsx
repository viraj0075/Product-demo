import React from 'react';
import { FaLeaf } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 bg-black">
      <div className="layout-container grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <FaLeaf className="text-brand-primary text-2xl" />
            <span className="font-bold text-2xl tracking-tight text-white">DataWise</span>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering businesses with intelligent, data-driven solutions for a smarter future.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">About Us<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Careers<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Newsroom<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">AI Analytics<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Automation<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Data Strategy<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Consulting<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-6">Resources</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Case Studies<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors relative group">Help Center<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span></a></li>
          </ul>
        </div>
      </div>

      <div className="layout-container pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs">© 2026 DataWise Inc. All rights reserved.</p>
        <div className="flex items-center gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
