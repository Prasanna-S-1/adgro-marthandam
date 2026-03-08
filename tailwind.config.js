/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. BRAND COLOR PALETTE (Valliyur/Marthandam High-Contrast Standard)
      colors: {
        brand: {
          dark: '#050505',       // Deepest Noir Black
          gray: '#1A1A1A',       // Off-black for elevated cards
          red: '#B70303',        // Clinical Signature Red
          'red-light': '#E51A1A',// Hover state red
          gold: '#C5A059',       // Premium accent gold
          light: '#FAFAFA',      // Clinical pure white/cream
          muted: '#888888',      // Editorial gray for subtitles
        }
      },
      
      // 2. LUXURY TYPOGRAPHY
      fontFamily: {
        // Sans for modern, clean body text and tech-UI
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Serif for massive, authoritative architectural headers
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },

      // 3. EDITORIAL SPACING & GRIDS
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '128': '32rem',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.25em',
        mega: '0.5em', // Custom mega-tracking for premium subheaders
      },

      // 4. CINEMATIC BOX SHADOWS
      boxShadow: {
        'luxury': '0 30px 60px -15px rgba(0, 0, 0, 0.08)',
        'luxury-dark': '0 30px 60px -15px rgba(0, 0, 0, 0.4)',
        'glow-red': '0 0 30px rgba(183, 3, 3, 0.3)',
        'glow-red-strong': '0 0 40px rgba(183, 3, 3, 0.6)',
        'glow-gold': '0 0 30px rgba(197, 160, 89, 0.2)',
      },

      // 5. HIGH-END PHYSICS & ANIMATIONS (Cubic Bezier Easing)
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)', // Apple-style smooth ease
        'bounce-slight': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'reveal-up': 'revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-down': 'revealDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [],
}