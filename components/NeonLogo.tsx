import React from 'react';
import { TeardropLogo } from './TeardropLogo';

const NeonLogo: React.FC = () => {
  return (
    <div className="relative group p-1 inline-block">
      {/* Glowing Neon Border Container (Sparking clockwise around the brand box) */}
      <div className="absolute inset-0 rounded-sm overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect
            className="neon-path"
            width="100%"
            height="100%"
            fill="none"
            stroke="url(#neonGradient)"
            strokeWidth="4"
            strokeDasharray="180 1320"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1500"
              to="0"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#FFB000" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 border border-amber-500/20 shadow-[0_0_30px_rgba(255,176,0,0.1)] rounded-sm" />
      </div>

      {/* Brand Box Content - Enlarged and Centered */}
      <div className="relative bg-black/80 backdrop-blur-2xl px-12 md:px-20 py-6 md:py-10 flex flex-col items-center justify-center gap-4 md:gap-6">
        
        {/* Line 1: RESIGRIP SPORTS - Racing Style */}
        <div className="racing-slant flex items-center justify-center w-full">
          <h1 className="text-white font-['Orbitron'] font-black italic text-3xl md:text-6xl tracking-tight uppercase leading-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)] text-center">
            RESIGRIP SPORTS
          </h1>
        </div>

        {/* Line 2: Logo + PORTUGAL */}
        <div className="flex items-center justify-center gap-4 md:gap-6 border-t border-white/10 pt-4 md:pt-6 w-full">
          {/* Logo Icon - Enlarged */}
          <TeardropLogo className="h-10 md:h-20 w-auto drop-shadow-[0_0_15px_rgba(255,176,0,0.4)]" />
          
          <span className="text-amber-500 font-['Syncopate'] font-bold text-xl md:text-4xl tracking-[0.3em] uppercase drop-shadow-[0_0_20px_rgba(255,176,0,0.6)] leading-none">
            PORTUGAL
          </span>
        </div>

        {/* Grid Overlay inside the box */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, #555 1px, transparent 1px)', 
               backgroundSize: '16px 16px' 
             }} />
      </div>

      {/* Clockwise Sparkling Amber Particle */}
      <div className="absolute -inset-2 pointer-events-none">
        <div className="spark-particle h-4 w-4 bg-amber-400 rounded-full absolute shadow-[0_0_25px_#FFB000,0_0_12px_#fff]" />
      </div>

      <style>{`
        .neon-path {
          filter: drop-shadow(0 0 6px #FFB000) drop-shadow(0 0 12px #FFB000);
        }
        
        .spark-particle {
           animation: orbit 4s linear infinite;
        }

        @keyframes orbit {
          0%   { left: 0%; top: 0%; transform: translate(-50%, -50%); opacity: 0; }
          5%   { opacity: 1; }
          25%  { left: 100%; top: 0%; transform: translate(-50%, -50%); }
          50%  { left: 100%; top: 100%; transform: translate(-50%, -50%); }
          75%  { left: 0%; top: 100%; transform: translate(-50%, -50%); }
          95%  { opacity: 1; }
          100% { left: 0%; top: 0%; transform: translate(-50%, -50%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default NeonLogo;