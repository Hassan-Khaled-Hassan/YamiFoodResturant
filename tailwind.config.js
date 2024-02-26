/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#d0a772",
        second: "#000000c9",
        third: "#d8a663",
      },
      spacing: {
        18: "70px",
      },
      width: {
        41: "35.157%",
        45: "50%",
        99: "1655px",
        90:"90%"
      },
    },
  },
  plugins: [],
};
