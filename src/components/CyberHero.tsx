import React, { useState, useEffect } from 'react';
import { ArrowRight, Cpu, ShieldCheck, MapPin, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';
import { GithubIcon } from './GithubIcon';

interface CyberHeroProps {
  onOpenTerminal: () => void;
}

export const CyberHero: React.FC<CyberHeroProps> = ({ onOpenTerminal }) => {
  const roles = [
    'FULL STACK DEVELOPER',
    'LARAVEL ARCHITECT',
    'KOTLIN ANDROID DEV',
    'IOT & HARDWARE EXPLORER'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Decorative Cyber Background Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* System Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#0e1627] border border-[#00f0ff]/50 text-[#00f0ff] text-xs font-mono shadow-[0_0_12px_rgba(0,240,255,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
              <span>SYSTEM: ONLINE</span>
              <span className="text-[#3b4861]">|</span>
              <span className="text-[#ff007f]">IDENTITY: 20010926-CIAMIS</span>
            </div>

            {/* Main Greeting & Glitch Name */}
            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
                HELLO WORLD, I AM
              </p>
              
              <h1 
                data-text={resumeData.profile.name}
                className="glitch-text text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                {resumeData.profile.name}
              </h1>

              {/* Dynamic Typewriter Role */}
              <div className="h-10 flex items-center text-xl sm:text-2xl font-mono font-bold text-[#00f0ff] tracking-wide">
                <span>&gt; {displayText}</span>
                <span className="cursor-blink text-[#ff007f] font-normal">_</span>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-mono">
              {resumeData.profile.shortBio}
            </p>

            {/* Quick Meta Data Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-1 bg-[#0c1220] border border-[#1f2b48] px-2.5 py-1 rounded">
                <MapPin className="w-3.5 h-3.5 text-[#ff007f]" />
                <span>{resumeData.profile.location}</span>
              </div>
              <div className="flex items-center gap-1 bg-[#0c1220] border border-[#1f2b48] px-2.5 py-1 rounded">
                <Cpu className="w-3.5 h-3.5 text-[#00ff66]" />
                <span>SMKN 1 PADAHERANG (RPL)</span>
              </div>
              <div className="flex items-center gap-1 bg-[#0c1220] border border-[#1f2b48] px-2.5 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>FREELANCE READY</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                onClick={() => sound.playClick()}
                className="clip-cyber-btn px-6 py-3 bg-[#00f0ff] text-black font-bold font-mono text-sm hover:bg-white transition-all shadow-neon-cyan flex items-center gap-2 group"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => sound.playClick()}
                className="clip-cyber-btn px-6 py-3 bg-[#101728] border border-[#00f0ff]/50 text-[#00f0ff] font-bold font-mono text-sm hover:bg-[#00f0ff]/15 hover:border-[#00f0ff] transition-all flex items-center gap-2"
              >
                <span>HIRE ME</span>
              </a>

              <a
                href="https://github.com/NoviHe/"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-3 bg-[#101728] border border-[#1f2b48] text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all rounded"
                title="View GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <button
                onClick={() => {
                  sound.playSuccess();
                  onOpenTerminal();
                }}
                className="px-4 py-3 bg-[#120f24] border border-[#ff007f] text-[#ff007f] hover:bg-[#ff007f] hover:text-black font-mono font-bold text-xs rounded transition-all shadow-[0_0_10px_rgba(255,0,127,0.3)] flex items-center gap-1.5"
              >
                <Terminal className="w-4 h-4" />
                <span>CYBER_CLI</span>
              </button>
            </div>

            {/* Metrics HUD Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#1a253e]">
              {resumeData.profile.stats.map((stat) => (
                <div key={stat.label} className="bg-[#0a0f1d] border border-[#1b253b] p-3 rounded cyber-hud-border">
                  <div className="text-xl sm:text-2xl font-display font-black text-[#00f0ff]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#62728b] font-mono tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Holographic Cyber Avatar */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 group">
              
              {/* Outer Rotating Cyber Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-[#00f0ff]/40 rounded-full animate-spin [animation-duration:25s] pointer-events-none" />
              <div className="absolute -inset-2 border border-[#ff007f]/30 rounded-full animate-spin [animation-duration:40s] [animation-direction:reverse] pointer-events-none" />
              
              {/* Corner Target Markers */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff]" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff]" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#ff007f]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#ff007f]" />

              {/* Avatar Container with Glow */}
              <div className="w-full h-full rounded-full overflow-hidden p-3 bg-gradient-to-b from-[#0e1627] to-[#07090e] border-2 border-[#00f0ff] shadow-neon-cyan flex items-center justify-center relative">
                
                {/* Profile Image */}
                <img
                  src={resumeData.profile.avatar}
                  alt={resumeData.profile.name}
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534972195531-a756b1126f24?auto=format&fit=crop&w=600&q=80";
                  }}
                />

                {/* Subtle Scanline Bar on Avatar */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-transparent w-full h-12 animate-scanline pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#080d19]/90 border border-[#00ff66] text-[#00ff66] text-[10px] font-mono px-3 py-0.5 rounded-full shadow-[0_0_8px_rgba(0,255,102,0.4)] whitespace-nowrap">
                  VERIFIED: DEVELOPER
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-2 right-4 bg-[#0d1424] border border-[#00f0ff] text-[#00f0ff] text-xs font-mono px-3 py-1 rounded shadow-neon-cyan hidden sm:block">
                PHP / LARAVEL
              </div>
              <div className="absolute -bottom-2 left-4 bg-[#0d1424] border border-[#ff007f] text-[#ff007f] text-xs font-mono px-3 py-1 rounded shadow-neon-pink hidden sm:block">
                KOTLIN & IOT
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
