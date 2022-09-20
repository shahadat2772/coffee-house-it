/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8E3200",

          secondary: "#A64B2A",

          accent: "#400D51",

          neutral: "#28222A",

          "base-100": "#FFFF",

          info: "#D7A86E",

          success: "#7FB77E",

          warning: "#E14D2A",

          error: "#CD104D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
