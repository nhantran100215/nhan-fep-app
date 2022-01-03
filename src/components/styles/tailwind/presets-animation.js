module.exports = {
  presets: [],
  theme: {
    extends: {
      keyframes: {
        balloons: {
          "0%,50%,100%": { transform: "rotate(45deg)" },
          "25%": { transform: "rotate(45deg) translate(3px,-6px)" },
          "75%": { transform: "rotate(45deg) translate(3px,6px)" },
        },
      },
      animation: {
        balloons: " balloons 3s linear infinite",
      },
    },
    Plugin: [],
  },
};
