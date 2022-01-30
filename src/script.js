var tiles = document.querySelectorAll('span[id^="tile"]');

const gameBoard = (() => {
  "use strict";
  let board = ["X", "X", "X", "X", "X", "O", "O", "O", "O"];

  function renderBoard() {
    for (let i = 0; i < 9; i++) {
      tiles[i].textContent = board[i];
    }
  }
  return { renderBoard };
})();

const player = () => {
  // return object
};

gameBoard.renderBoard();
