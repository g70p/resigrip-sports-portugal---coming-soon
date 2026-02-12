
import React, { useEffect, useState } from 'react';
import PowderBackground from './components/PowderBackground';
import NeonLogo from './components/NeonLogo';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden select-none">
      {/* Texture Background layer */}
      <PowderBackground />

      {/* TOP-CENTER SECTION: Branding Header */}
      <header className={`absolute top-12 left-0 w-full z-20 flex justify-center px-4 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <NeonLogo />
      </header>

      {/* CENTER SECTION: Site Status */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <section className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="text-center flex flex-col items-center">
            <h3 className="text-white font-['Syncopate'] tracking-[0.4em] text-xl md:text-4xl uppercase mb-4 font-black drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Site em desenvolvimento
            </h3>
            
            {/* Amber line - Kit Car Aero styling */}
            <div className="h-[3px] w-48 md:w-80 bg-gradient-to-r from-transparent via-amber-500 to-transparent relative my-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-500 rotate-45 -translate-y-1/2 shadow-[0_0_15px_#fbbf24] border border-black" />
            </div>

            {/* Contact Email */}
            <div className={`mt-6 transition-all duration-1000 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="mailto:resigrip.portugal@gmail.com" 
                className="text-amber-500/90 hover:text-white font-['Orbitron'] text-sm md:text-xl tracking-[0.15em] transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,176,0,0.3)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] border-b border-transparent hover:border-white/20 pb-1"
              >
                resigrip.portugal@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* BOTTOM SECTION: Highlighted Category & Footer */}
      <footer className={`absolute bottom-12 left-0 w-full z-10 flex flex-col items-center transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Highlighted Category Banner */}
        <div className="mb-10 relative group">
          <div className="absolute -inset-4 bg-amber-500/5 blur-xl opacity-30 group-hover:opacity-100 transition-opacity" />
          <div className="relative border-y border-amber-500/20 py-4 px-12 md:px-24 bg-black/40 backdrop-blur-md">
            <p className="text-amber-500 font-['Orbitron'] text-xs md:text-lg tracking-[1em] font-black uppercase text-center drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
              ARTIGOS DE DESPORTO E LAZER
            </p>
          </div>
        </div>

        {/* Full Copyright */}
        <div className="text-gray-700 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-center px-4 max-w-2xl">
          ©2026 G70P
        </div>
      </footer>

      {/* Kit Car Style Accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-amber-500/5 to-transparent pointer-events-none" />
    </main>
  );
};

export default App;
