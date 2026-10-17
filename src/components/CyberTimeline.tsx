import React, { useState } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';

export const CyberTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'experience' | 'education'>('ALL');

  const filteredItems = filter === 'ALL'
    ? resumeData.timeline
    : resumeData.timeline.filter((item) => item.type === filter);

  return (
    <section id="timeline" className="py-20 relative border-t border-[#1a243d] bg-[#060810]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[#ff007f] font-mono text-xs tracking-wider mb-2">
              <span className="w-2 h-2 bg-[#ff007f] inline-block" />
              <span>SEC_04 // TIMELINE_LOGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              EDUCATION & <span className="text-[#ff007f]">EXPERIENCE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff007f] via-[#00f0ff] to-transparent mt-2" />
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 text-xs font-mono">
            {(['ALL', 'experience', 'education'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  sound.playClick();
                  setFilter(tab);
                }}
                className={`px-3 py-1.5 rounded transition-all uppercase ${
                  filter === tab
                    ? 'bg-[#ff007f] text-black font-bold shadow-neon-pink'
                    : 'bg-[#0e1526] text-slate-400 border border-[#1b253b] hover:border-[#ff007f]/50 hover:text-white'
                }`}
              >
                [{tab}]
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Circuit Graph */}
        <div className="relative border-l-2 border-[#1c2948] ml-4 md:ml-32 pl-6 sm:pl-8 space-y-8">
          {filteredItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="relative group">
              
              {/* Circuit Connector Node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#0a0f1d] border-2 border-[#00f0ff] group-hover:border-[#ff007f] group-hover:shadow-neon-pink flex items-center justify-center transition-all">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] group-hover:bg-[#ff007f]" />
              </div>

              {/* Year Stamp on Desktop (Left of line) */}
              <div className="hidden md:block absolute -left-36 top-1.5 text-right w-24 text-xs font-mono font-bold text-[#00f0ff]">
                {item.year}
              </div>

              {/* Content Card */}
              <div className="bg-[#0b101c] border border-[#1b253b] group-hover:border-[#00f0ff]/50 p-5 rounded-lg transition-all duration-300 cyber-hud-border">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    {item.type === 'experience' ? (
                      <span className="p-1 rounded bg-[#ff007f]/10 text-[#ff007f]">
                        <Briefcase className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="p-1 rounded bg-[#00f0ff]/10 text-[#00f0ff]">
                        <GraduationCap className="w-4 h-4" />
                      </span>
                    )}
                    <h3 className="font-display font-bold text-base text-white group-hover:text-[#00f0ff] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Badge */}
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10192e] border border-[#1f2b48] text-[#00ff66]">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#00f0ff] mb-2 flex items-center gap-1.5">
                  <span>{item.organization}</span>
                  <span className="md:hidden text-[#62728b]">• {item.year}</span>
                </div>

                <p className="text-xs font-mono text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
