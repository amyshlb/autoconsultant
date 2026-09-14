/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },
    extend: { 
      colors: {
        'brand-green': 'var(--color-green)',
        'brand-dark': 'var(--color-dark)',
        'brand-bg': 'var(--color-background)',
        'brand-white': 'var(--color-white)',
        'brand-blue': 'var(--color-blue)',
        'brand-pink': 'var(--color-pink)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
