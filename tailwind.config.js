/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A30000',
        'primary-dark': '#7A0000',
        'primary-light': '#CC0000',
        accent: '#D4AF37', // A touch of gold/sand for luxury accents
        light: '#F8F9FA',
        'light-gray': '#E9ECEF',
        dark: '#212529',
        'dark-gray': '#495057'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
