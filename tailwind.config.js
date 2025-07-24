/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b3cde0',
          300: '#8db4ce',
          400: '#679bbc',
          500: '#4182aa',
          600: '#336891',
          700: '#254e78',
          800: '#17345f',
          900: '#0a192f',
        },
        rose: {
          50: '#fdf2f0',
          100: '#fbe5e1',
          200: '#f7cbc3',
          300: '#f3b1a5',
          400: '#ef9787',
          500: '#e7b3a5',
          600: '#d4916f',
          700: '#c16f39',
          800: '#ae4d03',
          900: '#8b3e02',
        },
        brass: {
          50: '#fdfcf0',
          100: '#fbf9e1',
          200: '#f7f3c3',
          300: '#f3eda5',
          400: '#efe787',
          500: '#d4af37',
          600: '#c19c2c',
          700: '#ae8921',
          800: '#9b7616',
          900: '#88630b',
        },
        shadow: {
          50: '#f7fafc',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748',
          800: '#1a202c',
          900: '#171923',
        }
      },
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'work': ['Work Sans', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0a192f 0%, #17345f 100%)',
        'rose-gradient': 'linear-gradient(135deg, #e7b3a5 0%, #d4916f 100%)',
        'brass-gradient': 'linear-gradient(135deg, #d4af37 0%, #c19c2c 100%)',
      }
    },
  },
  plugins: [],
}