module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        board: "200px 200px 200px",
      },
      gridTemplateRows: {
        board: "200px 200px 200px",
      },
      lineHeight: {
        cell: "170px",
        score: "72px",
      },
    },
  },
  plugins: [],
};
