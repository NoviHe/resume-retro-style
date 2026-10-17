import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';
import type { ProjectItem } from '../data/resumeData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { GithubIcon } from './GithubIcon';

export const CyberProjects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'laravel' | 'php' | 'kotlin' | 'iot'>('ALL');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedFilter === 'ALL'
    ? resumeData.projects
    : resumeData.projects.filter((p) => p.category === selectedFilter);

  const filters = [
    { label: 'ALL_SYSTEMS', key: 'ALL', count: resumeData.projects.length },
    { label: 'LARAVEL', key: 'laravel', count: resumeData.projects.filter(p => p.category === 'laravel').length },
    { label: 'PHP_NATIVE', key: 'php', count: resumeData.projects.filter(p => p.category === 'php').length },
    { label: 'ANDROID_KOTLIN', key: 'kotlin', count: resumeData.projects.filter(p => p.category === 'kotlin').length },
    { label: 'IOT_HARDWARE', key: 'iot', count: resumeData.projects.filter(p => p.category === 'iot').length },
  ];

  return (
    <section id="projects" className="py-20 relative border-t border-[#1a243d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[#00f0ff] font-mono text-xs tracking-wider mb-2">
              <span className="w-2 h-2 bg-[#00f0ff] inline-block" />
              <span>SEC_03 // ARTIFACTS_AND_WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              FEATURED <span className="text-[#00f0ff]">PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-transparent mt-2" />
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  sound.playClick();
                  setSelectedFilter(f.key as typeof selectedFilter);
                }}
                className={`px-3 py-1.5 rounded transition-all flex items-center space-x-1.5 ${
                  selectedFilter === f.key
                    ? 'bg-[#00f0ff] text-black font-bold shadow-neon-cyan'
                    : 'bg-[#0e1526] text-slate-400 border border-[#1b253b] hover:border-[#00f0ff]/50 hover:text-white'
                }`}
              >
                <span>[{f.label}]</span>
                <span className="text-[10px] opacity-75">({f.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0b101c] border border-[#1b253b] hover:border-[#00f0ff] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-neon-cyan flex flex-col justify-between group cyber-hud-border"
            >
              <div>
                {/* Image Container with Cyber Corner Framing */}
                <div className="relative h-48 overflow-hidden bg-[#060810] border-b border-[#1b253b]">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#080d19]/90 border border-[#00f0ff]/50 text-[#00f0ff] text-[10px] font-mono px-2.5 py-0.5 rounded shadow">
                    {project.categoryLabel}
                  </div>

                  {/* Inspect Trigger Overlay */}
                  <button
                    onClick={() => {
                      sound.playClick();
                      setModalProject(project);
                    }}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white font-mono text-xs"
                  >
                    <Eye className="w-4 h-4 text-[#00f0ff]" />
                    <span className="text-[#00f0ff] font-bold">INSPECT SPECIFICATIONS</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#00f0ff] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-300 font-mono text-xs line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-[#11192e] border border-[#1e2a47] text-slate-300 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 pt-0 border-t border-[#141d33] flex items-center justify-between gap-2 mt-4 font-mono text-xs">
                <button
                  onClick={() => {
                    sound.playClick();
                    setModalProject(project);
                  }}
                  className="px-3 py-1.5 rounded bg-[#101728] border border-[#1e2b47] hover:border-[#00f0ff] text-slate-300 hover:text-[#00f0ff] transition-all flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>DETAILS</span>
                </button>

                <div className="flex items-center space-x-2">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3 py-1.5 rounded bg-[#00f0ff] text-black font-bold hover:bg-white transition-all shadow-neon-cyan flex items-center gap-1"
                      title="Launch Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>DEMO</span>
                    </a>
                  )}

                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playClick()}
                      className="p-1.5 rounded bg-[#12192e] border border-[#1e2b47] hover:border-[#ff007f] text-slate-300 hover:text-[#ff007f] transition-all"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      <ProjectDetailModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
