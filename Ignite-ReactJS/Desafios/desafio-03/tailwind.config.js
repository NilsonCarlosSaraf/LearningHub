/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray700: '#0D0D0D',
        gray600: '#1A1A1A',
        gray500: '#262626',
        gray400: '#333333',
        gray300: '#808080',
        gray200: '#D9D9D9',
        gray100: '#F2F2F2',
        blueDark:'#1E6F9F',
        blueDefault:'#4EA8DE',
        purpleDark:'#5E60CE',
        purpleDefault:'#8284FA',
        redDanger:'#E25858',
        baseTitle:'#E7EDF4',
        baseText:'#AFC2D4',
        baseSpan:'#7B96B2',
        baseSubtitle:'#C4D4E3',
        baseLabel:'#3A536B',
        baseBorder:'#1C2F41',
      },
    },
  },
  plugins: [],
}