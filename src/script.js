var tiles = document.querySelectorAll('span[id^="tile"]');

// const gameController = (() => {})();

// event listener to each tile to call a function that alters board  for each click
// function to keep players from playing in spots already taken

// utility functions that aren't organized

// MODULES
const gameBoard = (() => {
  "use strict";
  let board = ["", "", "", "", "", "", "", "", ""];

  function alterBoardArr(tileIdNumber) {
    board[tileIdNumber - 1] = "ok";
  }

  function checkChosenTile(tile) {
    if (tile.textContent) {
      console.log("already");
      return false; // if spot is already taken don't
    }
    return true;
  }

  function updateTile() {
    if (!checkChosenTile(this)) return;

    alterBoardArr(parseInt(this.id.charAt(this.id.length - 1)));

    displayController.renderBoard();
  }

  function initializeBoard() {
    tiles.forEach((tile) => tile.addEventListener("click", updateTile));
  }

  return { board, initializeBoard };
})();

const displayController = (() => {
  function renderBoard() {
    for (let i = 0; i < 9; i++) {
      tiles[i].textContent = gameBoard.board[i];
    }
  }
  return { renderBoard };
})();

// FACTORY METHODS
const player = (mark) => {
  let turn = false;
  // const getMark = () => mark;
  // const getTurn = () => turn;
  // const toggleTurn = () => {
  //   turn = !turn;
  // };
  // return object

  // return {
  //   getMark,
  //   getTurn,
  //   toggleTurn,
  // };
};

// const player1 = player("X");
// player1.toggleTurn(); // player 1 goes first;

// const player2 = player("O");

// console.log(player1.getTurn(), player2.getTurn());
// player1.toggleTurn();
// player2.toggleTurn();

gameBoard.initializeBoard();
