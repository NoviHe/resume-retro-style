import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Monitor, FileDown, Menu, X, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';

interface CyberNavbarProps {
  scanlines: boolean;
  setScanlines: React.Dispatch<React.SetStateAction<boolean>>;
  audioEnabled: boolean;
  setAudioEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenTerminal: () => void;
}

export const CyberNavbar: React.FC<CyberNavbarProps> = ({
  scanlines,
  setScanlines,
  audioEnabled,
  setAudioEnabled,
  onOpenTerminal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cyberTime, setCyberTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const hours = String(d.getHours()).padStart(2, '0');
      const mins = String(d.getMinutes()).padStart(2, '0');
      const secs = String(d.getSeconds()).padStart(2, '0');
      setCyberTime(`${hours}:${mins}:${secs}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSoundToggle = () => {
    const state = sound.toggleSound();
    setAudioEnabled(state);
  };

  const navLinks = [
    { label: '01.ABOUT', href: '#about' },
    { label: '02.SKILLS', href: '#skills' },
    { label: '03.PROJECTS', href: '#projects' },
    { label: '04.TIMELINE', href: '#timeline' },
    { label: '05.CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090e]/90 backdrop-blur-md border-b border-[#1f2b48] text-xs">
      {/* Top Telemetry Strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#0b0f1a] border-b border-[#141d33] text-[11px] text-[#62728b]">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-[#00ff66]">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping inline-block mr-1.5" />
            SYS_ONLINE // DECK: ACTIVE
          </span>
          <span className="text-[#3b4861]">|</span>
          <span>{resumeData.profile.coordinates}</span>
          <span className="text-[#3b4861]">|</span>
          <span className="text-[#00f0ff] font-semibold flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" /> KERNEL: v2026.10
          </span>
        </div>
        <div className="flex items-center space-x-4 font-mono">
          <span className="text-[#00f0ff]">SYS_CLOCK: {cyberTime} WIB</span>
          <span className="text-[#3b4861]">|</span>
          <span className="text-[#ff007f]">{resumeData.profile.status}</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#home" 
          onClick={() => sound.playClick()}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-[#0d1627] border border-[#00f0ff] flex items-center justify-center text-[#00f0ff] shadow-neon-cyan font-bold font-display text-sm group-hover:scale-105 transition-transform">
            NH
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-widest text-[#00f0ff] group-hover:text-white transition-colors">
              NOVI_HERLAMBANG
            </span>
            <span className="text-[10px] text-[#62728b] tracking-wider">
              FULL_STACK_ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="px-2.5 py-1 text-slate-400 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 rounded border border-transparent hover:border-[#00f0ff]/30 transition-all font-mono tracking-wider"
            >
              <span className="text-[#00f0ff]/60 mr-1">//</span>{link.label}
            </a>
          ))}
        </div>

        {/* Controls: Audio, CRT, Terminal, CV */}
        <div className="hidden sm:flex items-center space-x-2">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            title={audioEnabled ? "Sound Effects: ON" : "Sound Effects: OFF"}
            className={`p-2 rounded border transition-all ${
              audioEnabled 
                ? 'bg-[#00ff66]/10 border-[#00ff66] text-[#00ff66] shadow-[0_0_8px_rgba(0,255,102,0.4)]' 
                : 'bg-[#121726] border-[#1f2b48] text-[#62728b] hover:text-[#00f0ff]'
            }`}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setScanlines(!scanlines);
            }}
            title={scanlines ? "Scanlines: ON" : "Scanlines: OFF"}
            className={`p-2 rounded border transition-all ${
              scanlines 
                ? 'bg-[#00f0ff]/10 border-[#00f0ff] text-[#00f0ff] shadow-neon-cyan' 
                : 'bg-[#121726] border-[#1f2b48] text-[#62728b] hover:text-[#00f0ff]'
            }`}
          >
            <Monitor className="w-4 h-4" />
          </button>

          {/* Terminal Shell Button */}
          <button
            onClick={() => {
              sound.playSuccess();
              onOpenTerminal();
            }}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#121726] border border-[#ff007f] text-[#ff007f] hover:bg-[#ff007f] hover:text-black font-semibold transition-all shadow-[0_0_10px_rgba(255,0,127,0.3)]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="tracking-wider">TERM_CLI</span>
          </button>

          {/* Download CV */}
          <a
            href={resumeData.profile.cvFile}
            download
            onClick={() => sound.playClick()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#00f0ff] text-black font-semibold hover:bg-white transition-all shadow-neon-cyan"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>RESUME.PDF</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090e]/95 border-b border-[#1f2b48] px-4 pt-3 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded flex items-center justify-center space-x-2 border ${
                audioEnabled ? 'border-[#00ff66] text-[#00ff66]' : 'border-[#1f2b48] text-[#62728b]'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>AUDIO: {audioEnabled ? 'ON' : 'OFF'}</span>
            </button>
            <button
              onClick={() => setScanlines(!scanlines)}
              className={`p-2 rounded flex items-center justify-center space-x-2 border ${
                scanlines ? 'border-[#00f0ff] text-[#00f0ff]' : 'border-[#1f2b48] text-[#62728b]'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>CRT: {scanlines ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 text-slate-300 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 border-l-2 border-transparent hover:border-[#00f0ff] font-mono"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                sound.playSuccess();
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full py-2 flex items-center justify-center space-x-2 border border-[#ff007f] text-[#ff007f] rounded bg-[#ff007f]/10"
            >
              <Terminal className="w-4 h-4" />
              <span>LAUNCH CYBER TERMINAL</span>
            </button>
            <a
              href={resumeData.profile.cvFile}
              download
              className="w-full py-2 flex items-center justify-center space-x-2 bg-[#00f0ff] text-black font-semibold rounded text-center"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
