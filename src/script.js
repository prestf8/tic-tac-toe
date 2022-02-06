var tiles = document.querySelectorAll('span[id^="tile"]');
let gameOver = false;

const gameController = (() => {
  let currentMark = "X";
  const getCurrentMark = () => currentMark;

  function toggleCurrentMark() {
    if (currentMark === "X") {
      currentMark = "O";
    } else {
      currentMark = "X";
    }
  }

  function checkGameTie() {
    return gameBoard.board.every((tile) => tile);
  }

  function checkPlayerWins() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    return winConditions.some((win) => {
      return win.every((tileId) => gameBoard.board[tileId] === currentMark);
    });
  }

  function checkGameOver() {
    if (checkPlayerWins() || checkGameTie()) {
      return true;
    }
  }

  return { toggleCurrentMark, getCurrentMark, checkGameOver, checkGameTie };
})();

// event listener to each tile to call a function that alters board  for each click
// function to keep players from playing in spots already taken

// utility functions that aren't organized

// MODULES
const gameBoard = (() => {
  "use strict";
  let board = ["", "", "", "", "", "", "", "", ""];

  function alterBoardArr(tileIdNumber) {
    board[tileIdNumber - 1] = gameController.getCurrentMark();
  }

  function checkChosenTile(tile) {
    if (tile.textContent) {
      return false; // if spot is already taken don't
    }
    return true;
  }

  function updateTile() {
    if (gameOver) return;
    if (!checkChosenTile(this)) return;

    alterBoardArr(parseInt(this.id.charAt(this.id.length - 1)));

    displayController.renderBoard();

    if (gameController.checkGameOver()) {
      gameOver = true;
      displayController.displayGameResults();
    }

    gameController.toggleCurrentMark(); // after user chooses spot, change the current mark
    displayController.renderCurrentSignDisplay(); // toggle sign change display
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

  function renderCurrentSignDisplay() {
    const xDecor = document.getElementById("x-decor");
    const oDecor = document.getElementById("o-decor");
    let currentSignDecorClasses = ["text-gray-900", "bg-emerald-200"];
    let alternativeSignDecorClasses = ["text-gray-100", "opacity-10"];
    if (gameController.getCurrentMark() === "X") {
      xDecor.classList.remove(...alternativeSignDecorClasses);
      xDecor.classList.add(...currentSignDecorClasses);
      oDecor.classList.remove(...currentSignDecorClasses);
      oDecor.classList.add(...alternativeSignDecorClasses);
    } else {
      oDecor.classList.remove(...alternativeSignDecorClasses);
      oDecor.classList.add(...currentSignDecorClasses);
      xDecor.classList.remove(...currentSignDecorClasses);
      xDecor.classList.add(...alternativeSignDecorClasses);
    }
  }

  function displayGameResults() {
    if (gameController.checkGameTie()) {
      console.log("TIE");
    } else {
      console.log(`${gameController.getCurrentMark()} WINS!`);
    }
  }

  return { renderBoard, renderCurrentSignDisplay, displayGameResults };
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
