const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      gothic: ["cstm_xprmntl_03regular", "serif"],
      serif: ["Times New Roman", "serif"],
      bureau: ["bureau-grot", "sans-serif"],
      "bureau-wide": ["bureau-grot-wide", "sans-serif"],
      snell: ["snellregular", "serif"],
    },
    extend: {
      colors: {
        canvas: "#E5E5C3",
        blue: {
          ...colors.blue,
          "600": "#0D0DCC",
        },
        orange: {
          ...colors.yellow,
          "600": "#F55926",
        },
        yellow: {
          ...colors.yellow,
          "500": "#FFFF00",
        },
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
    },
  },
  variants: {},
  plugins: [],
}
