const readline = require('readline-sync');

class Person {
  constructor() {
    this.move = null;
  }
}

class Human extends Person {
  constructor() {
    super();
  }

  choose() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = readline.question(`Please choose rock, paper, or scissors. `);
    while(!choices.includes(choice)) {
      choice = readeline.questin(`Invalid input, try again. `);
    }
    this.move = choice;
  }
}

class Computer extends Person {
  constructor() {
    super();
  }

  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choices.length);
    const choice = choices[randomNum];
    this.move = choice;
  }
}


class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    this.displayWelcomeMessage();
    while(true) {
      this.human.choose();
      this.computer.choose();
      console.log(this.human instanceof Person);
      break;
    }
  }

  displayWelcomeMessage() {
    console.log(`Welcome to RPS!`);
  }
}

const game = new RPSGame();
game.play();