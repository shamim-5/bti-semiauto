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
          primary: "#94a9c9",
          secondary: "#1cc2e7",
          // accent: "#37cdbe",
          neutral: "#b9e0f2",
          card: "#131c31",
          border: "#222f43",
          "base-100": "#0f172a",
        },
      },
      {
        light: {
          primary: "#66768f",
          secondary: "#1cc2e7",
          // accent: "#37cdbe",
          neutral: "#344161",
          card: "#e8edf5",
          border: "#c2d4ee",
          "base-100": "#F9FBFF",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
