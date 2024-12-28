/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nsage: {
          orange: '#FF9913',
          pink: '#EF5278',
          purple: '#524F8F',
          navy: '#1F274B',
          black: '#0D0D0D',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};