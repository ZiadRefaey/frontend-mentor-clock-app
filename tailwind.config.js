/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { darkGrey: "#303030", lightGrey: "#333" } },
  },
  plugins: [],
};
