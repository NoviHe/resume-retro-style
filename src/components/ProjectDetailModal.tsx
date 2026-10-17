import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';
import type { ProjectItem } from '../data/resumeData';
import { GithubIcon } from './GithubIcon';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#090e1b] border-2 border-[#00f0ff] rounded-lg shadow-neon-cyan overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#0f172a] border-b border-[#1f2b48] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="font-display font-bold text-sm text-white tracking-wider">
              {project.name}
            </span>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-1 rounded hover:bg-[#ff007f] hover:text-black text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 font-mono text-xs text-slate-300">
          {/* Screenshot Preview */}
          <div className="relative rounded overflow-hidden border border-[#1f2b48] bg-[#05070e]">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-auto max-h-72 object-contain mx-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="absolute top-2 right-2 bg-black/70 border border-[#00f0ff] text-[#00f0ff] text-[10px] px-2 py-0.5 rounded">
              {project.categoryLabel}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-[#00f0ff] font-bold text-sm">// ARCHIVE OVERVIEW:</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-[#00ff66] font-bold">// TECH SPECIFICATIONS:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#10192e] border border-[#1f2b48] text-slate-200 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links & Actions */}
          <div className="pt-4 border-t border-[#1a253e] flex flex-wrap gap-3">
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-5 py-2.5 bg-[#00f0ff] text-black font-bold font-mono rounded hover:bg-white transition-all shadow-neon-cyan flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LAUNCH DEMO</span>
              </a>
            )}

            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-5 py-2.5 bg-[#12192d] border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff]/10 font-bold font-mono rounded transition-all flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
              </a>
            )}

            {(!project.demoUrl || project.demoUrl === '#') && (!project.githubUrl || project.githubUrl === '#') && (
              <div className="text-[#62728b] italic py-2">
                * Proyek arsip internal / client deployment. Demo publik tidak tersedia.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
