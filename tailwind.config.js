module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        windbnb: "#EB5757",
      },
      transitionProperty: {
        width: "width",
      },
      spacing: {
        "48p": "48%",
        "31p": "31%",
      },
    },
  },
  plugins: [],
};
