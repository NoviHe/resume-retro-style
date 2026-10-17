import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';

export const CyberSkills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'Frontend' | 'Backend' | 'Mobile'>('ALL');

  const filteredSkills = activeFilter === 'ALL'
    ? resumeData.skills
    : resumeData.skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-20 relative border-t border-[#1a243d] bg-[#060810]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[#00ff66] font-mono text-xs tracking-wider mb-2">
              <span className="w-2 h-2 bg-[#00ff66] inline-block" />
              <span>SEC_02 // SYSTEM_CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              TECHNICAL <span className="text-[#00ff66]">ARSENAL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00ff66] via-[#00f0ff] to-transparent mt-2" />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {(['ALL', 'Backend', 'Frontend', 'Mobile'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  sound.playClick();
                  setActiveFilter(filter);
                }}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeFilter === filter
                    ? 'bg-[#00ff66] text-black font-bold shadow-[0_0_12px_rgba(0,255,102,0.4)]'
                    : 'bg-[#0e1627] text-slate-400 border border-[#1b263e] hover:border-[#00ff66]/50 hover:text-white'
                }`}
              >
                [{filter}]
              </button>
            ))}
          </div>
        </div>

        {/* Primary Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => sound.playHover()}
              className="bg-[#0b101c] border border-[#1b253b] hover:border-[#00f0ff] p-5 rounded-lg transition-all duration-300 group hover:-translate-y-1 hover:shadow-neon-cyan relative cyber-hud-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded bg-[#101728] border border-[#1f2b48] group-hover:border-[#00f0ff] p-2 flex items-center justify-center transition-colors">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="max-w-full max-h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141d33] text-[#62728b] group-hover:text-[#00f0ff] transition-colors">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-[#00f0ff] transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Progress Bar & Percentage */}
              <div className="mt-4 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#62728b]">PROFICIENCY</span>
                  <span className="text-[#00f0ff] font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#141b2c] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#00f0ff] to-[#00ff66] transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stack & Protocols Banner */}
        <div className="mt-12 bg-[#090e1a] border border-[#19243d] p-6 rounded-lg">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00f0ff] mb-4">
            <Sparkles className="w-4 h-4 text-[#00f0ff]" />
            <span className="font-bold">// EXTENDED TECHNOLOGIES, PROTOCOLS & TOOLING:</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {resumeData.additionalTech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded bg-[#10172a] border border-[#1f2b48] hover:border-[#00ff66] text-xs font-mono text-slate-300 hover:text-[#00ff66] transition-all cursor-default flex items-center space-x-1.5"
              >
                <span className="text-[#00ff66]">•</span>
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
