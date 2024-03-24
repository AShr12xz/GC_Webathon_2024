/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        mygrey: "rgb(229,231,235)",
      },
    },
  },
  plugins: [],
};
