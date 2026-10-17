import React, { useState } from 'react';
import { CyberNavbar } from './components/CyberNavbar';
import { CyberHero } from './components/CyberHero';
import { CyberAbout } from './components/CyberAbout';
import { CyberSkills } from './components/CyberSkills';
import { CyberProjects } from './components/CyberProjects';
import { CyberTimeline } from './components/CyberTimeline';
import { CyberContact } from './components/CyberContact';
import { CyberFooter } from './components/CyberFooter';
import { CyberTerminalModal } from './components/CyberTerminalModal';

export const App: React.FC = () => {
  const [scanlines, setScanlines] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#c9d1d9] relative selection:bg-[#00f0ff] selection:text-black">
      {/* Optional CRT Scanlines Effect Overlay */}
      {scanlines && <div className="scanlines-overlay pointer-events-none" />}

      {/* Cyber HUD Navigation */}
      <CyberNavbar
        scanlines={scanlines}
        setScanlines={setScanlines}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <CyberHero onOpenTerminal={() => setTerminalOpen(true)} />
        <CyberAbout />
        <CyberSkills />
        <CyberProjects />
        <CyberTimeline />
        <CyberContact />
      </main>

      {/* Cyber Footer */}
      <CyberFooter />

      {/* Interactive CLI Terminal Modal */}
      <CyberTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
