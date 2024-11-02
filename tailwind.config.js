/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["n.18bbe103e", "s.36b98525"],
        m: ["RecklessNeue-Book", "RecklessNeue-Book"],
      },
      colors: {
        turquoise: {
          DEFAULT: "#40E0D0",
        },
      },
      keyframes: {
        "underline-animation": {
          "0%": { textDecoration: "none" },
          "100%": { textDecoration: "underline" },
        },
      },
      animation: {
        "underline-animation": "underline-animation 0.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
