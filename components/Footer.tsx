import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t-8 border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-display text-4xl mb-4">VERSATILE'25</h3>
            <p className="font-mono text-sm text-gray-400 max-w-xs leading-relaxed">
              A creative collective based in Jakarta. Exploring the intersection of student life, retro aesthetics, and modern web culture.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-end">
            <div className="text-right space-y-2 font-serif">
              <a href="#" className="block hover:underline hover:text-gray-300">Instagram</a>
              <a href="#" className="block hover:underline hover:text-gray-300">Twitter</a>
              <a href="#" className="block hover:underline hover:text-gray-300">Email Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
            © 2025 VERSATILE COLLECTIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="font-mono text-[10px] text-gray-500 animate-pulse">
            PRINTED IN INDONESIA_
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
