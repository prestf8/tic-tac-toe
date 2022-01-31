var tiles = document.querySelectorAll('span[id^="tile"]');

// const gameController = (() => {})();

// event listener to each tile to call a function that alters board  for each click
// function to keep players from playing in spots already taken


// utility functions that aren't organized
tiles.forEach((tile) =>
  tile.addEventListener("click", function () {
    if (!checkChosenTile(this)) return;

    tile.textContent = "ok";
  })
);

function checkChosenTile(tile) {
  if (tile.textContent) {
    console.log("already");
    return false; // if spot is already taken don't
  }
  return true;
}

// MODULES
const gameBoard = (() => {
  "use strict";
  let board = ["", "", "", "", "", "", "", "", ""];

  return { board };
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
const player = () => {
  // return object
};

// displayController.renderBoard();

function addMark() {}
