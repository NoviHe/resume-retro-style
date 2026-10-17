import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { resumeData } from '../data/resumeData';

export const CyberContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.profile.email);
    setCopiedEmail(true);
    sound.playSuccess();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#ff007f', '#00ff66']
    });

    // Compose mailto matching original CV logic
    const { name, email, subject, message } = formData;
    const bodyText = `Halo Novi,\n\nNama: ${name || 'Anonymous'}\nEmail: ${email || '-'}\n\nPesan:\n${message || '-'}`;
    const mailtoUrl = `mailto:${resumeData.profile.email}?subject=${encodeURIComponent(subject || 'Inquiry Proyek dari Portfolio')}&body=${encodeURIComponent(bodyText)}`;

    setStatusMessage('Transmisi terkirim! Mengalihkan ke email client...');
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-[#1a243d]">
      
      {/* Freelance Availability Banner (from original CV) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0d172e] via-[#0b1d3a] to-[#120d2b] border border-[#00f0ff]/40 p-8 sm:p-12 text-center shadow-neon-cyan cyber-hud-border">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 bg-[#00ff66]/10 border border-[#00ff66] text-[#00ff66] text-xs font-mono rounded-full font-bold">
              ● STATUS: ACCEPTING NEW COMMISSIONS
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              DO YOU HAVE ANY <span className="text-[#00f0ff]">PROJECT?</span>
            </h2>

            <p className="text-slate-300 font-mono text-xs sm:text-sm">
              Tersedia untuk proyek freelance Full Stack web (Laravel, PHP), aplikasi mobile Android (Kotlin), sistem database, dan integrasi hardware IoT.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${resumeData.profile.email}`}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#00f0ff] hover:bg-white text-black font-display font-bold text-xs uppercase tracking-wider rounded shadow-neon-cyan transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>COMMISSION WORK NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-[#00f0ff] font-mono text-xs tracking-wider mb-2">
            <span className="w-2 h-2 bg-[#00f0ff] inline-block" />
            <span>SEC_05 // DIRECT_COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            CONTACT <span className="text-[#00f0ff]">ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-transparent mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Telemetry Contact Details */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            
            {/* Email Card */}
            <div className="bg-[#0b101c] border border-[#1b253b] hover:border-[#00f0ff] p-5 rounded-lg transition-all group cyber-hud-border">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded bg-[#101b2f] border border-[#00f0ff] flex items-center justify-center text-[#00f0ff]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[#62728b] text-[10px]">ELECTRONIC_MAIL</div>
                    <div className="text-white font-bold text-sm">{resumeData.profile.email}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-[#10192e] border border-[#1f2b48] hover:border-[#00f0ff] text-slate-300 hover:text-[#00f0ff] transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#0b101c] border border-[#1b253b] p-5 rounded-lg cyber-hud-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded bg-[#101b2f] border border-[#ff007f] flex items-center justify-center text-[#ff007f]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[#62728b] text-[10px]">BASE_COORDINATES</div>
                  <div className="text-white font-bold text-sm">{resumeData.profile.location}</div>
                  <div className="text-[10px] text-[#62728b] mt-0.5">{resumeData.profile.coordinates}</div>
                </div>
              </div>
            </div>

            {/* Direct Connect Options */}
            <div className="bg-[#0b101c] border border-[#1b253b] p-5 rounded-lg cyber-hud-border space-y-3">
              <div className="text-xs font-bold text-[#00f0ff]">// SOCIAL_NETWORKS</div>
              <div className="grid grid-cols-2 gap-2">
                {resumeData.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2 rounded bg-[#10192e] border border-[#1f2b48] hover:border-[#00f0ff] text-slate-300 hover:text-[#00f0ff] transition-all flex items-center gap-2"
                  >
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Transmission Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b101c] border border-[#1f2b48] p-6 sm:p-8 rounded-lg cyber-hud-border">
              
              <h3 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#00f0ff]" />
                SEND TRANSMISSION
              </h3>
              <p className="text-xs font-mono text-[#62728b] mb-6">
                Kirim pesan langsung. Form ini akan menyusun draft surat elektronik secara otomatis.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#62728b] block">YOUR_NAME *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Jensen"
                      className="w-full bg-[#070b14] border border-[#1f2b48] focus:border-[#00f0ff] text-slate-200 px-3.5 py-2.5 rounded focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#62728b] block">YOUR_EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full bg-[#070b14] border border-[#1f2b48] focus:border-[#00f0ff] text-slate-200 px-3.5 py-2.5 rounded focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#62728b] block">SUBJECT / PROYEK</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Pembuatan Aplikasi Web Laravel"
                    className="w-full bg-[#070b14] border border-[#1f2b48] focus:border-[#00f0ff] text-slate-200 px-3.5 py-2.5 rounded focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#62728b] block">TRANSMISSION_PAYLOAD (MESSAGE) *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Jelaskan kebutuhan proyek atau pesan Anda..."
                    className="w-full bg-[#070b14] border border-[#1f2b48] focus:border-[#00f0ff] text-slate-200 px-3.5 py-2.5 rounded focus:outline-none transition-colors resize-none"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 bg-[#00ff66]/10 border border-[#00ff66] text-[#00ff66] rounded flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#00f0ff] hover:bg-white text-black font-display font-bold text-xs uppercase tracking-wider rounded shadow-neon-cyan transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
