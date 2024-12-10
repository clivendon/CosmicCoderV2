module.exports = {
  content: [
    './index.html',
    './app.js',
    './css/*.css',
    
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js}'],
  },
  theme: {
    fontFamily: {
      sans: ['VT323', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'universe': "url('/img/universe-1566159.jpg')",
      },
      boxShadow: {
        neon: "0 0 20px theme('colors.yellow.200'), 0 0 20px theme('colors.yellow.700')"
      },
    },
  },
  plugins: [
    require('./plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
};