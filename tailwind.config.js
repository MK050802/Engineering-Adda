/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray:'#141416',
        customWhite: '#FFFFFF',
        customColor: '#533F4D',
        customColor1: '#A3492F', // Add your first custom color here
        customColor2: '#EE7C53',
        customColor3: '#FFA500'

      }
    },
  },
  plugins: [],
}

