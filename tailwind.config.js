/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/pages/Login/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-nav': 'rgba(111, 118, 126, 1)',
        'custom-logo': 'linear-gradient(90.18deg, #4006AA -3.03%, #9501B9 24.46%, #DE25C2 49.74%, #F44474 70.63%, #FF9263 101.41%)',
        'custom-green': 'rgba(182, 240, 156, 1)',
        'custom-active': 'rgba(70, 232, 165, 1)',
        'custom-admin': 'rgba(255, 172, 130, 1)',
        'custom-customer': 'rgba(255, 214, 102, 1)',
      },
      backgroundColor: {
        'custom-green': 'rgba(182, 240, 156, 1)',
        'custom-black': 'rgba(19, 22, 25, 1)',
        'custom-active': 'rgba(14, 90, 58, 1)',
        'custom-admin': 'rgba(66, 39, 33, 1)',
        'custom-customer': 'rgba(66, 52, 25, 1)',
      },
    },
  },
  plugins: [],
}

