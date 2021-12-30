module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        px45: "45px",
      },
      height: {
        px45: "45px",
      },
      borderRadius: {
        px12: "12px",
      },
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        login_page: {
          100: "#759dd9",
          200: "#5f95eb",
          300: "#5385d6",
          500: "#2a68cd",
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
      },
      keyframes: {
        balloons: {
          "0%,50%,100%": { transform: "rotate(45deg)" },
          "25%": { transform: "rotate(45deg) translate(2px,-4px)" },
          "75%": { transform: "rotate(45deg) translate(2px,4px)" },
        },
      },
      animation: {
        balloons: " balloons 3s linear infinite",
      },
    },
    plugins: [],
  },
};
