/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#FEE8B0",
        secondary: "#F97B22",
        tertiary: "#F29727",
      }
    },
  },
  plugins: [],
}

