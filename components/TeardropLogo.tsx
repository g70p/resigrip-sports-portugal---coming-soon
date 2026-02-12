import React from 'react';

export const TeardropLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className="relative inline-block group/logo">
    {/* Amber particles spinning around the teardrop */}
    <div className="absolute inset-[-20%] pointer-events-none z-0">
      <div className="logo-particle p1" />
      <div className="logo-particle p2" />
      <div className="logo-particle p3" />
    </div>

    <svg 
      viewBox="0 0 100 130" 
      className={`teardrop-svg relative z-10 ${className}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient for the shimmering effect on the tree */}
        <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2D8A3C" />
          <stop offset="50%" stopColor="#6EE7B7">
            <animate
              attributeName="offset"
              values="-0.5; 1.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#2D8A3C" />
        </linearGradient>

        {/* Filter for the pulsing glow */}
        <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>{`
        .teardrop-svg {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease;
          transform-origin: center;
        }
        .teardrop-svg:hover {
          transform: scale(1.15);
          filter: drop-shadow(0 0 25px rgba(255, 176, 0, 0.75));
        }
        .teardrop-border {
          animation: borderPulse 4s ease-in-out infinite;
        }
        .tree-path {
          stroke: url(#shimmerGradient);
          filter: drop-shadow(0 0 1px rgba(110, 231, 183, 0.5));
        }
        @keyframes borderPulse {
          0%, 100% { stroke-width: 3.5; filter: drop-shadow(0 0 2px #FFB000); }
          50% { stroke-width: 5; filter: drop-shadow(0 0 10px #FFB000); }
        }

        /* Particle Animations */
        .logo-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FFB000;
          border-radius: 50%;
          box-shadow: 0 0 8px #FFB000, 0 0 4px #fff;
          opacity: 0.6;
        }
        
        .logo-particle.p1 { animation: spinAround 3s linear infinite; }
        .logo-particle.p2 { animation: spinAround 4.5s linear infinite reverse; animation-delay: -1s; }
        .logo-particle.p3 { animation: spinAround 6s linear infinite; animation-delay: -2.5s; }

        @keyframes spinAround {
          0% { transform: rotate(0deg) translateX(50px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); opacity: 0; }
        }

        .group\/logo:hover .logo-particle {
          opacity: 1;
          width: 6px;
          height: 6px;
          box-shadow: 0 0 12px #FFB000, 0 0 6px #fff;
        }
      `}</style>

      {/* Teardrop background with animated gold border */}
      <path
        className="teardrop-border"
        d="M50 5 C 50 5, 10 65, 10 90 A 40 40 0 1 0 90 90 C 90 65, 50 5, 50 5 Z"
        fill="#0a0a0a"
        stroke="#FFB000"
        strokeWidth="4"
      />

      {/* Pine tree inside with shimmering gradient */}
      <g strokeLinecap="round" className="tree-path">
        <line x1="50" y1="35" x2="50" y2="105" strokeWidth="3" />
        <path d="M50 45 L35 60 M50 45 L65 60" strokeWidth="3" fill="none" />
        <path d="M50 55 L30 75 M50 55 L70 75" strokeWidth="3" fill="none" />
        <path d="M50 65 L25 90 M50 65 L75 90" strokeWidth="3" fill="none" />
        <path d="M50 75 L22 105 M50 75 L78 105" strokeWidth="3" fill="none" />
      </g>
    </svg>
  </div>
);