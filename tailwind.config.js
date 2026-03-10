/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon: { // RE-MAPPED to Navy/Slate theme for Community
          950: '#020617', // Very deep slate
          900: '#0f172a',
          850: '#151f38',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
        },
        ember: { // RE-MAPPED to Cyan/Electric Blue theme for Community
          900: '#164e63',
          800: '#155e75',
          700: '#0e7490',
          600: '#0891b2',
          500: '#06b6d4', // Primary Cyan CTA
          400: '#22d3ee',
          300: '#67e8f9',
          200: '#a5f3fc',
          100: '#cffafe',
        },
        cream: { // RE-MAPPED to Ice/Cool White theme for Community
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        ember: '0 4px 30px rgba(6, 182, 212, 0.15)',
        'ember-lg': '0 8px 50px rgba(6, 182, 212, 0.25)',
        'ember-glow': '0 0 40px rgba(6, 182, 212, 0.3)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-carbon': 'linear-gradient(180deg, #0f172a 0%, #020617 100%)',
        'gradient-ember': 'linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #22d3ee 100%)', // Blue to Cyan
        'gradient-card': 'linear-gradient(145deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
