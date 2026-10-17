// Retro 8-bit & Cyber Sound Generator using Web Audio API
// Zero external audio files required!

class CyberAudio {
  private ctx: AudioContext | null = null;
  public enabled: boolean = false; // defaults to off to adhere to browser autoplay policies

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound(): boolean {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.initCtx();
      this.playBeep(880, 'sine', 0.1, 0.1);
    }
    return this.enabled;
  }

  public playBeep(freq = 440, type: OscillatorType = 'sine', duration = 0.08, vol = 0.05) {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public playClick() {
    if (!this.enabled) return;
    this.playBeep(1200, 'square', 0.03, 0.03);
  }

  public playHover() {
    if (!this.enabled) return;
    this.playBeep(600, 'triangle', 0.02, 0.02);
  }

  public playSuccess() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.04, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.15);
      });
    } catch {
      // audio suppression
    }
  }

  public playGlitch() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [180, 420, 240, 800].forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.03);
        gain.gain.setValueAtTime(0.03, now + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.03 + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(now + idx * 0.03);
        osc.stop(now + idx * 0.03 + 0.05);
      });
    } catch {
      // audio suppression
    }
  }

  public playTerminalKey() {
    if (!this.enabled) return;
    const freqs = [350, 400, 450, 500, 550];
    const randFreq = freqs[Math.floor(Math.random() * freqs.length)];
    this.playBeep(randFreq, 'square', 0.02, 0.02);
  }
}

export const sound = new CyberAudio();
