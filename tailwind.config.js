module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        board: "125px 125px 125px",
      },
      gridTemplateRows: {
        board: "125px 125px 125px",
      },
      lineHeight: {
        cell: "100px",
        score: "60px",
      },
    },
  },
  plugins: [],
};
