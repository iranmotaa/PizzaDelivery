/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#E52E2E",
        secondaryColor: "#292929",
        tertiaryColor: "#C2C2C2",
      },
    },
  },
  plugins: [],
};

