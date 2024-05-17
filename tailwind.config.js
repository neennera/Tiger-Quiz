/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      dark :  {
        DEFAULT  : '#454545',
      },
      white : {DEFAULT  : '#FFF',},
      whiteDark : {DEFAULT  : '#D3D3D3',},
      primary : {DEFAULT  : '#C72E2E',},
      primaryDark : {DEFAULT  : '#861717',},
    },
    fontFamily : {
      'serif': ['Kanit', 'ui-serif', 'Georgia'],
    },
    extend: {},
  },
  plugins: [],
}

