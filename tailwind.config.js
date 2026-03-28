/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        neon: {
          cyan: '#22d3ee',
          purple: '#a78bfa'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(34, 211, 238, 0.2)'
      }
    }
  },
  plugins: []
};
