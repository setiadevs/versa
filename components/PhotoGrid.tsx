import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_PHOTOS } from '../constants';

const PhotoGrid: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-16 border-b-2 border-black pb-4">
          <h2 className="text-3xl md:text-5xl font-display">DOCUMENTATION</h2>
          <span className="font-mono text-sm hidden sm:block">[EST. 2025]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
              className="bg-white p-3 shadow-lg border border-gray-200 transition-all duration-300 group"
              style={{ transform: `rotate(${photo.rotation}deg)` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 border border-black/10">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>
              <div className="pt-4 pb-2 px-2 flex justify-between items-end">
                <p className="font-handwriting font-mono text-sm text-gray-800 uppercase tracking-tight">
                  #{photo.caption}
                </p>
                <span className="text-[10px] font-sans text-gray-400">
                  DEC '25
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;
