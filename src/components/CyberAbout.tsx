import React from 'react';
import { User, Calendar, MapPin, GraduationCap, Briefcase, FileDown, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';

export const CyberAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-t border-[#1a243d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-[#00f0ff] font-mono text-xs tracking-wider mb-2">
            <span className="w-2 h-2 bg-[#00f0ff] inline-block" />
            <span>SEC_01 // DOSSIER_PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            ABOUT <span className="text-[#00f0ff]">THE_OPERATOR</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-transparent mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dossier Card */}
          <div className="lg:col-span-5 bg-[#0b101c] border border-[#1f2b48] p-6 rounded-lg cyber-hud-border space-y-6">
            <div className="flex items-center justify-between border-b border-[#1b253d] pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded bg-[#101b2f] border border-[#00f0ff] flex items-center justify-center text-[#00f0ff]">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">{resumeData.profile.name}</h3>
                  <p className="text-xs text-[#00ff66] font-mono">[SYS_OP // {resumeData.profile.handle}]</p>
                </div>
              </div>
              <span className="text-[10px] bg-[#00ff66]/10 text-[#00ff66] border border-[#00ff66]/30 px-2.5 py-1 rounded font-mono">
                CLEARED: L-4
              </span>
            </div>

            {/* Dossier Specs Table */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#151e33]">
                <span className="text-[#62728b] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" /> DATE OF BIRTH:
                </span>
                <span className="text-slate-200">{resumeData.profile.birthDate}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-[#151e33]">
                <span className="text-[#62728b] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ff007f]" /> ORIGIN:
                </span>
                <span className="text-slate-200">{resumeData.profile.birthPlace}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-[#151e33]">
                <span className="text-[#62728b] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00ff66]" /> BASE LOCATION:
                </span>
                <span className="text-slate-200">{resumeData.profile.location}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-[#151e33]">
                <span className="text-[#62728b] flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#fcee0a]" /> ALMA MATER:
                </span>
                <span className="text-slate-200 text-right">SMKN 1 Padaherang (RPL)</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-[#151e33]">
                <span className="text-[#62728b] flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#9d4edd]" /> AVAILABILITY:
                </span>
                <span className="text-[#00ff66] font-bold">FREELANCE / CONTRACT</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2">
              <p className="text-[11px] text-[#62728b] font-mono uppercase tracking-wider mb-3">
                // EXTERNAL_COMM_LINKS:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {resumeData.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    onMouseEnter={() => sound.playHover()}
                    className="p-2.5 rounded bg-[#0d1424] border border-[#1b253b] hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 text-xs font-mono text-slate-300 hover:text-[#00f0ff] transition-all flex items-center justify-between"
                  >
                    <span>{soc.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Official CV */}
            <div className="pt-2">
              <a
                href={resumeData.profile.cvFile}
                download
                onClick={() => sound.playSuccess()}
                className="w-full py-3 bg-gradient-to-r from-[#00f0ff] to-[#00a8ff] text-black font-display font-bold text-xs uppercase tracking-wider rounded shadow-neon-cyan hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF [OFFICIAL]</span>
              </a>
            </div>
          </div>

          {/* Right Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Story Card */}
            <div className="bg-[#0b101c] border border-[#1f2b48] p-6 sm:p-8 rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#ff007f]">&gt;&gt;</span>
                BIOGRAPHICAL SUMMARY
              </h3>

              <div className="space-y-4 text-slate-300 font-mono text-sm leading-relaxed">
                <p>
                  {resumeData.profile.shortBio}
                </p>
                <p>
                  {resumeData.profile.extendedBio}
                </p>
                <p className="text-slate-400">
                  Dengan pengalaman sejak bangku sekolah kejuruan hingga pengerjaan proyek sistem klien dan riset mandiri, saya selalu memprioritaskan arsitektur kode yang bersih (clean code), keamanan query database, serta performa aplikasi yang andal.
                </p>
              </div>

              {/* Highlight Quote */}
              <div className="mt-6 p-4 bg-[#070b14] border-l-4 border-[#00f0ff] rounded-r text-xs font-mono text-[#00f0ff]">
                &quot;Teknologi terbaik adalah teknologi yang mampu memecahkan masalah riil secara efisien, terukur, dan memberikan pengalaman intuitif bagi penggunanya.&quot;
              </div>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#0a0f1d] border border-[#1c263f] p-4 rounded cyber-hud-border">
                <div className="text-[#00f0ff] font-display font-bold text-sm mb-1">// BACKEND CORE</div>
                <p className="text-xs text-slate-400 font-mono">
                  Penguasaan mendalam framework Laravel & PHP murni, arsitektur MVC, ORM Eloquent, dan database design.
                </p>
              </div>

              <div className="bg-[#0a0f1d] border border-[#1c263f] p-4 rounded cyber-hud-border">
                <div className="text-[#ff007f] font-display font-bold text-sm mb-1">// MOBILE NATIVE</div>
                <p className="text-xs text-slate-400 font-mono">
                  Pengembangan aplikasi Android menggunakan Kotlin, konsumsi REST API, ViewModel, dan responsif UI.
                </p>
              </div>

              <div className="bg-[#0a0f1d] border border-[#1c263f] p-4 rounded cyber-hud-border">
                <div className="text-[#00ff66] font-display font-bold text-sm mb-1">// HARDWARE / IOT</div>
                <p className="text-xs text-slate-400 font-mono">
                  Eksplorasi sensor pintar, otomasi relay, mikrokontroler Arduino & ESP8266 untuk sistem Smart Home.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
