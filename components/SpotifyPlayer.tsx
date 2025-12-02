import React from 'react';
import { PLAYLIST_ID } from '../constants';

const SpotifyPlayer: React.FC = () => {
  return (
    <section id="playlist" className="py-20 bg-white border-y border-dashed border-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-display mb-4">MIXTAPE VOL. 1</h2>
            <p className="font-serif italic text-gray-600 mb-6">
              Songs that get us through deadlineless nights and endless coffee runs.
            </p>
            <div className="inline-block p-2 border border-black bg-gray-100 font-mono text-xs rotate-1">
              SIDE A: LO-FI STUDY
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            {/* Cassette Tape UI Wrapper */}
            <div className="relative bg-[#eee] p-4 rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Screw holes */}
              <div className="absolute top-2 left-2 w-3 h-3 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-0.5 bg-black rotate-45"></div></div>
              <div className="absolute top-2 right-2 w-3 h-3 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-0.5 bg-black rotate-45"></div></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-0.5 bg-black rotate-45"></div></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border border-black rounded-full flex items-center justify-center"><div className="w-1 h-0.5 bg-black rotate-45"></div></div>

              {/* Label Area */}
              <div className="bg-white border-2 border-black rounded-lg p-2 mb-4 relative overflow-hidden">
                <div className="h-2 border-b border-black mb-2 opacity-20"></div>
                <div className="h-2 border-b border-black mb-2 opacity-20"></div>
                <h3 className="font-handwriting text-center font-bold font-mono tracking-widest">VERSATILE'25</h3>
              </div>

              {/* Tape Window */}
              <div className="bg-gray-800 rounded-md p-3 relative h-32 flex items-center justify-center gap-4 overflow-hidden">
                 {/* Reels */}
                <div className="w-16 h-16 rounded-full border-4 border-white bg-transparent flex items-center justify-center animate-spin-slow" style={{ animationDuration: '8s' }}>
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-full h-12 bg-black absolute top-1/2 left-0 -translate-y-1/2 z-0 opacity-50"></div>
                <div className="w-16 h-16 rounded-full border-4 border-white bg-transparent flex items-center justify-center animate-spin-slow" style={{ animationDuration: '8s' }}>
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Actual Player Embedded invisibly over the top or below for functionality, 
                  but here we are styling a link/button as the embed API needs an iframe. 
                  We will use the iframe cleanly below the cassette aesthetic or inside it. 
                  For this design, let's put the iframe INSIDE a 'tray' below.
              */}
              <div className="mt-4 relative z-10">
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-md grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  title="Spotify Player"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpotifyPlayer;
