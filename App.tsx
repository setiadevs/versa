import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SpotifyPlayer from './components/SpotifyPlayer';
import PhotoGrid from './components/PhotoGrid';
import MemberGallery from './components/MemberGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-paper text-ink selection:bg-black selection:text-white">
      {/* Global noise texture overlay */}
      <div className="texture-overlay" />
      
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <SpotifyPlayer />
        <PhotoGrid />
        <MemberGallery />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
