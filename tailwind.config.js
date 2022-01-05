// const plugin = require("tailwindcss/plugin");
// import plugin from "./src/components/font/Poppins/"

module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      login_page: {
        bgc: {
          gradient: {
            l: "#3f77d1",
            r: "#508def",
          },
        },
        grey: "#666",
        blue: "#216fed",
        bluehover: "#1058cb",
        transparentLight: "rgb(255 255 255 / 20%)",
        100: "#759dd9",
        200: "#5f95eb",
        300: "#5385d6",
        500: "#2a68cd",
        text: {
          blur: "hsla(0,0%,100%,.8)",
        },
      },
      purple: {
        light: "#94618e",
        medium: "#6610f2",
        hight: "#4d06a5",
      },
      blue: {
        light: "#4885ed",
        medium: "#6592da",
        hight: "#216fed",
      },
      red: "#dc3545",
      orange: "#fd7e14",
      yellow: "#ffc107",
      teal: "#20c997",
      green: "#4cb32b",
      grey: {
        medium: "#343a40",
        hight: "#2a2a2a",
      },
      black: "#000",
    },
    keyframes: {
      balloons: {
        "0%,50%,100%": { transform: "rotate(45deg)" },
        "25%": { transform: "rotate(45deg) translate(5px,-10px)" },
        "75%": { transform: "rotate(45deg) translate(5px,10px)" },
      },
    },
    animation: {
      balloons1: " balloons 5s linear infinite",
      balloons2: " balloons 8s linear infinite",
    },
    fontFamily: {
      poppins_bold: ["poppins_bold", "sans-serif"],
      poppins_regular: ["poppins_regular", "sans-serif"],
      // regularsans: ["poppins_regular", "Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      tabWF: { max: "767px" },
      mobWF: { max: "575px" },
      deskWF: { min: "992px" },
    },
    boxShadow: {
      decorationblock: "0 0 0 60px hsl(0deg 0% 100% / 10%)",
    },
    backgroundImage: {
      loginIntroduce: "linear-gradient(90deg,#3f77d1 25%,#508def)",
    },
    extends: {},
  },
  plugins: [
    // plugin(function ({ addBase }) {
    //   addBase({
    //     "@font-face": {
    //       fontFamily: "poppins_regular",
    //       src: 'url("../font/Poppins/Poppins-Regular.ttf")',
    //     },
    //   });
    // }),
    // plugin(function ({ addBase }) {
    //   addBase({
    //     "@font-face": {
    //       fontFamily: "poppins_bold",
    //       src: 'url("../font/Poppins/Poppins-Bold.ttf") format(ttf)',
    //     },
    //   });
    // }),
  ],
};
