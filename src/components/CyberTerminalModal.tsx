import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';

interface CyberTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const CyberTerminalModal: React.FC<CyberTerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'sys.init --session=CYBER_DECK',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-[#00ff66]">=== NOVI HERLAMBANG // CYBER TERMINAL v3.2.0 ===</p>
          <p className="text-[#62728b]">Connected to core memory node [PANGANDARAN_CLUSTER]. Type <span className="text-[#00f0ff] font-bold">help</span> to list commands.</p>
        </div>
      ),
      time: '00:00:01'
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sound.playTerminalKey();
    const time = new Date().toLocaleTimeString();
    setHistory((prev) => [...prev, inputVal]);
    setHistoryIndex(-1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-1">
            <div><span className="text-[#00f0ff] font-bold">about</span> - Identity telemetry & bio</div>
            <div><span className="text-[#00f0ff] font-bold">skills</span> - Hardware & software proficiencies</div>
            <div><span className="text-[#00f0ff] font-bold">projects</span> - View all 10 cyber archives</div>
            <div><span className="text-[#00f0ff] font-bold">edu</span> - Educational background</div>
            <div><span className="text-[#00f0ff] font-bold">exp</span> - Industry & freelance experience</div>
            <div><span className="text-[#00f0ff] font-bold">contact</span> - Communication channels</div>
            <div><span className="text-[#00f0ff] font-bold">cv</span> - Download official resume PDF</div>
            <div><span className="text-[#00f0ff] font-bold">matrix</span> - Overdrive cyber particle surge</div>
            <div><span className="text-[#00f0ff] font-bold">clear</span> - Wipe terminal viewport</div>
            <div><span className="text-[#ff007f] font-bold">sudo</span> - Elevated privilege test</div>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-[#00f0ff] font-bold">USER: {resumeData.profile.name} [{resumeData.profile.handle}]</p>
            <p>ROLE: {resumeData.profile.role}</p>
            <p>BORN: {resumeData.profile.birthPlace}, {resumeData.profile.birthDate}</p>
            <p>LOCATION: {resumeData.profile.location}</p>
            <p className="text-slate-400 mt-1">{resumeData.profile.shortBio}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2">
            <p className="text-[#00ff66] font-bold">// CORE STACK TELEMETRY:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {resumeData.skills.map((s) => (
                <div key={s.name} className="border border-[#1f2b48] bg-[#0d1322] p-1.5 rounded">
                  <span className="text-[#00f0ff]">{s.name}</span>: <span className="text-[#ff007f]">{s.level}%</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400">EXTENDED: {resumeData.additionalTech.join(' • ')}</p>
          </div>
        );
        break;

      case 'projects':
      case 'works':
        output = (
          <div className="space-y-2">
            <p className="text-[#00f0ff] font-bold">// 10 ARCHIVED SYSTEMS:</p>
            <div className="space-y-1.5 max-h-60 overflow-y-auto pr-2">
              {resumeData.projects.map((p, idx) => (
                <div key={p.id} className="text-xs border-b border-[#1f2b48] pb-1">
                  <span className="text-[#ff007f]">[{idx + 1}] {p.name}</span> <span className="text-[#62728b]">({p.categoryLabel})</span>
                  <p className="text-slate-400">{p.description}</p>
                  <div className="flex gap-3 text-[11px] text-[#00f0ff] mt-0.5">
                    {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">Live Demo</a>}
                    {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">GitHub Repo</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'edu':
        output = (
          <div className="space-y-1 text-slate-300">
            {resumeData.timeline.filter(t => t.type === 'education').map(e => (
              <div key={e.year}>
                <span className="text-[#00f0ff]">{e.year}</span> - <span className="font-bold">{e.title}</span> ({e.organization})
              </div>
            ))}
          </div>
        );
        break;

      case 'exp':
        output = (
          <div className="space-y-1 text-slate-300">
            {resumeData.timeline.filter(t => t.type === 'experience').map(e => (
              <div key={e.title}>
                <span className="text-[#ff007f]">{e.year}</span> - <span className="font-bold">{e.title}</span> [{e.organization}]
                <p className="text-xs text-slate-400">{e.desc}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300">
            <p>EMAIL: <span className="text-[#00f0ff]">{resumeData.profile.email}</span></p>
            <p>LOCATION: {resumeData.profile.location}</p>
            <p>GITHUB: https://github.com/NoviHe/</p>
            <p>LINKEDIN: https://www.linkedin.com/in/novi-herlambang/</p>
          </div>
        );
        break;

      case 'cv':
      case 'download':
        output = (
          <div className="text-[#00ff66]">
            Downloading Resume PDF...{' '}
            <a href={resumeData.profile.cvFile} download className="underline text-[#00f0ff]">
              Click here if download does not start
            </a>
          </div>
        );
        const link = document.createElement('a');
        link.href = resumeData.profile.cvFile;
        link.download = 'Resume-Novi-Herlambang.pdf';
        link.click();
        sound.playSuccess();
        break;

      case 'matrix':
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#ff007f', '#00ff66', '#fcee0a']
        });
        sound.playGlitch();
        output = <p className="text-[#00ff66] animate-pulse">*** NEURAL MATRIX OVERLOAD INITIATED ***</p>;
        break;

      case 'clear':
        setLogs([]);
        setInputVal('');
        return;

      case 'sudo':
      case 'sudo su':
        sound.playGlitch();
        output = (
          <p className="text-[#ff007f]">
            ACCESS DENIED: Nice try, Netrunner. Administrator clearance required.
          </p>
        );
        break;

      default:
        output = (
          <p className="text-[#ff007f]">
            COMMAND NOT RECOGNIZED: &quot;{cmd}&quot;. Type <span className="text-[#00f0ff] underline cursor-pointer" onClick={() => setInputVal('help')}>help</span> for valid operations.
          </p>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: inputVal,
        output,
        time,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < history.length) {
          setHistoryIndex(nextIdx);
          setInputVal(history[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl bg-[#080d1a] border-2 border-[#00f0ff] rounded-lg shadow-neon-cyan overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Header Bar */}
        <div className="bg-[#0f182c] border-b border-[#1f2b48] px-4 py-2.5 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-2 text-[#00f0ff]">
            <TerminalIcon className="w-4 h-4 text-[#00ff66]" />
            <span className="font-bold">CYBER_DECK_SHELL // root@novi-herlambang:~</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[#62728b] hidden sm:inline">ESC or CLOSE</span>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1 rounded hover:bg-[#ff007f] hover:text-black text-slate-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-slate-200 space-y-3 bg-[#060913]/90">
          {logs.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center space-x-2 text-[#62728b]">
                <span className="text-[#00ff66] font-bold">novi@cyber-os:~$</span>
                <span className="text-white font-semibold">{log.command}</span>
                <span className="text-[10px] ml-auto text-slate-500">[{log.time}]</span>
              </div>
              <div className="pl-4 border-l-2 border-[#1f2b48] py-0.5">{log.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-4 py-2 bg-[#0b101f] border-t border-[#19243d] flex items-center gap-1.5 overflow-x-auto text-[11px] text-[#62728b]">
          <span className="text-[#00f0ff] flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3" /> Quick:
          </span>
          {['help', 'about', 'skills', 'projects', 'exp', 'contact', 'cv', 'matrix', 'clear'].map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => {
                setInputVal(cmd);
                inputRef.current?.focus();
              }}
              className="px-2 py-0.5 bg-[#121a2e] hover:bg-[#00f0ff]/20 hover:text-[#00f0ff] rounded border border-[#1f2b48] transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0a0f1d] border-t border-[#1f2b48] flex items-center gap-2">
          <span className="text-[#00ff66] font-mono font-bold text-sm">$&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a cyber command (e.g. 'help', 'projects', 'contact')..."
            className="flex-1 bg-transparent border-0 text-[#00f0ff] font-mono text-xs focus:outline-none placeholder-[#3b4861]"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-[#00f0ff] text-black font-bold font-mono text-xs rounded hover:bg-white flex items-center gap-1 transition-colors"
          >
            <span>EXEC</span>
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
