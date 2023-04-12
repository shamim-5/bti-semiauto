/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          // text-color
          primary: "#94a9c9",
          secondary: "#1cc2e7",
          neutral: "#b9e0f2",
          // border-color
          accent: "#222f43",
          // card background
          card: "#131c31",
          // background
          "base-100": "#0f172a",
        },
      },
      {
        light: {
          // text-color
          primary: "#091E3E",
          secondary: "#1cc2e7",
          neutral: "#344161",
          // border-color
          accent: "#c2d4ee",
          // card background
          card: "#e8edf5",
          // background
          "base-100": "#F9FBFF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
