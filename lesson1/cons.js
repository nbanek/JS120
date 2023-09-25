const readline = require('readline-sync');

function Person() {
  this.move = null;
}

function Human() {
  Person.call(this);
}


Human.prototype = Object.create(Person.prototype);
Human.prototype.constructor = Human;

Human.prototype.choose = function () {
  let choices = ['rock', 'paper', 'scissors'];
  let choice = readline.question(`Please choose rock, paper, or scissors. `);
  while(!choices.includes(choice)) {
    choice = readeline.questin(`Invalid input, try again. `);
  }
  this.move = choice;
  console.log(choice);
}

function Computer() {
  Person.call(this);
}

Computer.prototype = Object.create(Person.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.choose = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * choices.length);
  const choice = choices[randomNum];
  this.move = choice;
}

function RPSGame() {
  this.human = new Human();
  this.computer = new Computer();
}

RPSGame.prototype.play = function() {
  this.displayWelcomeMessage();
  while(true) {
    this.human.choose();
    this.computer.choose();
    console.log(this.human instanceof Person);
    break;
  }
}

RPSGame.prototype.displayWelcomeMessage = function () {
  console.log(`Welcomd to RPS!`);
}

const game = new RPSGame();
game.play();