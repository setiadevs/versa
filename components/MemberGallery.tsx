import React from 'react';
import { motion } from 'framer-motion';
import { MEMBERS } from '../constants';
import { InstagramIcon, TwitterIcon, WhatsAppIcon } from './Icons';
import { Member } from '../types';

const socialIcons = {
  instagram: <InstagramIcon className="w-5 h-5" />,
  twitter: <TwitterIcon className="w-5 h-5" />,
  whatsapp: <WhatsAppIcon className="w-5 h-5" />,
};

const MemberGallery: React.FC = () => {
  return (
    <section id="members" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-4 bg-black skew-y-1"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl font-mono tracking-widest mb-16 relative inline-block left-1/2 -translate-x-1/2">
          <span className="bg-black text-white px-4 py-1">THE SQUAD</span>
          <span className="absolute -bottom-2 -right-2 w-full h-full border border-black -z-10"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-12">
          {MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              className="relative group cursor-pointer flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden border-2 border-black bg-gray-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                />
                
                {/* Sketchy Polaroid frame effect overlay */}
                <div className="absolute inset-0 border-[6px] border-white/0 group-hover:border-white/20 transition-all duration-300 pointer-events-none" />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                   <div className="flex space-x-4">
                    {member.socials.map((s, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="text-white hover:text-gray-300 hover:scale-110 transition-all p-2 border border-white/20 rounded-full"
                      >
                        {socialIcons[s]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center w-full">
                <div className="border-b border-black pb-1 mb-1 inline-block min-w-[80px]">
                   <span className="text-sm font-bold font-mono tracking-tight text-black group-hover:bg-black group-hover:text-white transition-colors px-1">
                    {member.name}
                  </span>
                </div>
                <p className="text-[10px] font-sans uppercase tracking-widest text-gray-500">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberGallery;
