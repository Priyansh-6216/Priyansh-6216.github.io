/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Satoshi', 'sans-serif'],
      },
      colors: {
        bg: '#050508',
        surface: '#0d0d14',
        card: '#12121c',
        border: 'rgba(255,255,255,0.06)',
        accent: '#5b5af6',
        accent2: '#a78bfa',
        cyan: '#22d3ee',
        green: '#4ade80',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
