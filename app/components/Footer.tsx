'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              LOGIC
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Health Management, LLC
            </p>
            <p className="text-gray-500 text-xs">
              © 2024 LOGIC Health Management, LLC. All rights reserved.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AWV</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">CCM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">RPM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">BHI</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;