const readline = require("readline-sync");

class Player {
  constructor() {
    this.move = null;
  }
}

class Human extends Player {
  constructor() {
    super();
  }

  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = readline.question("Choose rock, paper, or scissors... ");
    while(!choices.includes(choice)) {
      choice = readline.question("Wrong input, please try again... ");
    }
    return this.move = choice;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }

  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choices.length);
    const choice = choices[randomNum];

    return this.move = choice;
  }
}

class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer();
  }

  displayWelcomeMessage() {
    console.log("***Welcome to RPS!***")
  }

  displayWinner() {
    let humanMove = this.human.move;
    let compMove = this.computer.move;
    console.log(`You chose: ${this.human.move}\nComputer chose: ${this.computer.move}`);

    if (humanMove === 'rock' && compMove === 'scissors' ||
        humanMove === 'scissors' && compMove === 'paper' ||
        humanMove === 'paper' && compMove === 'rock') {
          console.log('You win!!!');
        } else if (compMove === 'rock' && humanMove === 'scissors' ||
        compMove === 'scissors' && humanMove === 'paper' ||
        compMove === 'paper' && humanMove === 'rock') {
          console.log("Computer Wins!");
        } else {
          console.log(`It's a tie!`);
        }
  }

  playAgain() {
    let choices = ['y', 'n'];
    const replay = readline.question("Would you like to play again? y or n ").toLowerCase();
    while(!choices.includes(replay)) {
      replay = readline.question("Wrong input, try again. ");
    }
    return replay === 'y';
  }

  displayGoodbyeMessage() {
    console.log(`Goodbye! Thanks for playing RPS!`);
  }

  play() {
    this.displayWelcomeMessage();
    while(true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if(!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
}


const game = new RPSGame();

game.play();