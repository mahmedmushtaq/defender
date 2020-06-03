const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      gothic: ["cstm_xprmntl_03regular", "serif"],
    },
    extend: {
      colors: {
        canvas: "#E5E5C3",
        orange: {
          ...colors.yellow,
          "600": "#F55926",
        },
        yellow: {
          ...colors.yellow,
          "500": "#FFFF00",
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
