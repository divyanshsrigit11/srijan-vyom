import React, { useState } from 'react';
import heroVideo from '../../assets/hero-bg.mp4';
import heroPoster from '../../assets/hero-bg.png';

const WelcomeHero = ({ t }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative w-full py-20 px-6 mt-10">
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[#0f172a] overflow-hidden relative shadow-2xl h-[400px] md:h-[500px]">
        <img 
          src={heroPoster} 
          alt="Hero Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-40'}`}
        />
        <video
          autoPlay loop muted playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-40' : 'opacity-0'}`}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent z-10"></div>

        <div className="relative z-20 p-12 md:p-20 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold">
            {t?.welcome || 'Welcome,'} <span className="text-blue-400">Divyansh!</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg mt-4">
            {t?.explore || 'Explore my latest creations in the Srijan-Vyom space.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;