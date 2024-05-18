/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'serif': ['Kanit', 'ui-serif', 'Georgia'],
    },
    extend: {
      colors: {
        dark: '#454545',
        white: '#FFF',
        whiteDark: '#D3D3D3',
        primary: '#C72E2E',
        primaryDark: '#861717',
      },
    },
  },
  plugins: [],
}

