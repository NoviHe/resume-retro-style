import React from 'react';
import { ArrowUp } from 'lucide-react';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';

export const CyberFooter: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1a253e] bg-[#05070c] py-12 text-xs font-mono text-[#62728b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded bg-[#0d1627] border border-[#00f0ff] flex items-center justify-center text-[#00f0ff] font-bold font-display text-xs">
              NH
            </div>
            <div>
              <span className="text-white font-bold tracking-wider font-display">{resumeData.profile.name}</span>
              <span className="text-[#00f0ff] ml-2">// CYBER_DECK_OS</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-4">
            {resumeData.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="text-slate-400 hover:text-[#00f0ff] transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-[#0d1424] border border-[#1b253b] hover:border-[#00f0ff] text-slate-300 hover:text-[#00f0ff] transition-all"
          >
            <span>TOP_OF_DECK</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Telemetry metadata */}
        <div className="pt-6 border-t border-[#12192b] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Novi Herlambang. All systems operational. Built for high performance & free static deployment.
          </div>
          <div className="flex items-center space-x-3 text-[#4d5b72]">
            <span className="text-[#00ff66]">DEPLOY_READY: VERCEL / GITHUB_PAGES</span>
            <span>•</span>
            <span>REACT 19 + VITE + TAILWIND</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
