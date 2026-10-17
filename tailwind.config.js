/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#07090e',
          surface: '#0d111b',
          card: '#121726',
          border: '#1f2b48',
          cyan: '#00f0ff',
          pink: '#ff007f',
          green: '#00ff66',
          yellow: '#fcee0a',
          purple: '#9d4edd',
          text: '#c9d1d9',
          muted: '#62728b',
        }
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', '"JetBrains Mono"', 'Consolas', 'monospace'],
        display: ['"Orbitron"', '"Share Tech Mono"', 'sans-serif'],
        pixel: ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 25px rgba(0, 240, 255, 0.2)',
        'neon-pink': '0 0 10px rgba(255, 0, 127, 0.5), 0 0 25px rgba(255, 0, 127, 0.2)',
        'neon-green': '0 0 10px rgba(0, 255, 102, 0.5), 0 0 25px rgba(0, 255, 102, 0.2)',
        'neon-yellow': '0 0 10px rgba(252, 238, 10, 0.5), 0 0 25px rgba(252, 238, 10, 0.2)',
        'cyber-inset': 'inset 0 0 15px rgba(0, 240, 255, 0.15)',
      },
      animation: {
        'scanline': 'scanline 8s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 2s infinite',
        'grid-scroll': 'gridScroll 20s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        gridScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 40px' },
        }
      }
    },
  },
  plugins: [],
}
