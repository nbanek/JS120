/*
Display Welcome message
  displayWelcomeMessage()
2 player board game
  player = createPlayer()
  computer = createComputer()
board is 3x3 grid
  drawBoard()
  updateBoard()
Players take turns
  player.move()
  computer.move()
  X is first, then O
Scoring
  Winner has 3 marks in a row column or diagnol
    declareWinner();

Nouns	game, board, square, grid, marker, row, player, human, computer
Verbs	play, mark, move, place

Each square is an Square object
Board is made up of Square objects
Game consists of Board, Human, Computer objects


*/

let readline = require("readline-sync");

class Square {
  static PLAYER_MARKER = 'X';
  static COMPUTER_MARKER = 'O';
  static UNUSED_MARKER = ' ';

  constructor(marker) {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for(let idx = 1; idx <= 9; idx++) {
      this.squares[idx] = new Square(Square.UNUSED_MARKER);
    } 
  }

  display() {
    console.clear();
    console.log(` ${this.squares[1].marker} | ${this.squares[2].marker} | ${this.squares[3].marker} `);
    console.log(`---+---+---`);
    console.log(` ${this.squares[4].marker} | ${this.squares[5].marker} | ${this.squares[6].marker} `);
    console.log(`---+---+---`);
    console.log(` ${this.squares[7].marker} | ${this.squares[8].marker} | ${this.squares[9].marker} `);
  }

  getAvailableSquares() {
    return Object.keys(this.squares).filter(key => {
      return this.squares[key].marker === Square.UNUSED_MARKER;
    })
  }

  updateBoard(choice, marker) {
    this.squares[choice].marker = marker;
  }

  boardFull() {
    return Object.keys(this.squares).filter(key => {
      return this.squares[key].marker === Square.UNUSED_MARKER;
    }).length === 0;
  }
}

class Person {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Person {
  constructor(marker) {
    super(marker);
  }

}

class Computer extends Person {
  constructor(marker) {
    super(marker);
  }

}

class TTTGame {
  constructor() {
    this.human = new Human(Square.PLAYER_MARKER);
    this.computer = new Computer(Square.COMPUTER_MARKER);
    this.board = new Board();
  }

  play() {
    this.displayWelcomeMessage();
    this.displayInstructions();
    while(true) {
      this.board.display();

        this.humanMakesMove();
        this.board.display();
        if(this.board.boardFull()) break;

        this.computerMakesMove();
        this.board.display();
  
      if(this.board.boardFull()) break;
    }
  }

  displayWelcomeMessage() {
    console.log("***Welcome to Tic Tac Toe!***")
  }

  displayInstructions() {
    console.log(`Here's how to play:`);
    console.log(`When it's your turn, choose an open square on the board represented by numbers.`)
    console.log(`Match three of your symbols across a row, column or diaganol to win.\n`)
    console.log(` 1 | 2 | 3 `);
    console.log(`---+---+---`);
    console.log(` 4 | 5 | 6 `);
    console.log(`---+---+---`);
    console.log(` 7 | 8 | 9 \n`);
    let procedd = readline.question('Press Enter to Continue.');
    console.clear();
  }

  humanMakesMove() {
    let availableSquares = this.board.getAvailableSquares().join(', ');
    let choice = readline.question(`Choose an available square: ${availableSquares}.`);
    this.board.updateBoard(choice, this.human.getMarker());
  }

  computerMakesMove() {
    let availableSquares = this.board.getAvailableSquares();
    let choice = Math.floor(Math.random() * availableSquares.length);
    this.board.updateBoard(availableSquares[choice], this.computer.getMarker());
  }
}

const game = new TTTGame();
game.play();