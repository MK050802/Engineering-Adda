/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-r": "linear-gradient(to right,  #141416,#231F20 )",
      }),
      boxShadow: {
        custom: "0 6px 12px rgba(30, 10, 58, 0.04)",
      },
      colors: {
        neutralsilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralDGrey: "#717171",
        wholeBackground: "#231F20",
      },
    },
  },
  plugins: [],
};

