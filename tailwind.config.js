// tailwind.config.js
module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-12': 'span 12 / span 12',
        'span-10': 'span 10 / span 12',
      },
      fontFamily: {
        solaimanlipi: "'SolaimanLipi', 'Arial', 'sans-serif'",
        poppins: "'Poppins', 'Arial', 'sans-serif'",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      '2md': '992px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      // transitionProperty: ['hover', 'focus'],
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
