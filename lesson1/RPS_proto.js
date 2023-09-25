const readline = require('readline-sync');

function Player() {
  this.move = null;
}

function Human() {
  Player.call(this);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

Human.prototype.takeTurn = function() {
  let choice = readline.question(`It's your turn, choose rock, paper, or scissors. `);
  while(!['rock', 'paper', 'scissors'].includes(choice)) {
    choice = readline.question('Wrong input, try again. (rock, paper, or scissors) ');
  }
  this.move = choice;
}

function Computer() {
  Player.call(this);
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.takeTurn = function() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomNum = Math.floor(Math.random() * choices.length);
  this.move = choices[randomNum];
}

function RPSGame() {
  this.human = new Human();
  this.computer = new Computer();
  this.score = {
    human : 0,
    computer : 0,
  }
}

RPSGame.prototype.play = function() {
  this.displayWelcomeMessage();

  while(!this.winnerDetected()) {
    this.displayScore();
    this.human.takeTurn();
    this.computer.takeTurn();
    this.displayWinner();
  }
  this.displayGoodbyeMessage();
}

RPSGame.prototype.displayWelcomeMessage = function() {
  console.log(`Welcome to Rock, Paper, Scissors!`);
}

RPSGame.prototype.displayGoodbyeMessage = function() {
  console.log("Goodbye! Thanks for playing Rock, Paper, Scissors.");
}
RPSGame.prototype.winnerDetected = function() {
  return Object.keys(this.score).some(key => {
    return this.score[key] === 3;
  })
}
RPSGame.prototype.displayWinner = function() {
  console.clear();
  humanMove = this.human.move;
  computerMove = this.computer.move;

  console.log(`You chose ${humanMove}, computer chose ${computerMove}`);

  if (humanMove === 'rock' && computerMove === 'scissors' ||
  humanMove === 'scissors' && computerMove === 'paper' ||
  humanMove === 'paper' && computerMove === 'rock') {
    console.log('You win this round!\n');
    this.score.human += 1;
  } else if (computerMove === 'rock' && humanMove === 'scissors' ||
  computerMove === 'scissors' && humanMove === 'paper' ||
  computerMove === 'paper' && humanMove === 'rock') {
    console.log("Computer wins this round!\n");
    this.score.computer += 1;
  } else {
    console.log(`It's a tie. No one wins this round!\n`);
  }
}

RPSGame.prototype.displayScore = function() {
  console.log(`The score is you: ${this.score.human}, computer: ${this.score.computer}.`);
}

const game = new RPSGame();
game.play();