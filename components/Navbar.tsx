import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/10 ${
          isScrolled ? 'bg-white/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-serif font-bold group-hover:rotate-12 transition-transform">
              V
            </div>
            <span className="font-display text-xl tracking-tight hidden sm:block">
              VERSATILE'25
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm tracking-wider hover:underline decoration-2 underline-offset-4 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:bg-black/5 rounded-md"
            onClick={() => setIsMobileOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "circInOut" }}
          >
            <button
              className="absolute top-6 right-6 p-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              <XIcon className="w-6 h-6" />
            </button>
            <div className="flex flex-col space-y-6 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-serif text-3xl font-bold hover:italic"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="absolute bottom-10 font-mono text-xs opacity-50">
              © VERSATILE'25
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
