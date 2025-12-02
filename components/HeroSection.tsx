import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 border border-dashed border-gray-300 rounded-full animate-spin-slow opacity-50 hidden lg:block" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 left-[5%] w-32 h-32 border border-black opacity-20 rotate-12 hidden md:block" />

      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-block border-2 border-black px-4 py-1 rounded-full bg-white rotate-[-2deg]"
        >
          <span className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase">
            Est. 2025 • Jakarta
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl mb-6 leading-[0.9] tracking-tighter mix-blend-multiply">
          <span className="block hover:translate-x-2 transition-transform duration-300">WE ARE</span>
          <span className="block relative">
            <span className="relative z-10">VERSATILE</span>
            <span className="absolute top-1 left-1 text-gray-300 -z-10 select-none blur-[1px]">VERSATILE</span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-sans text-lg md:text-xl font-light leading-relaxed border-l-4 border-black pl-6 text-left italic bg-white/50 backdrop-blur-sm">
            "Kekinian ala anak kuliahan — retro black-and-white vibe, tapi tetap clean dan modern."
          </p>
          <p className="mt-4 font-mono text-sm text-gray-600 text-right">
            — THE COLLECTIVE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12"
        >
          <a
            href="#members"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-black font-serif focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <span className="absolute inset-0 transition-all duration-200 translate-x-1 translate-y-1 bg-white border-2 border-black group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-difference"></span>
            <span className="relative uppercase tracking-widest">Join the Circle</span>
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase writing-vertical-rl">Scroll</span>
        <div className="w-[1px] h-12 bg-black/50"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
