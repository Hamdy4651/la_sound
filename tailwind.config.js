/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050505',
          800: '#0A0A0F',
          700: '#0D0D12',
          600: '#121218',
          500: '#1A1A22',
          400: '#222230',
        },
        gold: {
          100: '#F5E6B8',
          200: '#E8D196',
          300: '#D4AF37',
          400: '#C9A24B',
          500: '#B8860B',
          600: '#9B7508',
        },
        beam: {
          magenta: '#FF2E93',
          violet: '#7B2FFF',
          cyan: '#00E5FF',
        },
        cream: '#F5F2EA',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'beam-sweep': 'beam-sweep 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'equalize': 'equalize 1.2s ease-in-out infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
        'light-sweep': 'light-sweep 2.5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'beam-sweep': {
          '0%, 100%': { transform: 'rotate(-12deg) translateX(-20%)', opacity: '0.3' },
          '50%': { transform: 'rotate(-12deg) translateX(20%)', opacity: '0.6' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        equalize: {
          '0%, 100%': { height: '20%' },
          '50%': { height: '100%' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(24px)', opacity: '0' },
        },
        'light-sweep': {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
    },
  },
  plugins: [],
};
